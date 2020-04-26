<template>
  <div>
    <form>
      <label for="name" >Name :</label>
      <input id="name" type="text"></input>
      <label for="lastname">Lastname:</label>
      <input id="lastname"/>
      <button type="submit">Submit 2</button>
    </form>
    <button-counter v-bind:messageFromParent="message"/>
    <input v-model="message" placeholder="edit me 2">
    <p>{{message}}</p>
  </div>
</template>

<script>

import ButtonCounter from './ButtonCounter.vue'

export default {
  name:'Form',
  components:{ButtonCounter},
  data : function(){
    return{
      greeting:"Hello 2",
      message:''
      };
  },

  methods:{
    test: function () {
      return "Everythin is fine 2";
    }
  }
}

</script>