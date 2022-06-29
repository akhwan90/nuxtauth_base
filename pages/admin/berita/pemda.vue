<template>
    <div class="container p-3">
        <h5 class="card-header border-0 p-3">
            <b-icon-rss></b-icon-rss>
            {{ title }}
            <div class="float-right">
                <a href="/admin/berita" type="button" class="">
                    <b-icon-arrow-left-circle></b-icon-arrow-left-circle>
                </a>
            </div>
        </h5>

        <div class="mt-3">
            <div class="row">
                <div class="col-lg-6 col-sm-12" v-for="berita in beritas" :key="berita.id">
                    <div class="card mt-2">
                        <img :src="berita.gambar" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">{{ berita.judul }}</h5>
                            <p class="card-text" v-html="berita.konten.substring(0, 200)+' ...'"></p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
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
                title: this.title,
                bodyAttrs: {
                    style: 'background-image: url(https://www.toptal.com/designers/subtlepatterns/uploads/full-bloom.png);'
                }
            }
    	},
		data() {
			return {
				title: '',
				// tokenRaw: '',
                beritas: [],
			}
		},
		methods: {
            async getBerita() {
                try {
                    axios.get('/api/berita/pemda').then(({ data }) => {
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
			this.title = 'Berita Pemda';
            this.getBerita();
		}
  	}
</script>
