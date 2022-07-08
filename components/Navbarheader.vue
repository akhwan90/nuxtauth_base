<template>
    <div class="float-right mb-4">
        <b-nav v-if="isAuth">
            <b-nav-item-dropdown right>
                <template v-slot:button-content>
                    <img :src="pp" class="rounded-circle pp" v-if="pp">
                    <b-icon-person-circle v-else></b-icon-person-circle>
                    <span class="username">{{ name }}</span>
                </template>

                <b-dropdown-item :href="this.$config.baseURL + '/admin/user/profile'">Profile</b-dropdown-item>
                <b-dropdown-item :href="this.$config.baseURL + '/admin/user/change_password'">Ubah Password</b-dropdown-item>
                <b-dropdown-item :href="this.$config.baseURL + '/sso_management/dashboard'" v-if="this.$auth.user.level == 1">SSO Management</b-dropdown-item>
                <b-dropdown-item @click="logout">Logout</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-nav>
        <b-nav v-else>
            <b-nav-item-dropdown right>
                <template v-slot:button-content>
                    <b-icon-person-circle></b-icon-person-circle>
                    <span class="username">Belum Login</span>
                </template>

                <b-dropdown-item :href="this.$config.baseURL + '/register'">Daftar</b-dropdown-item>
                <b-dropdown-item :href="this.$config.baseURL + '/login'">Login</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-nav>
    </div>
</template>

<style scoped>
    .pp {
        width: 35px !important;
    }
    .username {
        text-transform: uppercase;
    }
</style>

<script>
export default {
    methods: {
        async logout() {
            if (confirm('Anda yakin..?')) {
                await this.$auth.logout()
                this.$router.go('/')
            }
        }
    },
    data() {
        return {
            isAuth: this.$auth.loggedIn,
            name: this.$store.state.userDetil.name,
            pp: this.$config.baseURL_API + '/api/user/profile_pict/' + this.$auth.user.id,
        }
    }
}
</script>