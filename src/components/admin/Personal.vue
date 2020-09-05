<template>
  <div class="personal">
      <van-nav-bar
        title="个人信息"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
      <div class='kk'>
          <van-row class='kk' type="flex" justify="center">
            <van-field class="Whole" v-model="ID.name" label="账号" readonly />
          </van-row>
          <van-row class='kk' type="flex" justify="center">
            <van-field class="Whole" v-if="online == true" v-model="ID.username" label="姓名" readonly />
            <van-field class="Whole" v-if="online == false" v-model="ID.username" label="姓名" />
          </van-row>
          <van-row class='kk' type="flex" justify="center">
            <van-field class="Whole" v-if="online == true" v-model="ID.position" label="职务" readonly />
            <div v-if="online == false">
                <van-field
                  readonly
                  clickable
                  label="职务"
                  :value="value"
                  placeholder="选择职务"
                  @click="showPicker = true"
                />
                <van-popup v-model="showPicker" round position="bottom">
                  <van-picker
                    show-toolbar
                    :columns="columns"
                    @cancel="showPicker = false"
                    @confirm="onConfirm"
                  />
                </van-popup>
            </div>
          </van-row>
          <van-row class='kk' type="flex" justify="center">
            <van-field class="Whole" v-if="online == true" v-model="ID.age" label="年龄" readonly />
            <van-field class="Whole" v-if="online == false" v-model="ID.age" label="年龄" />
          </van-row>
          <van-row class='kk' type="flex" justify="end">
            <van-radio-group v-if="online == true" disabled v-model="radio"  direction="horizontal">
              <van-radio name="男">男</van-radio>
              <van-radio name="女">女</van-radio>
            </van-radio-group>
            <van-radio-group v-if="online == false" direction="horizontal" v-model="radio">
              <van-radio name="男">男</van-radio>
              <van-radio name="女">女</van-radio>
            </van-radio-group>
          </van-row>
          <van-row type="flex" justify="end" id='Bt'>
            <van-button @click="out" round type="primary" size="large">{{ on }}</van-button>
          </van-row>
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
          radio:'男',
          on:'修改信息',
          columns: ['大队长', '教导员','副大队长', '大队参谋','中队长', 
          '指导员', '副中队长', '班长', '副班长','消防员','文员'],
          online:true,
          value: '',
          showPicker: false,
      }
  },
  methods:{
      onClickLeft(){
          this.$emit('onClick1');
      },
      out(){
          if(this.online==false){
              this.online=!this.online;
              this.$emit('Change',this.ID);
              this.on='确认修改';
          }
          else{
              this.online=!this.online;
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
      this.value=this.ID.position;
  }
}
</script>

<style scoped>
    #Bt{
        margin: 8%;
    }
    .kk{
        margin-top: 3%;
    }
    .Whole{
        margin-left: 14%;
        margin-right: 10%;
    }
</style>
