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
                            <label for="">NIP</label>
                            <input type="text" v-model="userDetil.nip" class="form-control">
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
        getDetilUser() {
            axios.get('/api/admin/get_user', {
                headers: {
                    Authorization: this.$auth.strategy.token.get(),
                }
            }).then(({ data }) => {
                this.userDetil = data.user;
            }).catch((error) => {
                console.log(error)
            });
        },
        simpan() {
            let formData = new FormData();
            formData = this.userDetil;

            axios.post('/api/admin/user/save_activate_nip', formData, {
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
                console.log(error.response.data.error);
                this.$toast.error(error.response.data.error)
            });
        }
    },
    data() {
        return {
            title: 'Aktifkan NIP ',
            userDetil: {},
        }
    },
    mounted() {
        this.getDetilUser();
    }
}
</script>