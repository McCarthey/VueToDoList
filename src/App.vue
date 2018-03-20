<template>
  <div id="app">
    <draggable v-model="myArray" :options="{group:'people'}" @start="drag=true" @end="drag=false">
      <div v-for="element in myArray" :key="element.id">{{element.name}}</div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'app',
  components: { draggable },
  data () {
    return {
      myArray: [{
        id:1,
        name:'demo1'
      },{
        id:2,
        name:'demo2'
      },{
        id:3,
        name:'demo3'
      }]
    }
  }
}
</script>

<style lang="scss">

</style>
