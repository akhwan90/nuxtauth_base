<template>
    <div class="card mt-3 mb-3">
        <div class="card-header">
            <h5>{{ title }}</h5>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-hover table-stripped">
                    <thead>
                        <tr>
                            <th>No Reg</th>
                            <th>Judul</th>
                            <th>Dikirim pada</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, key) in listTiket" :key="key">
                            <td><b>{{ item.tracking_id }}</b></td>
                            <td>{{ item.title | potong }}</td>
                            <td>{{ item.create_at }}</td>
                            <td v-html="konversiStatus(item.status)"></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <button @click.prevent="getListTiket(nextPage)" :disabled="loadMoreDisabled" class="btn btn-primary"  v-if="showLoadMore">{{ loadMoreText}}</button>
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
        data() {
            return {
                title: 'List Tiket',
                listTiket: [],
                nextPage: 0,
                loadMoreText: 'Load more..',
                loadMoreDisabled: false,
                showLoadMore: true
            }
        },
        mounted() {
            this.getListTiket()
        },
        methods: {
            async getListTiket(page=0) {
                try {
                    this.loadMoreText = 'Mengambil data ...'
                    this.loadMoreDisabled = true

                    axios.get((page==0) ? '/api/tiket/list' : '/api/tiket/list?page='+page,
                        {
                            headers: {
                                'Authorization': this.$auth.strategy.token.get()
                            }
                        }
                    ).then(({ data }) => {
                        this.listTiket.push(...data.data.data)
                        this.nextPage = data.data.nextPage
                        
                        this.loadMoreText = 'Load more..'

                        if (data.data.nextPage != false) {
                            this.loadMoreDisabled = false
                        } else {
                            this.showLoadMore = false
                        }
                    }).catch((error) => {
                        if (error.response) {
                            this.$notify({
                                title: 'Kesalahan',
                                type: 'error',
                                text: error.response.data.message
                            })
                        }

                        this.loadMoreText = 'Load more..'
                        this.loadMoreDisabled = false
                    });

                } catch (err) {
                    console.log(err)
                }
            },
            konversiStatus(status) {
                if (status == 0) {
                    return '<div class="text-warning">Pending</div>';
                } else if (status == 1) {
                    return '<div class="text-success">Diproses</div>';
                } else {
                    return '<div class="text-success">Diproses</div>';
                } 
            }
        },
        filters: {
            potong: function (string) {
                if (string.length > 50) {
                    return string.substring(0, 50) + '...';
                } else {
                    return string;
                }
            }
        }
    }
</script>