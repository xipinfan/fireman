<template>
  <div ref="container" id="FUCK">
      <div v-if="zsbd==1">
          <van-row type="flex" justify="center">
                <van-col span="12"><p class="big">队员工作满意度评价</p></van-col>
          </van-row>
          <div class="vfor1">
              <van-row type="flex">
                <van-col span="20"><div class="big1">姓名：{{ extend1.name }}</div></van-col>
              </van-row>
              <van-row type="flex" justify="center">
                <van-col span="15"><div class="big1">职务：{{ extend1.career }}</div></van-col>
                <van-col span="10"><div class="big1">评分人：{{ ID.uname }}</div></van-col>
              </van-row>
          </div>
          <div style="padding-top: 0.5rem;"></div>
          <div v-for="(j,jb) in extend1.items" :key="j.index">
               <div v-for="(k,man1) in j.detailed" :key="k.index">
                   <div class="vfor">
                       <van-row class="big2">
                           <van-col v-if="k.quesContent.length==4">{{ k.quesContent }}</van-col>
                           <van-col style="margin-left: 0.25rem;margin-right: 0.25rem;" v-if="k.quesContent.length==3">{{ k.quesContent }}</van-col>
                           <van-col style="margin-left: 0.5rem;margin-right: 0.5rem;" v-if="k.quesContent.length==2">{{ k.quesContent }}</van-col>
                           <van-col>
                               <van-tag round v-if="k.useType==1" style="margin-left: 0.15rem;" size="medium" type="success">日评</van-tag>
                               <van-tag round v-if="k.useType==2" style="margin-left: 0.15rem;" size="medium" type="primary">周评</van-tag>
                               <van-tag round v-if="k.useType==3" style="margin-left: 0.15rem;" size="medium" type="warning">月评</van-tag>
                               <van-tag round v-if="k.useType==4" style="margin-left: 0.15rem;" size="medium" type="danger">季评</van-tag>
                           </van-col>
                           <van-col>
                               <progress style="margin-top: 0.09rem;width: 3.5rem;margin-left: 0.2rem" v-if="slider1[jb][man1]!=-1" class="proger" max="10" :value="slider[jb][man1]"></progress>
                               <progress v-else style="margin-top: 0.09rem;width: 3.5rem;margin-left: 0.2rem" max="10"></progress>
                           </van-col>  
                           <van-col style="margin-left: 0.4rem" v-if="slider1[jb][man1]!=-1">{{ slider[jb][man1] }}分</van-col>
                           <van-col style="margin-left: 0.4rem" v-else>未评分</van-col>
                       </van-row>
                       <van-row class="big2" type="flex" justify="space-around">
                           <van-col span="6">--分数--</van-col>
                           <van-col>
                               <van-slider
                                 style="width: 5rem;margin-top: 0.2rem;"
                                 v-model="slider[jb][man1]"
                                 bar-height="0.25rem"
                                 active-color="#3388cc" 
                                 button-size="0.7rem"
                                 min="0"
                                 max="10"
                                 @input="start(jb,man1)"
                               />
                           </van-col>
                       </van-row>  
                       <van-divider />
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
              <div v-for="(i,name1) in evaluated" :key="i.id">
                  <van-cell @click="base1(name1)" v-if="Node1[name1]!=0" size="large" is-link>
                    <template #title>
                      <span class="custom-title">{{ i.uname }}</span>
                    </template>
                  </van-cell>
              </div>
          </div>
          <van-pagination @change="onChange" v-model="currentPage" :total-items="where" :items-per-page="10" />
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
          extend1:{},
          evaluated:[],
          evaluated1:[],
          slider:[],
          slider1:[],
          slider2:[],
          Node2:[],
          into:0,
          zsbd:0,
          sbdx:0,
          value: '',
          value1:-1,
          ID:{},
          Node1:[],
          Node:[],
          begin:'',
          currentPage: 1,
          what:0,
          where:0,
          sum:0,
      }
  },
  methods:{
      onChange(){
          for(var i=0;i<this.where;i++){
              this.Node1[i]=0;
              if(i>=(this.currentPage-1)*10&&i<this.currentPage*10){
                  this.Node1[i]=1;
              }
          }
      },
      start(val,sb){
          let temp=this.slider1[val];
          temp[sb]=1;
          this.$set(this.slider1,val,temp);
      },
      onSearch(val) {
        console.log(val);
      }, 
      onCancel() {
        this.value="";
        this.oninput();
      },
      oninput(){
          this.sbdx=1;
          var ni=0;
          this.evaluated=[];
          for(var i=0;i<this.evaluated1.length;i++){
              this.Node1[i]=0;
              if(this.value==""||this.evaluated1[i].uname.search(this.value)!=-1){
                  this.evaluated[ni]=this.evaluated1[i];ni++;
              }
          }
          this.currentPage=0;
          for(var j=0;j<Math.min(10,this.evaluated.length);j++){
               this.Node1[j]=1;
          }
          this.where=ni;
          this.sbdx=0;
      },
      base1(name1){
         var that1=this;
         this.into=name1;
         this.zsbd=1;
         var params = new FormData();
         params.append('uid', this.evaluated[name1].uid);
         params.append('type', this.evaluated[name1].type);
         this.$axios.post('/api/data/grade/getdata',params) 
         .then((response) => {
             if(response.data.code==100){
                 that1.extend1=response.data.extend;
                 for(var i=0;i<that1.extend1.items.length;i++){
                     this.slider1[i]=[];this.slider[i]=[];
                     for(var j=0;j<that1.extend1.items[i].detailed.length;j++){
                         this.slider1[i][j]=-1;this.slider[i][j]=0;
                     }
                 }
             }
             else{
                 that1.bin=true;
             }
         });
         localStorage.setItem('zsbd',"1");
      },
      button1(){
          localStorage.setItem('zsbd',"");
          Toast('提交成功');
          this.zsbd=0;
      },
  },
  mounted:function (){
      var that1=this,i;
       this.$axios.get('/api/data/grade/list') 
       .then((response) => { 
           console.log(response);
           if(response.data.code==100){
               that1.nod=1;
               that1.evaluated=response.data.extend.list;
               that1.evaluated1=that1.evaluated;
               for(i=0;i<that1.evaluated.length;i++){
                    that1.what++;that1.Node1[i]=0;
               }
               for(i=0;i<Math.min(10,that1.evaluated.length);i++){
                    that1.Node1[i]=1;
               }
               that1.where=that1.what;
           }
           else{   
               that1.$toast('请求失败请向管理员反应');
           }
       }).catch(err => {
           console.log(err.message);
      });
      this.ID=this.$route.query.ID;
   },
}

</script>

<style scoped>  
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
