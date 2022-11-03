Vue.component('estructura', {
    props: ['datos', 'tareas'],
    template:
    /*html*/
        `
    <div>
        <div class="my-4">
            <div class="row">
                <div class="col-md-9" style="border: 1px solid #000">
                    <div><b>Instrucciones:</b></div>
                    <ul>
                        <li>Todos los dominios y componentes de éstos que puede visualizar <b>deben</b> ser evaluados.</li>
                        <li>El ítem que se debe evaluar estará en estado Pendiente (ver Leyenda), haga click sobre éste para comenzar la evaluación.</li>
                        <li>Una vez que termine la evaluación de ese ítem haga click en Terminar para volver al Inicio. Un nuevo ítem aparecerá en estado Pendiente y el anterior tomará estado Completo o Incompleto (Ver Leyenda).</li>
                        <li>Puede volver a evaluar un ítem pasado (Completo o Incompleto) y actualizar la evaluación.</li>
                        <li>Cuando todos los ítems estén en estado Completo, ingrese su nombre abajo y haga click en Terminar. 
                            Se le abrirá una ventana para guardar un archivo, guárdelo en su ordenador y envíelo al coordinador de esta encuesta (Cristián Domínguez).</li>
                    </ul>
                </div>
                <div style="border:1px solid #000;" class="col-md-3">
                    <div><b>Leyenda:</b></div>
                    <div style="width:200px;" class="p-2">
                        <span class="badge bg-primary">&nbsp;&nbsp;&nbsp;</span>
                        Pendiente
                    </div>
                    <div style="width:200px;" class="p-2">
                        <span class="badge bg-warning">&nbsp;&nbsp;&nbsp;</span>
                        Incompleto
                    </div>
                    <div style="width:200px;" class="p-2">
                        <span class="badge bg-success">&nbsp;&nbsp;&nbsp;</span>
                        Completo
                    </div>
                </div>
            </div>
        </div>
        <table class="table table-bordered" style="border:0px solid #000">
            <thead class="table-primary">
                <th style="border:1px solid black;border-collapse:collapse;">Dominios de Desempeño PMBOK</th>
                <th style="border:1px solid black;border-collapse:collapse;">Componentes relevantes del Dominio</th>
                <th style="border:1px solid black;border-collapse:collapse;"></th>
                <th style="border:1px solid black;border-collapse:collapse;" v-if="datos != null" v-for="es of datos.estrategia">
                    {{es.nombre}}
                </th>
            </thead>
            <tbody>
                <tr v-for="met,i of GetMetodos">
                    <td v-if="met.mostrarDim" :rowspan="met.dimension.metodos.length">
                        <div v-if="EstaEvaluado(met.dimension.id)">
                            <div class="btn btn-success" @click="Evaluate(met.dimension.id)">{{met.dimension.nombre}}</div>
                        </div>
                        <div v-else-if="DebeEvaluarse(met.dimension.id)">
                            <div class="btn btn-primary" @click="Evaluate(met.dimension.id)">{{met.dimension.nombre}}</div>
                        </div>
                        <div v-else-if="EstaPendiente(met.dimension.id)">
                            <div>{{met.dimension.nombre}}</div>
                        </div>
                        <div v-else>
                            <div class="disabled">{{met.dimension.nombre}}</div>
                        </div>
                    </td>
                    <td>
                        <div v-if="EstaEvaluado(met.metodo.id)">
                            <div class="btn btn-success" @click="Evaluate(met.metodo.id)">{{met.metodo.nombre}}</div>
                        </div>
                        <div v-else-if="DebeEvaluarse(met.metodo.id)">
                            <div class="btn btn-primary" @click="Evaluate(met.metodo.id)">{{met.metodo.nombre}}</div>
                        </div>
                        <div v-else-if="EstaIncompleto(met.metodo.id)">
                            <div class="btn btn-warning" @click="Evaluate(met.metodo.id)">{{met.metodo.nombre}}</div>
                        </div>
                        <div v-else-if="EstaPendiente(met.metodo.id)">
                            <div>{{met.metodo.nombre}}</div>
                        </div>
                        <div v-else>
                            <div class="disabled">{{met.metodo.nombre}}</div>
                        </div>
                    </td>
                    <td> 
                        <div v-if="Completo(met.dimension.id)">
                            <b>{{GetEvalValue(met.dimension.id, met.metodo.id, "")}}</b>
                        </div>
                        <div v-else>
                        
                        </div>
                    </td>
                    <td v-if="datos != null" v-for="est of datos.estrategia">
                        <div v-if="Completo(met.metodo.id)">
                            <b>{{GetEvalValue(met.metodo.id, est.id, "_")}}</b>
                        </div>
                        <div v-else></div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>`,
    computed: {
        GetMetodos(){
            if (this.datos == null)
                return [];

            var metodos = [];

            var dims = [];
            if (globalThis.app.config.putFirstUsed)
            {
                this.datos.dimensiones.forEach(dim => {
                    if (this.tareas.find(t => t.dato.id == dim.id) != null && dims.indexOf(dim) == -1)
                        dims.push(dim);
                });

                this.datos.dimensiones.forEach(dim => {
                    if (this.tareas.find(t => t.dato.id == dim.id) == null && dims.indexOf(dim) == -1)
                        dims.push(dim);
                });
            }
            else
            {
                dims = this.datos.dimensiones;
            }

            for (let i = 0; i < dims.length; i++) {
                const dim = dims[i];
                if (globalThis.app.config.showUnused == false && this.tareas.find(t => t.dato.id == dim.id) == null)
                    continue;
                var index = 0;
                dim.metodos.forEach(met => {
                    metodos.push({metodo: met, dimension: dim, mostrarDim: index == 0});
                    index++;
                })
            }


            return metodos;
        }
    },
    methods: {
        Completo(elemId)
        {
            var nn = this.tareas.find(t => t.dato.id == elemId);
            if (nn == undefined)
                return false;
            return nn.respuesta.completo;
        },
        GetEvalValue(elemId, subId, defaultValue)
        {
            if (this.Completo(elemId))
            {
                var el = this.tareas.find(t => t.dato.id == elemId);
                var subIndex = el.opciones.findIndex(o => o.id == subId);
                if (!subId.startsWith("E"))
                {
                    var sum = 0.0;
                    el.respuesta.datos.forEach(d => sum += parseFloat(d));

                    return parseFloat(el.respuesta.datos[subIndex] * 100 / sum).toFixed(1);
                }
                else
                {
                    const val = el.respuesta.datos[subIndex];
                    var found = this.datos.escala.find(e => e.valor == val);
                    if (found != null && found != undefined)
                        return found.nombre;
                    else
                        return "";
                }
            }
            else
                return defaultValue;
        },
        DebeEvaluarse(elemId){
            if (this.tareas.length == globalThis.app.prior_actual)
                return false;
            return this.tareas[globalThis.app.prior_actual].dato.id == elemId;
        },
        EstaEvaluado(elemId){
            //return this.tareas[globalThis.app.prior_actual].dato.id == elemId;
            var el = this.tareas.find(t => t.dato.id == elemId);
            if (el == undefined)
                return false;
            return el.respuesta.completo;
        },
        EstaPendiente(elemId){
            var el = this.tareas.find(ev => ev.dato.id == elemId);
            return el != null && el.respuesta.completo == false;
        },
        EstaIncompleto(elemId){
            var el = this.tareas.find(ev => ev.dato.id == elemId);
            if (!el.visitado)
                return false;

            if (el.tipo == 'escala')
            {
                for (let i = 0; i < el.respuesta.datos.length; i++) {
                    const element = el.respuesta.datos[i];
                    if (element == 0.0)
                        return true;
                }
            }
            return false;
            //return el != null && el.respuesta.completo == false;
        },
        Evaluate(elemId){
            this.$emit("evaluate", elemId);
        }
    },
    data() {
        return {
            
        }
    },
});