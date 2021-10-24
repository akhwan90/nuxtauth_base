<template>
    <div class="card mt-3">
        <div class="card-header">
            <h5>{{ title }}</h5>
        </div>
        <div class="card-body">
            <form @submit.prevent="addTiket">
                <div class="form-group mt-2">
                    <label>Judul</label>
                    <input type="text" v-model="tiket.judul" class="form-control"/>
                </div>
                <div class="form-group mt-2">
                    <label>Kategori</label>
                    <select v-model="tiket.id_kategori" class="form-control">
                        <option v-for="(item, key) in kategoris" :key="key" :value="item.id">
                            {{item.nama}}
                        </option>
                    </select>
                </div>
                <div class="form-group mt-2">
                    <label>Prioritas</label>
                    <select v-model="tiket.priority" class="form-control">
                        <option v-for="(item, key) in prioritas" :key="key" :value="item.id">
                            {{item.nama}}
                        </option>
                    </select>
                </div>
                <div class="form-group mt-2">
                    <label>Is Atas Nama Orang Lain</label>
                    <select v-model="tiket.is_oranglain" class="form-control">
                        <option v-for="(item, key) in is_oranglains" :key="key" :value="item.id">
                            {{item.nama}}
                        </option>
                    </select>
                </div>
                <div v-if="tiket.is_oranglain == 1">
                    <div class="form-group mt-2">
                        <label>Atas Nama</label>
                        <input type="text" v-model="tiket.oranglain_nama" class="form-control"/>
                    </div>
                    <div class="form-group mt-2">
                        <label>Atas Nama Instansi</label>
                        <input type="text" v-model="tiket.oranglain_instansi" class="form-control"/>
                    </div>
                </div>

                <div class="form-group mt-2">
                    <label>Detail Keluhan</label>
                    <textarea v-model="tiket.deskripsi" class="form-control"></textarea>
                </div>
                <div class="form-group mt-2">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>

    </div>

</template>

<script>
    import axios from 'axios'

    export default {
        head() {
            title: this.title
        },
        layout: 'Dashboard',
        middleware: 'auth',
        methods: {
            async addTiket() {
                try {
                    const formData = new FormData();
                    formData.append('judul', this.tiket.judul);
                    formData.append('id_kategori', this.tiket.id_kategori);
                    formData.append('priority', this.tiket.priority);
                    formData.append('deskripsi', this.tiket.deskripsi);
                    formData.append('is_oranglain', this.tiket.is_oranglain);
                    formData.append('oranglain_nama', this.tiket.oranglain_nama);
                    formData.append('oranglain_instansi', this.tiket.oranglain_instansi);

                    axios.post('/api/tiket/save',
                        // crossDomain: true,
                        formData,
                        {
                            headers: {
                                'Authorization': this.$auth.strategy.token.get()
                            }
                        }
                    ).then(({ data }) => {
                        this.$notify({
                            title: 'Sukses',
                            type: 'success',
                            text: data.message
                        })
                    }).catch((error) => {
                        if (error.response) {
                            this.$notify({
                                title: 'Kesalahan',
                                type: 'error',
                                text: error.response.data.message
                            })
                            // alert(error.response.data.message)

                            // console.log(error.response.data);
                            // console.log(error.response.status);
                            // console.log(error.response.headers);
                        }
                    });
                    
                } catch (err) {
                    console.log(err)
                }
            }
        },
        data() {
            return {
                title: '',
                token: '',
                user: '',
                tiket: {
                    judul: '',
                    priority: '1',
                    is_oranglain: '0',
                    oranglain_nama: '',
                    oranglain_instansi: '',
                    deskripsi: '',
                    id_kategori: '3'
                },
                kategoris: [],
                prioritas: [
                    {'id': 1, 'nama': 'Biasa'},
                    {'id': 2, 'nama': 'Agak Cepat'},
                    {'id': 3, 'nama': 'Sangat Cepat'},
                ],
                is_oranglains: [
                    {'id': 0, 'nama': 'Tidak'},
                    {'id': 1, 'nama': 'Ya'}
                ]
            }
        },
        mounted() {
            this.token = this.$auth.strategy.token.get()
            this.user = this.$auth.user.username

            axios.get('/api/kategori/list', {
            	// crossDomain: true,
                headers: {
                    'Authorization': this.token
                }
            }).then( ({ data }) => {
            	this.kategoris = data.data
            })

            this.title = 'Kirim Tiket Baru';
        }
    }
</script>