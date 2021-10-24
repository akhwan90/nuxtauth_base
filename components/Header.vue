<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand mb-0 h1" href="#">Aplikasi TTS</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <NuxtLink to="/admin/dashboard" class="nav-link">Beranda</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="/admin/tiket/new" class="nav-link">Tiket Baru</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="/admin/tiket/list" class="nav-link">Daftar Tiket</NuxtLink>
                    </li>
                </ul>
                <form class="d-flex">
                    <button class="btn btn-outline-danger" type="submit" @click.prevent="logout">Logout {{ user }}</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        methods: {
            async logout() {
                if (confirm('Anda yakin..?')) {
                    try {
                        let response = await this.$auth.logout()
                        console.log(response)
                    } catch (err) {
                        console.log(err)
                    }
                }
            }
        },
        data() {
            return {
                user: '',
            }
        },
        mounted() {
            this.user = this.$auth.user.username
        }
    }
</script>