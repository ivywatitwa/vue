<template>
    <base-card>
    <base-button @click="changeTab('stored-resources')" :mode="storedResButtonMode">
    StoredResources
    </base-button >
   
    <base-button @click="changeTab('add-resource')" :mode="addResButtonMode">
    AddResource
    </base-button>
</base-card>
<keep-alive>
<component :is="selectedTab"></component>
</keep-alive>
</template>


<script>
import StoredResources from './StoredResources.vue'
import AddResource from './AddResource.vue'

export default {
    components: {StoredResources, AddResource},
data(){
    return{
        selectedTab: 'stored-resources',
        storedResources: [
        {id:'official-guide', title:'Official Guide',decription: 'The official Vue guide',link:'https://vuejs.org'},
        {id:'google-guide', title:'Google Guide',decription: 'The official Google guide',link:'https://google.com'},
      ]
    }
},
provide(){
    return{
    resources: this.storedResources,
    addResource: this.addResource,
    removeResource: this.removeResource
}},
computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
methods:{
    changeTab(tab){
        this.selectedTab=tab; 

    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
    removeResource(resId) {
      const resIndex = this.storedResources.findIndex(res => res.id === resId);
      this.storedResources.splice(resIndex, 1);
    },
},
}
</script>

<style>

</style>