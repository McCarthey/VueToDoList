<template>
  <div id="app">
    <draggable v-model="myArray">
      <transition-group>
        <div v-for="element in myArray" :key="element.id" class="draggable-item">
          <mu-icon value="home"/>
          <mu-text-field v-model="element.name" /><br/>
        </div>
      </transition-group>
    </draggable>
    <div>{{myArray}}</div>
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
  },
  methods: {
  }
}
</script>

<style lang="scss">
.draggable-item {
  cursor: move;
}
</style>
