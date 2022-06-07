<template>
	<footer class="adfy-colopon">
		<div class="adfy-row">
			<div class="adfy-col left">
				<p class="text">
					© {{ thisYear }} Addonify Quick View
					<span class="version"
						>{{ versionText }}: {{ versionNumber }}</span
					>
				</p>
			</div>
			<div class="adfy-col right">
				<p class="text">
					<a href="#" class="adfy-link" target="_blank">
						{{ rate }}
						<span class="icon">
							<i class="dashicons dashicons-star-filled"></i>
							<i class="dashicons dashicons-star-filled"></i>
							<i class="dashicons dashicons-star-filled"></i>
							<i class="dashicons dashicons-star-filled"></i>
							<i class="dashicons dashicons-star-filled"></i>
						</span>
						:)
					</a>
				</p>
			</div>
		</div>
	</footer>
</template>
<script setup>
	let rate = adfy_wp_locolizer.rate;
	let versionText = adfy_wp_locolizer.version;
	let versionNumber = adfy_wp_locolizer.version_number;
	let thisYear = new Date().getFullYear();
</script>
