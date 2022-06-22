<template>
	<div class="container height-100 d-flex justify-content-center align-items-center mt-5"> 
		<div class="position-relative"> 
			<div class="card p-2 text-center"> 
				<h6>Masukkan kode aktifasi <br> yang dikirimkan ke email dan SMS </h6> 
				<div id="otp" class="inputs d-flex flex-row justify-content-center mt-2"> 
					<input class="m-2 text-center form-control rounded" v-model="verification_code[0]" type="text" id="first" maxlength="1"/> 
					<input class="m-2 text-center form-control rounded" v-model="verification_code[1]" type="text" id="second" maxlength="1" /> 
					<input class="m-2 text-center form-control rounded" v-model="verification_code[2]" type="text" id="third" maxlength="1" /> 
					<input class="m-2 text-center form-control rounded" v-model="verification_code[3]" type="text" id="fourth" maxlength="1" /> 
					<input class="m-2 text-center form-control rounded" v-model="verification_code[4]" type="text" id="fifth" maxlength="1" /> 
					<input class="m-2 text-center form-control rounded" v-model="verification_code[5]" type="text" id="sixth" maxlength="1" /> 
				</div> 
				<div class="mt-4"> 
					<button class="btn btn-danger px-4 validate" @click="activation">Aktifasi</button> 
				</div> 
			</div> 
			<div class="card-2"> 
				<div class="content d-flex justify-content-center align-items-center"> <span>Didn't get the code ?</span> 
				<a href="#" class="text-decoration-none ms-3 ml-2">Resend(1/3)</a> 
				</div> 
			</div> 
		</div>
	</div>
</template>

<style scoped>
	.height-100{
		height:100vh
		}
	.card{
		width:400px;
		border:none;
		height:300px;
		box-shadow: 0px 5px 20px 0px #d2dae3;
		z-index:1;
		display:flex;
		justify-content:center;
		align-items:center
	}
	.inputs input{
		width:40px;
		height:40px
	}
	input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button{
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		margin: 0
	}
	.card-2{
		background-color:#fff;
		padding:10px;
		width:350px;
		height:100px;
		bottom:-50px;
		left:20px;
		position:absolute;
		border-radius:5px;
		box-shadow: 0px 5px 20px 0px #d2dae3;
	}
	.card-2 .content{
		margin-top:50px
	}
	.card-2 .content a{
		color:red
	}
	.form-control:focus{
		box-shadow:none;
		border:2px solid red
	}
	.validate{
		border-radius:20px;
		height:40px;
		background-color:red;
		border:1px solid red;
		width:140px
	}
</style>
<script>
  	
	export default {
    	head() {
			return {
	      		title: 'Aktivasi registrasi'
			}
    	},
    	// layout: 'Dashboard',
		methods: {
			otp_input() {
				const inputs = document.querySelectorAll("#otp > *[id]");
				for (let i = 0; i < inputs.length; i++) {
					inputs[i].addEventListener("keydown", function (event) {
						if (event.key === "Backspace") {
							inputs[i].value = "";
							if (i !== 0) inputs[i - 1].focus();
						} else {
							if (i === inputs.length - 1 && inputs[i].value !== "") {
								return true;
							} else if (event.keyCode > 47 && event.keyCode < 58) {
								inputs[i].value = event.key;
								if (i !== inputs.length - 1) inputs[i + 1].focus();
								event.preventDefault();
							} else if (event.keyCode > 64 && event.keyCode < 91) {
								inputs[i].value = String.fromCharCode(event.keyCode);
								if (i !== inputs.length - 1) inputs[i + 1].focus();
								event.preventDefault();
							}
						}
					});
				}
			},
			activation() {
				let verification_code_join = Object.values(this.verification_code).join("");

				const formData = new FormData();
				formData.append('verification_code', verification_code_join);
				formData.append('email', this.$route.query.email);
				formData.append('no_hp', this.$route.query.no_hp);

				this.$axios.post("api/activate", formData)
				.then((response) => {
					alert(response.data.message)
                    this.$router.push('/login')
					// alert(response.message)
				})
				.catch((error) => {
					alert(error.response.data.message)
					// alert(error.data.message)
					// this.notifmsg = error.response.data.error
				});
			}
		},
		data() {
			return {
				title: '',
				user: '',
				verification_code: ['1', '4', '0', '3', '5', '3'],
			}
		},
		mounted() {
			// this.otp_input();
		}
  	}
</script>
