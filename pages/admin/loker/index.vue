<template>
    <div class="container p-3">
        <h5 class="card-header border-0 p-3">
            <b-icon-briefcase></b-icon-briefcase>
            {{ title }}
            <div class="float-right">
                <a href="/admin/dashboard" type="button" class="">
                    <b-icon-arrow-left-circle></b-icon-arrow-left-circle>
                </a>
            </div>
        </h5>

        <div class="mt-3">
            <div class="row">
                <div class="col-lg-6 col-sm-12" v-for="loker in lokers" :key="loker.id">
                    <div class="card mt-2">
                        <div class="card-body">
                            <h5 class="card-title">{{ loker.judul }}</h5>
                            <p class="card-text">{{ loker.name }}, Pendidikan minimal {{ loker.min_education }}</p>
                            <a :href="'/admin/loker/'+loker.id" class="btn btn-primary">Detil</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
import { mapMutations } from 'vuex'
import axios from 'axios'

export default {
    middleware: 'auth',
    head() {
        return {
            title: this.title
        }
    },
    data() {
        return {
            title: 'Lowongan Kerja',
            tokenRaw: '',
            lokers: [],
        }
    },
    methods: {
        async getLoker() {
            try {
                axios.get('/api/loker',
                    {
                        headers: {
                            'Authorization': this.$auth.strategy.token.get()
                        }
                    }
                ).then(({ data }) => {
                    console.log(data.data)
                    this.lokers.push(...data.data)
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
        this.getLoker();
    }
}
</script>
