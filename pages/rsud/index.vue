    <template>
    <div class="container p-3">
        <h5 class="card-header border-0 p-3">
            <b-icon-patch-plus></b-icon-patch-plus>
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
                title: 'RSUD',
                links: [
                    {
                        id: 1,
                        label: 'Jadwal Poli RSUD Wates',
                        url: 'https://rsud.kulonprogokab.go.id/poliklinik/poli/daftarPoliPWA',
                        target: '_blank'
                    },
                    {
                        id: 2,
                        label: 'Jadwal Poli RSUD Nyi Ageng Serang (Sentolo)',
                        url: 'https://rsnas.kulonprogokab.go.id/poliklinik/poli/daftarPoliPWA',
                        target: '_blank'
                    },
                    {
                        id: 3,
                        label: 'Daftar Online RSUD Nyi Ageng Serang (Sentolo)',
                        url: 'https://rsudnas.com/',
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