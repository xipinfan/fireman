<template>
  <div class="hello">
      <form action="/">
        <van-search
          v-model="value"
          shape="round"
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
  </div>
</template>

<script>
    
import { Toast } from 'vant';
    
export default {
  name: 'HelloWorld',
  props: [
  ],
  data(){
      return{
          value: '',
          ID:{},
      }
  },
  methods:{
      onSearch(val) {
        Toast(val);
      },
      onCancel() {
        Toast('取消');
      },
  },
  created:function (){
       this.ID=this.$route.query.ID;
       console.log(this.ID);
   },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
