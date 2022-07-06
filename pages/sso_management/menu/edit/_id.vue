<template>
    <div class="container-fluid p-3">
        <h5 class="card-header border-0 p-3">
            <b-icon-key-fill></b-icon-key-fill>
            {{ title }}
            <div class="float-right">
                <a href="/" type="button" class="">
                    <b-icon-arrow-left-circle></b-icon-arrow-left-circle>
                </a>
            </div>
        </h5>

        <div class="row">
            <div class="col-lg-3">
                <SidebarMenuSSOManagement />
            </div>
            <div class="col-lg-9">
                <div class="card mt-3">
                    <div class="card-header">
                        {{ title }}
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="simpan" ref="form">
                            <input type="hidden" v-model="detil_data.id">
                            <input type="hidden" v-model="detil_data.mode">
                            <div class="form-group">
                                <label for="">ID 1</label>
                                <select v-model="detil_data.id1" class="form-control">
                                    <option v-for="list_id1 in id1_list" :key="list_id1.id" :value="list_id1.id1">{{ list_id1.label }}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="">ID 2</label>
                                <input type="text" class="form-control" v-model="detil_data.id2">
                            </div>
                            <div class="form-group">
                                <label for="">Label</label>
                                <input type="text" class="form-control" v-model="detil_data.label">
                            </div>
                            <div class="form-group">
                                <label for="">Icon</label>
                                <input type="text" class="form-control" v-model="detil_data.icon">
                            </div>
                            <div class="form-group">
                                <label for="">Warna</label>
                                <select v-model="detil_data.color" class="form-control">
                                    <option value="info">info</option>
                                    <option value="warning">warning</option>
                                    <option value="danger">danger</option>
                                    <option value="success">success</option>
                                    <option value="primary">primary</option>
                                    <option value="secondary">secondary</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="">Is Login</label>
                                <select v-model="detil_data.is_login" class="form-control">
                                    <option value="0">tidak</option>
                                    <option value="1">ya</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="">Is NIK</label>
                                <select v-model="detil_data.is_nik" class="form-control">
                                    <option value="0">tidak</option>
                                    <option value="1">ya</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="">Is NIP</label>
                                <select v-model="detil_data.is_nip" class="form-control">
                                    <option value="0">tidak</option>
                                    <option value="1">ya</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="">HREF</label>
                                <input type="text" class="form-control" v-model="detil_data.href">
                            </div>
                            <div class="form-group">
                                <label for="">Target</label>
                                <select v-model="detil_data.target" class="form-control">
                                    <option value="">menu</option>
                                    <option value="new_window">new_window</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="">Keyword</label>
                                <input type="text" class="form-control" v-model="detil_data.keyword">
                            </div>
                            <div class="form-group">
                                <label for="">Is Delete</label>
                                <select v-model="detil_data.is_delete" class="form-control">
                                    <option value="0">tidak</option>
                                    <option value="1">ya</option>
                                </select>
                            </div>
                            <button class="btn btn-outline-primary mt-2">
                                <b-icon-check></b-icon-check> Simpan
                            </button>
                            <a href="/sso_management/menu" class="btn btn-outline-secondary mt-2">
                                <b-icon-arrow-left></b-icon-arrow-left> Batal
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
import SidebarMenuSSOManagement from "@/components/SidebarMenuSSOManagement";
import axios from 'axios'

export default {
    middleware: 'auth',
    components: {
        SidebarMenuSSOManagement
    },
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
            detil_data: {
                id: 0,
                mode: 'add',
                id1: '',
                id2: '',
                label: '',
                icon: '',
                color: '',
                is_login: '',
                is_nik: '',
                is_nip: '',
                href: '',
                target: '',
                keyword: '',
                is_delete: 0,
            },
            id1_list: [],
        }
    },
    methods: {
        getData(id) {
            axios.get('/api/admin/menu/get_id1', {
                headers: {
                    Authorization: this.$auth.strategy.token.get(),
                }
            }).then(({ data }) => {
                this.id1_list = data.data;
            }).catch((error) => {
                console.log(error)
            });

            if (id > 0) {
                try {
                    axios.get('/api/admin/menu/detil/'+id, {
                        headers: {
                            Authorization: this.$auth.strategy.token.get(),
                        }
                    }).then(({ data }) => {
                        // console.log(data.data.label);
                        this.detil_data = data.data;
                    }).catch((error) => {
                        console.log(error)
                    });

                } catch (err) {
                    console.log(err)
                }
            }
        },
        simpan() {
            let formData = new FormData();
            formData = this.detil_data;

            axios.post('/api/admin/menu/simpan', formData, {
                headers: {
                    Authorization: this.$auth.strategy.token.get(),
                }
            }).then(({ data }) => {
                this.$toast.success(data.message)
                this.$router.push('/sso_management/menu')
            }).catch((error) => {
                this.$toast.error(error)
            });
        }
    },
    mounted() {
        this.title = 'Menu Management';
        let id = this.$route.params.id;
        this.getData(id);
    }
}
</script>
