<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
import jwt_decode from "jwt-decode";
export default {
    mounted() {
        this.$axios.get("/user/info").then(res => {
            if (res.error === 0) {
                const decode = jwt_decode(localStorage.token);
                // 存储数据
                this.$store.dispatch("setIsAutnenticated", !this.isEmpty(decode));
                this.$store.dispatch("setUser", decode);
            } else {
                this.$router.push('/login')
            }

        })
    },
    methods: {
        isEmpty(value) {
            return (
                value === undefined ||
                value === null ||
                (typeof value === "object" && Object.keys(value).length === 0) ||
                (typeof value === "string" && value.trim().length === 0)
            );
        }
    },
}
</script>

<style>
@import url("./assets/css/reset.css");
</style>
<style lang="scss">
</style>
