<template>
    <div class="px-4 py-5 my-5 text-center">
        Mohon tunggu ...
    </div>
</template>

<script>
export default {
    data() {
        return {
            token: this.$route.query.token ? this.$route.query.token : null
        }
    },
    methods: {},
    mounted() {
        this.$auth.strategy.token.set('Bearer ' + this.token);
        this.$auth.setStrategy('local');

        this.$auth.fetchUser().then(() => {
            this.$router.push('/');
        }).catch((e) => {
            this.$auth.logout();
            // return this.$router.push(`/auth/${this.$route.query.origin ? this.$route.query.origin : 'register'}?error=1`);
        });
    }

}
</script>