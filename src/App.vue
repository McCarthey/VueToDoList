<template>
  <div id="app">
    <!-- <colorPicker v-model="RandomColor"></colorPicker> -->
    <!-- When todo array is empty, show this word -->
    <div v-if="myArray.length === 0">
      还没有创建活动
    </div>
    <!-- vuedraggable plugin https://www.npmjs.com/package/vuedraggable-->
    <draggable v-model="myArray" @end="onDrop">
        <!-- transition/animation https://vuefe.cn/v2/guide/transitions.html -->
      <transition-group name="list">
        <div v-for="(element,index) in myArray" :key="index" class="draggable-item">
        <!-- A material design UI library for Vue.js, museUI  https://www.muse-ui.org -->
          <mu-checkbox class="checkbox" v-model="element.done"/>
          <mu-text-field v-model="element.text" hintText="写点儿什么吧" @blur="onSave" :disabled="element.done" :class="element.done? 'act-input-done': 'act-input' " />
          <mu-icon-button icon="delete" @click="onDelete(index)" iconClass="icon-delete"/>
          <!-- 是否需要多行文本 -->
        </div>
      </transition-group>
    </draggable>
    <!-- <div>{{myArray}}</div> -->
    <div class="op-btn_group">
      <div class="op-btn_group-left">
        <mu-raised-button label="新建" class="raised-button btn-new" backgroundColor="#4caf50" @click="onCreate"/>
      </div>
      <div class="op-btn_group-right">
        <mu-raised-button label="保存" class="raised-button btn-save" @click="onSave" primary/>
        <mu-raised-button label="清空" class="raised-button btn-delete" @click="onClearAll" secondary/>
      </div>
    </div>
    <!-- 删除确认弹窗 -->
    <mu-dialog :open="dialog" title="提示" @close="closeDialog">
      {{dialogHeadText}}
      <mu-flat-button slot="actions" @click="closeDialog" primary label="取消"/>
      <mu-flat-button slot="actions" primary @click="clearAllActs" label="确定"/>
    </mu-dialog>
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
      RandomColor: '#999',
      dialog: false,
      dialogHeadText: '是否删除该活动？'
    }
  },
  created() {
    /*
    * This is for adapting my old to-do-list project https://mccarthey.github.io/A-To-do-list/
    * which is a original JS project. 
    * You can compare these two projects
    */
    let listString = localStorage.getItem('mc_to_do_list')
    let list = JSON.parse(listString)
    // 老用户迁移 判断是数组还是对象
    if (Object.prototype.toString.call(list) === '[object Object]') {
      let result = []
      for (let k in list) {
        let newItem = {}
        // 取出id
        newItem.id = Number(k.split('act')[1])
        newItem.text = list[k]['taskName']
        newItem.done = list[k]['taskDone']
        result.push(newItem)
      }
      this.myArray = result || []
    } else {
      this.myArray = list || []
    }
    console.log('读取localStorage中的内容', list)
  },
  methods: {
    // 拖动元素事件
    onDrop() {
      this.onSave()
      console.log('item dropped')
    },
    // 新建事件
    onCreate() {
      console.log('button create', this.myArray)
      this.myArray.push({
        id: this.myArray.length + 1,
        text: '',
        done: false
      })
    },
    // 保存事件
    onSave() {
      console.log('button save')
      // 不能直接保存 需要转换成json字符串
      localStorage.setItem('mc_to_do_list', JSON.stringify(this.myArray))
    },
    // 清空事件
    onClearAll() {
      this.dialog = true
      this.dialogHeadText = '是否删除全部活动？'
      console.log('button delete')
    },
    // 删除单个事件
    onDelete(index) {
      console.log(`删除${index}该事件?`)
      this.myArray.splice(index, 1)
      this.onSave()
    },
    // 清空localStorage
    clearAllActs() {
      localStorage.removeItem('mc_to_do_list')
      this.dialog = false
      this.myArray = []
    },
    // 关闭对话框
    closeDialog() {
      this.dialog = false
    }
  }
}
</script>

<style lang="scss">
@import './style.scss';
#app {
  min-height: 800px;
  max-width: 1000px;
}
.draggable-item {
  cursor: move;
  border: 2px dashed transparent;
  display: flex;
}
//空行的元素状态
.sortable-ghost {
  opacity: 0.6;
  background: #c8ebfb;
  border: 2px dashed #666;
}
// checkbox样式
.checkbox {
  margin: 10px;
  display: inline-block;
  vertical-align: middle;
}
// 输入框样式
.act-input {
}
.act-input-done {
  background-color: #f1f1f1;
}
// 删除图标
.icon-delete {
  // background-color: rgba(0,0,0,0.87);
  color: rgba(0, 0, 0, 0.87);
}
// 底部操作按钮
.op-btn_group {
  padding: 0 16px;
}
.op-btn_group-left {
  float: left;
}
.op-btn_group-right {
  float: right;
}
// 过渡动画
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.6s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
