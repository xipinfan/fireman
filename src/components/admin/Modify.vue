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
          <van-cell-group>
            <van-field class="menss1" v-model="value" label="旧密码" placeholder="若包含字母,请注意大小写" />
          </van-cell-group>
          
          <van-cell-group>
            <van-field class="menss1" v-model="value1" label="新密码" placeholder="6-16位新密码" />
          </van-cell-group>
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
              if(this.value1.length<6||this.value1>16){
                  this.str="新密码长度不符合规范"
              }
              else{
                  this.ID.password=this.value1;
                  this.$emit('Change',this.ID);
                  this.$dialog.alert({
                        message: '密码修改成功',
                  });
              }
          }
      }
  },
  computed:{
        
  },
}
</script>

<style scoped>
    .menss{
        margin-top: 1.8em;
    }
    .menss1{
        margin-top: 1.8em;
    }
    #tip{
        color: red;
        font-size: small;
        margin-left: 0.5em;
    }
    #Bt{
        margin: 0.8em;
        margin-top: 1.2em;
    }
    .frame {
        background-color: #f9f9f9!important;
    }
    #ide{
        padding-button: 13em;
        padding-top: 13.5em;
    }
</style>
