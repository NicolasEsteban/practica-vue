<template>
    <div class="column is-12-mobile is-4-desktop is-4-tablet">
        <div class="card">
            <div class="card-header">
                <img v-bind:src="car.image" alt="">
            </div>

            <div class="card-content">
                <h3 class="title is-size-4">{{car.name}}</h3>
                <button class="button is-success is-rounded is-small" @click="showMore(car.id)">Ver mas</button>
            </div>
        </div>    
    </div>
</template>

<script>
export default {
    name: 'Character',
    props: ['car'],
    methods: {
        showMore(id){
            this.$emit('showModal',id);
        }
    }
}
</script>