<template>
    <div>
        <h1>yfang-cli</h1>
        <h2>A cli for create project</h2>
        <h3>Easily, expediently, Perfectly</h3>
        <h3>Create javascript library, react app, vue app and so on!</h3>
        <h3>
            <a href="https://github.com/YFang-FE/yfang-cli" target="_blank"
                >Star</a
            >
            me at Github
        </h3>
        <h3>The following are the details:</h3>
        <p>You have stay here for {{ count }} seconds!</p>
    </div>
</template>
<script>
export default {
    name: '',
    data() {
        return {
            name: 1,
            $haha: 22,
        }
    },
    computed: {
        count() {
            return this.$store.state.count
        },
    },
    created() {},
}
</script>
<style scoped>
a {
    color: #42b983;
}
.link a {
    display: inline-block;
    margin: 0 20px;
}
</style>
