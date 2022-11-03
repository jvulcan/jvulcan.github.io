Vue.component('priorizacion', {
    props: ['data1'],
    template:
    /*html*/
        `
    <div>
        <div class="mt-4 px-2 py-2" v-html="data1.intro" 
            style="border: 1px solid #000;border-radius: 15px;background:#fff;">
        </div>
        <div v-if="data1.tipo == 'prop'">
            <div class="my-4 p-3 instruct" style="" v-html="data1.instrucciones"></div>
            <div>
                <div class="text-center">
                    <span class="prior-text" style="font-size:2em;">{{data1.dato.nombre}}</span>
                    <button class="help1" @click="showingDesc = !showingDesc">?</button>
                </div>
                
                <div v-if="showingDesc" class="mb-4">
                    <div style="font-style:italic;padding-left:10px;padding-right:10px;" class="desc1" 
                        v-html="data1.dato.descripcion"></div>
                </div>
            </div>
            <div v-for="cmp,i of data1.opciones" class="row mt-4">
                <div class="row">
                    <div class="col-sm-10 text-center">
                        <span class="prior-text" style="font-weight:normal;">{{cmp.nombre}}</span>
                        <!--<button class="help1" @click="ToggleDesc(i)">?</button>-->
                    </div>
                    <div class="col-sm-2"></div>
                </div>
                <div class="row" v-if="1 || showingDescs[i].a">
                    <span style="font-style:italic" class="desc1" v-html="cmp.descripcion"></span>
                </div>
                <div class="row">
                    <div class="col-sm-10">
                        <input class="form-range1" type="range" min="0" max="100" step="1" 
                            v-model="data1.respuesta.datos[i]" style="width:100%;height:100%" 
                            :id="'slider'+i" v-on:change="UpdateVal" />
                    </div>
                    <div class="col-sm-2 text-center">
                        <input type="text" disabled class="pct-num" :value="GetStartValue" :id="'num'+i" 
                            style="text-align:center;font-weight:bold;color:black;"/>
                    </div>
                </div>
            </div>
        </div>
        <div v-else-if="data1.tipo == 'escala'">
            <div class="my-2 p-4 instruct" style="" v-html="data1.instrucciones"></div>
            <div >
                <span class="prior-text" >{{data1.dato.nombre}}</span>
                <!--<button class="help1" @click="showingDesc = !showingDesc">?</button>-->
            </div>
            <div class="row mb-4" v-if="1 || showingDesc">
                <span style="font-style:italic" class="desc1" v-html="data1.dato.descripcion"></span>
            </div>
            <div v-for="cmp,i of data1.opciones" class="row mt-2">
                <div class="col-md-6">
                    <span class="prior-text" style="font-weight:normal;">{{cmp.nombre}}</span>
                    <!--<button class="help1" @click="ToggleDesc(i)">?</button>-->
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
        
        <div class="row">
            <div class="col-md-12 text-center">
                <button class="btn btn-primary mt-4" style="font-size:2rem;" @click="$emit('endEval')">Terminar</button>
            </div>
        </div>
    </div>`,
    computed: {
        GetStartValue(){
            return parseFloat(100.0 / this.data1.opciones.length).toFixed(1);
        }
    },
    methods: {
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