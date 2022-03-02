<template>
  <div id="app">
    <img
      v-if="show"
      src="./assets/logo.png"
      alt=""
      style="transition: all 0.3s"
    />
    <div class="flex space-around router">
      <router-link to="/introduce">Introduce</router-link>
      <router-link to="/me">About me</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import axios from '@/apis/index'

interface ResData {
  user: {
    name: String
    child: {
      name: string
    }[]
  }[]
}
export default defineComponent({
  setup() {
    const store = useStore()
    const data = reactive({
      show: true,
    })
    if (process.env) {
      console.log(
        `VUEP_BASE_URL=${process.env.VUE_BASE_URL}`,
        process.env.BUILD_TIME
      )
    }
    setInterval(() => {
      store.dispatch('countUp')
    }, 1000)

    axios.get<ResData>('../static/head.json', {}).then((res) => {
      console.log(res)
    })
    return { ...toRefs(data) }
  },
})
</script>

<style scoped>
#app {
  color: #2c3e50;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transform: rotate(0deg);
}

img {
  margin-top: 60px;
}

.name {
  color: #00aac5;
}

.age {
  color: red;
}

.test {
  width: 100px;
  height: 100px;
}

.flex {
  display: flex;
}

.space-around {
  justify-content: space-around;
}

.router {
  width: 300px;
  margin: 10px auto;
  color: #42b983;
  font-size: 20px;
  text-decoration: underline;
}

.router a {
  color: #42b983;
  cursor: pointer;
}

.router a:hover {
  color: #00aac5;
}
</style>
