<template>
    <div class="mt-5">
        <b-button variant="primary" >Boton 1</b-button>
        <b-button variant="secondary" >Boton 2</b-button>
        <b-button variant="success" >Boton 3</b-button>
        <b-button variant="danger" >Boton 4</b-button>
        <b-button variant="warning" >Boton 5</b-button>
        <b-button variant="info" >Boton 6</b-button>
        <b-button variant="light" >Boton 7</b-button>
        <b-button variant="dark" >Boton 8</b-button>

        <b-row class="mt-5">
            <b-col cols="12" md="4">
                <b-card
                title="Universida de chile"
                img-src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Emblema_del_Club_Universidad_de_Chile.png"
                img-alt="Image"
                img-top>
                <p> El Club Universidad de Chile, conocido popularmente como la «U»,
                     es un club de fútbol profesional de Chile con sede en Santiago, 
                     Chile. La actual concesionaria del club, Azul Azul S.A.</p>
                <b-button variant="dark" href="#" >Boton</b-button>
                </b-card>
            </b-col>

            <b-col cols="12" md="4">
                <b-card
                title="Arboles"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top>
                <p>Un árbol es una planta, de tallo leñoso, que se ramifica 
                    a cierta altura del suelo. El término hace referencia 
                    habitualmente a aquellas plantas cuya altura supera 
                    un determinado límite en la madurez </p>
                <b-button variant="dark" href="#" >Boton</b-button>
                </b-card>
            </b-col>

            <b-col cols="12" md="4">
                <b-card
                title="Arboles"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top>
                <p>Un árbol es una planta, de tallo leñoso, que se ramifica 
                    a cierta altura del suelo. El término hace referencia 
                    habitualmente a aquellas plantas cuya altura supera 
                    un determinado límite en la madurez </p>
                <b-button variant="dark" href="#" >Boton</b-button>
                </b-card>
            </b-col>

        </b-row>

       

    </div>
</template>
<script>
export default {
    name: 'Cards'
}
</script>