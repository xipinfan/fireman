  <template>
  <div class="personal frame">
      <van-nav-bar
        style="background-color: #fcfcfc;"
        title="个人信息"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
      <div>
          <div class="fra frame"> </div><div style="margin-top: 0.5rem;"> </div>
          <van-row class='kk' type="flex" justify="center">
            <van-field class="Whole" v-model="ID.uid" label="账号" readonly />
          </van-row>
          <div class="fra frame"> </div>
          <van-row class='kk' type="flex" justify="center">
            <van-field class="Whole" v-if="online == true" v-model="ID.uname" label="姓名" readonly />
            <van-field class="Whole" v-if="online == false" v-model="ID.uname" label="姓名" />
          </van-row>
          <div class="fra frame"> </div>
          <van-row class='kk' type="flex" justify="center">
            <van-field class="Whole" v-model="ID.career" label="职务" readonly />
          </van-row>
          <div class="fra frame"> </div>
          <van-row class='kk' type="flex" justify="center">
            <van-field class="Whole" v-if="online == true" v-model="ID.age" label="年龄" readonly />
            <van-field class="Whole" v-if="online == false" v-model="ID.age" label="年龄" />
          </van-row>
          <div class="fra frame"></div><div class="fra frame"></div><div class="fra frame"></div>
          <div class="frame">
            <van-row type="flex" justify="end">
            <van-radio-group v-if="online == true" disabled v-model="ID.sex"  direction="horizontal">
              <van-radio class="big1" name="男">男</van-radio>
              <van-radio class="big1" name="女">女</van-radio>
            </van-radio-group>
            <van-radio-group v-if="online == false" direction="horizontal" v-model="ID.sex">
              <van-radio class="big1" name="男">男</van-radio>
              <van-radio class="big1" name="女">女</van-radio>
            </van-radio-group>
          </van-row>
          <div class="fra frame"></div>
          <div class="fra frame"></div><div class="fra frame"></div>
          <van-row type="flex" justify="end" id='Bt'>
            <van-button style="background-color: #1989fa;border-color: #1989fa;" @click="out" round type="primary" size="large">{{ on }}</van-button>
          </van-row>
          </div>
          <div class="frame frame1"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Personal',
  props: [
      'ID',
  ],
  data(){
      return{
          on:'修改信息',
          online:true,
          sex:0,
          value: '',
          showPicker: false,
      }
  },
  methods:{
      onClickLeft(){
          this.$emit('onClick1');
      },
      out(){
          if(this.online==true){
              this.on='确认修改';
              this.online=false;
          }
          else{
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
              this.online=true;
              this.on='修改信息';
          }
      },
      onConfirm(value) {
          this.value=value;
          this.ID.position = value;
          this.showPicker = false;
      },
  },
  computed:{
        
  },
  mounted:function(){
      this.value=this.ID.career;
      console.log(this.ID);
  }
}
</script>

<style scoped>
    #Bt{
        margin-left: 0.8rem;
        margin-right: 0.8rem;
    }
    .kk{
        margin-top: 0.3rem;
        margin-bottom: 0.2rem;
    }
    .Whole{ 
        border:0.01rem solid;
        border-color: #E6E6E6;
        border-radius:26.64rem;
        margin-left: 0.7rem;
        margin-right: 0.7rem;
        background-color: #F9F9F9;
    }
    .frame {
        background-color: #ffffff!important;
    }
    .fra{
       padding: 0.16rem;
    }
    .frame1{
        padding-top: 5.4rem;
    }
    .big1{
        font-size: 0.5rem;
    }
    .personal{
        position: fixed;
        height: 100%;
        width: 100%;
    }
</style>
