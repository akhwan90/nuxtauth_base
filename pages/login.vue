<template>

    <div class="mt-5 d-flex justify-content-center">
        <div class="card">
            <div class="card-header">Login</div>
            <div class="card-body">
                <form @submit.prevent="userLogin">
                    <div class="form-group">
                        <label>Username</label>
                        <input type="text" v-model="login.username" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="text" v-model="login.password" class="form-control"/>
                    </div>
                    <div class="form-group mt-2">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            login: {
                username: 'admin',
                password: 'kp260390'
            }
        }
    },
    methods: {
        async userLogin() {
            try {
                const formData = new FormData();
                formData.append('username', this.login.username);
                formData.append('password', this.login.password);

                let response = await this.$auth.loginWith('local', { data: formData })
                console.log(response)
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>