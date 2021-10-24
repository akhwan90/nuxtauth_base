<template>
    <div>
        <HeaderFront />
        <div class="container-lg">
            <nuxt />
        </div>
    </div>
</template>

<script>
    import HeaderFront from "../components/HeaderFront";
    
    export default {
        components: {
            HeaderFront
        }
    };
</script>
