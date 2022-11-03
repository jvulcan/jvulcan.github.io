Vue.component('encuesta', {
    props: ['data1', 'struct', 'tareas'],
    template:
    /*html*/
        `
    <div>
        <div v-if="item == null">
            <estructura :datos="struct" :tareas="tareas" v-on:evaluate="start"></estructura>
            <div class="row mt-4">
                <div class="col-md-12 text-center">
                    <input type="text" id="txtN" placeholder="Ingrese nombre"/>
                </div>
                <div class="col-md-12 my-2 text-center">
                    <button class="btn btn-primary" id="btnT" style="font-size:2rem;"  @click="Descargar()">Terminar</button>
                </div>
            </div>
        </div>
        <div v-else>
            <priorizacion :data1="item" v-on:endEval="end"></priorizacion>
        </div>
    </div>`,
    computed: {
        AllGood(){

        }
    },
    methods: {
        start(elemId)
        {
            var item = this.tareas.find(t => t.dato.id == elemId);
            item.visitado = true;
            this.item = item;
        },
        end()
        {   
            if (this.item.tipo == 'prop')
            {
                this.item.respuesta.completo = true;
            }
            else if (this.item.tipo == 'escala')
            {
                var completed = true;
                for (let i = 0; i < this.item.respuesta.datos.length; i++) {
                    const element = this.item.respuesta.datos[i];
                    if (element == 0.0)
                    {
                        completed = false;
                        break;
                    }
                        
                }
                this.item.respuesta.completo = completed;
            }

            if (globalThis.app.prior_actual < this.tareas.length && this.tareas[globalThis.app.prior_actual].dato.id == this.item.dato.id)
                globalThis.app.prior_actual++;

            this.item = null;
        },
        EncuestaCompleta()
        {
            for (let i = 0; i < globalThis.app.priorizaciones.length; i++) {
                const element = globalThis.app.priorizaciones[i];
                if (element.tipo == 'prop')
                {
                    if (!element.visitado)
                        return false;
                }
                else if (element.tipo == 'escala')
                {
                    for (let k = 0; k < element.respuesta.datos.length; k++) {
                        if (parseFloat(element.respuesta.datos[k]) == 0.0)
                            return false;
                    }
                    if (!element.respuesta.completo)
                        return false;
                }
            }
            return true;
        },
        CrearDatos(nombre){
            var data = {
                dimensiones : globalThis.app.parametros,
                respuestas: [],
                nombre: nombre
            }

            for (let i = 0; i < globalThis.app.priorizaciones.length; i++) {
                const element = globalThis.app.priorizaciones[i];
                
                data.respuestas.push({r: element.respuesta});
            }
            return data;
        },
        Descargar()
        {
            if (!this.EncuestaCompleta())
            {
                alert("No se puede terminar mientras queden evaluaciones pendientes o incompletas");
                return;
            }

            var txtn = document.getElementById("txtN");
            if (txtn.value == "" || txtn.value.replaceAll(" ","").length == 0)
            {
                alert("Ingrese su nombre");
                return;
            }

            const data = this.CrearDatos(txtn.value);
            const dataS = JSON.stringify(data);
            var btn = document.getElementById("btnT");
            var type = 0;

            if (type == 0)
            {
                const txtBLOB = new Blob([dataS], {type: 'text/javascript'});
                var d = "";
                globalThis.app.priorizaciones.forEach(element => {
                    if (element.respuesta.id.startsWith("D"))
                        d += element.respuesta.id.substr(1);
                });
                const sFileName = data.nombre+"_D"+d+".json";

                var newLink = document.createElement("a");
                newLink.download = sFileName;

                if (window.webkitURL != null)
                {
                    newLink.href = window.webkitURL.createObjectURL(txtBLOB);
                }
                else
                {
                    newLink.href = window.URL.createObjectURL(txtBLOB);
                    newLink.style.display = "none";
                    document.body.appendChild(newLink);
                }

                newLink.click();
            }
            else
            {
                btn.innerHTML = "Enviando ...";
                btn.disabled = true;
                globalThis.postData("http://178.62.123.163/encuesta_cris/main.php", data).then(rs => {
                    btn.innerHTML = "Muchas gracias";
                });
            }
            
        }
    },
    data() {
        return {
            item: null
        }
    },
});