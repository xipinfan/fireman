<template>
  <div class="modify frame">
      <van-nav-bar
        class="frame"
        title="修改密码"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
      <div class="menss">
          <van-row type="flex" justify="center">
            <van-field class="menss1 Whole"  v-model="value" label="旧密码" placeholder="若包含字母,请注意大小写" />
          </van-row>
          <van-row type="flex" justify="center">
            <van-field class="menss1 Whole" v-model="value1" label="新密码" placeholder="6-16位新密码" />
          </van-row>
          <p id="tip">{{ str }}</p>
      </div>
      <van-row class="menss1" type="flex" justify="end">
        <van-button @click="out" id="Bt" round type="primary" size="large">确认修改</van-button>
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
          str:'',
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
              if(this.value1.length<6||this.value1.length>16){
                  this.str="新密码长度不符合规范"
              }
              else{
                  this.ID.password=this.value1;
                  this.$emit('Change',this.ID);
                  this.$dialog.alert({
                        message: '密码修改成功',
                  });
                  this.value='';
                  this.value1='';
              }
          }
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
        font-size: small;
        margin-left: 0.5rem;
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
