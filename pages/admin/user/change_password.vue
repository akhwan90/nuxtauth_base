<template>
    <div class="container p-3">
        <h5 class="card-header d-flex justify-content-between align-items-center border-0 p-3">
            {{ title }}
            <a href="/admin/user/profile" type="button" class="">
                <b-icon-arrow-left-circle></b-icon-arrow-left-circle>
            </a>
        </h5>

        <div class="mt-2 row">
            <div class="col-lg-3">
                <b-card no-body v-if="userDetil.profile_pict != ''"
                    :img-src="`${$axios.defaults.baseURL}api/user/profile_pict/${userDetil.id}`" img-alt="Image"
                    img-top>

                    <b-card-body>
                        <b-card-title class="text-center">{{ userDetil.NAMA_LGKP }}</b-card-title>

                    </b-card-body>

                </b-card>
                <b-card no-body v-else
                    img-src="https://images.detik.com/community/media/detikconnectdevel/2015/11/22/442fb49b924aa2e767319a8df0eccb2a.gif"
                    img-alt="No profile pict" img-top>
                    <b-card-body>
                        <b-card-title>{{ userDetil.NAMA_LGKP }}</b-card-title>
                    </b-card-body>
                </b-card>
            </div>
            <div class="col-lg-9">
                <b-card>
                    <form @submit.prevent="simpan">
                        <div class="form-group">
                            <label for="">Password Baru</label>
                            <input type="password" v-model="new_password.password1" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="">Ulangi Password Baru</label>
                            <input type="password" v-model="new_password.password2" class="form-control">
                        </div>
                        <div class="mt-2">
                            <button type="submit" class="btn btn-outline-primary">
                                <b-icon-check></b-icon-check> Simpan
                            </button>
                            <a href="/admin/user/profile" class="btn btn-outline-secondary">
                                <b-icon-arrow-left></b-icon-arrow-left> Kembali
                            </a>
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
        simpan() {
            let formData = new FormData();
            formData = this.new_password;

            axios.post('/api/admin/user/save_password', formData, {
                headers: {
                    Authorization: this.$auth.strategy.token.get(),
                }
            }).then(({ data }) => {
                if (data.success) {
                    this.$toast.success(data.message)
                } else {
                    this.$toast.error(data.message)
                }
            }).catch((error) => {
                this.$toast.error(error.response.data.error)
            });
        }
    },
    data() {
        return {
            title: 'Ubah Password ',
            userDetil: this.$auth.user,
            new_password: {
                password1: '',
                password2: '',
            }
        }
    },
    mounted() {
    }
}
</script>