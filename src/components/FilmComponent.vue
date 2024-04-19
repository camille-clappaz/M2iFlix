<template >
    <ul >
        <li  >
        {{ film.title }}
        <!-- <img src="https://image.tmdb.org/t/p/original"{{ film.poster_path }} alt=""> -->
       
            <button >
                Ajouter à ma liste
            </button>

        </li>
    </ul>
    
</template>
<script setup>
import { onMounted, reactive } from "vue";
import { object } from 'yup';
import axios from 'axios';
const poster = 'https://image.tmdb.org/t/p/original'
const movie=  reactive([])

defineProps({film: object})

</script>
<style></style>