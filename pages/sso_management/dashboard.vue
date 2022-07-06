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
                <SidebarMenuSSOManagement/>
            </div>
            <div class="col-lg-9">
                <div class="card card-body mt-3">
                    Menu Dashboard SSO Management
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
    mounted() {
        this.title = 'SSO Management';
    }
}
</script>
