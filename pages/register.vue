<template>
    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
            <div class="col-lg-7 text-center text-lg-start">
                <h1 class="display-4 fw-bold lh-1">Daftar JendelaKu</h1>
                <p class="col-lg-10 fs-4">Untuk menggunakan semua layanan di aplikasi JendelaKU, Anda harus melakukan
                    login.</p>
            </div>
            <div class="col-md-10 mx-auto col-lg-5">
                <div class="alert alert-danger" v-if="notifmsg">
                    <div v-for="(errorArray, index) in notifmsg" :key="index">
                        <div v-for="(allErrors, index) in errorArray" :key="index">
                            <span class="text-danger">{{ allErrors}} </span>
                        </div>
                    </div>
                </div>
                <form @submit.prevent="actRegister">
                    <div class="form-floating">
                        <label for="floatingInput1">Email</label>
                        <input type="text" class="form-control" id="floatingInput1" v-model="register.email">
                    </div>
                    <div class="form-floating">
                        <label for="floatingInput2">Nomor HP</label>
                        <input type="text" class="form-control" id="floatingInput2" v-model="register.no_hp">
                    </div>
                    <div class="form-floating">
                        <label for="floatingInput3">Nama</label>
                        <input type="text" class="form-control" id="floatingInput3" v-model="register.nama">
                    </div>
                    <div class="form-floating">
                        <label for="floatingPassword1">Password</label>
                        <input type="password" class="form-control" id="floatingPassword1" v-model="register.password">
                    </div>
                    <div class="form-floating">
                        <label for="floatingPassword2">Ulangi Password</label>
                        <input type="password" class="form-control" id="floatingPassword2" v-model="register.password2">
                    </div>

                    <button class="w-100 btn btn-lg btn-success mt-2" type="submit">
                        <b-icon-check-circle></b-icon-check-circle> Daftar
                    </button>
                </form>

                <button class="w-100 btn btn-lg btn-primary mt-2" type="button" @click="registerSocial('facebook')">
                    <b-icon-facebook></b-icon-facebook> Daftar dengan Facebook
                </button>
                <button class="w-100 btn btn-lg btn-danger mt-2" type="button" @click="registerSocial('google')">
                    <b-icon-google></b-icon-google> Daftar dengan Google
                </button>
                <a class="w-100 btn btn-lg btn-primary mt-2" :href="$config.baseURL">
                    <b-icon-chevron-left></b-icon-chevron-left> Kembali Ke Beranda
                </a>
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
            title: 'Daftar JendelaKu',
            register: {
                email: '',
                nama: '',
                no_hp: '',
                password: '',
                password2: '',
            },
            notifmsg: '', 
        }
    },
    methods: {
        actRegister() {
            const formData = new FormData();
            formData.append('email', this.register.email);
            formData.append('name', this.register.nama);
            formData.append('no_hp', this.register.no_hp);
            formData.append('password', this.register.password);
            formData.append('password2', this.register.password2);

            this.$axios.post("api/register", formData)
            .then((response) => {
                if (response.status == 200) {
                    const uri_params = new URLSearchParams({
                        email: this.register.email,
                        no_hp: this.register.no_hp
                    });
                    // console.log(response);
                    window.location.href = this.$config.baseURL + '/activation?'+uri_params.toString();
                }
            })
            .catch((error) => {
                // this.notifmsg = error.response.data.error
                // console.log(error)
                this.$toast.error('Terjadi kesalahan..')
            });
        },
        async registerSocial(provider) {
            this.$toast.success('Contacting provider ...');
            this.popupSocialLogin(`${process.env.NUXT_ENV_BASE_URL_API}/api/login/${provider}/redirect`, '_blank');
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
        // this.toast();
    }
}
</script>