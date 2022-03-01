<template>
    <div id="app">
        <img
            src="./assets/logo.png"
            alt
            v-if="show"
            style="transition: all 0.3s"
        />
        <div class="flex space-around router">
            <router-link to="/introduce">Introduce</router-link>
            <router-link to="/me">About me</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    name: 'app',
    components: {  },
    data() {
        return {
            show: true,
        }
    },
    created() {
        /* eslint-disable */
        console.log(process.env.NODE_ENV)
        // get 请求
        this.$ajax
            .get(
                'https://www.easy-mock.com/mock/5b1f88a39f7d4a3a70fcbfd3/suporka/get',
                {}
            )
            .then((res) => {
                console.log(res)
            })
        // post 请求
        this.$ajax
            .post(
                'https://www.easy-mock.com/mock/5b1f88a39f7d4a3a70fcbfd3/suporka/post',
                {}
            )
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })

        this.timer = setInterval(() => {
            // this.$store.dispatch('countUp');
            this.countUp() // 两种方法，一种直接commit,一种通过 mapActions([]) 引入至methods中后再使用
        }, 1000)

        this.$ajax.get('../static/head.json', {}).then((res) => {
            console.log(res)
        })
    },
    methods: {
        ...mapActions(['countUp']),
    },
    destroyed() {
        clearTimeout(this.timer)
    },
}
</script>

<style scoped lang="less">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
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
    cursor: pointer;
    color: #42b983;
}
.router a:hover {
    color: #00aac5;
}
</style>
