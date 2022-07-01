<template>
    <div class="container p-3">
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
            <div class="col-lg-4">
                <SidebarMenuSSOManagement/>
            </div>
            <div class="col-lg-8">
                <div class="card card-body mt-3">
                    Menu Dashboard SSO Management > List Users
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
        }
    },
    methods: {
        async getData() {
            try {
                axios.get('/api/admin/list_user').then(({ data }) => {
                    this.beritas.push(...data.data)
                }).catch((error) => {
                });

            } catch (err) {
                console.log(err)
            }
        }
    },
    mounted() {
        this.title = 'SSO Management';
        this.getData();
    }
}
</script>
