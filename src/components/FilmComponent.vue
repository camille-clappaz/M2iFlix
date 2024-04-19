<template >
    <h2>Les nouveautés </h2>
    <ul >
        <li v-for='(elt, ind) in films'>
            {{ elt.poster_path }}
       
            <button @click="ajouterFilm(elt.id, ind)">
                Ajouter à ma liste
            </button>

        </li>
    </ul>
    
</template>
<script setup>
import { onMounted, reactive } from "vue";
import axios from "axios";

const films = reactive([]);

onMounted(() => {
    axios
        .get(`http://localhost:5173/films`)
        .then(res => console.log(res.data))
 })

</script>
<style></style>