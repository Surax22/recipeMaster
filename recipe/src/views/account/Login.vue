<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

import { useAuthStore } from '@/stores';

const schema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
});

async function onSubmit(values) {
    const authStore = useAuthStore();
    const { username, password } = values;
    await authStore.login(username, password);
}
</script>

<template>
    
        <div class="flex justify-center items-center flex-wrap h-screen g-6 text-gray-800">
      <div class="xl:w-10/12">
        <div class="block bg-white shadow-lg rounded-lg">
          <div class="lg:flex lg:flex-wrap g-0">
            <div class="lg:w-6/12 px-4 md:px-0">
              <div class="md:p-12 md:mx-6">
                <div class="text-center">
                  <h4 class="text-xl font-semibold mt-1 mb-12 pb-1">LOGIN</h4>
                </div>
            <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
                <div class="form-group mb-4">
                    <label class="mb-4">Username</label>
                    <Field  name="username" type="text" class="form-control form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-lime-400 focus:outline-none" :class="{ 'is-invalid': errors.username }  " />
                    <div class="invalid-feedback">{{ errors.username }}</div>
                </div>
                <div class="form-group mb-4" >
                    <label class="mb-4">Password</label>
                    <Field name="password" type="password" class="form-control form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-lime-400 focus:outline-none" :class="{ 'is-invalid': errors.password }" />
                    <div class="invalid-feedback">{{ errors.password }}</div>
                </div>
                
                    <button class="btn btn-primary  button-primary  inline-block px-6 py-2.5
                     text-white font-medium text-xs leading-tight uppercase 
                     rounded shadow-md bg-lime-600 hover:bg-lime-400 hover:shadow-lg  w-full mb-3" :disabled="isSubmitting">
                        <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
                        Login
                    </button>
                    <div class="flex items-center justify-between pb-6">
                    <p class="mb-0 mr-2">Don't have an account?</p>
                    <router-link to="register" class="button-primary  inline-block px-6 py-2.5
                     text-white font-medium text-xs leading-tight uppercase 
                     rounded shadow-md bg-lime-600 hover:bg-lime-400 hover:shadow-lg  w-20 text-center  mb-3">Register</router-link>
                    <!-- <router-view to="./Appheader" class="btn btn-link" /> -->
                    </div>
                
            </Form>
                    </div>
                </div>
            
            <div
              class="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-hero bg-no-repeat bg-cover bg-center"
            >
              <div class="text-white px-4 py-6 md:p-12 md:mx-6">
                <h4 class="text-xl font-semibold mb-6">We Stand With Food</h4>
                <p class="text-sm">
                  This is SuraRecipe a recipe website made for you to show your recipe for others ,to practice others 
                  recipe simply and to discus about food. it is made for an internship portfolio by surafel Nega a softwer engineering
                  student to Minab techs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    
</template>
