<template>
    <div class="mt-5">
        <h1>Formularios</h1>

        <form>
            <b-row>
                <b-col md="3">
                    <b-form-input type="text" v-model="texto" :state="nameState"></b-form-input>
                    <small>Minimo 3 caracteres</small>
                    <p>Texto: {{texto}}</p>
                </b-col>
                <b-col md="3">
                    <b-form-select v-model="select" :options="equipos"></b-form-select>
                    <p>Seleccion: {{select}}</p>
                </b-col>
                <b-col md="3">
                    <b-form-radio-group v-model="radio" :options="equiposRadio"></b-form-radio-group>
                    <p>Seleccion: {{radio}}</p>
                </b-col>
                <b-col md="3">
                    <b-form-checkbox-group v-model="check" :options="equiposRadio"></b-form-checkbox-group>
                    <p>seleccion check: {{check}}</p>
                </b-col>
            </b-row>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Form',
    data(){
        return {
            texto: '',
            check: [],
            radio: null,
            select: null,
            equipos: [
                {value: null, text: 'Seleccione un club'},
                {value: 'UCH', text: 'Universidad de chile'},
                {value: 'CC', text: 'Colo colo'},
                {value: 'UC', text: 'Universidad catolica'}
            ],
            equiposRadio: [
                {value: 'UCH', text: 'Universidad de chile'},
                {value: 'CC', text: 'Colo colo'},
                {value: 'UC', text: 'Universidad catolica'}
            ]
        }
    },
    computed:{
        nameState() {
        return this.texto.length > 2 ? true : false
      }
    }
}
</script>