<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created() {
    var arr = [1,2,3,["a","b","c"]];
    var arr1 = this.$deepCopy(arr);
    console.log(arr1);//[1, 2, 3, Array(3)]

    arr[3].push("d");
    console.log(arr);// [1, 2, 3, Array(4)]
    console.log(arr1);// [1, 2, 3, Array(3)]
  }
} 
</script>
