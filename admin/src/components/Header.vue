<template>
	<header class="adfy-header">
		<div class="adfy-row">
			<div class="adfy-col start">
				<div class="branding">
					<router-link class="adfy-link" to="/">
						<svg
							class="logo"
							viewBox="0 0 128 128"
							width="42"
							height="42"
						>
							<path
								fill="#42b883"
								d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
								data-v-1c32dc7e=""
							></path>
							<path
								fill="#35495e"
								d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
								data-v-1c32dc7e=""
							></path>
						</svg>
					</router-link>
				</div>
			</div>
			<div class="adfy-col end">
				<div class="buttons">
					<a href="#" class="adfy-button fake-button has-underline">
						{{ documentation }}
					</a>
					<button
						type="submit"
						@click="store.handleUpdateOptions()"
						class="adfy-button"
						:disabled="!store.needSave"
						:loading="store.isSaving"
					>
						<span class="loading-icon">
							<svg
								viewBox="0 0 1024 1024"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill="currentColor"
									d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
								></path>
							</svg>
						</span>
						{{ __("Saveeee", "addonify-quick-view") }}
					</button>
				</div>
			</div>
		</div>
	</header>
</template>
<script setup>
	import { useOptionsStore } from "../stores/options";
	import { sprintf, _n, __ } from "@wordpress/i18n";
	let store = useOptionsStore();
	let documentation = adfy_wp_locolizer.documentation;
	let saveOptions = adfy_wp_locolizer.save_options;
</script>
