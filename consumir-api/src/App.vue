<template>
  <div id="app" >
    
    <div class="hero is-white is-gradient is-bold">
      <div class="hero-body">
        <h1 class="title">
          <span class="has-text-success">R&M</span>
          <span class="subtitle">Personajes</span>
        </h1>

        <div class="field has-addons is-pulled-right">

          <div class="control">
            <input v-model="search" type="text" class="input is-rounded" v-on:keyup.enter="searchData">
          </div>
          
          <div class="control">
            <button @click="searchData" class="button is-success is-rounded"  >Buscar</button>
          </div>

        </div>

      </div>
    </div>

    <div class="container">

      <div class="columns is-desktop is-mobile is-tablet is-multiline is-centered">
        
        <Character
                  @showModal="showModal" 
                  v-for="car of informacion" 
                   :key="car.id" 
                   v-bind:car="car"
                   />
      </div>
      <nav class="pagination" role="navegation" aria-label="pagination">
        
        <a class="pagination-previous" @click="changePage(page-1);">Anterior</a>

        <ul class="pagination-list">
          <li>
            <a class="pagination-link is-current">{{page}}</a>
          </li>
        </ul>

        <a class="pagination-next" @click="changePage(page+1);">Siguiente</a>
      </nav>

    </div>

    <div class="modal"
      :class="{'is-active': modal}"
      v-if="modal">
      <div class="modal-background" @click="modal =false "></div>

      <div class="modal-card">

        <header class="modal-card-head">
          <p class="modal-card-title">Acerca de: {{currentCharacter.name}}</p>
        </header>

        <div class="modal-card-body">
          <p>Genero:</p>
          <strong><p>{{ currentCharacter.gender }}</p></strong>

          <p>Status:</p>
          <strong><p>{{ currentCharacter.status }}</p></strong>

          <p>Especie:</p>
          <strong><p>{{ currentCharacter.species }}</p></strong>

          <p>Tipo:</p>
          <strong><p>{{ currentCharacter.type }}</p></strong>
        </div>
        <footer class="modal-card-foot">

          <button class="button"  @click="modal =false ">Cerrar</button>

        </footer>

      </div>
    </div>

    
  </div>
</template>

<script>

import axios from "axios";
import Character from './components/Character'

export default {
  name: 'App',
  components: {
    Character

  },
  data(){
    return{
      informacion: [],
      page: 1,
      pages: 1,
      search: '',
      modal: false,
      currentCharacter: {}
    }
  },
  created(){
    this.fetch()
  },
  methods:{
    fetch(){
      const params ={
        page: this.page,
        name: this.search
      }
      
      //llamar datos de la api
      axios
      .get('https://rickandmortyapi.com/api/character',{params})
      .then(response => {
        this.informacion = response.data.results;
        this.pages = response.data.info.pages;
        
        }).catch(err =>{
          console.log(err)
        });
      
      
      
    },
    changePage(page){
      this.page =(page <=0 || page >this.pages) ? this.page: page;
      this.fetch();

    },
    searchData(){
      this.page=1;
      this.fetch();
      this.search='';
      
    },
    showModal(id){
      this.fetchOne(id);

    },
    async fetchOne(id){
      let datos = await axios.get(`https://rickandmortyapi.com/api/character/${id}/`)
      this.currentCharacter = datos.data
      this.modal = true
      console.log(this.currentCharacter)
    }
  }
  
}
</script>

