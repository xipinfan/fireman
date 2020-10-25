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
          <div v-if="zsbd==1" style="margin-bottom: -1rem;">
              <van-row type="flex" justify="center">
                    <van-col span="12"><p class="big">队员工作满意度评价</p></van-col>
              </van-row>
              <div class="vfor1">
                  <van-row type="flex">
                    <van-col span="20"><div class="big1">姓名：{{ evaluated[into].name }}</div></van-col>
                    <van-col span="20"><div class="big1">评分时间：{{ evaluated[into].time }}</div></van-col>
                  </van-row>
                  <van-row type="flex">
                    <van-col span="20"><div class="big1">职务：{{ position }}</div></van-col>
                    <van-col span="20"><div class="big1">评分人：{{ ID.username }}</div></van-col>
                  </van-row>
              </div>
              <div style="padding-top: 0.5rem;"></div>
              <div v-for="j in history" :key="j.index">
                   <div class="vfor">
                      <van-row class="big2">
                          <van-col v-if="j.content.length==4">{{ j.content }}</van-col>
                          <van-col style="margin-left: 0.25rem;margin-right: 0.25rem;" v-if="j.content.length==3">{{ j.content }}</van-col>
                          <van-col style="margin-left: 0.5rem;margin-right: 0.5rem;" v-if="j.content.length==2">{{ j.content }}</van-col>
                          <van-col>
                              <van-tag round v-if="j.type==0" style="margin-left: 0.15rem;" size="medium" type="success">日评</van-tag>
                              <van-tag round v-if="j.type==1" style="margin-left: 0.15rem;" size="medium" type="primary">周评</van-tag>
                              <van-tag round v-if="j.type==2" style="margin-left: 0.15rem;" size="medium" type="warning">月评</van-tag>
                              <van-tag round v-if="j.type==3" style="margin-left: 0.15rem;" size="medium" type="danger">季评</van-tag>
                          </van-col>
                          <van-col>
                              <progress style="margin-top: 0.09rem;width: 3.5rem;margin-left: 0.2rem" class="proger" max="10" :value="j.score"></progress>
                          </van-col>  
                          <van-col style="margin-left: 0.4rem">{{ j.score }}分</van-col>
                      </van-row>
                      <van-row class="big2" type="flex" justify="space-around">
                          <van-col span="6">--分数--</van-col>
                          <van-col>
                              <van-slider
                                disabled
                                style="width: 5rem;margin-top: 0.2rem;"
                                v-model="j.score"
                                bar-height="0.25rem"
                                active-color="#3388cc" 
                                button-size="0.7rem"
                                min="0"
                                max="10"
                              />
                          </van-col>
                      </van-row>  
                      <van-divider />
                  </div>
              </div>
              <div style="margin: 0.8em">
                  <van-button round @click="button1" block type="info" size="large">返回</van-button>
              </div>
          </div>
            <div v-if="zsbd==0" style="margin-bottom: -1rem;">
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
              <van-loading v-if="nod==0" color="#1989fa" style="text-align: center;margin-bottom: 0.5rem;"/>
              <div v-if="sbdx==0">
                  <div v-for="(i,name1) in evaluated1" :key="i.id">
                      <van-cell @click="base1(name1)" v-if="Node1[name1]!=0" size="large" is-link>
                        <template #title>
                          <span class="custom-title">{{ i.name }}({{ i.time }})</span>
                        </template>
                      </van-cell>
                  </div>
              </div>
              <van-pagination v-model="currentPage" :total-items="where" @change="onChange" :items-per-page="10" />
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Record',
  props: [
      'ID',
  ],
  data(){
      return{
          evaluated:[],
          evaluated1:[],
          evaluated2:[],
          position:"",
          history:[],
          Node2:[],
          into:0,
          zsbd:0,
          sbdx:0,
          value: '',
          value1:-1,
          Node1:[],
          begin:'',
          currentPage: 1,
          what:0,
          where:0,
          sum:0,
          nod:0,
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
      onClickLeft(){
          if(this.zsbd==1){
              this.zsbd=0;
          }
          else this.$emit('onClick1');
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
          this.evaluated1=[];
          for(var i=0;i<this.evaluated2.length;i++){
              this.Node1[i]=0;
              if(this.value==""||this.evaluated2[i].name.search(this.value)!=-1){
                  this.evaluated1[ni]=this.evaluated2[i];ni++;
              }
          }
          this.currentPage=0;
          for(var j=0;j<Math.min(10,this.evaluated1.length);j++){
               this.Node1[j]=1;
          }
          this.where=ni;
          this.sbdx=0;
      },
      base1(name1){
        var that1 = this;
        var params = new FormData();
        params.append('uid', this.evaluated1[name1].uid);
        params.append('time', this.evaluated1[name1].time);
        this.$axios.post('/api/data/score/getdata',params) 
        .then((response) => {
            if(response.data.code==100){
                this.into=name1;
                this.zsbd=1;
                localStorage.setItem('zsbd',"1");
                that1.position=response.data.extend.career;
                that1.history=response.data.extend.history;
            }
            else{
                that1.bin=true;
            }
        });
      },
      button1(){
          localStorage.setItem('zsbd',"");
          this.zsbd=0;
      },
  },
  mounted:function (){
      var that1=this,i;
       this.$axios.get('/api/data/score') 
       .then((response) => { 
           console.log(response);
           if(response.data.code==100){
               that1.nod=1;
               that1.evaluated=response.data.extend.score;
               that1.evaluated1=that1.evaluated.reverse();
               that1.evaluated2=that1.evaluated1;
               for(i=0;i<that1.evaluated.length;i++){
                    that1.what++;that1.Node1[i]=0;
               }
               for(i=0;i<Math.min(10,that1.evaluated.length);i++){
                    that1.Node1[i]=1;
               }
               that1.where=that1.what;
           }
           else{   
               that1.$toast('请求失败请向管理员');
           }
       }).catch(err => {
           console.log(err.message);
      });
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
