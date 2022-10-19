<template>
<div :key="recipes.id">     
  <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800 mb-2">
    <div class="xl:w-10/12">
      <div class="block bg-white shadow-lg rounded-lg">
        <div class="lg:flex lg:flex-wrap g-0">
          <div class="lg:w-6/12 px-4 md:px-0">
            <div class="md:p-12 md:mx-6">
                <div class="text-cente">
                 <h4 class="text-xl font-semibold mt-1 mb-12 pb-1">DELICIOS RECIPE </h4> 
                </div>
                      

        <!-- card -->
              <div class="bg-white rounded-md   shadow-md w-full ">
                <div class="p-4 ">
                            <h2 class="text-2xl text-lime-600 uppercase">{{ recipes.title }}</h2>
                      <div class="flex justify-between mt-4 mb-4 text-gray-500">
                        <div class="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span class="ml-1 lg:text-xl">{{ recipes.duration }}</span>
                        </div>
                              
                        <div>
                          
                          <img class="card-img-top" :src="recipes.image" alt="recipe">

                        </div>
                      </div>
                            <ul class="flex justify-center mb-6">
                      <li>
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                          <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                        </svg>
                      </li>
                      <li>
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                          <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                        </svg>
                      </li>
                      <li>
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                          <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                        </svg>
                      </li>
                      <li>
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                          <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                        </svg>
                      </li>
                      <li>
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                          <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                        </svg>
                      </li>
                    </ul>
                            <button @click='toggle = !toggle' id="recipe" class="text-white bg-lime-600 p-4 hover:bg-lime-400 rounded-md w-full uppercase">View Ingridients</button>
                </div>
                          <div  class="  bg-lime-600 text-white rounded-md text-center p-1 pb-1  text-xs uppercase">
                            <span>Catagori {{recipes.category.cat_name}}</span>
                          </div>
            </div>
          </div>
        </div>
                      <div
                        class="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-hero bg-no-repeat bg-cover bg-center">
                        <div class="text-white px-4 py-6 md:p-12 md:mx-6">
                          <h4 class="text-xl font-semibold ">Description About Recipe</h4>
                          <p class="text-sm" >
                            {{ recipes.discription }} 
                          </p>
                        
                                  
                                  <div v-show='toggle' class="mt-10">
                                    <h2>INGRIDIENTS</h2>
                                    
                                  <span> {{ recipes.ingridient }}</span>
                                  
                                  </div>
                          
                        </div>
                      </div>
          <div class="comment w-full py-4 mx-2 my-2 bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm  ">

              <div class="m-auto p-auto" >

                              <div >
                                  <input placeholder="comment here...." class="mb-1 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid" type="text">
                              </div>
                           <div class="overflow-y-scroll m-auto p-auto h-40 hide-scroll-bar">
                              <div   v-for=" (comments,index) in recipes.comment ">
                                
                              <div class="flex flex-row">
                                  <img class="object-cover w-12 h-12 border-2 border-gray-300 rounded-full" alt="img"
                                      src="">
                                  <div class="flex-col mt-1 w-full "  >
                                      <div class="flex items-center flex-1 px-4 font-bold leading-tight w-full">Noob master
                                          <span class="ml-2 text-xs font-normal text-gray-500" >{{comments.comment}}</span>
                                      </div>
                                      <div class="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600 w-full"></div>
                                      <button class="inline-flex items-center px-1 pt-2 ml-1 flex-column">
                                          <svg class="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900"
                                              viewBox="0 0 95 78" xmlns="http://www.w3.org/2000/svg">
                                              <path
                                                  d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
                                                  fill-rule="nonzero" />
                                          </svg>
                                      </button>
                                      <button class="inline-flex items-center px-1 -ml-1 flex-column">
                                          <svg class="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700" fill="none"
                                              stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5">
                                              </path>
                                          </svg>
                                      </button>

                                  </div>
                                </div>
                    <hr class="my-1 ml-16 border-gray-200">
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  </div>
  </template>
  
  <script>
  export default {
    name: "RecipeItem",
    props: ["recipes"],
    el: "#recipe",
    data() {
        return {
            toggle: false
        }

    },
  
  };
  </script>
  


