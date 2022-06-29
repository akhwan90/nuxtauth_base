<template>
	<div class="container p-3">
		<h5 class="card-header border-0 p-3">
			<b-icon-rss></b-icon-rss>
			{{ title }}
			<div class="float-right">
				<a href="/" type="button" class="">
					<b-icon-arrow-left-circle></b-icon-arrow-left-circle>
				</a>
			</div>
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
          		title: this.title,
				bodyAttrs: {
					style: 'background-image: url(https://www.toptal.com/designers/subtlepatterns/uploads/full-bloom.png);'
				}
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
