<template>

  <body>
    <div class="flex mt-16 justify-center items-center flex-wrap h-full g-6 text-gray-800">
      <div class="xl:w-10/12">
        <div class="block bg-white shadow-lg rounded-lg">
          <div class="lg:flex lg:flex-wrap g-0">
            <div class="lg:w-6/12 px-4 md:px-0">
              <div class="md:p-12 md:mx-6">
                <div class="text-center">
                  <h4 class="text-xl font-semibold mt-1 mb-12 pb-1">UPLOAD YOUR RECIPE HERE</h4>
                </div>
                <div class="submit-form">
                  <form @submit.prevent="submit">
                    <fieldset class="mb-4 ">
                      <input type="text" class="formGroup " placeholder="Title" v-model="title">
                      <input type="text" class="formGroup" placeholder="duration" v-model="duration">
                      <input type="text" class="formGroup" placeholder="ingridient" v-model="ingridient">
                      <input type="text" class="formGroup" placeholder="discription" v-model="discription">
                      <input type="text" class="formGroup" placeholder="image" v-model="image">
                      <input type="text" class="formGroup" placeholder="category" v-model="category_id">



                    </fieldset>
                    <input class="button-primary  inline-block px-6 py-2.5
                     text-white font-medium text-xs leading-tight uppercase 
                     rounded shadow-md bg-lime-600 hover:bg-lime-400 hover:shadow-lg  w-full mb-3" type="submit"
                      value="Send">
                  </form>
                </div>
                <div class="flex items-center justify-between pb-6">

                  <router-link to="Home_1" class="button-primary  inline-block px-6 py-2.5
                     text-white font-medium text-xs leading-tight uppercase 
                     rounded shadow-md bg-lime-600 hover:bg-lime-400 hover:shadow-lg  w-full text-center  mb-3">Recipes
                  </router-link>
                </div>
              </div>
            </div>

            <div
              class="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-hero bg-no-repeat bg-cover bg-center">
              <div class="text-white px-4 py-6 md:p-12 md:mx-6">
                <h4 class="text-xl font-semibold mb-6">We Stand With Food</h4>
                <p class="text-sm">
                  This is SuraRecipe a recipe website made for you to show your recipe for others ,to practice others
                  recipe simply and to discus about food. it is made for an internship portfolio by surafel Nega a
                  softwer engineering
                  student to Minab techs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
  
<script>
import gql from "graphql-tag";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ADD_RECIPE, REC } from "../../assets/data"
import RecipeItem from './Recipe.vue'
import { useMutation } from '@vue/apollo-composable'
import { toInteger } from "lodash";

export default {
  name: "AddRecipes",
  data() {
    return {
      title: "",
      image: "",
      duration: "",
      discription: "",
      ingridient: "",
      category_id: toInteger()
    };
  },
  apollo: {},
  // methods: {
  //   submit: function() {
  //     const title = this.title && this.title.trim()
  //     this.$apollo.mutate({
  //         mutation: ADD_RECIPE,
  //         variables: {
  //             title:title
  //         }
  // update: (cache, {data: {insert_recipes}}) => {
  //     try {
  //         const data = cache.readQuery({
  //             query: RecipeItem
  //         })
  //         const insertedRecipe = insert_recipes.returning;
  //         data.recipes.splice(0,0, insertedRecipe[0]);
  //         cache.writeQuery({
  //             query: RecipeItem,
  //             data
  //         })
  //     }catch (error) {
  //         console.log(error)
  //     }
  //     this.title = '';
  //     console.log(this.title)
  // }
  // })
  methods: {
    submit() {
      // const view = REC; 
      const { title, image, duration, discription, ingridient } = this.$data;
      this.$apollo.mutate({
        mutate: ADD_RECIPE,
        variables: {
          image,
          title,
          duration,
          ingridient,
          discription,
          category_id
        },
        refetchQueries: ["REC"]
      });
      this.title = "";
      this.image = "";
      this.duration = "";
      this.discription = "";
      this.ingridient = "";
      this.category_id = toInteger();

    }
  },
  components: {}
};
</script>
<style>
.formGroup {
  @apply mb-1 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-lime-400 focus:outline-none
}
</style>