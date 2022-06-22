<template>
    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
            <div class="col-lg-7 text-center text-lg-start">
                <h1 class="display-4 fw-bold lh-1 mb-3">Input kode lupa password</h1>
                <p class="col-lg-10 fs-4">Kode lupa password, dapat dicek di inbox email atau SMS. Jika tidak masuk di folder inbox, bisa dicek di folder SPAM</p>
            </div>
            <div class="col-md-10 mx-auto col-lg-5">
                <form @submit.prevent="userResetPassword">
                    <div class="form-floating mb-3">
                        <label for="floatingInput">Masukkan kode lupa password yang dikirimkan</label>
                        <input type="text" class="form-control" id="floatingInput" v-model="reset.code">
                    </div>
                    <button class="w-100 btn btn-lg btn-primary" type="submit"><b-icon-check-circle></b-icon-check-circle> Ubah Password</button>

                    <!-- <hr class="my-4">
                    <small class="text-muted">Masukkan username dan password yang benar</small> -->
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    data() {
        return {
            reset: {
                code: '',
            }
        }
    },
    methods: {
        userResetPassword() {
            const formData = new FormData();
            formData.append('code', this.reset.code);
            formData.append('email', this.$route.query.email);

            this.$axios.post("api/reset_password_check_code", formData)
                .then((response) => {
                    if (response.status == 200) {
                        // alert('Email / nomor HP ditemukan. Silakan cek inbox email / SMS anda, untuk melihat kode lupa password')
                        const uri_params = new URLSearchParams({
                            email: response.data.data.email,
                            code: response.data.data.code,
                        });
                        
                        // console.log(response);
                        this.$router.push('/forgot_password_form_reset?' + uri_params.toString())
                    }
                })
                .catch((error) => {
                    alert("Terjadi kesalahan..")
                });
        }
    }
}
</script>