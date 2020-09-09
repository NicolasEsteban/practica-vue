const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Personas',
        nombres: [
            {nom: 'Nicolás',edad:27},
            {nom: 'Sebastian',edad:21},
            {nom: 'Pilar',edad:58},
            {nom: 'Miguel',edad:57}
        ],
        nuevoNombre:'',
        total: 0


        
    },
    methods:{
        agregarPersona() {
            
            this.nombres.push({
                nom: this.nuevoNombre,
                edad: 20

            });
            this.nuevoNombre='';
        }
    },
    computed:{ // los computed siempre deben retornar algun valor
        sumarEdades(){
            this.total=0;
            nCiclo=0
            for(n of this.nombres){
                this.total= this.total + n.edad;
                nCiclo=nCiclo+1;
                
            }
            return this.total/nCiclo;
            
        }
    }
})