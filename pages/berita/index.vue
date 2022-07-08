<template>
	<div class="container p-3">
		<h5 class="card-header border-0 p-3">
			<b-icon-rss></b-icon-rss>
			{{ title }}
			<div class="float-right">
				<a :href="this.$config.baseURL" type="button" class="">
					<b-icon-arrow-left-circle></b-icon-arrow-left-circle>
				</a>
			</div>
		</h5>

		<div class="card mt-3">
			<div class="list-group list-group-flush">
				<a :href="this.$config.baseURL + '/berita/kliping'" class="list-group-item list-group-item-action">E Kliping</a>
				<a :href="this.$config.baseURL + '/berita/pemda'" class="list-group-item list-group-item-action">Berita Pemda</a>
				<!-- <a :href="this.$config.baseURL + '/berita/opd'" class="list-group-item list-group-item-action">Berita OPD</a> -->
			</div>
		</div>

	</div>
</template>


<script>
  	export default {
		layout: 'user_layout',
    	head() {
            return {
          		title: 'Berita'
            }
    	},
		data() {
			return {
				title: '',
			}
		},
		mounted() {}
  	}
</script>
