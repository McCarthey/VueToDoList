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
      <mu-raised-button label="保存" class="demo-raised-button" primary/>
      <mu-raised-button label="删除" class="demo-raised-button" secondary/>
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
<<<<<<< HEAD
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
  methods: {}
=======
      myArray: [{
        id:1,
        text:'demo1',
        color:'red'
      }],
      RandomColor:'red',
    }
  },
  created(){
    this.checkStorage();
  },
  methods: {
    //创建新活动
    newAct(){
      console.log('new one');
      let newOne = {};
      newOne.id = this.myArray.length + 1;
      newOne.text = '';
      newOne.color = this.randomColor();
      this.myArray.push(newOne);
    },
    //随机取颜色
    randomColor(){
      const colorSet = ['red','pink','purple','#673ab7','blue','cyan','teal',
      'green','lime','yellow','amber','orange'];
      let colorIndex = Math.floor(Math.random()*colorSet.length)
      return colorSet[colorIndex];
    },
    //检查localStorage
    checkStorage(){
      console.log(localStorage);
      
    }
  }
>>>>>>> 4cd96833ff6bc93f94d00fa02c0ebf7509409ce1
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
