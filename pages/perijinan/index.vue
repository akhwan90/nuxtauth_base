    <template>
    <div class="container p-3">
        <h5 class="card-header border-0 p-3">
            <b-icon-pin></b-icon-pin>
            {{ title }}
            <div class="float-right">
                <a :href="this.$config.baseURL" type="button" class="">
                    <b-icon-arrow-left-circle></b-icon-arrow-left-circle>
                </a>
            </div>
        </h5>

        <div class="card mt-3">
            <div class="list-group list-group-flush">
                <a :href="link.url" :target="link.target" class="list-group-item list-group-item-action" v-for="link in links"
                    :key="link.id">
                    <b-icon-arrow-right-circle></b-icon-arrow-right-circle> {{ link.label }}
                </a>
            </div>
        </div>
    </div>

</template>


<script>
export default {
    layout: 'user_layout',
    head() {
        return {
            title: this.title
        }
    },
    methods: {
    },
    data() {
        return {
            title: 'Perijinan',
            links: [
                {
                    id: 1,
                    label: 'Sicantik',
                    url: 'https://sicantikui.layanan.go.id/#/login',
                    target: '_blank'
                },
                {
                    id: 2,
                    label: 'SIMBG',
                    url: 'https://simbg.pu.go.id/',
                    target: '_blank'
                },
                {
                    id: 3,
                    label: 'OSS',
                    url: 'https://oss.go.id/',
                    target: '_blank'
                },
            ]
        }
    },
    mounted() {
        // console.log(this.$store.state)
    }
}
</script>