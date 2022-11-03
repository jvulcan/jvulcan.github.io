var app = new Vue({
    el: '#app',
    data() {
        return {
            estructura: null,
            priorizaciones: [],
            prior_actual: 0,
            parametros: null,
            config: {
                showUnused: false,
                putFirstUsed: true
            }
        }
    },
    computed: {
    
    },
    methods: {
        Init(struct, params) {
            this.parametros = params;
            this.priorizaciones.length = 0;
            var this2 = this;
            this.estructura = struct;
            var list = [];
            params.forEach(element => {
                list.push(this2.GetElement(element));
            });

            var dimensiones = [];
            var estrategias = [];
            list.forEach(el => {

                var n = { 
                    tipo: "prop", 
                    dato: el,
                    opciones : el.metodos, 
                    instrucciones: this.estructura.instrucciones.dimensiones,
                    intro: this.estructura.instrucciones.intro_dimensiones,
                    visitado: false,
                    respuesta: {id: el.id, datos: this.CreateAnswers(el.metodos, 50.0), completo: false}
                };
                dimensiones.push(n);
                this2.priorizaciones.push(n);

                el.metodos.forEach(el2 => {
                    var n2 = { 
                        tipo: "escala", 
                        dato: el2,
                        escala: this2.estructura.escala,
                        opciones: this2.estructura.estrategia, 
                        instrucciones: this.estructura.instrucciones.estrategia,
                        intro: this.estructura.instrucciones.intro_estrategia,
                        visitado: false,
                        respuesta: {id: el2.id, datos: this.CreateAnswers(this2.estructura.estrategia, 0.0), completo: false}
                    };
                    estrategias.push(n2);
                    this2.priorizaciones.push(n2);
                });
            });
        },
        GetElement(id)
        {
            if (id.startsWith("D"))
                return this.estructura.dimensiones.find(n => n.id == id);
            else if (id.startsWith("E"))
                return this.estructura.estrategia.find(n => n.id == id);
        },
        CreateAnswers(d1, defaultValue = null){
            var nn = [];
            d1.forEach(d => { nn.push(defaultValue) });
            return nn;
        },
        FormatDate(date) {
            var d = new Date(date).toISOString().replace("T", ", ");
            return d.substring(0, d.length-8);
        },
        GoTo(loc, force = false, newtab = false) {
            var s = window.location.toString().split("/");
            var last = s[s.length - 1];
            if (last == loc && !force)
                return;

            s[s.length - 1] = loc;
            if (!newtab)
                window.location = s.join("/");
            else
                window.open(s.join("/"), '_blank').focus();
        }
    },
});
async function postData(url = '', data = {}) {
    //console.log("sending...");
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive',
            'Accept': '*/*'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return response.json();
};