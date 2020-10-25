<template>
  <div class="modify">
      <van-nav-bar
        style="background-color: #fcfcfc;"
        title="修改密码"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
      <div class="menss">
          <van-row type="flex" justify="center">
            <van-field class="menss1 Whole frame"  v-model="value" label="旧密码" placeholder="若包含字母,请注意大小写" />
          </van-row>
          <van-row type="flex" justify="center">
            <van-field class="menss1 Whole frame" v-model="value1" label="新密码" placeholder="6-16位新密码" />
          </van-row>
          <div v-if="ok2==true" style="height: 0.76rem;width: 10rem;"></div>
          <div id="tip" style="text-align: center;">{{ str }}</div>
      </div>
      <van-row class="menss1" type="flex" justify="end">
        <van-button style="background-color: #1989fa;border-color: #1989fa;" @click="out" id="Bt" round type="primary" size="large">确认修改</van-button>
      </van-row>
      <div id="ide"></div>
  </div>
</template>

<script>
export default {
  name: 'Modify',
  props: [
      'ID',
  ],
  data(){
      return{
          value: '',
          value1: '',
          ok1:false,
          ok2:true,
          str:' ',
      }
  },
  methods:{
      onClickLeft(){
           this.$emit('onClick1');
      },
      out(){
          if(this.ID.password!=this.value){
              this.str="原密码错误";
          }
          else{
              if(this.value1.length<3||this.value1.length>16){
                  this.str="新密码长度不符合规范"
              }
              else{
                  this.ID.password=this.value1;
                  var that1 = this;
                  var params = new FormData();
                  params.append('uid', this.ID.uid);
                  params.append('uname', this.ID.username);
                  params.append('age', this.ID.age);
                  params.append('sex', this.ID.sex);
                  params.append('password', this.ID.password);
                  this.$axios.post('/api/user/modify',params) 
                  .then((response) => {
                        if(response.data.code==100){
                            that1.$emit('begin',response);
                        }
                        else{
                            that1.bin=true;
                        }
                  });
                  this.$emit('Change',this.ID);
                  this.$dialog.alert({
                        message: '密码修改成功',
                  });
                  this.value='';
                  this.value1='';
              }
          }
          if(this.str!='')this.ok2=false;
          else this.ok2=true;
      }
  },
}
</script>

<style scoped>
    .Whole{
        border:0.01rem solid;
        border-radius:0.8rem;
        border-color: #E6E6E6;
        margin-left: 0.7rem;
        margin-right: 0.7rem;
    }
    .menss{
        margin-top: 1.8rem;
    }
    .menss1{
        margin-top: 0.8rem;
    }
    #tip{
        color: red; 
        margin-top: 0.3rem;
        font-size: 0.36rem;
    }
    #Bt{
        margin: 0.8rem;
        margin-top: 1.2rem;
    }
    .frame {
        background-color: #f9f9f9;
    }
    #ide{
        padding-button: 13rem;
        padding-top: 8rem;
    }
    .modify{
        position: fixed;
        height: 100%;
        width: 100%;
    }
</style>
