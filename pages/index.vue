<template>
    <div class=" container p-3">

        <Navbarheader />

        <div class="input-group mb-3 mt-2">
            <input type="search" class="form-control" id="validatedInputGroupCustomFile" required
                placeholder="Pencarian..." v-model="katakunci" @keyup.enter="cariMenu">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" @click="cariMenu">Cari</button>
            </div>
        </div>

        <!-- 
        <b-carousel id="carousel-1" :interval="3000" controls indicators background="#ababab" img-width="1024"
            img-height="480">
        <b-carousel-slide caption="First slide" text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="https://picsum.photos/1024/480/?image=52"></b-carousel-slide>

        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
            <h1>Hello world!</h1>
        </b-carousel-slide>

        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

        <b-carousel-slide>
            <template #img>
                <img class="d-block img-fluid w-100" width="1024" height="480"
                    src="https://picsum.photos/1024/480/?image=55" alt="image slot">
            </template>
        </b-carousel-slide>
        </b-carousel>
        -->

        <div v-if="!searchMenu">
            <div v-for="(menu) in menus" :key="menu.id" data-aos="fade-up" data-aos-duration="1000" class="mt-4">
                <h4 class="fw-bold mb-3 text-primary mt-2">{{ menu.label }}</h4>
                <div class="row gx-3">
                    <div class="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-xs-2 col-4" v-for="submenu in menu.submenus"
                        :key="submenu.id">
                        <div class="card card-menu card-body mb-3 border-0">
                            <a href="#" :title="submenu.label" @click.prevent="openMenu(submenu)"
                                :target="submenu.target"
                                class="card-block stretched-link text-dark text-decoration-none text-center">
                                <b-icon :icon="submenu.icon" :variant="submenu.color" font-scale="2" class="mb-2">
                                </b-icon>
                                <div class="text-truncate mt-1 fs-3">{{ submenu.label }}</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="row gx-3 mt-4">
                <div class="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-xs-2 col-4" v-for="menu in menus" :key="menu.id">
                    <div class="card card-menu card-body mb-3 border-0">
                        <a href="#" :title="menu.label" @click.prevent="openMenu(menu)" :target="menu.target"
                            class="card-block stretched-link text-dark text-decoration-none text-center">
                            <b-icon :icon="menu.icon" :variant="menu.color" font-scale="2" class="mb-2">
                            </b-icon>
                            <div class="text-truncate mt-1 fs-3">{{ menu.label }}</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .card-menu:hover {
        box-shadow: 0 40px 60px -20px rgba(12, 5, 62, 0.15);
        border: solid 3px #333;
        z-index: 100;
    }
</style>
<script>
import Navbarheader from "../components/Navbarheader";

export default {
    components: {
        Navbarheader
    },
    head() {
        return {
            title: 'jendelaKU - Single App Kulon Progo',
        }
    },
    layout: 'user_layout',
    methods: {
        getMenu() {
            this.searchMenu = false
            this.$axios.get("/api/menu")
                .then((response) => {
                    this.menus = response.data.data;
                })
                .catch((error) => {
                    console.log(error)
                });
        },
        cariMenu() {
            if (this.katakunci.length > 2) {
                this.searchMenu = true
                this.$axios.get("api/menu?q="+this.katakunci)
                    .then((response) => {
                        this.menus = response.data.data;
                        this.$toast.error('Ditemukan '+response.data.data.length+' menu');
                    })
                    .catch((error) => {
                        console.log(error)
                    });
            } else {
                this.$toast.success('Kata kunci minimal 3 huruf..');
                this.getMenu()
            }
        },
        openMenu(submenu) {
            let is_nik = 0;
            let is_nip = 0;

            if (this.$auth.loggedIn) {
                is_nik = this.$auth.user.is_nik;
                is_nip = this.$auth.user.is_nip;
            }
            
            if (submenu.is_nip) {
                if (is_nip == 1) {
                    this.openHref(submenu);
                } else {
                    this.$toast.error('no')
                }
                return;
            }

            if (submenu.is_nik) {
                if (is_nik == 1) {
                    this.openHref(submenu);
                } else {
                    this.$toast.error('no')
                }
                return;
            }

            if (submenu.is_login) {
                if (this.$auth.loggedIn) {
                    this.openHref(submenu);
                } else {
                    this.$toast.error('no')
                }
                return;
            }

            this.openHref(submenu);
        },
        openHref(submenu) {
            let tujuan = submenu.href.replace("{token}", this.token);

            if (submenu.target == "new_window") {
                window.open(tujuan, '_blank');
            } else {
                window.location.href = this.$config.baseURL + tujuan;
            }
        }
    },
    data() {
        return {
            title: '',
            user: '',
            gambarSlider: [
                'https://via.placeholder.com/1100x190.png?text=Tes1',
                'https://via.placeholder.com/1100x190.png?text=Tes2',
            ],
            menus: null,
            searchMenu: false,
            katakunci: '',
            token: ''
        }
    },
    mounted() {
        this.getMenu();
        this.searchMenu = false;
        
        let token = this.$auth.strategy.token.get();
        if (token) {
            let pc_token = token.split(" ");
            if (pc_token) {
                this.token = pc_token[1];
            }
        }
    }
}
</script>
