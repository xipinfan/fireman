<template>
    <div>
        <div id="sign1">
            <h1 align="center">评分系统</h1>
            <div class="frame1"></div><div class="frame1"></div>
            <van-form show-error-message  @submit="onSubmit" error-message-align="center" validate-trigger="onChange">
                <van-row>
                <van-field
                  class="frame gold"
                  v-model="username"
                  name="用户名"
                  label="用户名"
                  placeholder="请填写用户名"
                  :rules="[{ required: false }]"
                />
                <div class="frame1"></div><div class="frame1"></div>
                <van-field
                  class="frame gold"
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
                <div class="frame1"></div>
                <van-row type="flex" justify="end">
                <van-row gutter="20">
                  <van-checkbox icon-size="15\px" class="big1" v-model="checked">记住密码</van-checkbox>
                  <div class="frame2"></div>
                  <van-checkbox icon-size="15\px" class="big1" @click="holdon" v-model="hold">自动登录</van-checkbox>
                </van-row>
                </van-row>
                <div class="frame1"></div>
                <div style="margin: 0.01em;">
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
          user:[{ 
                name:'2020000',
                username:'root',
                password:'123456',
                sex:'男',
                position:'大队长',
                age:'20',
              },{
                name:'2020001',
                username:'范老师',
                password:'123456',
                sex:'男',
                position:'教导员',
                age:'20', 
              },{
                name:'2020002',
                username:'杰佬',
                password:'123456',
                sex:'男',
                position:'大队参谋',
                age:'18', 
              },
          ],
          pass:[
              '123456',
          ],
          fuckyou:{},
          username: '',
          password: '',
      }
  },
  methods:{
      onSubmit(values) {
            console.log(values);
            for(var i=0;i<this.user.length;i++){
                if(this.user[i].username==this.username&&this.user[i].password==this.password){
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
                    this.$emit('again');this.$emit('begin',this.user[i]);
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
       var IDE=localStorage.getItem('IDEA');
       if(IDE!=""){
           var IDEA=JSON.parse(IDE);this.fuckyou=IDEA;
           for(var i=0;i<this.user.length;i++){
               if(this.user[i].name==this.fuckyou.name){
                   this.user[i]=IDEA;
               }
           }
           
       }
   },
    mounted:function(){
       this.on=localStorage.getItem('hold');
       if(this.on=="open"){
          for(var i=0;i<this.user.length;i++){
              if(this.user[i].username==this.username&&this.user[i].password==this.password){
                  this.$emit('begin',this.user[i]);break;
              }
          }
       }
       else{
           this.hold=false;
       } 
    }
}

</script>

<style>
    .big1{
        font-size: 0.5em;
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
        padding: 0.1em;
    }
</style>
