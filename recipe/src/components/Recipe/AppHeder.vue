<template>
  <header class="p-5 bg-lime-600 shadow md:flex md:items-center md:justify-between fixed w-full">
        <span class="font-[poppins] text-2xl">SuraRecipe</span>
      <nav class="navbar">

        
        <ul class="md:flex  md:items-center md:static absolute bg-lime-600 mt-1  w-auto md:w-auto px-10 md:px-0 md:pb-0 pb-10 duration-700 top-14 ease-in  "
          :class="[open ? 'right-0' : 'right-[-100%]'] ">
              <li class="mx-2 my-6 md:my-0"><router-link to="Home" class="text-xl hover:text-green-200  duration-500">Home</router-link></li>
              <li class="mx-2 my-6 md:my-0"><router-link to="Addrecipes" class="text-xl hover:text-green-200  duration-500">Upload</router-link></li>

          </ul>
      </nav>
      <div class="flex text-center cursor-pointer right-4 top-1  text-sm absolute">
             <span  ><router-link to="/account/login"><ion-icon class=" h-9 w-10 text-3xl rounded-lg bg-lime-200 leading-10 hover:bg-green-100 mx-2 duration-500 mt-4
              " id="logout-btn" name="log-out"></ion-icon></router-link></span> 
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
  
    
}
   
 </script>
 
 <style scoped>
 
 </style>





 





