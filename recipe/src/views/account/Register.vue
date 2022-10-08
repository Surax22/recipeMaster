<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

import { useUsersStore, useAlertStore } from '@/stores';
import { router } from '@/router';

const schema = Yup.object().shape({
    firstName: Yup.string()
        .required('First Name is required'),
    lastName: Yup.string()
        .required('Last Name is required'),
    username: Yup.string()
        .required('Username is required'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
});

async function onSubmit(values) {
    const usersStore = useUsersStore();
    const alertStore = useAlertStore();
    try {
        await usersStore.register(values);
        await router.push('/account/login');
        alertStore.success('Registration successful');
    } catch (error) { 
        alertStore.error(error);
    }
}
</script>

<template>
   <!-- <section class="h-full gradient-form bg-gray-200 md:h-screen"> -->
  <div class="container py-0 px-6 h-full items-center">
    <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
      <div class="xl:w-10/12">
        <div class="block bg-white shadow-lg rounded-lg">
          <div class="lg:flex lg:flex-wrap g-0">
            <div class="lg:w-6/12 px-4 md:px-0">
              <div class="md:p-12 md:mx-6">
                <div class="text-center">
                  <h4 class="text-xl font-semibold mt-1 mb-12 pb-1">REGISTER</h4>
                </div>
            <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
                <div class="form-group mb-4" >
                    <label class="mb-4">First Name</label>
                    <Field name="firstName" type="text" class="form-control " :class="{ 'is-invalid': errors.firstName }" />
                    <div class="invalid-feedback">{{ errors.firstName }}</div>
                </div>
                <div class="form-group mb-4">
                    <label class="mb-4">Last Name</label>
                    <Field name="lastName" type="text" class="form-control " :class="{ 'is-invalid': errors.lastName }" />
                    <div class="invalid-feedback">{{ errors.lastName }}</div>
                </div>
                <div class="form-group mb-4">
                    <label class="mb-4">Username</label>
                    <Field name="username" type="text" class="form-control  " :class="{ 'is-invalid': errors.username }" />
                    <div class="invalid-feedback">{{ errors.username }}</div>
                </div>
                <div class="form-group mb-4">
                    <label class="mb-4">Password</label>
                    <Field name="password" type="password" class="form-control " :class="{ 'is-invalid': errors.password }" />
                    <div class="invalid-feedback">{{ errors.password }}</div>
                </div>
                <div class="form-group mb-4">
                    <button class="btn button-primary  inline-block px-6 py-2.5
                     text-white font-medium text-xs leading-tight uppercase 
                     rounded shadow-md bg-lime-600 hover:bg-lime-400 hover:shadow-lg  w-full mb-3" :disabled="isSubmitting">
                        <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
                        Register
                    </button>
                    <div class="flex items-center justify-between pb-6">
                    <p class="mb-0 mr-2">Already have an account?</p>
                    <router-link to="login" class="button-primary  inline-block px-6 py-2.5
                     text-white font-medium text-xs leading-tight uppercase 
                     rounded shadow-md bg-lime-600 hover:bg-lime-400 hover:shadow-lg  w-20 text-center  mb-3">Login</router-link>
                    </div>
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
    </div>



</template>
<style>
    .form-control{
@apply block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-lime-400 focus:outline-none
    }
    .invalid-feedback{
        @apply text-red-600
    }
</style>
