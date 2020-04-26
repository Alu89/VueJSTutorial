// Define a new component called button-counter
<script>
export default  {
    name:'button-counter',
    props:['messageFromParent'],
    data: function () {
      return {
        count: 0
      }
    }
  }
</script>
<template>
  <button v-on:click="count++"> {{messageFromParent}} You clicked me {{ count }} times.</button>
 </template>