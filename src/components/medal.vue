<template>
  <div class="hello">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
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
            confirm-button-text=" "
            cancel-button-text=" "
            @change="chang2"
            v-model="currentDate"
            type="date"
            :formatter="formatter"
          />
      </van-action-sheet>
      <van-dialog v-model="show" title="标题" width="8rem">
          <div v-for="item2 in list1" :key="item2.name">
              <van-checkbox v-model="item2.bo" style="padding-left: 0.3rem;">{{ item2.name }}</van-checkbox>
              <div style="height: 0.2rem;"></div>
          </div>
      </van-dialog>
      <div class="wa1">
          <van-row type="flex" align="center" justify="center">
                <van-col span="6">排名</van-col>
                <van-col v-if="list1[0].bo==1" span="6">姓名</van-col>
                <van-col v-if="list1[1].bo==1" span="6">性别</van-col>
                <van-col v-if="list1[2].bo==1" span="6">年龄</van-col>
                <van-col v-if="list1[3].bo==1" span="6">职务</van-col>
                <van-col v-if="list1[4].bo==1" span="6">总分</van-col>
            <van-button class="mini" @click="click1" icon="plus" type="primary" size="mini"> 
            </van-button>
          </van-row>
      </div>
      <van-divider
        :style="{ padding: '0rem 0rem',margin: '0rem 0rem '}"
      >
      </van-divider>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
      <div v-for="(item,id1) in list2" :key="item.id" >
          <div class="q1 what" v-if="id1%2!=0">
               <van-row type="flex" justify="center">
                <van-col span="6">{{ id1+1 }}</van-col>
                <van-col v-if="list1[0].bo==1" span="6">{{ item.username }}</van-col>
                <van-col v-if="list1[1].bo==1" span="6">{{ item.sex }}</van-col>
                <van-col v-if="list1[2].bo==1" span="6">{{ item.age }}</van-col>
                <van-col v-if="list1[3].bo==1" span="6">{{ item.position }}</van-col>
                <van-col v-if="list1[4].bo==1" span="6">{{ item.score }}</van-col>
              </van-row>
          </div>
          <div class="q1" v-else>
               <van-row type="flex" justify="center">
                <van-col span="6">{{ id1+1 }}</van-col>
                <van-col v-if="list1[0].bo==1" span="6">{{ item.username }}</van-col>
                <van-col v-if="list1[1].bo==1" span="6">{{ item.sex }}</van-col>
                <van-col v-if="list1[2].bo==1" span="6">{{ item.age }}</van-col>
                <van-col v-if="list1[3].bo==1" span="6">{{ item.position }}</van-col>
                <van-col v-if="list1[4].bo==1" span="6">{{ item.score }}</van-col>
              </van-row>
          </div>
      </div>
      </van-list>
  </div>
</template>

import { Dialog } from 'vant';    

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
      click1(){
          this.show=true;
      },
      onCancel1(){
          this.show1=false;
      },
      formatter(type, val) {
        if (type === 'year'){
          return `${val}年`;
        }
        else if (type === 'month'){
          return `${val}月`;
        }
        if (type === 'day'){
          return `${val}日`;
        } 
        return val;
      },
      chang2(){
          this.currentDate1=new Date(this.currentDate).toLocaleDateString();
      },
      onLoad() {
            setTimeout(()=>{
              for (let i=0;i<10;i++) {
                this.list.push(this.list.length+1);
              }
              this.loading=false;
              if (this.list.length>=40) {
                this.finished=true;
              }
            }, 1000);
          },
        },
  data() {
    return {
      value1: 0,
      value2: 0,
      value3: 0,
      value4: 0,
      value5: 0,
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
          { text:"日排名表",value:0 },
          { text:"周排名表",value:1 },
          { text:"月排名表",value:2 },
          { text:"季排名表",value:3 },
      ],
      option3:[
          { text:"总分",value:0 },
          { text:"作风纪律",value:1 },
          { text:"日常业务",value:2 },
          { text:"作战能力",value:3 },
          { text:"工作态度",value:4 },
          { text:"争先创优",value:5 },
          { text:"沟通交流",value:6 },
          { text:"自我提升",value:7 },
      ],
      date: '',
      show: false,
      show1: false,
      currentDate: new Date(),
      currentDate1: new Date(),
      minDate: new Date(2010, 0, 1),
      maxDate: new Date(2099, 0, 31),
      list: [],
      list1:[
          { bo:true,name:'姓名' },
          { bo:false,name:'性别' },
          { bo:false,name:'年龄' },
          { bo:false,name:'职务' },
          { bo:true,name:'总分' },
      ],
      list2:[
          { username:"刘一",sex:"男",age:"96",position:"中队长",score:"99" },
          { username:"赵二",sex:"女",age:"117",position:"中队长",score:"162" },
          { username:"张三",sex:"男",age:"51",position:"中队长",score:"41" },
          { username:"李四",sex:"女",age:"26",position:"中队长",score:"17" },
          { username:"王五",sex:"男",age:"40",position:"中队长",score:"50" },
          { username:"老六",sex:"女",age:"16",position:"中队长",score:"25" },
      ],
      loading: false,
      finished: false,
    };
  },
  mounted:function (){
      this.currentDate1=new Date().toLocaleDateString();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .mini{
        margin-left: 48%;
        margin-top: -4.2%;
        background-color: #FFFFFF;
        color: #a6a6a6;
        border-color: #E6E6E6;
        position: absolute;
        height: 0.4rem;
        width: 0.4rem;
    }
    .custom-title{
        margin-left: 37%;
        font-size: 0.5rem;
    }
    #fa{
        outline-style:inset;
        outline-color:#f9f9f9;  
        border-color: black;
    }
    .what{
        background-color: #f3f3f3;
    }
    .wa1{
        height: 1.2rem;
        text-align: center;
        line-height: 1.2rem;
        font-size: 0.45rem;
    }
    .q1{
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        font-size: 0.45rem;
    }
</style>
