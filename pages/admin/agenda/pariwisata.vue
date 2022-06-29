<template>
    <div class="container p-3">
        <h5 class="card-header border-0 p-3">
            <b-icon-calendar-check></b-icon-calendar-check>
            {{ title }}
            <div class="float-right">
                <a href="/admin/agenda" type="button" class="">
                    <b-icon-arrow-left-circle></b-icon-arrow-left-circle>
                </a>
            </div>
        </h5>

        <div class="mt-3">
            <div class="row">
                <div class="col-lg-6 col-sm-12" v-for="data in agendas" :key="data.id">
                    <div class="card mt-2">
                        <img :src="baseUrlImage+data.ipost" v-if="data.ipost != null" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">{{ data.post_title }}</h5>
                            <p class="card-text" v-html="data.post_content.substring(0, 200)+' ...'"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
</template>


<script>
import axios from 'axios'

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
    data() {
        return {
            title: 'Agenda Pariwisata',
            agendas: [],
            baseUrlImage: 'https://dinpar.kulonprogokab.go.id/upload/crop/360/217/',
        }
    },
    methods: {
        async getAgenda() {
                try {
                    axios.get('/api/agenda/pariwisata',
                        {
                            headers: {
                                'Authorization': this.$auth.strategy.token.get()
                            }
                        }
                    ).then(({ data }) => {
                        console.log(data)
                        this.agendas.push(...data.data)
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
        this.getAgenda()
        // console.log(this.$store.state)
    }
}
</script>