<template>
  <div class="record">
      <van-nav-bar
        class="frame"
        title="评分记录"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
      <div ref="container" id="FUCK">
          <div v-if="zsbd==1">
              <van-row type="flex" justify="center">
                    <van-col span="12"><p class="big">队员工作满意度评价</p></van-col>
              </van-row>
              <div class="vfor1">
                  <van-row type="flex">
                    <van-col span="20"><div class="big1">姓名：{{ evaluated[into].username }}</div></van-col>
                  </van-row>
                  <van-row type="flex" justify="center">
                    <van-col span="15"><div class="big1">职务：{{ evaluated[into].position }}</div></van-col>
                    <van-col span="10"><div class="big1">评分人：{{ ID.username }}</div></van-col>
                  </van-row>
              </div>
              <div style="padding-top: 0.5rem;"></div>
              <div v-for="(j,jb) in item" :key="j.index">
                   <div v-for="(k,man1) in j.user" :key="k.index">
                       <div class="vfor">
                           <van-row class="big2">
                               <van-col v-if="k.length==4">{{ k }}</van-col>
                               <van-col style="margin-left: 0.25rem;margin-right: 0.25rem;" v-if="k.length==3">{{ k }}</van-col>
                               <van-col style="margin-left: 0.5rem;margin-right: 0.5rem;" v-if="k.length==2">{{ k }}</van-col>
                               <van-col>
                                   <van-tag round v-if="j.id==0" style="margin-left: 0.15rem;" size="medium" type="success">日评</van-tag>
                                   <van-tag round v-if="j.id==1" style="margin-left: 0.15rem;" size="medium" type="primary">周评</van-tag>
                                   <van-tag round v-if="j.id==2" style="margin-left: 0.15rem;" size="medium" type="warning">月评</van-tag>
                                   <van-tag round v-if="j.id==3" style="margin-left: 0.15rem;" size="medium" type="danger">季评</van-tag>
                               </van-col>
                               <van-col>
                                   <progress style="margin-top: 0.09rem;width: 3.5rem;margin-left: 0.2rem" v-if="slider1[jb*10+man1]!=-1" class="proger" max="10" :value="slider[jb*10+man1]"></progress>
                                   <progress v-else style="margin-top: 0.09rem;width: 3.5rem;margin-left: 0.2rem" max="10"></progress>
                               </van-col>  
                               <van-col style="margin-left: 0.4rem">{{ slider[jb*10+man1] }}分</van-col>
                           </van-row>
                           <van-row class="big2" type="flex" justify="space-around">
                               <van-col span="6">--分数--</van-col>
                               <van-col>
                                   <van-slider
                                     disabled
                                     style="width: 5rem;margin-top: 0.2rem;"
                                     v-model="slider[jb*10+man1]"
                                     bar-height="0.25rem"
                                     active-color="#3388cc" 
                                     button-size="0.7rem"
                                     min="0"
                                     max="10"
                                     @change="start(jb*10+man1)"
                                   />
                               </van-col>
                           </van-row>  
                           <van-divider />
                       </div>
                   </div>
              </div>
              <div style="margin: 0.8em">
                  <van-button round @click="button1" block type="info" size="large">返回</van-button>
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
                  <div v-for="(i,name1) in evaluated" :key="i.id">
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
  </div>
</template>

<script>
export default {
  name: 'Record',
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
          evaluated:[{
                  username:"法外狂徒张三",
                  position:"消防员",
              },{
                  username:"桀骜不驯李四",
                  position:"文员",
              },{
                  username:"丧心病狂王五",
                  position:"班长",
              },{
                  username:"亲妈升天老六",
                  position:"副班长",
              },{
                  username:"回家养猪七酱",
                  position:"副中队长",
              } ,{
                  username:"厕所战神老八",
                  position:"中队长",
              },
          ],
          slider:[],
          slider1:[],
          Node2:[],
          into:0,
          zsbd:0,
          sbdx:0,
          value: '',
          value1:-1,
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
      onClickLeft(){
          if(this.zsbd==1){
              this.zsbd=0;
          }
          else this.$emit('onClick1');
      },
      start(val){
          this.$set(this.slider1,val,1);
      },
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
              if(this.value!=""&&this.evaluated[i].username.search(this.value)==-1){
                  this.Node1[i]=0;this.where--;
              }
          }
          this.sbdx=0;
      },
      base1(name1){
         this.into=name1;
         this.zsbd=1;
         localStorage.setItem('zsbd',"1");
      },
      button1(){
          localStorage.setItem('zsbd',"");
          this.zsbd=0;
      },
  },
  mounted:function (){
      for(var i=0;i<1000;i++){
          this.slider[i]=5;
      }
      this.ID=this.$route.query.ID;
      for(i=0;i<this.evaluated.length;i++){
           this.Node1[i]=1;this.what++;
      }
      this.where=this.what;
   },
}
</script>

<style scoped>
    .frame {
        background-color: #f9f9f9!important;
    }
    .proger{
        width: 3.5rem;
        margin-left: 0.2rem;
    }
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
        font-size: 0.5rem;
        padding-bottom: 0.25rem;
        padding-top: 0.25rem;
    }
    .font1{
        font-size: 0.4rem;
    }
    .vfor{
        margin-left: 0.6rem;
        margin-right: 0.6rem;
    }
    .vfor1{
        margin-left: 0.6rem;
    }
</style>
