<template>
  <div class="items-center">
<div class="flex flex-col bg-lime-200 ">
<h1
   class="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
   Categoris
 </h1>
 <div class="flex overflow-x-scroll pb-10 hide-scroll-bar space-x-4">
   <div v-for="category of categories" :key="category.cat_id" class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">          
     <div class="inline-block px-3">
       <div 
         class="w-64 h-64  max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
       >{{category.cat_name}} {{ category.cat_img }}</div>
     </div>
   </div>
 </div>
</div>
</div>
 </template>
 <script >
   import { useQuery } from "@vue/apollo-composable";
import {  computed  } from "vue";  
import gql from "graphql-tag";
export default{
setup(){
const { result } = useQuery(gql`
query CAT{
categories {
cat_id
cat_name
cat_img
}

}
`)
// watch(() => {
//       console.log(result.value)
//     })
const categories = computed(() => result.value?.categories ?? [])
return {
categories,

}
// useMutation(gql`
//       mutation categories ($cat_name: String!, $cat_img: String!) {
//         insert_categories (objects:[{cat_name: $cat_name, cat_img:$cat_img}]) {
          
//     returning {
//       id
//     }
//         }
//       }
//     `)
    
},
}  

// Field "insert_categories" argument "objects" of type "[categories_insert_input!]!" is required,but it was not provided.GraphQL: Validation




</script>  

   <style>
       .hide-scroll-bar {
         -ms-overflow-style: none;
         scrollbar-width: none;
       }
       .hide-scroll-bar::-webkit-scrollbar {
         display: none;
       }
       </style>