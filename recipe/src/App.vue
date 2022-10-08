<template>
  <!-- <div class="app-container" :class="authStore.user && 'bg-light'">
          <Nav />
          <Alert />
        <div class="container pt-4 pb-4">
            <router-view />
        </div>
    </div> -->
    
  <div>
    <!-- <commentList /> -->
    <!-- <Search /> -->
    <router-view name="Header"></router-view>

    <div class="h-full w-auto items-center pt-4">
      <router-view name="smallCards"></router-view>
      <router-view name="cards"></router-view>
      <router-view/>
    </div>
  </div>
</template>
<script>
//   import commentList from './components/Recipe/commentList.vue';
// import Search from './components/Recipe/search.vue';
// import Home_1 from "./components/Recipe/Home_1.vue";
// import AppHeder from "./components/AppHeder.vue";
// import ProductCategory from "./components/Recipe/ProductCategory.vue";

  export default {
    name:'App',
    // components: {  Search }
}
  
  </script>
  <!-- <script setup>
    import { Nav, Alert} from '@/components/Nav'
    import { useAuthStore } from '@/stores';    
    const authStore = useAuthStore;
    </script>
-->
<style scoped> 

</style>
