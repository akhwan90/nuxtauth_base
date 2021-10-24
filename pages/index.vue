<template>
  <div class="card mt-3">
    <div class="card-header">
      <h5>{{ title }}</h5>
    </div>
    <div class="card-body">
      <p>Anda Login sebagai : <b> {{ user }} </b></p>
    </div>

  </div>

</template>

<script>
  export default {
    head() {
      title: 'Halaman dashboard admin'
    },
    layout: 'Front',
    // middleware: 'auth',
    methods: {
      // function()
    },
    data() {
      return {
        title: '',
        token: '',
        user: '',
      }
    },
    mounted() {
      // this.token = this.$auth.strategy.token.get()
      // this.user = this.$auth.user.username

      // axios('http://sambat.test/api_tes', {
      // 	crossDomain: true
      // }).then( ({ data }) => {
      // 	this.allPost = data.articles
      // 	data.articles.map((item, key) => {
      // 		if (item.description !== null && this.posts.length < 9) {
      // 			this.posts.push(item)
      // 		}
      // 	})
      // })
      this.title = 'Halaman Admin';
    }
  }
</script>
