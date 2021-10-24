<template>
	<div>
		<Header/>
		<div class="container-lg">
			<nuxt />
		</div>

		<notifications position="bottom right" />
	</div>
</template>

<script>
// import { mapState } from "vuex";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export default {
	components: {
		Header,
		Footer,
		Sidebar,
	}
	// computed: mapState(["entry"]),
};
</script>
