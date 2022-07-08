<template>
    <div class="container p-3">
        <h5 class="card-header border-0 p-3">
            <b-icon-calendar-check></b-icon-calendar-check>
            {{ title }}
            <div class="float-right">
                <a :href="this.$config.baseURL" type="button" class="">
                    <b-icon-arrow-left-circle></b-icon-arrow-left-circle>
                </a>
            </div>
        </h5>

        <div class="card mt-3">
            <div class="list-group list-group-flush">
                <a :href="this.$config.baseURL + '/agenda/pariwisata'" class="list-group-item list-group-item-action"><b-icon-arrow-right-circle></b-icon-arrow-right-circle> Agenda Pariwisata</a>
                <a :href="this.$config.baseURL + '/agenda/kebudayaan'" class="list-group-item list-group-item-action"><b-icon-arrow-right-circle></b-icon-arrow-right-circle> Agenda Kebudayaan</a>
            </div>
        </div>
    </div>
    
</template>


<script>
export default {
    layout: 'user_layout',
    head() {
        return {
            title: this.title,
        }
    },
    methods: {
    },
    data() {
        return {
            title: 'Agenda'
        }
    },
    mounted() {
    }
}
</script>