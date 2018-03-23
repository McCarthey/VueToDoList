<template>
  <div id="app">
    <colorPicker v-model="RandomColor"></colorPicker>
    <draggable v-model="myArray">
      <transition-group>
        <div v-for="element in myArray" :key="element.id" class="draggable-item">
          <mu-icon value="home" :color="RandomColor" />
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
        name:'demo1',
      },{
        id:2,
        name:'demo2',
      },{
        id:3,
        name:'demo3',
      }],
      RandomColor:'red'
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
#app {
  min-height: 800px;
}
.draggable-item {
  cursor: move;
}
</style>
