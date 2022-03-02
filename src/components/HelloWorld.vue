<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>You can use this to develop your project.</h3>
    <p>This project will help you create a project easily.</p>
    <p>You use webpack, vue3, typescript, vue-router, vuex, sass and so on.</p>
    <p>I hope that can be helpful for you!!</p>
    <p>
      You have stay here for {{ count }} second, click time: {{ suporka }}
      <button @click="suporka += 1">click</button>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: 'Welcome to yfang-cli vue3',
    },
  },
  setup() {
    const store = useStore()
    const count = computed(() => store.state.count)
    const data = reactive({
      val: 0,
      ifShowMask: false,
      suporka: 1,
      testArray: Array.from([]),
    })
    return { ...toRefs(data), count }
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  padding: 0;
  list-style-type: none;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.link a {
  display: inline-block;
  margin: 0 20px;
}

.test-img {
  display: flex;
  width: 100px;
}
</style>
