<template>
    <div>
        <Register v-if="register==true"></Register>
        <div id="sign1" v-if="register==false">
            <van-row type="flex" justify="center">
              <img src="../assets/logo.png" style="margin-right: 0.3rem;margin-top: 0.6rem;width: 1.5rem;height: 1.5rem;">
              <h2 align="center">评分系统</h2>
            </van-row>  
            <div class="frame1"></div><div class="frame1"></div>
            <van-form show-error-message  @submit="onSubmit" error-message-align="center" validate-trigger="onChange">
                <van-row>
                <van-field
                  class="frame gold"
                  v-model="username"
                  name="username"
                  label="用户名"
                  placeholder="请填写用户名"
                  :rules="[{ required: false }]"
                />
                <div class="frame1"></div><div class="frame1"></div>
                <van-field
                  class="frame gold"
                  v-model="password"
                  type="password"
                  name="password"
                  label="密码"
                  placeholder="请填写密码"
                  :rules="[{ required: false }]"
                />
                </van-row>
                <van-row type="flex" justify="center">
                    <p id="tip" v-if="bin">用户名或密码错误</p>
                </van-row>
                <div class="frame2"></div>
                <van-row type="flex" justify="end">
                  <!-- <van-checkbox icon-size="15\px" class="big1" v-model="checked">记住密码</van-checkbox> -->
                  <div class="frame2"></div>
                  <!-- <van-checkbox icon-size="15\px" class="big1" @click="holdon" v-model="hold">自动登录</van-checkbox> -->
                </van-row>
                <div class="frame1"></div>
                <div style="margin: 0.01rem;">
                  <van-button round block type="info" native-type="submit" ref="buttons">
                    登录
                  </van-button>
                </div>
                <div style="margin-top: 60%;">
                    <van-row type="flex" justify="center">  
                      <a href="#" style="color: #20A0FF;font-size: 0.4rem;margin-top: 0.1rem;">忘记密码</a>
                      <div class="divder1"></div>
                      <a href="#" @click="register=true" style="color: #20A0FF;font-size: 0.4rem;margin-top: 0.1rem;">注册账号</a>
                    </van-row>
                </div>
            </van-form>
        </div>
    </div>
</template>

<script>
    
import Register from './admin/Register.vue'
    
export default {
  name: 'Sign',
  components: {
      Register
  },
  data(){
      return{
          on:'',
          checked: true,
          register:false,
          hold:true,
          bin: false,
          fuckyou:{},
          username: '',
          password: '',
          wow:{},
      }
  },
  methods:{
      onSubmit(values) {
            var that1=this;
            var params = new URLSearchParams();
            params.append('username', values.username);
            params.append('password', values.password);
            this.$axios.post('http://101.133.170.148:8058/user/login',params) 
            .then((response) => { 
                if(response.data.code==100){
                    if(that1.checked==true){
                        localStorage.setItem("username",that1.username);
                        localStorage.setItem("password",that1.password);
                    }
                    else{
                        localStorage.setItem("username","");
                        localStorage.setItem("password","");
                    }
                    that1.$emit('again');that1.$emit('begin',response);
                }
                else{
                    that1.bin=true;
                }
            });
      },
      holdon(){
          if(this.hold==true)localStorage.setItem("hold","open");
          else localStorage.setItem("hold","");
      }
  },
  created:function (){
       this.username=localStorage.getItem('username');  
       this.password=localStorage.getItem('password');
   },
   mounted:function(){
      var that1=this;
      this.on=localStorage.getItem('hold');
      if(this.on=="open"){
         var params = new URLSearchParams();
         params.append('username', this.username);
         params.append('password', this.password);
         this.$axios.post('http://101.133.170.148:8058/user/login',params) 
         .then((response) => {
               if(response.data.code==100){
                   that1.$emit('begin',response);
               }
               else{
                   that1.bin=true;
               }
           });
      }
      else{
          this.hold=false;
      }
   }
}

</script>

<style>
    .divder1{
        height: 0.25rem;
        width: 0.01rem;
        background-color: #969799;
        margin: 0.22rem 1.4rem 0 1.4rem;
    }
    .big1{
        font-size: 0.45em;
    }
    #tip{
        color: red;
        font-size: small;
    }
    #sign1{
        margin-top: 3.5em;
        margin-left: 1.2em;
        margin-right: 1.2em;
    }
    .frame {
        background-color: #f9f9f9!important;
    }
    .gold{
        border-radius:2em;
    }
    .frame1{
        padding: 0.3em;
    }
    .frame2{
        padding: 0.2em;
    }
</style>
