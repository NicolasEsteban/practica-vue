<template>
    <div class="mt-5">
        <div class="text-center">
            <h1>{{Titulo}}</h1>
        </div>
        <b-row>
            <b-col md="12">
                <b-form-input v-model="texto" placeholder="Escribir actividad" v-on:keyup.enter="agregarTarea"></b-form-input>
            </b-col>
            <b-col md="12">
                <b-button block variant="primary" @click="agregarTarea">Ingresar actividad</b-button>
            </b-col>
        </b-row>
        <div class="mt-3" v-for="(item,index) of tareas" :key="item.id" >
            <div role="alert" :class="['alert', item.estado ? 'alert-success' : 'alert-danger']">
                <div class="d-flex justify-content-between align-items-center" >
                    <div>{{index + 1}} - {{item.nombre}} - {{item.estado}}</div>
                    <div>
                        <b-button variant="success" @click="editarTarea(index)">Ok</b-button>
                        <b-button variant="danger" @click="eliminar(index)">X</b-button>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>

<script>

export default {
    name: 'centroActividades',
    data(){
        return {
            Titulo: 'Centro de actividades',
            texto: '',
            tareas: []
        }
    },
    methods: {
        agregarTarea:function() {
            this.tareas.push({
                nombre: this.texto,
                estado: false
            });
            this.texto='';
        },
        editarTarea: function(index){
            this.tareas[index].estado=true;
        },
        eliminar: function(index){
            this.tareas.splice(index,1);
        }
    },
    
}
</script>