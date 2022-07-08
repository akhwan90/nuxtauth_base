<template>
    <div class="container p-3">
        <h5 class="card-header d-flex justify-content-between align-items-center border-0 p-3">
            {{ title }}
            <a :href="$config.baseURL + '/admin/user/profile'" type="button" class="">
                <b-icon-arrow-left-circle></b-icon-arrow-left-circle>
            </a>
        </h5>

        <div class="mt-2 row">
            <div class="col-lg-3">
                <b-card no-body v-if="userDetil.profile_pict != ''"
                    :img-src="`${$axios.defaults.baseURL}api/user/profile_pict/${userDetil.id}`" img-alt="Image"
                    img-top>
                    <SideMenuUserAction :userDetil="userDetil" />

                </b-card>
                <b-card no-body v-else
                    img-src="https://images.detik.com/community/media/detikconnectdevel/2015/11/22/442fb49b924aa2e767319a8df0eccb2a.gif"
                    img-alt="No profile pict" img-top>
                    <SideMenuUserAction :userDetil="userDetil" />
                </b-card>
            </div>
            <div class="col-lg-9">
                <b-card>
                    <form @submit.prevent="simpan">
                        <div class="form-group">
                            <label for="">NIK</label>
                            <input type="text" v-model="userDetil.NIK" class="form-control">
                        </div>
                        <div class="mt-2">
                            <button type="submit" class="btn btn-outline-primary">
                                <b-icon-check></b-icon-check> Simpan
                            </button>
                            <a :href="$config.baseURL + '/admin/user/profile'" class="btn btn-outline-secondary">
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
import SideMenuUserAction from "@/components/SideMenuUserAction";

export default {
    middleware: 'auth',
    components: {
        SideMenuUserAction
    },
    layout: 'user_layout',
    head() {
        return {
            title: this.title
        }
    },
    methods: {
        getDetilUser() {
            this.$axios.get('/api/admin/get_user', {
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

            this.$axios.post('/api/admin/user/save_activate_nik', formData, {
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
            title: 'Aktifkan NIK ',
            userDetil: {},
        }
    },
    mounted() {
        this.getDetilUser();
    }
}
</script>