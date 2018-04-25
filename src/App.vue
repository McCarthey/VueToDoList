<template>
  <div id="app">
    <!-- <colorPicker v-model="RandomColor"></colorPicker> -->
    <draggable v-model="myArray" >
      <transition-group>
        <div v-for="element in myArray" :key="element.id" class="draggable-item">
          <mu-icon value="label_outline" :color="element.color" />
          <mu-text-field v-model="element.text" hintText="写点儿什么吧" /><br/>
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
      myArray: [
        {
          id: 1,
          name: 'demo1'
        },
        {
          id: 2,
          name: 'demo2'
        },
        {
          id: 3,
          name: 'demo3'
        }
      ],
      RandomColor: 'red'
    }
  },
  methods: {
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
      // 不能直接保存 需要转换成字符串
      localStorage.setItem('mc_to_do_list', this.myArray)
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
