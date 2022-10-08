<script setup>
import { useQuery } from "@vue/apollo-composable";
import {watchEffect, computed  } from "vue";  
import {REC} from "../../assets/data"
import RecipeItem from './Recipe.vue'




const { result } = useQuery(REC);
const recipe = computed(() => result.value?.recipes ?? [])



    </script>
    <template>
           
    <div class="list-of-recipes">
    <recipe-item v-for="recipes in recipe" :key="recipes.id" :recipes="recipes" class="recipe-item" ></recipe-item>    
  </div> 
  </template>
    





<style  scoped>

</style>