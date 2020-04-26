// Login.vue
<template>
    <div>
        Login
        <p v-if="show">Subscribe !</p>

        <div v-if="Math.random() > 0.5">
        Now you see me
        </div>
        <div v-else>
        Now you don't
</div>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            show:true
            }
    },
    created:function(){
        console.log("Log comp created !!");
        setInterval(()=> this.show=!this.show, 
            500);
    }
}
</script>