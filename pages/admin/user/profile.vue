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
                    :img-src="`${$axios.defaults.baseURL}api/user/profile_pict/${userDetil.id}`" img-alt="Image"
                    img-top>

                    <b-card-body>
                        <b-card-title class="text-center">{{ userDetil.NAMA_LGKP }}</b-card-title>
                        <a href="/admin/user/change_pict" class="btn btn-outline-warning w-100">
                            <b-icon-image></b-icon-image> Ubah Foto Profile
                        </a>
                        <a href="/admin/user/edit_profile" class="btn btn-outline-primary w-100 mt-2">
                            <b-icon-pencil></b-icon-pencil> Ubah Profile
                        </a>
                        <a href="/admin/user/change_password" class="btn btn-outline-danger w-100 mt-2">
                            <b-icon-wrench></b-icon-wrench> Ubah Password
                        </a>
                        <a href="/admin/user/nik_activate" v-if="userDetil.is_nik == 0"
                            class="btn btn-outline-info w-100 mt-2">
                            <b-icon-credit-card></b-icon-credit-card> Aktifkan NIK
                        </a>
                        <a href="/admin/user/nip_activate" v-if="userDetil.is_nip == 0"
                            class="btn btn-outline-success w-100 mt-2">
                            <b-icon-briefcase></b-icon-briefcase> Aktifkan NIP
                        </a>
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
                    <b-list-group>
                        <b-list-group-item class="flex-column align-items-start">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Nama</h5>
                            </div>
                            <p class="mb-1">{{ userDetil.NAMA_LGKP }}</p>
                        </b-list-group-item>
                        <b-list-group-item class="flex-column align-items-start">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Email</h5>
                            </div>
                            <p class="mb-1">{{ userDetil.email }}</p>
                        </b-list-group-item>
                        <b-list-group-item class="flex-column align-items-start">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">NIK Aktif</h5>
                            </div>
                            <p class="mb-1 text-success" v-if="userDetil.is_nik == 1">
                                <b-icon-check-circle font-scale="2"></b-icon-check-circle>
                            </p>
                            <p class="mb-1 text-warning" v-else>
                                <b-icon-x-circle font-scale="2"></b-icon-x-circle>
                            </p>
                        </b-list-group-item>
                        <b-list-group-item class="flex-column align-items-start">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">NIP Aktif</h5>
                            </div>
                            <p class="mb-1 text-success" v-if="userDetil.is_nip == 1">
                                <b-icon-check-circle font-scale="2"></b-icon-check-circle>
                            </p>
                            <p class="mb-1 text-warning" v-else>
                                <b-icon-x-circle font-scale="2"></b-icon-x-circle>
                            </p>
                        </b-list-group-item>
                        <b-list-group-item class="flex-column align-items-start">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Nomor HP</h5>
                            </div>
                            <p class="mb-1">{{ userDetil.no_hp }}</p>
                        </b-list-group-item>
                        <b-list-group-item class="flex-column align-items-start">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Terdaftar Sejak</h5>
                            </div>
                            <p class="mb-1">{{ userDetil.create_at }}</p>
                        </b-list-group-item>
                        <b-list-group-item class="flex-column align-items-start">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Jenis Kelamin</h5>
                            </div>
                            <p class="mb-1">{{ userDetil.JENIS_KLMIN }}</p>
                        </b-list-group-item>
                        <b-list-group-item class="flex-column align-items-start">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Tanggal Lahir</h5>
                            </div>
                            <p class="mb-1">{{ userDetil.TGL_LHR }}</p>
                        </b-list-group-item>
                        <b-list-group-item class="flex-column align-items-start">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Provinsi</h5>
                            </div>
                            <p class="mb-1">{{ userDetil.PROP_NAME }}</p>
                        </b-list-group-item>
                        <b-list-group-item class="flex-column align-items-start">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Kabupaten</h5>
                            </div>
                            <p class="mb-1">{{ userDetil.KAB_NAME }}</p>
                        </b-list-group-item>
                        <b-list-group-item class="flex-column align-items-start">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Kecamatan</h5>
                            </div>
                            <p class="mb-1">{{ userDetil.KEC_NAME }}</p>
                        </b-list-group-item>
                        <b-list-group-item class="flex-column align-items-start">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Desa</h5>
                            </div>
                            <p class="mb-1">{{ userDetil.KEL_NAME }}</p>
                        </b-list-group-item>
                        <b-list-group-item class="flex-column align-items-start">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Alamat</h5>
                            </div>
                            <p class="mb-1">{{ userDetil.ALAMAT }}, RT {{ userDetil.NO_RT }} / RW {{ userDetil.NO_RW }}
                            </p>
                        </b-list-group-item>
                    </b-list-group>
                </b-card>
            </div>
        </div>

    </div>
</template>


<script>
export default {
    middleware: 'auth',
    layout: 'user_layout',
    head() {
        return {
            title: this.title
        }
    },
    methods: {
    },
    data() {
        return {
            title: 'Profil Pengguna ',
            userDetil: this.$auth.user
        }
    },
    mounted() {
        // console.log(this.$store.state)
    }
}
</script>