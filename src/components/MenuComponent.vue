<template>
    <nav>
        <ul>
            <li><router-link to="/">Accueil</router-link></li> |
            <li><router-link to="/films">Films</router-link></li> |
            <li><router-link to="/liste">Ma liste de films</router-link></li> |
            <li @click="deconnexion" v-if="userConnecte"><router-link to="/">Deconnexion</router-link></li> 
            <li v-else><router-link to="/inscription">Inscription</router-link></li> 
          
        </ul>
    </nav>
</template>
<script setup>
import {useRouter} from "vue-router";
import { reactive, computed } from 'vue';
const router = useRouter();
const userConnecte = reactive(localStorage.getItem("user"))

const deconnexion= computed(() => 
localStorage.removeItem("user"),
router.push('/inscription'))



</script>
<style scoped>
li {
    list-style-type: none;
    display: inline;
}

.lien-actif {
    font-weight: bold;
}
</style>