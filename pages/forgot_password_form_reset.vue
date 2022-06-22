<template>
    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
            <div class="col-lg-7 text-center text-lg-start">
                <h1 class="display-4 fw-bold lh-1 mb-3">Ubah Password.</h1>
                <p class="col-lg-10 fs-4">Masukkan password baru.</p>
            </div>
            <div class="col-md-10 mx-auto col-lg-5">
                <form @submit.prevent="userResetPasswordOK">
                    <div class="form-floating mb-3">
                        <label for="floatingInput">Masukkan password baru</label>
                        <input type="password" class="form-control" id="floatingInput" v-model="resetOK.password1">
                    </div>
                    <div class="form-floating mb-3">
                        <label for="floatingInput">Ulangi password baru</label>
                        <input type="password" class="form-control" id="floatingInput" v-model="resetOK.password2">
                    </div>
                    <button class="w-100 btn btn-lg btn-primary" type="submit">
                        <b-icon-check-circle></b-icon-check-circle> Ubah Password
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            resetOK: {
                password1: '',
                password2: '',
            }
        }
    },
    methods: {
        cekEmailCode() {
            let email = this.$route.query.email;
            let code = this.$route.query.code;

            if (!email || !code) {
                this.$router.push('/')
            }
        },
        userResetPasswordOK() {
            const formData = new FormData();
            formData.append('password1', this.resetOK.password1);
            formData.append('password2', this.resetOK.password2);
            formData.append('email', this.$route.query.email);
            formData.append('code', this.$route.query.code);

            this.$axios.post("api/reset_password_ok", formData)
                .then((response) => {
                    if (response.status == 200) {
                        this.$router.push('/login')
                    }
                })
                .catch((error) => {
                    alert("Terjadi kesalahan..")
                });
        }
    },
    mounted() {
        this.cekEmailCode();
    }
}
</script>