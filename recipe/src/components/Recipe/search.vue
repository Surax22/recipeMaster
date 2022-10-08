<script setup>
    import { ref } from "vue";
    import { useQuery } from "@vue/apollo-composable";
    import { computed } from "@vue/reactivity";
    import Recipe from "../Recipe/Recipe.vue"
    // import Loading from "../components/loading/Loading.vue";
    import { REC } from "../../assets/data";
    // import { userLoginStore } from "../stor e/store";
    import { useRoute } from "vue-router";
    // import NodataFound from "../components/NodataFound/NodataFound.vue";
    
    const route = useRoute();
    const keyword = computed(() => route.params.keyword);
    
    const { result, loading, error, refetch, fetchMore } = useQuery(REC, {
      keyword: keyword,
    });
    
    const searchResults = computed(() => result.value?.search_recipe);
    
    const NoFoods = computed(() => {
      return result.value?.search_recipe.length > 0 ? "" : "True";
    });
    </script>
    
    <template>



      <div class="flex items-center justify-center space-x-6 mt-20 py-6">
        <h1 class="text-3xl font-black text-primary">Search Result</h1>
      </div>

      <Form class="flex flex-col items-center" @submit="onSubmit">
      <div
        class="flex rounded-full p-1 box-border mt-8 bg-white overflow-hidden ring-red-300 focus:ring-4 w-96"
      >
      
        <input
          type="text"
          value=""
          name="keyword"
          class="rounded-full px-4 focus:outline-none w-full bg-transparent"
          placeholder="Search here with ingredient,title or description key words......."
          :rules="validateSearch"
        />

        <button
          class="text-sm bg-primary py-3 px-6 rounded-full text-black poppins ring-red-300 focus:ring-4 transition duration-300 hover:scale-105 transform"
          type="submit"
        >
          Search
        </button>
        
      </div>
      </Form>
      <!-- <section v-if="loading" class="my-12 max-w-screen-xl mx-auto px-6">
        <Loading text="searching" />
      </section> -->
    
      <!-- <section v-if="NoFoods">
        <NodataFound :text="'No Recipe Found for query ' + keyword" />
      </section> -->
    
      <section class="my-12 max-w-screen-xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          <div v-for="searchResult in searchResults" :key="searchResult.id">
            <Recipe
              :ingridient="searchResult.ingridient"
              :title="searchResult.title"
              :description="searchResult.discription"
              :category="searchResult.category.cat_name"/>
          </div>
        </div>
      </section>
      <!--    :id="searchResult.id"
              :preparation_time="searchResult.preparation_time"
              :numberOfLikes="searchResult.user_who_likes_aggregate.aggregate.count"
              :imagePreview="searchResult.imagesByRecipeId[0].urls"
              :rating="searchResult.average_rating" -->
    </template>
    