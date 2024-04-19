<template>
  <HeaderComponent />
  <MenuComponent />
  <router-view />
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MenuComponent from './components/MenuComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MenuComponent

  }
}
</script>