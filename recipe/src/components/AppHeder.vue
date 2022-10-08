<template>
  <header class="header p-5 bg-lime-600 shadow md:flex md:items-center md:justify-between">
        <span class="font-[poppins] text-2xl">SuraRecipe</span>
      <nav class="navbar">

        
        <ul class="md:flex  md:items-center md:static absolute bg-lime-600 mt-1  w-auto md:w-auto px-10 md:px-0 md:pb-0 pb-10 duration-700 top-14 ease-in  "
          :class="[open ? 'right-0' : 'right-[-100%]'] ">
              <li class="mx-2 my-6 md:my-0"><router-link to="Home" class="text-xl hover:text-green-200  duration-500">Home</router-link></li>
              <li class="mx-2 my-6 md:my-0"><router-link to="Addrecipes" class="text-xl hover:text-green-200  duration-500">Add Recipe</router-link></li>

          </ul>
      </nav>

      <div class="flex text-center cursor-pointer right-4 top-1  text-sm absolute">
        <input v-show='toggle' class=" text-xg w-60 h-8 border-2 hover:border-lime-200 rounded mt-5" type="search">
        <span @click='toggle = !toggle' class="iconic  " id="search-btn" >
            <ion-icon name="search-outline" :class="[open ? 'right-0' : 'right-[-100%]']"></ion-icon>
            
          </span >
             <span ><router-link to="/account/login"><ion-icon class="iconic" id="logout-btn" name="log-out"></ion-icon></router-link></span> 
              <span @click="MenuOpen()" class="text-3xl bg-lime-200 leading-10 hover:bg-green-100 md:hidden block h-9 w-10 rounded-lg  mt-4 mx-2 duration-500">
            <ion-icon name="menu-outline"></ion-icon>
        </span>
      </div> 
      <div ></div>

 </header>
 </template>
 
 <script >
  import { ref } from 'vue'
   export default {
    setup() {
        let open = ref(false);
        function MenuOpen() {
            open.value = !open.value;
        }
        return {  open, MenuOpen };
    },
    el: "#search-btn",
    data() {
        return {
            toggle: false
        };
    },
    
    
}
   
 </script>
 
 <style scoped>
 .iconic{
 @apply h-9 w-10 text-3xl rounded-lg bg-lime-200 leading-10 hover:bg-green-100 mx-2 duration-500 mt-4
 }
 </style>





 





