<script setup>
    import { Nav, Alert } from '.';
import { useAuthStore } from '../../stores';
   const authStore = useAuthStore();
</script>

<template>
      <div class="app-container  " :class=" authStore.user && 'bg-light'">
                      <Nav />
                      <Alert />
                        <div class="container pt-4 pb-4">
                            <router-view />
                        </div>
                 </div>
</template>



<style scoped>

</style>