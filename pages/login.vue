<template>
    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
            <div class="col-lg-7 text-center text-lg-start">
                <h1 class="display-4 fw-bold lh-1 mb-3">Login </h1>
                <p class="col-lg-10 fs-4">Untuk menggunakan semua layanan di aplikasi , Anda harus melakukan
                    login.</p>
            </div>
            <div class="col-md-10 mx-auto col-lg-5">
                <form @submit.prevent="userLogin">
                    <div class="form-floating mb-3">
                        <label for="floatingInput">Username / Email / NIK / Nomor HP</label>
                        <input type="text" class="form-control" id="floatingInput" v-model="login.username">
                    </div>
                    <div class="form-floating mb-3">
                        <label for="floatingPassword">Password</label>
                        <input type="password" class="form-control" id="floatingPassword" v-model="login.password">
                        <small><a href="/forgot_password" class="text-danger float-right">Lupa password..?</a></small>
                    </div>

                    <button class="w-100 btn btn-lg btn-success mt-4" type="submit">
                        <b-icon-check-circle></b-icon-check-circle> Login
                    </button>
                    <button class="w-100 btn btn-lg btn-primary mt-2" type="button" @click="registerSocial('facebook')">
                        <b-icon-facebook></b-icon-facebook> Login dengan Facebook
                    </button>
                    <button class="w-100 btn btn-lg btn-danger mt-2" type="button" @click="registerSocial('google')">
                        <b-icon-google></b-icon-google> Login dengan Google
                    </button>
                    <a class="w-100 btn btn-lg btn-primary mt-2" href="/">
                        <b-icon-chevron-left></b-icon-chevron-left> Kembali Ke Beranda
                    </a>

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
    head() {
        return {
            title: this.title,
            bodyAttrs: {
                style: 'background-image: url(https://www.toptal.com/designers/subtlepatterns/uploads/full-bloom.png);'
            }
        }
    },
    data() {
        return {
            title: 'Login JendelaKu',
            login: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        userLogin() {
            const formData = new FormData();
            formData.append('username', this.login.username);
            formData.append('password', this.login.password);

            this.$auth.loginWith('local', { 
                data: formData 
            }).then(() => {
                this.$store.commit('SET_IS_AUTH', true)
                window.location.href = '/';
            })
            .catch((error) => {
                alert("Terjadi kesalahan..")
            });
        },
        async registerSocial(provider) {
            this.$toast.success('Contacting provider ...');
            this.popupSocialLogin(`http://localhost/sso/public/api/login/${provider}/redirect`, '_blank');
        },
        popupSocialLogin(url, newWindow) {
            let w = 700;
            let h = 500;
            let left = (screen.width / 2) - (w / 2);
            let top = (screen.height / 2) - (h / 2);

            let newwindow = window.open(url, newWindow, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
            if (window.focus) { newwindow.focus() }
            return false;
        }
    },
    mounted() {
        // console.log('OK')
        // this.$router.go('/')
    }
}
</script>