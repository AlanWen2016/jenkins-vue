<template>
    <div>
      子组件：<input type="text" v-model="value">
    </div>
</template>

<script>
    export default {
        name: "test",
      data() {
          return {
            value: ''
          }
      }
    }
</script>

<style scoped>

</style>
