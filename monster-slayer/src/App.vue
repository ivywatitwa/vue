<template>
<ActiveUser :name="user.name" :age="user.age"/>
<UserData @handle-submit="addData"/>

</template>

<script>
  
import ActiveUser from './components/ActiveUser.vue';
import UserData from './components/UserData.vue';


export default {
  name: 'App',
  components: { ActiveUser, UserData },
  data(){
    return{
      user: {
        name:'',
        age:''
  }}},
  methods: {
    addData(enteredName,eneteredAge){
      this.user = {
        name: enteredName,
        age: +eneteredAge
      }
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
