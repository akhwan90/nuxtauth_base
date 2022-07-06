<template>
    <div class="container p-3">
        <h5 class="card-header d-flex justify-content-between align-items-center border-0 p-3">
            {{ title }}
            <a href="/" type="button" class="">
                <b-icon-arrow-left-circle></b-icon-arrow-left-circle>
            </a>
        </h5>

        <div class="mt-2 row">
            <div class="col-lg-3">
                <b-card no-body v-if="userDetil.profile_pict != ''"
                    :img-src="`${$axios.defaults.baseURL}api/user/profile_pict/${userDetil.id}`" img-alt="Image" img-top>

                    <b-card-body>
                        <b-card-title>{{ userDetil.NAMA_LGKP }}</b-card-title>
                    </b-card-body>

                </b-card>
                <b-card no-body v-else
                    img-src="https://images.detik.com/community/media/detikconnectdevel/2015/11/22/442fb49b924aa2e767319a8df0eccb2a.gif"
                    img-alt="No profile pict" img-top>

                    <b-card-body>
                        <b-card-title>{{ userDetil.NAMA_LGKP }}</b-card-title>
                        <a href="/admin/user/change_pict" class="btn btn-outline-primary w-100">
                            <b-icon-image></b-icon-image> Ubah Profile
                        </a>
                    </b-card-body>
                </b-card>
            </div>
            <div class="col-lg-9">
                <b-card>
                    <form @submit.prevent="simpan">
                        <div class="form-group">
                            <label for="">File Foto</label>
                            <b-form-file @change="imageSelected($event)"></b-form-file>
                        </div>
                        <div class="form-group mt-2">
                            <button class="btn btn-outline-primary" type="submit">
                                <b-icon-check-circle></b-icon-check-circle> Simpan
                            </button>
                            <a href="/admin/user/profile" class="btn btn-outline-secondary"><b-icon-arrow-left></b-icon-arrow-left> Kembali</a>
                        </div>
                    </form>
                </b-card>
            </div>
        </div>

    </div>
</template>


<script>
import axios from 'axios'

export default {
    middleware: 'auth',
    layout: 'user_layout',
    head() {
        return {
            title: this.title
        }
    },
    methods: {
        async simpan() {
            let formData = new FormData();
            formData.append('profile_pict', this.file_foto);


            await axios.post('/api/admin/user/save_profile_pict', formData, {
                headers: {
                    Authorization: this.$auth.strategy.token.get(),
                    'content-type': 'multipart/form-data'
                }
            })
            .then(({ data }) => {
                this.$toast.success(data.message);
                this.$router.push('/admin/user/profile');
                console.log(data)
            }).catch((error) => {
                this.$toast.error('Terjadi kesalahan');
            });
        },
        imageSelected(e) {
            this.file_foto = e.target.files[0]
        }
    },
    data() {
        return {
            title: 'Profil Pengguna ',
            file_foto: '',
            userDetil: this.$auth.user
        }
    },
    mounted() {
        // console.log(this.$store.state)
    }
}
</script>