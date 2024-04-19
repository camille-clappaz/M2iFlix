<template >
    <h2>Les nouveautés </h2>
    <FilmComponent v-for="(film) in films" :film="film" />
</template>
<script setup>
import FilmComponent from '../components/FilmComponent.vue';

import { onMounted, reactive, ref } from "vue";
import axios from "axios";

const films = ref([]);

onMounted(() => {
    axios
        .get(`http://localhost:5555/films`)
        .then(res => {console.log (films.value= res.data); }  )
 })



     

    



</script>
<style>

</style>