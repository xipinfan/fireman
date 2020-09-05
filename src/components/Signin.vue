<template>
    <div>
        <div id="sign1">
            <h1 align="center">评分系统</h1>
            <van-form show-error-message=false  @submit="onSubmit" error-message-align="center" validate-trigger="onChange">
                <van-row>
                <van-field
                  v-model="username"
                  name="用户名"
                  label="用户名"
                  placeholder="请填写用户名"
                  :rules="[{ required: false }]"
                />
                <van-field
                  v-model="password"
                  type="password"
                  name="密码"
                  label="密码"
                  placeholder="请填写密码"
                  :rules="[{ required: false }]"
                />
                </van-row>
                <van-row type="flex" justify="center">
                    <p id="tip" v-if="bin">用户名或密码错误</p>
                </van-row>
                <van-row type="flex" justify="end">
                <van-row gutter="20">
                  <van-checkbox icon-size="15\px" shape="square" v-model="checked">记住密码</van-checkbox>
                  <van-checkbox icon-size="15\px" @click="holdon" shape="square" v-model="hold">自动登录</van-checkbox>
                </van-row>
                </van-row>
                <div style="margin: 16px;">
                  <van-button round block type="info" native-type="submit" ref="buttons">
                    登录
                  </van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>

<script>
    
export default {
  name: 'Sign',
  components: {
      
  },
  data(){
      return{
          on:'',
          checked: true,
          hold:true,
          bin: false,
          user:[
              'root','杰佬','范老师'
          ],
          pass:[
              '123456',
          ],
          username: '',
          password: '',
      }
  },
  methods:{
      onSubmit(values) {
            console.log('submit', values);
            for(var i=0;i<this.user.length;i++){
                if(this.user[i]==this.username&&this.password==this.pass[0]){
                    if(this.checked==true){
                        localStorage.setItem("username",this.username);
                        localStorage.setItem("password",this.password);
                        if(this.hold==true)localStorage.setItem("hold","open");
                        else localStorage.setItem("hold","");
                    }
                    else{
                        localStorage.setItem("username","");
                        localStorage.setItem("password","");
                    }
                    this.$emit('again');this.$emit('begin',this.username,this.password);
                }
            }
            this.bin=true;
      },
      holdon(){
          if(this.hold==true)localStorage.setItem("hold","open");
          else localStorage.setItem("hold","");
      }
  },
  created:function (){
       //自动加载indexs方法
       this.username=localStorage.getItem('username');  
       this.password=localStorage.getItem('password');
   },
    mounted:function(){
       this.on=localStorage.getItem('hold');
       if(this.on=="open"){
          this.$emit('begin',this.username,this.password);
       }
       else{
           this.hold=false;
       }
    }
}

</script>

<style>
    #tip{
        color: red;
        font-size: small;
    }
    #sign1{
        margin-top: 50%;
        margin-left: 10%;
        margin-right: 10%;
    }
</style>
