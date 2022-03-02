<template>
  <div>
    <h1>yfang-cli</h1>
    <h2>A cli for create project</h2>
    <h3>Easily, expediently, Perfectly</h3>
    <h3>Create javascript library, react app, vue app and so on!</h3>
    <h3>
      <a href="https://github.com/YFang-FE/yfang-cli" target="_blank">Star</a>
      me at Github
    </h3>
    <h3>The following are the details:</h3>
    <p>You have stay here for {{ count }} seconds!</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'AboutMe',
  setup() {
    const store = useStore()
    const count = computed(() => store.state.count)
    return { count }
  },
})
</script>
<style scoped lang="less">
a {
  color: #42b983;
}

.link a {
  display: inline-block;
  margin: 0 20px;
}
</style>
