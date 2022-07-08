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
                            <label for="">Nama</label>
                            <input type="text" v-model="userDetil.NAMA_LGKP" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="">Agama</label>
                            <b-form-select v-model="userDetil.AGAMA" :options="opt_agama"></b-form-select>
                        </div>
                        <div class="form-group">
                            <label for="">Tempat Lahir</label>
                            <input type="text" v-model="userDetil.TMPT_LHR" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="">Tanggal Lahir</label>
                            <input type="date" v-model="userDetil.TGL_LHR" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="">Jenis Kelamin</label>
                            <b-form-select v-model="userDetil.JENIS_KLMIN" :options="opt_jk"></b-form-select>
                        </div>
                        <div class="form-group">
                            <label for="">Status Perkawinan</label>
                            <b-form-select v-model="userDetil.STATUS_KAWIN" :options="opt_status_kawin"></b-form-select>
                        </div>
                        <div class="form-group">
                            <label for="">Pendidikan Terakhir</label>
                            <b-form-select v-model="userDetil.PDDK_AKH" :options="opt_pendidikan"></b-form-select>
                        </div>
                        <div class="form-group">
                            <label for="">Pekerjaan</label>
                            <input type="text" v-model="userDetil.JENIS_PKRJN" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="">Alamat (Nama Dusun / Jalan)</label>
                            <input type="text" v-model="userDetil.ALAMAT" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="">RT</label>
                            <input type="number" v-model="userDetil.NO_RT" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="">RW</label>
                            <input type="number" v-model="userDetil.NO_RW" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="">Desa</label>
                            <input type="text" v-model="userDetil.KEL_NAME" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="">Kecamatan</label>
                            <input type="text" v-model="userDetil.KEC_NAME" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="">Kabupaten</label>
                            <input type="text" v-model="userDetil.KAB_NAME" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="">Provinsi</label>
                            <input type="text" v-model="userDetil.PROP_NAME" class="form-control">
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

            this.$axios.post('/api/admin/user/save_profile', formData, {
                headers: {
                    Authorization: this.$auth.strategy.token.get(),
                }
            }).then(({ data }) => {
                this.$toast.success(data.message)
            }).catch((error) => {
                this.$toast.error("Terjadi kesalahan")
            });
        }
    },
    data() {
        return {
            title: 'Edit Profil Pengguna ',
            userDetil: {},
            opt_agama: [
                {value: null, text: 'Pilih Agama'},
                {value: 'ISLAM', text: 'ISLAM'},
                {value: 'KRISTEN PROTESTAN', text: 'KRISTEN PROTESTAN'},
                {value: 'KRISTEN KATOLIK', text: 'KRISTEN KATOLIK'},
                {value: 'HINDU', text: 'HINDU'},
                {value: 'BUDHA', text: 'BUDHA'},
                {value: 'KONGHUCU', text: 'KONGHUCU'},
                {value: 'LAINNYA', text: 'LAINNYA'}
            ],
            opt_jk: [
                { value: null, text: 'Pilih Jenis Kelamin' },
                { value: 'Laki-Laki', text: 'Laki-Laki' },
                { value: 'Perempuan', text: 'Perempuan' },
            ],
            opt_status_kawin: [
                { value: null, text: 'Pilih Status Perkawinan' },
                { value: 'KAWIN', text: 'KAWIN' },
                { value: 'BELUM KAWIN', text: 'BELUM KAWIN' },
            ],
            opt_pendidikan: [
                { value: null, text: 'Pilih Pendidikan Terakhir' },
                { value: 'TK', text: 'TK' },
                { value: 'SD', text: 'SD' },
                { value: 'SMP', text: 'SMP' },
                { value: 'SMA/SMK', text: 'SMA/SMK' },
                { value: 'D1', text: 'D1' },
                { value: 'D2', text: 'D2' },
                { value: 'D3', text: 'D3' },
                { value: 'D4/S1', text: 'D4/S1' },
                { value: 'S2', text: 'S2' },
                { value: 'S3', text: 'S3' },
            ],
        }
    },
    mounted() {
        this.getDetilUser();   
    }
}
</script>