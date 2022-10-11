<template>
  <form @submit.prevent="handleSubmit">
    <input type ="text" placeholder="name" v-model="enteredName" />
    <input type="text" placeholder="age" v-model="eneteredAge"/>
    <button>SubmitDetails</button>
  </form>
</template>

<script>
export default {
   emit:['handle-submit'],
    data(){
        return{
            enteredName:'',
            eneteredAge:''
        }
    },
    methods:{
        handleSubmit(){
            this.$emit('handle-submit', this.enteredName, this.eneteredAge)
        }

    }

}
</script>

<style>

</style>