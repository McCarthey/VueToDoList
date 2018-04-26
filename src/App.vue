<template>
  <div id="app">
    <!-- <colorPicker v-model="RandomColor"></colorPicker> -->
    <draggable v-model="myArray" @end="onDrop">
      <transition-group>
        <div v-for="element in myArray" :key="element.id" class="draggable-item">
          <mu-icon value="label_outline" :color="RandomColor" />
          <mu-text-field v-model="element.text" hintText="写点儿什么吧" @blur="onSave" /><br/>
        </div>
      </transition-group>
    </draggable>
    <div>{{myArray}}</div>
    <div class="op-btn_group">
      <mu-raised-button label="新建" class="demo-raised-button" backgroundColor="#4caf50" @click="onCreate"/>
      <mu-raised-button label="保存" class="demo-raised-button" @click="onSave" primary/>
      <mu-raised-button label="删除" class="demo-raised-button" @click="onDelete" secondary/>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'app',
  components: { draggable },
  data() {
    return {
      myArray: [],
      RandomColor: '#999'
    }
  },
  created(){
    let listString = localStorage.getItem('mc_to_do_list')
    let list = JSON.parse(listString)
    this.myArray = list 
    console.log('读取localStorage中的内容',list)
  },
  methods: {
    // 拖动元素事件
    onDrop(){
      this.onSave()
      console.log('item dropped')
    },
    // 新建事件
    onCreate() {
      console.log('button create', this.myArray)
      this.myArray.push({
        id: this.myArray.length + 1,
        name: ''
      })
    },
    // 保存事件
    onSave() {
      console.log('button save')
      // 不能直接保存 需要转换成json字符串
      localStorage.setItem('mc_to_do_list', JSON.stringify(this.myArray))
    },
    // 删除事件
    onDelete() {
      console.log('button delete')
    }
  }
}
</script>

<style lang="scss">
@import './style.scss';
#app {
  min-height: 800px;
  max-width: 1000px;
  margin: 40px auto;
  box-shadow: 0px 10px 30px #ddd;
  padding: 40px;
}
.draggable-item {
  cursor: move;
  border: 2px dashed transparent;
}
//空行的元素状态
.sortable-ghost {
  opacity: 0.6;
  background: #c8ebfb;
  border: 2px dashed #666;
}
</style>
