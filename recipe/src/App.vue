<template> 
  <div>
     <router-view name="Header"></router-view>
    <div class="h-full w-auto items-center pt-4">
      <router-view name="cards"></router-view>
      <router-view/>
    </div> 
    <router-view class="mt-60" name="Footer"></router-view>
  </div> 
</template>
<script>
  export default {
    name: "App",
}
  
  </script>

<style scoped> 

</style>
