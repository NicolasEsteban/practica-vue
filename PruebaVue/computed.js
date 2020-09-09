const app = new Vue({
    el:'#app',
    data: {
        mensaje: 'Hola Mundo',
        contador: 0
    },
    computed: {
        invertido(){
            return this.mensaje.split('').reverse().join('');
        },
        color(){
            return {
                'bg-success' : this.contador <= 10,
                'bg-warning' : this.contador > 10 && this.contador < 20,
                'bg-info' : this.contador >= 20
            };
        }
    }
});