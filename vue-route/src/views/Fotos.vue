<template>
    <div>
        <h1>Galeria de fotos</h1>
        <router-link :to="{name: 'Fotos', params: {id : item}}" 
        v-for="(item,index) of imagenes" :key="index">
            <button>Foto: {{item}}</button>
        </router-link>

        <Imagen></Imagen>
        <button @click="home">Home</button>
        <button @click="anterior">Anterios</button>
        <button @click="siguiente">Siguiente</button>

    </div>
</template>

<script>

import Imagen from '@/components/Imagen.vue';

export default {
    components:{
        Imagen
    },
    data(){
        return{
            imagenes: ['1','2','3']
        }
    },
    methods: {
        home(){
            this.$router.push('/')
        },
        anterior(){
            this.$router.go(-1)
        },
        siguiente(){
            this.$router.go(1)

        }

    }
}
</script>