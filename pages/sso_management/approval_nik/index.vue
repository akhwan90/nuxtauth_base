<template>
    <div class="container-fluid p-3">
        <h5 class="card-header border-0 p-3">
            <b-icon-key-fill></b-icon-key-fill>
            {{ title }}
            <div class="float-right">
                <a :href="$config.baseURL" type="button" class="">
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

                        <div class="table-responsive">
                            <table class="table table-bordered table-sm">
                                <thead>
                                    <tr>
                                        <th width="10%">No</th>
                                        <th width="20%">Nama Pengaju</th>
                                        <th width="25%">Data Input</th>
                                        <th width="30%">Create At</th>
                                        <th width="5%">Status</th>
                                        <th width="10%">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody v-if="pagination_data.data > 0">
                                    <tr v-for="(item, index) in pagination_data.data" :key="index">
                                        <td>{{ ((pagination_data.from) + index) }}</td>
                                        <td>{{ item.NAMA_LGKP }}</td>
                                        <td>{{ item.data_input }}</td>
                                        <td>{{ item.tgl_buat }}</td>
                                        <td>
                                            <b-icon-patch-minus class="text-warning" v-if="item.status == 1">
                                            </b-icon-patch-minus>
                                            <b-icon-check class="text-success" v-else></b-icon-check>
                                        </td>
                                        <td>
                                            <a @click="setujui(item.id)" class="btn btn-outline-primary btn-sm"
                                                v-if="item.status == 1">
                                                <b-icon-check></b-icon-check> Setujui
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody v-else>
                                    <tr>
                                        <td colspan="6">-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
import SidebarMenuSSOManagement from "@/components/SidebarMenuSSOManagement";

export default {
    middleware: 'auth',
    components: {
        SidebarMenuSSOManagement
    },
    layout: 'user_layout',
    head() {
        return {
            title: this.title
        }
    },
    data() {
        return {
            title: '',
            pagination_data: [],
            kata_kunci: '',
        }
    },
    methods: {
        async getData() {
            try {
                this.$axios.get('/api/admin/aktivasi_nik/list', {
                    headers: {
                        Authorization: this.$auth.strategy.token.get(),
                    }
                }).then(({ data }) => {
                    this.pagination_data = data.data;
                }).catch((error) => {
                    console.log(error)
                });
            } catch (err) {
                console.log(err)
            }
        },
        setujui(id) {
            this.$axios.get('/api/admin/aktivasi_nik/setujui/'+id, {
                headers: {
                    Authorization: this.$auth.strategy.token.get(),
                }
            }).then(({ data }) => {
                if (data.success) {
                    this.$toast.success(data.message);
                } else {
                    this.$toast.error(data.message);
                }
                this.getData();
            }).catch((error) => {
                console.log(error)
            });
        }
    },
    mounted() {
        this.title = 'Aktifasi NIK';
        this.getData();
    }
}
</script>
