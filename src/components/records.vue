<template>
  <div ref="container" id="FUCK">
      <div v-if="zsbd==1">
          <van-row type="flex" justify="center">
                <van-col span="12"><p class="big">队员工作满意度评价</p></van-col>
          </van-row>
          <div class="vfor1">
              <van-row type="flex">
                <van-col span="20"><div class="big1">姓名：{{ ID.evaluated[into].username }}</div></van-col>
              </van-row>
              <van-row type="flex" gutter="200">
                <van-col span="15"><div class="big1">职务：{{ ID.evaluated[into].position }}</div></van-col>
                <van-col span="10"><div class="big1">评分人：{{ ID.username }}</div></van-col>
              </van-row>
          </div>
          <van-row class="vfor">
            <van-grid class="font1" :column-num="4" direction="horizontal">
              <van-grid-item>
                <svg t="1599566587826" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2359" width="1.05rem" height="1.05rem"><path d="M895.84 959.73h-767.5c-35.2 0-64-28.8-64-64v-767.5c0-35.2 28.8-64 64-64h767.5c35.2 0 64 28.8 64 64v767.5c0 35.2-28.8 64-64 64z" fill="#4CA761" p-id="2360"></path><path d="M676.6 142.67l93.32 107.78-232.26 235.34-158.63-158.21-249.88 242.27v104.82L379.03 432.4l158.64 157.23 280.99-283.8 77.76 89.98V142.67H676.6z m0 0" fill="#FFFFFF" p-id="2361"></path><path d="M706.67 878.7h114.05V383.23L706.67 505.41V878.7zM322 576.86V878.7h114.05V578.93l-57.03-60.06L322 576.86z m192.85 82.83V878.7H628.9V587.21l-91.24 97.33-22.81-24.85zM130.18 878.7h114.05V655.55L130.18 773.52V878.7z m0 0" fill="#FFFFFF" p-id="2362"></path></svg>
                日评
              </van-grid-item>
              <van-grid-item>
                <svg t="1599566757478" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2497" width="1.05rem" height="1.05rem"><path d="M895.84 959.73h-767.5c-35.2 0-64-28.8-64-64v-767.5c0-35.2 28.8-64 64-64h767.5c35.2 0 64 28.8 64 64v767.5c0 35.2-28.8 64-64 64z" fill="#EC7F56" p-id="2498"></path><path d="M676.6 142.67l93.32 107.78-232.26 235.34-158.63-158.21-249.88 242.27v104.82L379.03 432.4l158.64 157.23 280.99-283.8 77.76 89.98V142.67H676.6z m0 0" fill="#FFFFFF" p-id="2499"></path><path d="M706.67 878.7h114.05V383.23L706.67 505.41V878.7zM322 576.86V878.7h114.05V578.93l-57.03-60.06L322 576.86z m192.85 82.83V878.7H628.9V587.21l-91.24 97.33-22.81-24.85zM130.18 878.7h114.05V655.55L130.18 773.52V878.7z m0 0" fill="#FFFFFF" p-id="2500"></path></svg>
                周评
              </van-grid-item>
              <van-grid-item>
                <svg t="1599566844693" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2633" width="1.32rem" height="1.32rem"><path d="M895.84 959.73h-767.5c-35.2 0-64-28.8-64-64v-767.5c0-35.2 28.8-64 64-64h767.5c35.2 0 64 28.8 64 64v767.5c0 35.2-28.8 64-64 64z" fill="#5B89C7" p-id="2634"></path><path d="M676.6 142.67l93.32 107.78-232.26 235.34-158.63-158.21-249.88 242.27v104.82L379.03 432.4l158.64 157.23 280.99-283.8 77.76 89.98V142.67H676.6z m0 0" fill="#FFFFFF" p-id="2635"></path><path d="M706.67 878.7h114.05V383.23L706.67 505.41V878.7zM322 576.86V878.7h114.05V578.93l-57.03-60.06L322 576.86z m192.85 82.83V878.7H628.9V587.21l-91.24 97.33-22.81-24.85zM130.18 878.7h114.05V655.55L130.18 773.52V878.7z m0 0" fill="#FFFFFF" p-id="2636"></path></svg>
                半月评
              </van-grid-item>
              <van-grid-item>
                <svg t="1599566923992" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2769" width="1.05rem" height="1.05rem"><path d="M895.84 959.73h-767.5c-35.2 0-64-28.8-64-64v-767.5c0-35.2 28.8-64 64-64h767.5c35.2 0 64 28.8 64 64v767.5c0 35.2-28.8 64-64 64z" fill="#8A5CC6" p-id="2770"></path><path d="M676.6 142.67l93.32 107.78-232.26 235.34-158.63-158.21-249.88 242.27v104.82L379.03 432.4l158.64 157.23 280.99-283.8 77.76 89.98V142.67H676.6z m0 0" fill="#FFFFFF" p-id="2771"></path><path d="M706.67 878.7h114.05V383.23L706.67 505.41V878.7zM322 576.86V878.7h114.05V578.93l-57.03-60.06L322 576.86z m192.85 82.83V878.7H628.9V587.21l-91.24 97.33-22.81-24.85zM130.18 878.7h114.05V655.55L130.18 773.52V878.7z m0 0" fill="#FFFFFF" p-id="2772"></path></svg>
                月评
              </van-grid-item>
            </van-grid>
          </van-row>
          <div v-for="(j,jb) in item" :key="j.index">
               <div v-for="(k,man1) in j.user" :key="k.index">
                   <div class="vfor">
                       <van-row class="big1 big2">
                           <van-col span="8">
                           <svg v-if="j.id==0" t="1599566587826" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2359" width="0.6rem" height="0.5rem"><path d="M895.84 959.73h-767.5c-35.2 0-64-28.8-64-64v-767.5c0-35.2 28.8-64 64-64h767.5c35.2 0 64 28.8 64 64v767.5c0 35.2-28.8 64-64 64z" fill="#4CA761" p-id="2360"></path><path d="M676.6 142.67l93.32 107.78-232.26 235.34-158.63-158.21-249.88 242.27v104.82L379.03 432.4l158.64 157.23 280.99-283.8 77.76 89.98V142.67H676.6z m0 0" fill="#FFFFFF" p-id="2361"></path><path d="M706.67 878.7h114.05V383.23L706.67 505.41V878.7zM322 576.86V878.7h114.05V578.93l-57.03-60.06L322 576.86z m192.85 82.83V878.7H628.9V587.21l-91.24 97.33-22.81-24.85zM130.18 878.7h114.05V655.55L130.18 773.52V878.7z m0 0" fill="#FFFFFF" p-id="2362"></path></svg>
                           <svg v-if="j.id==1" t="1599566757478" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2497" width="0.6rem" height="0.5rem"><path d="M895.84 959.73h-767.5c-35.2 0-64-28.8-64-64v-767.5c0-35.2 28.8-64 64-64h767.5c35.2 0 64 28.8 64 64v767.5c0 35.2-28.8 64-64 64z" fill="#EC7F56" p-id="2498"></path><path d="M676.6 142.67l93.32 107.78-232.26 235.34-158.63-158.21-249.88 242.27v104.82L379.03 432.4l158.64 157.23 280.99-283.8 77.76 89.98V142.67H676.6z m0 0" fill="#FFFFFF" p-id="2499"></path><path d="M706.67 878.7h114.05V383.23L706.67 505.41V878.7zM322 576.86V878.7h114.05V578.93l-57.03-60.06L322 576.86z m192.85 82.83V878.7H628.9V587.21l-91.24 97.33-22.81-24.85zM130.18 878.7h114.05V655.55L130.18 773.52V878.7z m0 0" fill="#FFFFFF" p-id="2500"></path></svg>
                           <svg v-if="j.id==2" t="1599566844693" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2633" width="0.6rem" height="0.5rem"><path d="M895.84 959.73h-767.5c-35.2 0-64-28.8-64-64v-767.5c0-35.2 28.8-64 64-64h767.5c35.2 0 64 28.8 64 64v767.5c0 35.2-28.8 64-64 64z" fill="#5B89C7" p-id="2634"></path><path d="M676.6 142.67l93.32 107.78-232.26 235.34-158.63-158.21-249.88 242.27v104.82L379.03 432.4l158.64 157.23 280.99-283.8 77.76 89.98V142.67H676.6z m0 0" fill="#FFFFFF" p-id="2635"></path><path d="M706.67 878.7h114.05V383.23L706.67 505.41V878.7zM322 576.86V878.7h114.05V578.93l-57.03-60.06L322 576.86z m192.85 82.83V878.7H628.9V587.21l-91.24 97.33-22.81-24.85zM130.18 878.7h114.05V655.55L130.18 773.52V878.7z m0 0" fill="#FFFFFF" p-id="2636"></path></svg>
                           <svg v-if="j.id==3" t="1599566923992" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2769" width="0.6rem" height="0.5rem"><path d="M895.84 959.73h-767.5c-35.2 0-64-28.8-64-64v-767.5c0-35.2 28.8-64 64-64h767.5c35.2 0 64 28.8 64 64v767.5c0 35.2-28.8 64-64 64z" fill="#8A5CC6" p-id="2770"></path><path d="M676.6 142.67l93.32 107.78-232.26 235.34-158.63-158.21-249.88 242.27v104.82L379.03 432.4l158.64 157.23 280.99-283.8 77.76 89.98V142.67H676.6z m0 0" fill="#FFFFFF" p-id="2771"></path><path d="M706.67 878.7h114.05V383.23L706.67 505.41V878.7zM322 576.86V878.7h114.05V578.93l-57.03-60.06L322 576.86z m192.85 82.83V878.7H628.9V587.21l-91.24 97.33-22.81-24.85zM130.18 878.7h114.05V655.55L130.18 773.52V878.7z m0 0" fill="#FFFFFF" p-id="2772"></path></svg>
                           {{ k }}</van-col>
                       </van-row>
                       <van-row class="big2">
                           <van-slider :min="0" :max="10" v-model="slider[jb*10+man1]" active-color="#3399FF">
                             <template #button>
                               <div class="custom-button">
                                 {{ slider[jb*10+man1] }}
                               </div>
                             </template>
                           </van-slider>
                       </van-row>  
                   </div>
               </div>
          </div>
          <div style="margin: 0.8em">
              <van-button round @click="button1" block type="info" size="large">提交评价</van-button>
          </div>
      </div>
        <div v-if="zsbd==0" class="hello">
          <form action="/">
            <van-search
              v-model="value"
              shape="round"
              show-action
              placeholder="请输入搜索关键词"
              @search="onSearch"
              @input="oninput"
            >
            <template #action>
                <div @click="onCancel">取消</div>
              </template>
            </van-search>
          </form>
          <div v-if="sbdx==0">
              <div v-for="(i,name1) in ID.evaluated" :key="i.id">
                  <van-cell @click="base1(name1)" v-if="Node1[name1]!=0" size="large" is-link>
                    <template #title>
                      <span class="custom-title">{{ i.username }}</span>
                    </template>
                  </van-cell>
              </div>
          </div>
          <van-pagination v-model="currentPage" :total-items="where" :items-per-page="12" />
      </div>
  </div>
</template>

<script>
    
import { Toast } from 'vant';
    
export default {
  name: 'HelloWorld',
  props: [
  ],
  data(){
      return{
          item:[{
                index:"作风纪律",
                id:0,
                user:[
                    "遵章守纪",
                    "仪容仪表",
                    "礼节礼貌",
                    "内务卫生",
                    "组织纪律",
                ]
            },{
                index:"日常业务",
                id:2,
                user:[
                    "耐力",
                    "爆发力",
                    "业务技能",
                    "装备掌握",
                    "文字办公",
                ]
            },{
                index:"作战能力",
                id:1,
                user:[
                    "出动速度",
                    "命令执行",
                    "现场作用",
                    "纪律意识",
                    "应变能力",
                ]
            },{
                index:"工作态度",
                id:0,
                user:[
                    "主动作为",
                    "能量传递",
                    "献策建议",
                    "自我要求",
                    "执行态度",
                ]
            },{
                index:"沟通协调",
                id:3,
                user:[
                    "积极参与",
                ]
            },{
                index:"争先创优",
                id:3,
                user:[
                    "竞技能力",
                    "文艺水平",
                    "参赛频次",
                    "获奖情况",
                ]
            },{
                index:"沟通交流",
                id:2,
                user:[
                    "兴趣爱好",
                    "精神状态",
                    "沟通能力",
                    "人际关系",
                    "诉求表达",
                ]
            },{
                index:"自我提升",
                id:2,
                user:[
                    "学习自觉",
                    "理论水平",
                    "资质考取",
                    "政策掌握",
                    "常识熟悉",
                ]
            },
          ],
          slider:[],
          Node2:[],
          into:0,
          zsbd:0,
          sbdx:0,
          value: '',
          ID:{},
          Node1:[],
          begin:'',
          currentPage: 1,
          what:0,
          where:0,
          sum:0,
      }
  },
  methods:{
      onSearch(val) {
        console.log(val);
      },
      onCancel() {
        this.value="";
        this.oninput();
      },
      oninput(){

          this.sbdx=1;this.where=this.what;
          for(var i=0;i<this.what;i++){
              this.Node1[i]=1;
              if(this.value!=""&&this.ID.evaluated[i].username.search(this.value)==-1){
                  this.Node1[i]=0;this.where--;
              }
          }
          this.sbdx=0;
      },
      base1(name1){
         this.into=name1;
         this.zsbd=1;
      },
      onChange(){
      },
      button1(){
          Toast('提交成功');
          this.zsbd=0;
      },
  },
  mounted:function (){
      for(var i=0;i<1000;i++){
          this.slider[i]=5;
      }
      
      this.ID=this.$route.query.ID;
      for(i=0;i<this.ID.evaluated.length;i++){
           this.Node1[i]=1;this.what++;
      }
      this.where=this.what;
   },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .big{
        font-size: 0.55rem;
        color:cornflowerblue;
    }
    .big1{
        font-size: 0.4rem;
    }
    #FUCK{
        padding-bottom: 1.5rem;
        height: 100%;
        width: 100%;
    }
    .big2{
        padding-bottom: 0.6rem;
    }
    .font1{
        font-size: 0.4rem;
    }
    .vfor{
        margin-left: 0.7rem;
        margin-right: 0.7rem;
    }
    .vfor1{
        margin-left: 0.5rem;
    }
    .custom-button {
        width: 1rem;
        color: #fff;
        font-size: 0.5rem;
        line-height: 0.5rem;
        text-align: center;
        background-color: #3399FF;
        border-radius: 3rem;
      }
</style>
