// fichier de mapping (route, composant)

import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import FilmsView from "../views/FilmsView.vue"
import InscriptionView from "../views/InscriptionView.vue"
import ListeView from "../views/ListeView.vue"


const routes = [
    {
        path: '/',
        component: HomeView,
        name: 'home',
        alias: ['/accueil', '/home'],
        meta: { title: "Page d'accueil" }
    },
    {
        path: '/inscription',
        component: InscriptionView,
        name: 'inscription',
        meta: { title: "Page d'inscription" }
    },
    {
        path: '/films',
        component: FilmsView,
        name: 'films',
        meta: { title: "Tout les films" }
    },
    {
        path: '/liste',
        component: ListeView,
        name: 'liste',
        meta: { title: "Liste de film" }
    }
   
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'lien-actif'
})


router.beforeEach((to, from, next) => {
    document.title = to.meta.title || "M2iFlix"
    next()
})


export default router