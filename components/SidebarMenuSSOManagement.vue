<template>
    <div class="card mt-3">
        <div class="list-group list-group-flush">
            <a :href="$config.baseURL + '/sso_management/users'" class="list-group-item list-group-item-action">
                <b-icon-people-fill></b-icon-people-fill> User List
            </a>
            <a :href="$config.baseURL + '/sso_management/menu'" class="list-group-item list-group-item-action">
                <b-icon-table></b-icon-table> Menu Management
            </a>
        </div>
    </div>
</template>


<script>
export default {}
</script>