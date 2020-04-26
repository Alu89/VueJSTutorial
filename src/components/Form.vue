<template>
  <div>
    <form>
      <label for="name" >Name :</label>
      <input id="name" type="text"></input>
      <label for="lastname">Lastname:</label>
      <input id="lastname"/>
      <button type="submit">Submit</button>
    </form>
    <input v-model="message" placeholder="edit me">
    <p>{{message}}</p>
  </div>
</template>

<script>

export default {
  name:'Form',
  data : function(){
    return{
      greeting:"Hello 2",
      message:''
      };
  },
  methods:{
    test: function () {
      return "Everythin is fine";
    }
  }
}

</script>