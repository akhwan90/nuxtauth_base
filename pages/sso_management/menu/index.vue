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
                        <div class="row">
                            <div class="col-lg-6">

                                <b-pagination v-model="pagination_data.current_page" :total-rows="pagination_data.total"
                                    :per-page="pagination_data.per_page" aria-controls="my-table" @page-click="tes">
                                </b-pagination>
                            </div>

                            <div class="col-lg-6">
                                <b-input-group>
                                    <b-form-input v-model="kata_kunci"></b-form-input>
                                    <b-input-group-append>
                                        <b-button variant="outline-success" @click="tes">
                                            <b-icon-search></b-icon-search>
                                            Cari
                                        </b-button>
                                    </b-input-group-append>
                                </b-input-group>
                            </div>

                        </div>

                        <a :href="$config.baseURL + '/sso_management/menu/edit/0'" class="btn btn-outline-primary mb-2">
                            <b-icon-plus-circle></b-icon-plus-circle> Tambah
                        </a>

                        <div class="table-responsive">
                            <table class="table table-bordered table-sm">
                                <thead>
                                    <tr>
                                        <th width="5%">No</th>
                                        <th width="5%">ID 1</th>
                                        <th width="5%">ID 2</th>
                                        <th width="10%">Nama Menu</th>
                                        <th width="10%">Icon</th>
                                        <th width="10%">Color</th>
                                        <th width="10%">Href</th>
                                        <th width="10%">Is Login</th>
                                        <th width="10%">Is NIP</th>
                                        <th width="10%">Is NIK</th>
                                        <th width="5%">Status</th>
                                        <th width="10%">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, index) in pagination_data.data" :key="index">
                                        <td>{{ ((pagination_data.from) + index) }}</td>
                                        <td>{{ item.id1 }}</td>
                                        <td>{{ item.id2 }}</td>
                                        <td>{{ item.label }}</td>
                                        <td class="text-center">
                                            <b-icon :icon="item.icon"></b-icon><br>
                                            <small>{{ item.icon }}</small>
                                        </td>
                                        <td :class="'text-'+item.color">{{ item.color }}</td>
                                        <td>{{ item.href }}</td>
                                        <td>{{ item.is_login }}</td>
                                        <td>{{ item.is_nip }}</td>
                                        <td>{{ item.is_nik }}</td>
                                        <td class="text-center">
                                            <b-icon-check class="text-danger" title="Dihapus"
                                                v-if="item.is_delete == 1"></b-icon-check>
                                            <b-icon-patch-minus class="text-success" v-else></b-icon-patch-minus>
                                        </td>
                                        <td>
                                            <a :href="$config.baseURL + '/sso_management/menu/edit/'+item.id"
                                                class="btn btn-outline-primary btn-sm">
                                                <b-icon-pencil></b-icon-pencil> Edit
                                            </a>
                                        </td>
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
            title: this.title,
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
                this.$axios.get('/api/admin/menu/list', {
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
        tes(event, page) {
            // this.pagination_data.current_page = (pagination_data + 1);

            // console.log(page)
            let uri = '/api/admin/menu/list?page='+page;
            if (this.kata_kunci != "") {
                uri = '/api/admin/menu/list?page='+page+'&kata_kunci='+this.kata_kunci;
            }

            try {
                this.$axios.get(uri, {
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
        }
    },
    mounted() {
        this.title = 'Menu Management';
        this.getData();
    }
}
</script>
