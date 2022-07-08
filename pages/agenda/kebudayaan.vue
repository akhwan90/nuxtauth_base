<template>
    <div class="container p-3">
        <h5 class="card-header border-0 p-3">
            <b-icon-calendar-check></b-icon-calendar-check>
            {{ title }}
            <div class="float-right">
                <a :href="this.$config.baseURL + '/agenda'" type="button" class="">
                    <b-icon-arrow-left-circle></b-icon-arrow-left-circle>
                </a>
            </div>
        </h5>

        <div class="mt-3">
            <div class="row">
                <div class="col-lg-6 col-sm-12" v-for="data in agendas" :key="data.id">
                    <div class="card mt-2">
                        <img :src="baseUrlImage+data.filenya" v-if="data.filenya != null" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">{{ data.judul }}</h5>
                            <p class="card-text" v-html="data.isi.substring(0, 200)+' ...'"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>


<script>
export default {
    layout: 'user_layout',
    head() {
        return {
            title: this.title,
        }
    },
    data() {
        return {
            title: 'Agenda Kebudayaan',
            agendas: [],
            baseUrlImage: 'https://disbud.kulonprogokab.go.id/files/agenda/',
        }
    },
    methods: {
        async getAgenda() {
                try {
                    this.$axios.get('/api/agenda/kebudayaan')
                    .then(({ data }) => {
                        this.agendas.push(...data.data)
                    }).catch((error) => {
                        this.$toast.error('Terjadi kesalahan')
                    });

                } catch (err) {
                    this.$toast.error('Terjadi kesalahan')
                }
            }
    },
    mounted() {
        this.getAgenda()
    }
}
</script>