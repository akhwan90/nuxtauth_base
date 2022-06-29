<template>
    <div class="container p-3">
        <h5 class="card-header border-0 p-3">
            <b-icon-bank></b-icon-bank>
            {{ title }}
            <div class="float-right">
                <a href="/" type="button" class="">
                    <b-icon-arrow-left-circle></b-icon-arrow-left-circle>
                </a>
            </div>
        </h5>

        <div class="card mt-3">
            <div class="list-group list-group-flush">
                <a :href="'/info_tempat/sub_category/'+data.category_id" class="list-group-item list-group-item-action" v-for="data in datas" :key="data.category_id">
                    <b-icon-arrow-right-circle></b-icon-arrow-right-circle> {{ data.category_name }}
                </a>
            </div>
        </div>
    </div>

</template>


<script>
import axios from 'axios'
export default {
    // middleware: 'auth',
    head() {
        return {
            title: this.title,
            bodyAttrs: {
                style: 'background-image: url(https://www.toptal.com/designers/subtlepatterns/uploads/full-bloom.png);'
            }
        }
    },
    methods: {
        async getData() {
            try {
                axios.get('/api/info_tempat/sub_category_list'
                ).then(({ data }) => {
                    this.datas.push(...data.data)
                }).catch((error) => {
                    this.$toast.error(error.response.message);
                });

            } catch (err) {
                console.log(err)
            }
        }
    },
    data() {
        return {
            title: 'Informasi Tempat',
            datas: []
        }
    },
    mounted() {
        this.getData();
        // console.log(this.$store.state)
    }
}
</script>