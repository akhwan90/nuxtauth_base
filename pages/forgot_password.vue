<template>
    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
            <div class="col-lg-7 text-center text-lg-start">
                <h1 class="display-4 fw-bold lh-1 mb-3">Lupa password</h1>
                <p class="col-lg-10 fs-4">Fitur ini digunakan jika Anda lupa atas password akun Anda. Masukkan email atau nomor HP yang didaftarkan saat pendaftaran akun.</p>
            </div>
            <div class="col-md-10 mx-auto col-lg-5">
                <form @submit.prevent="userForgotPassword">
                    <div class="form-floating mb-3">
                        <label for="floatingInput">Masukkan email atau nomor HP yang terdaftar</label>
                        <input type="text" class="form-control" id="floatingInput" v-model="forgot.email">
                    </div>
                    <button class="w-100 btn btn-lg btn-primary" type="submit"><b-icon-check-circle></b-icon-check-circle> Kirim kode lupa password</button>

                    <!-- <hr class="my-4">
                    <small class="text-muted">Masukkan username dan password yang benar</small> -->
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'user_layout',
    head() {
        return {
            title: this.title
        }
    },
    data() {
        return {
            title: 'Lupa password JendelaKu',
            forgot: {
                email: '',
            }
        }
    },
    methods: {
        userForgotPassword() {
            const formData = new FormData();
            formData.append('email', this.forgot.email);

            this.$axios.post("api/reset_password", formData)
                .then((response) => {
                    if (response.status == 200) {
                        this.$toast.success('Email / nomor HP ditemukan. Silakan cek inbox email / SMS anda, untuk melihat kode lupa password')
                        const uri_params = new URLSearchParams({
                            email: response.data.data.email,
                        });
                        
                        window.location.href = this.$config.baseURL + '/forgot_password_code?' + uri_params.toString();
                    }
                })
                .catch((error) => {
                    // alert(error.response.data)
                    this.$toast.error(error.response.data.error)
                    // this.notifmsg = error.response.data.error
                    // console.log(error)
                });
        }
    }
}
</script>