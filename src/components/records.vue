<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh" id="box abs">
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
          <div v-for="value in ID.evaluated" :key="value.id">
              <van-cell size="large" is-link>
                <template #title>
                  <span class="custom-title">{{ value.username }}</span>
                </template>
              </van-cell>
          </div>
          <van-pagination v-model="currentPage" :total-items="ID.evaluated.length" :items-per-page="12" />
      </div>
  </van-pull-refresh>
  
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
          begin:'',
          currentPage: 1,
          what:24,
          count: 0,
          isLoading: false,
      }
  },
  methods:{
      onSearch(val) {
        Toast(val);
      },
      onCancel() {
        Toast('取消');
      },
      onRefresh() {
        setTimeout(() => {
          Toast('刷新成功');
          this.isLoading = false;
          this.count++;
        }, 1000);
      },
  },
  created:function (){
       this.ID=this.$route.query.ID;
   },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #box{
        padding-button: 25em;
    }
    #abs{
        position: absolute;
    }
</style>
