<template>
	<div class="container col-xl-10 col-xxl-8 px-4 py-5">
		<div class="row align-items-center g-lg-5 py-5">
			<div class="col-lg-7 text-center text-lg-start">
				<h1 class="display-4 fw-bold lh-1 mb-3">Input kode aktivasi registrasi jendelaKu</h1>
				<p class="col-lg-10 fs-4">Kode aktivasi akun jendelaKu, dapat dicek di inbox email atau SMS. Jika tidak
					masuk di
					folder inbox, bisa dicek di folder SPAM</p>
			</div>
			<div class="col-md-10 mx-auto col-lg-5">
				<form @submit.prevent="userResetPassword">
					<div class="form-floating mb-3">
						<label for="floatingInput">Masukkan kode yang dikirimkan</label>
						<input type="text" class="form-control" id="floatingInput" v-model="reset.verification_code">
					</div>
					<button class="w-100 btn btn-lg btn-primary" type="submit">
						<b-icon-check-circle></b-icon-check-circle> Aktifkan
					</button>

					<!-- <hr class="my-4">
                    <small class="text-muted">Masukkan username dan password yang benar</small> -->
				</form>
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
			title: 'Masukkan kode registrasi akun JendelaKu',
			reset: {
				verification_code: '',
			}
		}
	},
	methods: {
		userResetPassword() {
			const formData = new FormData();
			formData.append('verification_code', this.reset.verification_code);
			formData.append('email', this.$route.query.email);
			formData.append('no_hp', this.$route.query.no_hp);

			this.$axios.post("api/activate", formData)
				.then((response) => {
					window.location.href = this.$config.baseURL + '/login';
					console.log(response);
				})
				.catch((error) => {
					this.$toast.error("Terjadi kesalahan..")
					console.log(error);
				});
		}
	}
}
</script>