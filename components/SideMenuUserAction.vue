<template>
    <b-card-body>
        <b-card-title class="text-center">{{ userDetil.NAMA_LGKP }}</b-card-title>
        <a :href="$config.baseURL + '/admin/user/change_pict'" class="btn btn-outline-warning w-100">
            <b-icon-image></b-icon-image> Ubah Foto Profile
        </a>
        <a :href="$config.baseURL + '/admin/user/edit_profile'" class="btn btn-outline-primary w-100 mt-2">
            <b-icon-pencil></b-icon-pencil> Ubah Profile
        </a>
        <a :href="$config.baseURL + '/admin/user/change_password'" class="btn btn-outline-danger w-100 mt-2">
            <b-icon-wrench></b-icon-wrench> Ubah Password
        </a>
        <a :href="$config.baseURL + '/admin/user/nik_activate'" v-if="userDetil.is_nik == 0"
            class="btn btn-outline-info w-100 mt-2">
            <b-icon-credit-card></b-icon-credit-card> Aktifkan NIK
        </a>
        <a :href="$config.baseURL + '/admin/user/nip_activate'" v-if="userDetil.is_nip == 0"
            class="btn btn-outline-success w-100 mt-2">
            <b-icon-briefcase></b-icon-briefcase> Aktifkan NIP
        </a>
    </b-card-body>
</template>

<script>
export default {
    props: ['userDetil'],
}
</script>