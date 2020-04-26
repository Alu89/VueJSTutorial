<template>
  <div>
      <h1> {{greeting}} {{test()}}!!</h1>
    <Form />
    <Form />
  <nav>
        <router-link to='/'>Home</router-link>
        <router-link to='/register'>Register</router-link>
        <router-link to='/login'>Login</router-link>
        <router-link to='/form'>Form</router-link>
  </nav>
  <router-view />
  </div>
</template>

<script>

import Form from './components/Form.vue'

export default {
  name: 'app',
  components:{
    Form
  },
  data : function(){
    return{
      greeting:"Hello 2"
      };
  },
  methods:{
    test: function () {
      return "Everythin is fine";
    }
  },
}

</script>