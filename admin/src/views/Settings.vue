<script setup>
	//import { onMounted, defineAsyncComponent } from "vue";
	import Settings from "../components/form/Settings.vue";
	//import xSettings from "../components/form/xSettings.vue";
	//import xSettings from "../components/form/xSettings.vue";
	//import Options from "../components/form/Options.vue";
	import Navigation from "../components/Navigation.vue";
	//import Loading from "../components/Loading.vue";
	//import { storeToRefs } from "pinia";
	//import { useOptionsStore } from "../stores/options";
	//const store = useOptionsStore();
	//const { loading } = storeToRefs(store);
	//onMounted(() => {
	//	store.getOptions();
	//});
</script>

<template>
	<section class="adfy-container">
		<main class="adfy-columns main-content">
			<aside class="adfy-col start aside">
				<Navigation />
			</aside>
			<section class="adfy-col end">
				<Settings />
				<!--<xSettings />-->
				<!--<Options />-->
			</section>
		</main>
	</section>
</template>
