<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h3>You can use this to develop your project.</h3>
        <p>This project will help you create a project easily.</p>
        <p>You use webpack, vue, vue-router, vuex, sass and so on.</p>
        <p>I hope that can be helpful for you!!</p>
        <p>
            You have stay here for {{ count }} second, click time: {{ suporka }}
            <button @click="suporka += 1">click</button>
        </p>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    components: {},
    props: {
        msg: {
            type: String,
            default: 'Welcome to yfang-cli',
        },
    },
    data() {
        return {
            val: 0,
            ifShowMask: false,
            suporka: 1,
            imgArr: [],
        }
    },
    computed: {
        count() {
            return this.$store.state.count
        },
    },
    created() {
        this.$eventBus.$on(
            'home-on',
            (...args) => {
                console.log('home $on====>>>', ...args)
            },
            this
        )
    },
    mounted() {},
    methods: {
        haha() {
            this.ifShowMask = true
        },
        onClick($ev, val) {
            this.val += val
            console.log(this.val, new Date())
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
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
    width: 100px;
}
</style>
