<template>
  <div class="hello">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value" :options="option" />
        <van-dropdown-item v-model="value1" @change="chang1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value3" :options="option3" />
      </van-dropdown-menu>
      <van-cell @click="show1 = true">
        <template #title>
          <span class="custom-title">{{ currentDate1 }}</span>
        </template>
      </van-cell>
      <van-action-sheet v-model="show1" cancel-text="确认" close-on-click-action @cancel="onCancel1" title="选择日期">
          <van-datetime-picker
            show-toolbar 
            style="margin-bottom: -1rem;" 
            confirm-button-text=" "
            cancel-button-text=" "
            @change="chang2"
            v-model="currentDate"
            type="date"
            :formatter="formatter"
          />
      </van-action-sheet>
      <ve-line v-if="value==0" :data="chartData"></ve-line>
      <ve-histogram v-if="value==1" :data="chartData"></ve-histogram>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function () {
        return {
          date: '',
          show: false,
          show1: false,
          value: 0,
          value1: 0,
          value2: 0,
          value3: 0,
          switch1: false,
          switch2: false,
          currentDate: new Date(),
          currentDate1: new Date(),
          option: [
            { text: '折线图', value: 0 },
            { text: '柱状图', value: 1 },
          ],
          option1:[
              { text:"副大队长",value:0 },
              { text:"大队参谋",value:1 },
              { text:"中队长",value:2 },
              { text:"指导员",value:3 },
              { text:"副中队长",value:4 },
              { text:"班长",value:5 },
              { text:"副班长",value:6 },
              { text:"消防员",value:7 },
              { text:"文员",value:8 },
          ],
          option2:[
              
          ],
          option3:[
              { text:"日情况图",value:0 },
              { text:"周情况图",value:1 },
              { text:"月情况图",value:2 },
              { text:"季情况图",value:3 },
          ],
          man1:[
              [ { text:"小明",value:0 },{ text:"小红",value:2 },{ text:"小刚",value:3 } ],
              [ { text:"小明1",value:0 },{ text:"小红1",value:2 },{ text:"小刚1",value:3 } ],
              [ { text:"小明2",value:0 },{ text:"小红2",value:2 },{ text:"小刚2",value:3 } ],
              [ { text:"小明3",value:0 },{ text:"小红3",value:2 },{ text:"小刚3",value:3 } ],
              [ { text:"小明4",value:0 },{ text:"小红4",value:2 },{ text:"小刚4",value:3 } ],
              [ { text:"小明5",value:0 },{ text:"小红5",value:2 },{ text:"小刚5",value:3 } ],
              [ { text:"小明6",value:0 },{ text:"小红6",value:2 },{ text:"小刚6",value:3 } ],
              [ { text:"小明7",value:0 },{ text:"小红7",value:2 },{ text:"小刚7",value:3 } ],
          ],
          chartData: {
            columns: ['日期', '访问用户', '下单用户'],
            rows: [
              { '日期': '1/1', '访问用户': 1393, '下单用户': 1093 },
              { '日期': '1/2', '访问用户': 3530, '下单用户': 3230 },
              { '日期': '1/3', '访问用户': 2923, '下单用户': 2623 },
              { '日期': '1/4', '访问用户': 1723, '下单用户': 1423 },
            ]
          },
        }
      },
  methods: {
    formatter(type, val) {
      if (type === 'year') {
        return `${val}年`;
      } else if (type === 'month') {
        return `${val}月`;
      }
      if (type === 'day') {
        return `${val}日`;
      } 
      return val;
    },
    onCancel1(){
        this.show1=false;
    },
    chang1(){
      this.option2=this.man1[this.value1];  
    },
    chang2(){
        this.currentDate1=new Date(this.currentDate).toLocaleDateString();
    }
  },
  mounted:function (){
      this.option2=this.man1[this.value1];   
      this.currentDate1=new Date().toLocaleDateString();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .hello{
        padding-left: 0.1rem;
        padding-right: 0.1rem;
    }
    .custom-title{
        margin-left: 35%;
        font-size: 0.5rem;
    }
</style>
