<template>
    <nav>
        <ul>
            <li><router-link to="/">Accueil</router-link></li> |
            <li><router-link to="/inscription">Inscription</router-link></li> |
            <li><router-link to="/films">Films</router-link></li> |
            <li><router-link to="/liste">Ma liste de films</router-link></li> 
          
        </ul>
    </nav>
</template>
<script setup>

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