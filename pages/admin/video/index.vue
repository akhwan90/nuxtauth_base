<template>
    <div class="container p-3">
        <h5 class="card-header border-0 p-3">
            <b-icon-collection-play></b-icon-collection-play>
            {{ title }}
            <div class="float-right">
                <a href="/" type="button" class="">
                    <b-icon-arrow-left-circle></b-icon-arrow-left-circle>
                </a>
            </div>
        </h5>

        <div class="card mt-3">
            <div class="list-group list-group-flush">
                <a href="https://www.youtube.com/channel/UC9_-BtLTD8oQ7druxMYWU2A" target="_blank" class="list-group-item list-group-item-action"><b-icon-youtube></b-icon-youtube> Youtube Kulonprogo TV</a>
                <a href="#" v-b-modal.modal-1 class="list-group-item list-group-item-action"><b-icon-youtube></b-icon-youtube> Youtube OPD</a>
            </div>
        </div>

        <b-modal id="modal-1" size="lg" title="Kanal Youtube OPD" ok-only>
            <div class="card">
                <div class="list-group list-group-flush">
                    <a :href="youtubeOPD.url" target="_blank" class="list-group-item list-group-item-action" v-for="youtubeOPD in youtubeOPDs" :key="youtubeOPD.id"><b-icon-youtube></b-icon-youtube> {{ youtubeOPD.label }}</a>
                </div>
            </div>
        </b-modal>
    </div>
    
</template>


<script>
export default {
    // middleware: 'auth',
    head() {
        return {
            title: this.title
        }
    },
    methods: {
    },
    data() {
        return {
            title: 'Video',
            youtubeOPDs: [
                {
                    id: 1,
                    label: 'Dinas Pertanian dan Pangan',
                    url: 'https://www.youtube.com/channel/UC8A2egZXZEH03MFGCY7T1dw'
                },
                {
                    id: 2,
                    label: 'Dinas Lingkungan Hidup',
                    url: 'https://www.youtube.com/channel/UCVy1TFo4XB5UIJVkF3fehIg'
                },
                {
                    id: 3,
                    label: 'Dinas Perpustakaan',
                    url: 'https://www.youtube.com/channel/UCiRuYhY5pdpzToSEqik2SGQ'
                },
                {
                    id: 4,
                    label: 'Dinas Tenaga Kerja dan Transmigrasi',
                    url: 'https://www.youtube.com/channel/UCH97azhZYVMwDY-EqQ0mFig'
                },
                {
                    id: 5,
                    label: 'Dinas Kebudayaan',
                    url: 'https://www.youtube.com/channel/UCL7saNh-dBSC-RBDFyim3dg'
                },
                {
                    id: 6,
                    label: 'Dinas Kesehatan',
                    url: 'https://www.youtube.com/channel/UC-yOOMBeQJ8Wdm3WLfvbrxw'
                },
                {
                    id: 7,
                    label: 'Dinas Pendidikan',
                    url: 'https://www.youtube.com/c/DinasDikporaKulonProgo'
                },
                {
                    id: 8,
                    label: 'Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu',
                    url: 'https://www.youtube.com/channel/UCYOx6gAkFr6iFd79Cgvz8zw'
                },
            ]
        }
    },
    mounted() {
        // console.log(this.$store.state)
    }
}
</script>