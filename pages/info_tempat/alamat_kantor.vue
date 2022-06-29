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
        },
        data() {
            return {
                title: 'Pemerintahan',
                links: [
                    {
                        id: 1,
                        label: 'Alamat Kantor',
                        url: '/pemerintahan/alamat_kantor',
                    }
                ]
            }
        },
        mounted() {
            // console.log(this.$store.state)
        }
    }
    </script>