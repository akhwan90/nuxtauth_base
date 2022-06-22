<template>
    <div class="container p-3">
        <h5 class="card-header d-flex justify-content-between align-items-center border-0 p-3">
            {{ title }}
            <a href="/admin/dashboard" type="button" class="">
                <b-icon-arrow-left-circle></b-icon-arrow-left-circle>
            </a>
        </h5>

        <div class="card card-body mt-2">
            <table class="table table-sm">
                <tr>
                    <td class="font-weight-bold" width="40%">Nama Lengkap</td>
                    <td width="60%">{{ userDetil.NAMA_LGKP }}</td>
                </tr>
                <tr>
                    <td class="font-weight-bold">Email</td>
                    <td>{{ userDetil.email }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>


<script>
export default {
    middleware: 'auth',
    head() {
        return {
            title: this.title
        }
    },
    methods: {
    },
    data() {
        return {
            title: 'Profil Pengguna ',
            userDetil: this.$store.state.userDetil
        }
    },
    mounted() {
        // console.log(this.$store.state)
    }
}
</script>