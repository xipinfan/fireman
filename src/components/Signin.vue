<template>
    <div>
        <Register v-if="register==true" @change="change"></Register>
        <Forget v-if="forget==true" @change="change"></Forget>
        <div id="sign1" v-if="register==false"> 
        <div v-if="forget==false">
            <van-row type="flex" justify="center">
              <img :src="logo" style="margin-right: 0.3rem;margin-top: 1.1rem;width: 1.5rem;height: 1.5rem;">
              <h2 align="center">评分系统</h2>
            </van-row>  
            <div class="frame1"></div>
            <van-form show-error-message  @submit="onSubmit" error-message-align="center" validate-trigger="onChange">
                <van-row>
                <van-field
                  class="frame gold"
                  v-model="username"
                  name="username"
                  label="用户"
                  placeholder="请填写手机号或账号"
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
                  <div class="frame2"></div>
                </van-row>
                <div class="frame1"></div>
                <div style="margin: 0.01rem;">
                  <van-button round block type="info" native-type="submit" ref="buttons">
                    登录
                  </van-button>
                </div>
                <div style="margin-top: 60%;">
                    <van-row type="flex" justify="center">  
                      <a href="#" @click="forget=true" style="color: #20A0FF;font-size: 0.4rem;margin-top: 0.1rem;">忘记密码</a>
                      <div class="divder1"></div>
                      <a href="#" @click="register=true" style="color: #20A0FF;font-size: 0.4rem;margin-top: 0.1rem;">注册账号</a>
                    </van-row>
                </div>
            </van-form>
        </div>
        </div>
    </div>
</template>

<script>
    
import Register from './admin/Register.vue'
import Forget from './admin/Forget.vue'
import logo from '../assets/logo.png'
    
export default {
  name: 'Sign',
  components: {
      Register,
      Forget,
  },
  data(){
      return{
          on:'',
          checked: true,
          register:false,
          forget:false,
          hold:true,
          bin: false,
          fuckyou:{},
          username: '',
          password: '',
          wow:{},
          logo,
      }
  },
  methods:{
      forget1(){
          this.$toast('请询问您的上级');
      },
      setCookie(cname,cvalue,exdays)
      {
        var d = new Date();
        d.setTime(d.getTime()+(exdays*24*60*60*1000));
        var expires = "expires="+d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
      },
      onSubmit(values) {
            var that1=this;
            //that1.$emit('again');that1.$emit('begin',"");
            this.setCookie(this.username,this.password,"1");
            var params = new FormData();
            params.append('username', values.username);
            params.append('password', values.password);
            this.$axios.post('/api/user/login',params) 
            .then((response) => { 
                if(response.data.msg=="登录成功"){
                    localStorage.setItem("username",that1.username);
                    localStorage.setItem("password",that1.password);
                    that1.$emit('again');that1.$emit('begin',response);
                }
                else{   
                    this.$toast('账号或密码错误');
                    that1.bin=true;
                }
            }).catch(err => {
                this.$toast('请求失败请向管理员');
                alert("cnm");
                console.log(err.message);
           });
      },
      holdon(){
          if(this.hold==true)localStorage.setItem("hold","open");
          else localStorage.setItem("hold","");
      },
      change(){
          this.register=false;this.forget=false;
      }
  },
  created:function (){
       this.username=localStorage.getItem('tel');  
       this.password=localStorage.getItem('password');
   },
   mounted:function(){
      var that1=this;
      var params = new FormData();
      params.append('username', this.username);
      params.append('password', this.password);
      this.$axios.post('/api/user/login',params)
       .then((response) => { 
           if(response.data.msg=="登录成功"){
                that1.$emit('begin',response);
           }
           else{   
               this.$toast('账号或密码错误');
               that1.bin=true;
           }
        }).catch(err => {
           this.$toast('请求失败请向管理员');
           alert("cnm");
           console.log(err.message);
       });
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
