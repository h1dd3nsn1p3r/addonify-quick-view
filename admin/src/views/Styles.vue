<script>
	import Navigation from "../components/Navigation.vue";
	import StyleForm from "../components/form/Styles.vue";
	export default {
		name: "Styles",
		components: {
			Navigation,
			StyleForm,
		},
	};
</script>

<template>
	<section class="adfy-container">
		<main class="adfy-columns main-content">
			<aside class="adfy-col start aside">
				<Navigation />
			</aside>
			<section class="adfy-col end">
				<StyleForm />
			</section>
		</main>
	</section>
</template>
