<template>
    <div class="container p-3">
        <h5 class="card-header border-0 p-3">
            <b-icon-briefcase></b-icon-briefcase>
            {{ title }}
            <div class="float-right">
                <a :href="this.$config.baseURL + '/loker'" type="button" class="">
                    <b-icon-arrow-left-circle></b-icon-arrow-left-circle>
                </a>
            </div>
        </h5>

        <div class="mt-3">
            <div class="row">
                <div class="col-lg-12 col-sm-12">
                    <div class="card mt-2">
                        <div class="card-body">

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
            title: this.title
        }
    },
    data() {
        return {
            title: 'Lowongan Kerja Detil',
            loker: null,
        }
    },
    methods: {
        async getLokerDetil() {
            console.log(this.$route.params.id)
            try {
                this.$axios.get('/api/loker/detil/')
                .then(({ data }) => {
                    // console.log(data.data)
                    // this.lokers.push(...data.data)
                }).catch((error) => {
                    // if (error.response) {
                    //     this.$notify({
                    //         title: 'Kesalahan',
                    //         type: 'error',
                    //         text: error.response.message
                    //     })
                    // }
                });

            } catch (err) {
                console.log(err)
            }
        }
    },
    mounted() {
        this.getLokerDetil();
    }
}
</script>
