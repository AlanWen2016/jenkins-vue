<template>
  <div class="about">
    <h1>Jenkins测试</h1>
    <div>
      <abc :value.sync="msg"></abc>
      {{msg}}
    </div>
    <div class="parent" @click="handleClick">
      <button @click="btn1Click">重置</button>
    </div>
    <div v-for="(item, index) in arr" :key="index">{{ item }}</div>
    <hr>
    <div v-for="(item, index) in items" :key="item+index">{{ item }}</div>

    <hr>
    <div>
      <input type="radio" name="sex" value="man"  v-model="sex">
      <input type="radio" name="sex" value="woman" v-model="sex">
    </div>
  </div>
</template>


<script>

  import abc from '../components/abc';
  import Peanut  from 'peanut-js';
  import FF from './fun'

export default {
  data() {
    return {
      msg : "",
      arr: ['a', 'b', 'c'],
      items: ['a', 'b', 'c', 'abc', 'a', 'a1324', 'd'],
      sex: ''
    };
  },
  components:{
    abc
  }, 
  mounted() {
    
    console.log(Peanut.setStorage('adsa','aa'),'QQ')
    this.$set(this.arr, 0, 1234);
    this.arr.splice(0, 1, 12345);
    this.items.filter(item => item.match(/a/));
    this.items = this.items.concat([1234, 1234]);

    console.log(process.env.VUE_APP_SECRET);
    console.log(process.env);
    console.log(process.env.FOO);
  },
  methods: {
    handleClick() {
      console.log('parent');
    },
    btn1Click(event) {
      console.log(event);
      event.stopPropagation();
      console.log('btn');
    },
  },
};
</script>
