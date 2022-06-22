<template>
	<body>
		
		<div class="container p-3">
			
			<Navbarheader/>
			
			<div class="input-group mb-3 mt-2">
				<input type="text" class="form-control" id="validatedInputGroupCustomFile" required placeholder="Pencarian...">
				<div class="input-group-append">
					<button class="btn btn-outline-secondary" type="button">Cari</button>
				</div>
			</div>
			

			<div v-for="(menu) in menus" :key="menu.id">
				<h4 class="fw-bold mb-3">{{ menu.label }}</h4>
				<div class="row gx-3">
					<div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4" v-for="submenu in menu.submenus" :key="submenu.id">
						<div class="card card-body mb-3 border-0">
							<a :href="submenu.href.replace('{token}', tokenRaw)" :target="submenu.target" class="card-block stretched-link text-dark text-decoration-none text-center">
								<b-icon :icon="submenu.icon" :variant="submenu.color" font-scale="2" class="mb-2"></b-icon>
								<div class="text-truncate mt-1 fs-3">{{ submenu.label }}</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
</template>

<style scoped>
	body {
		background: #eeeeee;
	}
</style>
<script>
  	import { mapMutations } from 'vuex'
	import Navbarheader from "../../components/Navbarheader";
  	
	export default {
    	middleware: 'auth',
		components: {
			Navbarheader
		},
    	head() {
      		title: 'Halaman dashboard admin'
    	},
    	// layout: 'Dashboard',
		methods: {
			getTokenRaw(token) {
				let splitToken = token.split(" ");
				return splitToken[1];
			}
		},
		data() {
			return {
				title: '',
				user: '',
				isAuth: this.$store.state.isAuth,
				token: this.$store.state.apiToken,
				tokenRaw: '',
				menus: [
					{
						id: '1',
						label: 'Layanan Umum',
						icon: false,
						submenus: [
							{
								id: '1.1',
								label: 'Lacakku',
								icon: 'search',
								color: 'info',
								href: 'https://laporku.go.id?token={token}'
							},
							{
								id: '1.2',
								label: 'LaporKu',
								icon: 'person',
								color: 'warning',
								href: 'https://suratku.kulonprogokab.go.id/index.php/auth/sso_redirect?token={token}'
							},
							{
								id: '1.3',
								label: 'Aspirasi DPRD',
								icon: 'hand-index-thumb',
								color: 'danger',
								href: 'https://laporku.go.id?token={token}'
							},
							{
								id: '1.4',
								label: 'WBS',
								icon: 'chat',
								color: 'primary',
								href: 'https://laporku.go.id?token={token}'
							},
							{
								id: '1.5',
								label: 'PBB',
								icon: 'building',
								color: 'success',
								href: 'https://laporku.go.id?token={token}'
							},
							{
								id: '1.6',
								label: 'PDAM',
								icon: 'water',
								color: 'primary',
								href: 'https://laporku.go.id?token={token}'
							}
						]
					},
					{
						id: '2',
						label: 'Layanan Pegawai',
						icon: false,
						submenus: [
							{
								id: '2.1',
								label: 'SuratKu',
								icon: 'envelope',
								color: 'success',
								href: 'https://suratku.go.id?token={token}'
							},
							{
								id: '2.2',
								label: 'Simasneg',
								icon: 'file-person',
								color: 'primary',
								href: 'https://suratku.go.id?token={token}'
							},
							{
								id: '2.3',
								label: 'E-TPP',
								icon: 'file-text',
								color: 'info',
								href: 'https://suratku.go.id?token={token}'
							},
							{
								id: '2.4',
								label: 'E-Layanan',
								icon: 'briefcase',
								color: 'warning',
								href: 'https://suratku.go.id?token={token}'
							},
							{
								id: '2.5',
								label: 'E-Presensi',
								icon: 'geo-alt',
								color: 'danger',
								href: 'https://suratku.go.id?token={token}'
							},
							
						]
					},
					{
						id: '3',
						label: 'Informasi Publik',
						icon: false,
						submenus: [
							{
								id: '3.1',
								label: 'Berita',
								icon: 'rss',
								color: 'primary',
								href: '/admin/berita'
							},
							{
								id: '3.2',
								label: 'Video',
								icon: 'collection-play',
								color: 'success',
								href: '/admin/video'
							},
							{
								id: '3.3',
								label: 'CCTV',
								icon: 'camera-video',
								color: 'danger',
								href: 'https://mam.jogjaprov.go.id/',
								target: '_blank'
							},
							{
								id: '3.4',
								label: 'Agenda',
								icon: 'calendar-check',
								color: 'warning',
								href: '/admin/agenda'
							},
							{
								id: '3.5',
								label: 'RSUD',
								icon: 'patch-plus',
								color: 'info',
								href: '/admin/rsud'
							},
							{
								id: '3.6',
								label: 'Hukum',
								icon: 'inbox',
								color: 'primary',
								href: 'https://jdih.kulonprogokab.go.id',
								target: '_blank'
							},
							{
								id: '3.7',
								label: 'Perijinan',
								icon: 'pin',
								color: 'success',
								href: '/admin/perijinan'
							},
							{
								id: '3.8',
								label: 'PPID',
								icon: 'question-circle',
								color: 'danger',
								href: 'https://ppid.kulonprogokab.go.id',
								target: '_blank'
							},
							{
								id: '3.9',
								label: 'Satu Data',
								icon: 'slack',
								color: 'warning',
								href: 'https://satudata.kulonprogokab.go.id',
								target: '_blank'
							},
							{
								id: '3.10',
								label: 'Harga Kebutuhan',
								icon: 'cart-check',
								color: 'info',
								href: 'https://sikepoku.kulonprogokab.go.id/',
								target: '_blank'
							},
							{
								id: '3.13',
								label: 'Loker',
								icon: 'briefcase',
								color: 'success',
								href: '/admin/loker'
							}
						]
					},
					{
						id: '4',
						label: 'Informasi Tempat',
						icon: false,
						submenus: [
							{
								id: '4.1',
								label: 'Pemerintahan',
								icon: 'bank',
								color: 'danger',
								href: '/admin/berita'
							},
							{
								id: '4.2',
								label: 'Pendidikan',
								icon: 'book',
								color: 'warning',
								href: '/admin/berita'
							},
							{
								id: '4.3',
								label: 'Kesehatan',
								icon: 'thermometer',
								color: 'success',
								href: '/admin/berita'
							},
							{
								id: '4.4',
								label: 'Pariwisata',
								icon: 'signpost-2',
								color: 'info',
								href: '/admin/berita'
							},
							{
								id: '4.5',
								label: 'Perdagangan',
								icon: 'bag-check',
								color: 'primary',
								href: '/admin/berita'
							},
							{
								id: '4.6',
								label: 'Kepemudaan',
								icon: 'controller',
								color: 'danger',
								href: '/admin/berita'
							},
							{
								id: '4.7',
								label: 'Pertanian',
								icon: 'tree',
								color: 'warning',
								href: '/admin/berita'
							},
							{
								id: '4.8',
								label: 'Transportasi',
								icon: 'truck',
								color: 'success',
								href: '/admin/berita'
							},
							{
								id: '4.9',
								label: 'Komunikasi',
								icon: 'reception-4',
								color: 'info',
								href: '/admin/berita'
							},
							{
								id: '4.10',
								label: 'Lingkungan',
								icon: 'recycle',
								color: 'success',
								href: '/admin/berita'
							},
							{
								id: '4.11',
								label: 'Kamtibmas',
								icon: 'peace',
								color: 'primary',
								href: '/admin/berita'
							},
							{
								id: '4.12',
								label: 'Perbankan',
								icon: 'wallet2',
								color: 'danger',
								href: '/admin/berita'
							},
						]
					}
				]
			}
		},
		mounted() {
			this.token = this.$auth.strategy.token.get()
			this.user = this.$auth.user.username
			this.title = 'Halaman Admin';
			this.tokenRaw = this.getTokenRaw(this.token);

			console.log(this.$auth.strategy.token.get());
		}
  	}
</script>
