<script setup>
import { useQuery } from "@vue/apollo-composable";
import {watchEffect, computed  } from "vue";  
import {REC} from "../../assets/data"
import RecipeItem from './Recipe.vue'
import { ref } from "vue";





const { result } = useQuery(REC);
let input = ref("");
const recipe = computed(() => result.value?.recipes ?? [])
function filteredList() {
return recipe.value.filter((recipes) => {
                return (recipes.title.toLowerCase().indexOf(input.value.toLowerCase()) > -1 ||
                recipes.duration.toLowerCase().indexOf(input.value.toLowerCase()) > -1 ||
                recipes.ingridient.toLowerCase().indexOf(input.value.toLowerCase()) > -1);
            })
 
  
};



    </script>
    <template>
           
 <div>  
      <div class=" flex flex-raw justify-center items-center mt-40 mb-2 ">
      <span class="w-10 text-2xl mr-0 bg-white rounded text-center"> <ion-icon name="search-outline"></ion-icon></span>
      <input  type="text" class="text-xg w-80  h-9 border-2 hover:border-lime-400 rounded " v-model="input" placeholder="Search recipe by title, duration, ingrident..." />
      </div>
        <recipe-item v-for="recipes in filteredList()" :key="recipes.id" :recipes="recipes" v-show="input&&filteredList()"></recipe-item>

      <div v-if="input&&!filteredList().length">
          <p>No results found!</p>
      </div>

 </div>
</template>
    





<style  scoped>

</style>