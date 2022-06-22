<template>
		<div class="container p-3">
            <h5 class="card-header d-flex justify-content-between align-items-center border-0 p-3">
                {{ title }}
                <a href="/admin/berita" type="button" class="">
                    <b-icon icon="arrow-left-circle" variant="danger" class="float-right mr-5"></b-icon>
                </a>
            </h5>

            <div class="mt-3">
                <div class="row">
                    <div class="col-lg-6 col-sm-12" v-for="berita in beritas" :key="berita.id">
                        <div class="card mt-2">
                            <img :src="berita.gambar" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">{{ berita.judul }}</h5>
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
    	// middleware: 'auth',
    	head() {
            return {
          		title: this.title
            }
    	},
		data() {
			return {
				title: '',
				tokenRaw: '',
                beritas: [],
			}
		},
		methods: {
            async getBerita() {
                try {
                    axios.get('/api/berita/kliping',
                        {
                            headers: {
                                'Authorization': this.$auth.strategy.token.get()
                            }
                        }
                    ).then(({ data }) => {
                        console.log(data.data)
                        this.beritas.push(...data.data)
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
			this.title = 'Kliping Media Cetak';
            this.getBerita();
		}
  	}
</script>
