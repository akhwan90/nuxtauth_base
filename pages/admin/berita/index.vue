<template>
		<div class="container p-3">
            <h5 class="card-header d-flex justify-content-between align-items-center border-0 p-3">
                {{ title }}
                <a href="/admin/dashboard" type="button" class="">
                    <b-icon icon="arrow-left-circle" variant="danger" class="float-right mr-5"></b-icon>
                </a>
            </h5>

            <div class="card mt-3">
				<div class="list-group list-group-flush">
					<a href="/admin/berita/kliping" class="list-group-item list-group-item-action">E Kliping</a>
					<a href="/admin/berita/pemda" class="list-group-item list-group-item-action">Berita Pemda</a>
					<a href="/admin/berita/opd" class="list-group-item list-group-item-action">Berita OPD</a>
				</div>
            </div>
            
		</div>
</template>


<script>
  	import { mapMutations } from 'vuex'
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
			}
		},
		mounted() {
			this.title = 'Berita';
		}
  	}
</script>
