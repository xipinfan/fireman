<template>
  <div class="Register">
      <div v-if="reg==0">
          <van-nav-bar
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            :border="false"
          />
          <div style="margin-left: 0.5rem;margin-right: 0.5rem;margin-top: 0.4rem;">
              <div style="border-bottom: 0.001rem solid #dddddd;margin-bottom: 0.8rem;">
                  <div style="font-size: 0.8rem;margin-bottom: 0.5rem;">输入手机号码</div>
                  <van-field center style="font-size: 0.45rem;" label-width="1.5rem" v-model="value">
                    <template #label>
                        <div style="color: #000000;font-size: 0.45rem;margin-right: 0rem;">
                            +86
                            <van-icon style="margin-top: 0.15rem;" name="arrow-down" />
                        </div>
                    </template>
                    <template #button>
                        <van-button style="margin-right: -0.5rem;" v-if="fuck==0" size="small" @click="click2" type="primary">发送验证码</van-button>
                        <van-button style="margin-right: -0.5rem;" disabled v-else size="small" type="primary">
                            <template #default>
                                请{{ node }}秒后重试
                            </template>
                        </van-button>
                    </template>
                  </van-field>
              </div>
              <div style="border-bottom: 0.001rem solid #dddddd;margin-bottom: 1.5rem;">
                  <van-field center style="font-size: 0.45rem;" label-width="1.5rem" v-model="value2">
                    <template #label>
                        <div style="color: #000000;font-size: 0.45rem;margin-right: 0rem;">
                            验证码
                        </div>
                    </template>
                  </van-field>
              </div>
              <van-button @click="click1" type="info" size="large" color="#20A0FF" round style="font-size: 0.4rem;">下一步</van-button>
          </div>
      </div>
      <div v-else-if="reg==1">
          <van-nav-bar
            title="注册账号"
            left-text="返回"
            left-arrow
            @click-left="click3"
            :border="false"
          />
          <van-form @submit="onClickLeft" submit-on-enter>
            <div style="margin-top: 0.3rem;"></div>
            <van-field
              v-model="username"
              name="姓名"
              placeholder="请填写姓名"
              :rules="[{ required: true }]"
              center 
              label-width="2rem" 
            >
                <template #label>
                    <div style="color: #000000;font-size: 0.45rem;margin-right: 0rem;">
                        姓名
                    </div>
                </template>
            </van-field>
            <div style="margin-top: 0.3rem;"></div>
            <van-field
              v-model="age"
              name="年龄"
              placeholder="请填写年龄"
              :rules="[{ required: true}]"
              center 
              label-width="2rem" 
            >
                <template #label>
                    <div style="color: #000000;font-size: 0.45rem;margin-right: 0rem;">
                        年龄
                    </div>
                </template>
            </van-field>
            <div style="margin-top: 0.3rem;"></div>
            <van-field
              v-model="sex"
              name="性别"
              readonly 
              center 
              placeholder="请选择性别"
              @click="showPicker = true"
              label-width="2rem" 
            >
                <template #label>
                    <div style="color: #000000;font-size: 0.45rem;margin-right: 0rem;">
                        性别
                    </div>
                </template>
            </van-field>
            <van-action-sheet v-model="showPicker" :actions="columns" @select="onSelect" />
            <div style="margin-top: 0.3rem;"></div>
            <van-field
              center
              readonly 
              name="职务"
              v-model="career"
              placeholder="请选择职务"
              @click="showPicker1 = true"
              label-width="2rem"
            >
                <template #label>
                    <div style="color: #000000;font-size: 0.45rem;margin-right: 0rem;">
                        职务
                    </div>
                </template>
            </van-field>
            <van-popup v-model="showPicker1" round position="bottom">
              <van-picker
                show-toolbar
                :columns="columns1"
                @cancel="showPicker1 = false"
                @confirm="onConfirm"
              />
            </van-popup>
            <div style="margin-top: 0.3rem;"></div>
            <van-field
              center
              readonly 
              name="地区"
              v-model="region"
              placeholder="所在地区"
              @click="show"
              label-width="2rem"
            >
                <template #label>
                    <div style="color: #000000;font-size: 0.45rem;margin-right: 0rem;">
                        地区
                    </div>
                </template>
            </van-field>
            <van-popup v-model="showPicker2" round position="bottom">
              <van-picker
                show-toolbar
                v-if="weight==0"
                :columns="class1"
                @cancel="showPicker2 = false"
                @confirm="onConfirm1"
              />
              <van-picker
                show-toolbar
                v-if="weight==1"
                :columns="class2"
                @cancel="showPicker2 = false"
                @confirm="onConfirm1"
              />
              <van-picker
                show-toolbar
                v-if="weight==2"
                :columns="class3"
                @cancel="showPicker2 = false"
                @confirm="onConfirm1"
              />
            </van-popup>
            <div style="margin-top: 0.3rem;"></div>
            <van-field
              v-model="password"
              name="密码"
              placeholder="请填写密码"
              :rules="[{ required: true }]"
              center 
              label-width="2rem" 
            >

                <template #label>
                    <div style="color: #000000;font-size: 0.45rem;margin-right: 0rem;">
                        密码
                    </div>
                </template>
            </van-field>
            <div style="margin-top: 0.8rem;"></div>
            <div style="margin: 0.5rem;">
              <van-button round block type="info" native-type="submit">
                确认注册
              </van-button>
            </div>
          </van-form>
      </div>
  </div>
</template>

<script>
  
import { Toast } from 'vant';
import { Dialog } from 'vant';
export default {
  name: 'Register',
  data(){
      return{
          problem:'',
          fuck:0,
          node:60,
          reg:0,
          value: '',
          value1: 0,
          value2: '',
          value3: '',
          username: '',
          password: '',
          age:'',
          sex:'',
          career:'',
          region:'',
          option1: [
                  { text: '+86', value: 0 },
          ],
          columns:[
              { name: '男' }, { name: '女' },
          ],
          columns1:[
              '大队长','教导员','副大队长','大队参谋','中队长','指导员','副中队长','班长','副班长','消防员','文员',
          ],
          class1:[
              {
                text: '梅列区大队',
                children: [
                  {
                    text: '列东中队',
                    children: [{ text: '一班' }, { text: '二班' }],
                  },
                  {
                    text: '列西中队',
                    children: [{ text: '一班' }, { text: '二班' }],
                  },
                ],
              },
              {
                text: '三元区大队',
                children: [
                  {
                    text: '城关中队',
                    children: [{ text: '一班' }, { text: '二班' }],
                  },
                  {
                    text: '荆西中队',
                    children: [{ text: '一班' }, { text: '二班' }],
                  },
                ],
              },
          ],
          class2:[
              {
                text: '梅列区大队',
                children: [
                  { text: '列东中队' },{ text: '列西中队' },
                ],
              },
              {
                text: '三元区大队',
                children: [
                  { text: '城关中队' },{ text: '荆西中队', },
                ],
              },
          ],
          class3:[
              {text: '梅列区大队'},{text: '三元区大队'},
          ],
          showPicker:false,
          required1:true,
          showPicker1:false,
          showPicker2:false,
          weight:0,
      }
  },
  methods:{
      onClickLeft(){
          Dialog({ message: '账号注册成功' }).then(() => {
              this.$emit('change');
          });
      },
      click1(){
          this.reg=1;
      },
      click2(){
          this.fuck=1;
      },
      click3(){
          this.reg=0;
      },
      onSubmit(values) {
            console.log(values);
            this.reg=2;
      },
      onSelect(item) {
            this.showPicker = false;
            this.sex=item.name;
      },
      onConfirm(value) {
            this.career = value;
            this.showPicker1 = false;
            this.region='';
      },
      onConfirm1(value) {
          if(this.weight==2){
              this.region = value.text;
          }
          else{
              for(var i=0;i<value.length;i++){
                  this.region = this.region+value[i];
                  if(i!=value.length-1)this.region+='，';
              }
          } 
          this.showPicker2 = false;
      },
      show(){
          if(this.career!=''){
              this.showPicker2=true;
              if(this.career=='大队长'||this.career=='教导员'||this.career=='副大队长'||this.career=='大队参谋'){
                  this.weight=2;
              }
              else if(this.career=='中队长'||this.career=='指导员'||this.career=='副中队长'||this.career=='文员'){
                  this.weight=1;
              }
              else{
                  this.weight=0;
              }
          }
          else{
              Toast('请先选择当前职位');
          }
      }
  },
  mounted: function () {
    window.setInterval(() => {
        if(this.fuck==1){
            this.node--;
        }
        if(this.node==0){
            this.fuck=0;
            this.node=60;
        }
    }, 1000)
  },
}
</script>