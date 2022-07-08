<template>
    <div class="container p-3">
        <h5 class="card-header border-0 p-3">
            <b-icon-rss></b-icon-rss>
            {{ title }}
            <div class="float-right">
                <a :href="this.$config.baseURL + '/berita'" type="button" class="">
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
                title: 'Kliping Media Cetak',
				tokenRaw: '',
                beritas: [],
			}
		},
		methods: {
            async getBerita() {
                try {
                    this.$axios.get('/api/berita/kliping')
                    .then(({ data }) => {
                        this.beritas.push(...data.data)
                    }).catch((error) => {
                        this.$toast.error('Terjadi kesalahan')
                    });

                } catch (err) {
                    this.$toast.error('Terjadi kesalahan')
                }
            }
		},
		mounted() {
            this.getBerita();
		}
  	}
</script>
