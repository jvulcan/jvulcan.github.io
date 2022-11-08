Vue.component('priorizacion', {
    props: ['data1'],
    template:
    /*html*/
        `
    <div>
        <div v-if="data1.tipo == 'prop'">
            <div class="mt-4">
                <div class="text-center">
                    <div style="font-size:32px;font-weight:bold;">
                        Encuesta de Priorización Componentes de los Dominios de Desempeño PMBOK 7
                    </div>
                </div>
            </div>
            <div class="mt-4 px-2 py-2" v-html="data1.intro" 
                style="border: 1px solid #000;border-radius: 15px;background:#fff;">
            </div>
            <div class="my-4 p-3 instruct" style="text-decoration:none;">
                A continuación, deslice las barras para determinar dicha proporción de importancia del componente sobre 
                la madurez del dominio destacado en amarillo. <b>(Presionar </b> 
                <img src="img/Imagen3.png" style="position:relative;width:30px;height:40px;"/>
                <b>para visualizar reseña del dominio)</b>
            </div>
            <div class="mt-5">
                <div class="row">
                    <div class="col-md-3">
                        <div class="row">
                            <div class="mt-1 col-sm-9">
                                <div class="section bg-yellow">
                                    DOMINIO DE DESEMPEÑO
                                </div>
                            </div>
                            <div class="mt-1 col-sm-3">
                                <img src="img/Imagen2.png" style="width:40px;height:40px;"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="">
                            <span class="section bg-yellow prior-text1" style="font-size:2em;">{{data1.dato.nombre}}</span>
                            <button class="help2" @click="showingDesc = !showingDesc">i</button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div v-if="showingDesc" class="mb-4">
                            <div style="font-style:italic;padding-left:10px;padding-right:10px;" class="desc1" 
                                v-html="data1.dato.descripcion"></div>
                        </div>  
                    </div>
                </div>
            </div>
            <div v-for="cmp,i of data1.opciones" class="row mt-4">
                <div class="row">
                    <div class="col-sm-2">
                        <div class="row">
                            <div class="mt-1 col-sm-9">
                                <div class="section bg-blue">
                                    COMPONENTE {{cmp.num}}
                                </div>
                            </div>
                            <div class="mt-1 col-sm-3">
                                <img src="img/Imagen1.png" style="width:40px;height:40px;"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-9">
                        <span class="prior-text" style="font-weight:normal;">{{cmp.nombre}}</span>
                        <div v-if="1 || showingDescs[i].a">
                            <div style="font-style:italic" class="desc1" v-html="cmp.descripcion"></div>
                        </div>
                        <input class="form-range1 my-2" type="range" min="0" max="100" step="1" 
                            v-model="data1.respuesta.datos[i]" style="width:100%;" 
                            :id="'slider'+i" v-on:change="UpdateVal" />
                    </div>
                    <div class="col-sm-1">
                        <input type="text" disabled class="pct-num pt-3" :value="GetStartValue" :id="'num'+i" 
                            style="text-align:center;font-weight:bold;color:black;font-size:36px;"/>
                    </div>
                </div>
                <hr>
            </div>
        </div>
        <div v-else-if="data1.tipo == 'escala'">
            <div>
                <div class="mt-4">
                    <div class="text-center">
                        <div style="font-size:32px;font-weight:bold;">
                        Encuesta de Impacto de los Componentes de los Dominios de Desempeño en Dimensiones Genéricas de una Estrategia organizacional
                        </div>
                    </div>
                </div>
                <div class="mt-4 px-2 py-2" v-html="data1.intro" 
                    style="border: 1px solid #000;border-radius: 15px;background:#fff;">
                </div>
                <div class="my-2 p-3 instruct mb-5" style="" v-html="data1.instrucciones"></div>
            </div>

            <div class="row">
                <div class="col-sm-3">
                    <div class="row">
                        <div class="mt-1 col-sm-9">
                            <div class="section bg-blue">
                                COMPONENTE {{data1.dato.num}}
                            </div>
                        </div>
                        <div class="mt-1 col-sm-3">
                            <img src="img/Imagen1.png" style="width:40px;height:40px;"/>
                        </div>
                    </div>
                </div>
                <div class="col-sm-9">
                    <span class="prior-text">{{data1.dato.nombre}}</span>
                    <div style="font-style:italic" class="desc1" v-html="data1.dato.descripcion"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <table style="width:100%;max-height:100%">
                        <tr>
                            <td style="width:75%">
                                
                                <table style="width:100%;height:100%">
                                    <tbody>
                                        <tr>
                                            <td class="p-3" style="background:rgb(197,90,17);color:white;text-align:center;vertical-align:middle">
                                            DIMENSIONES ESTRATÉGICAS
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                
                            </td>
                            <td style="width:25%">
                                <!--
                                <table style="width:100%;height:100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src="img/Imagen4.png" style="width:40px;height:40px;"/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="img/Imagen4.png" style="width:40px;height:40px;"/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="img/Imagen4.png" style="width:40px;height:40px;"/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="img/Imagen4.png" style="width:40px;height:40px;"/>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                -->
                                <img src="img/Imagen5.png" style="height:100%;"/>
                            </td>
                        </tr>
                    </table>
                    
                    <!--<div style="text-align:center;vertical-align:middle;display:table-cell;height:95%;width:90%;;color:white;">
                        
                    </div>-->
                </div>
                <div class="col-md-9">
                    <div v-for="cmp,i of data1.opciones" class="row mt-2">
                        <div class="col-md-6">
                            <span class="prior-text" style="font-weight:normal;">{{cmp.nombre}}</span>
                            <div class="row" v-if="1 || showingDescs[i].a">
                                <span style="font-style:italic" class="" v-html="cmp.descripcion"></span>
                            </div>
                        </div>
                        <div class="col-md-6" style="font-size:22px;">
                            <select class="form-select" v-model="data1.respuesta.datos[i]">
                                <option v-for="op of data1.escala" :value="op.valor">{{op.nombre}}</option>
                            </select>
                        </div>
                        <hr>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-md-12 text-center">
                <button class="btn btn-primary my-4" style="font-size:2rem;" @click="$emit('endEval')">{{GetFinishText()}}</button>
            </div>
        </div>
    </div>`,
    computed: {
        GetStartValue(){
            return parseFloat(100.0 / this.data1.opciones.length).toFixed(1);
        }
    },
    methods: {
        GetFinishText(){
            return globalThis.app.finished ? "Terminar" : "Siguiente";
        },
        ToggleDesc(i){
            this.showingDescs[i].a = !this.showingDescs[i].a;
            return this.showingDescs[i].a;
        },
        ShowDesc(i){
            console.log(this.showingDescs[i].a);
            return this.showingDescs[i].a;
        },
        UpdateVal(e){
            var sum = 0;
            for (let i = 0; i < this.data1.opciones.length; i++) {
                var slider = document.getElementById("slider" + i);
                if (slider == null)
                    return;
                sum += parseInt(slider.value);
            }

            for (let i = 0; i < this.data1.opciones.length; i++) {
                var num = document.getElementById("num" + i);
                if (num == null)
                    return;
                var slider = document.getElementById("slider" + i);
                if (slider == null)
                    return;
                
                num.value = parseFloat(slider.value * 100 / sum).toFixed(1);
            }
        }
    },
    data() {
        return {
            showingDesc : false,
            showingDescs: [{a:false},{a:false},{a:false},{a:false},{a:false},{a:false},{a:false},{a:false}],
            values: [{a:0},{a:0},{a:0},{a:0},{a:0},{a:0},{a:0},{a:0}]
        }
    },
});