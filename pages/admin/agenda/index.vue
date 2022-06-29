<template>
    <div class="container p-3">
        <h5 class="card-header border-0 p-3">
            <b-icon-calendar-check></b-icon-calendar-check>
            {{ title }}
            <div class="float-right">
                <a href="/" type="button" class="">
                    <b-icon-arrow-left-circle></b-icon-arrow-left-circle>
                </a>
            </div>
        </h5>

        <div class="card mt-3">
            <div class="list-group list-group-flush">
                <a href="/admin/agenda/pariwisata" class="list-group-item list-group-item-action"><b-icon-arrow-right-circle></b-icon-arrow-right-circle> Agenda Pariwisata</a>
                <a href="/admin/agenda/kebudayaan" class="list-group-item list-group-item-action"><b-icon-arrow-right-circle></b-icon-arrow-right-circle> Agenda Kebudayaan</a>
            </div>
        </div>
    </div>
    
</template>


<script>
export default {
    // middleware: 'auth',
    head() {
        return {
            title: this.title,
            bodyAttrs: {
                style: 'background-image: url(https://www.toptal.com/designers/subtlepatterns/uploads/full-bloom.png);'
            }
        }
    },
    methods: {
    },
    data() {
        return {
            title: 'Agenda',
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