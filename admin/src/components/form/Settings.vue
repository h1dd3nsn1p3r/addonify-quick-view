<script setup>
	import { onMounted } from "vue";
	import { storeToRefs } from "pinia";
	import { Check, Close, Eleme } from "@element-plus/icons-vue";
	import Loading from "../Loading.vue";
	import { useOptionsStore } from "../../stores/options";
	let store = useOptionsStore();
	//let { isLoading, needSave, options } = storeToRefs(store);

	onMounted(() => {
		store.fetchOptions();
	});
</script>
<template>
	<Loading v-if="store.isLoading" />
	<form v-else id="adfy-settings-form" class="adfy-form" @submit.prevent>
		<h3 class="option-box-title">General</h3>
		<div class="adfy-options">
			<div class="adfy-option-columns option-box">
				<div class="adfy-col left">
					<div class="label">
						<p class="option-label">Enable quick view</p>
						<p class="option-description">
							Once enabled, it will be visible in product catalog.
						</p>
					</div>
				</div>
				<div class="adfy-col right">
					<div class="input">
						<el-switch
							v-model="store.options.enable_quick_view"
							class="enable-addonify-quick-view"
							size="large"
							inline-prompt
							:active-icon="Check"
							:inactive-icon="Close"
						/>
					</div>
				</div>
			</div>
		</div>
		<!-- // adfy-options -->
		<div
			class="adfy-setting-options"
			v-if="store.options.enable_quick_view"
		>
			<h3 class="option-box-title">Button Options</h3>
			<div class="adfy-options">
				<div class="adfy-option-columns option-box">
					<div class="adfy-col left">
						<div class="label">
							<p class="option-label">Button label</p>
						</div>
					</div>
					<div class="adfy-col right">
						<div class="input">
							<el-input
								v-model="store.options.quick_view_btn_label"
								size="large"
								placeholder="Quick view"
							/>
						</div>
					</div>
				</div>
			</div>
			<!-- // adfy-options -->
			<div class="adfy-options">
				<div class="adfy-option-columns option-box">
					<div class="adfy-col left">
						<div class="label">
							<p class="option-label">Button position</p>
							<p class="option-description">
								Choose where you want to show the quick view
								button.
							</p>
						</div>
					</div>
					<div class="adfy-col right">
						<div class="input">
							<el-select
								v-model="store.options.quick_view_btn_position"
								placeholder="Select"
								size="large"
							>
								<el-option
									v-for="(label, key) in store.data.settings
										.sections.button.fields
										.quick_view_btn_position.choices"
									:label="label"
									:value="key"
								/>
							</el-select>
						</div>
					</div>
				</div>
			</div>
			<!-- // adfy-options -->
			<h3 class="option-box-title">Modal Box Options</h3>
			<div class="adfy-options">
				<div class="adfy-option-columns option-box fullwidth">
					<div class="adfy-col left">
						<div class="label">
							<p class="option-label">Content to display</p>
							<p class="option-description">
								Which content would you like to display on quick
								view modal.
							</p>
						</div>
					</div>
					<div class="adfy-col right">
						<div class="input">
							<el-checkbox-group
								v-model="store.options.modal_box_content"
								size="large"
							>
								<el-checkbox-button
									v-for="(label, key) in store.data.settings
										.sections.modal.fields.modal_box_content
										.choices"
									:label="key"
								>
									{{ label }}
								</el-checkbox-button>
							</el-checkbox-group>
						</div>
					</div>
				</div>
			</div>
			<!-- // adfy-options -->
			<div class="adfy-options">
				<div class="adfy-option-columns option-box">
					<div class="adfy-col left">
						<div class="label">
							<p class="option-label">Product thumbnail</p>
							<p class="option-description">
								Choose whether you want to display single
								product image or gallery in quick view modal.
							</p>
						</div>
					</div>
					<div class="adfy-col right">
						<div class="input">
							<el-select
								v-model="store.options.product_thumbnail"
								placeholder="Select"
								size="large"
							>
								<el-option
									v-for="(label, key) in store.data.settings
										.sections.modal.fields.product_thumbnail
										.choices"
									:label="label"
									:value="key"
								/>
							</el-select>
						</div>
					</div>
				</div>
			</div>
			<!-- // adfy-options -->
			<div class="adfy-options">
				<div class="adfy-option-columns option-box">
					<div class="adfy-col left">
						<div class="label">
							<p class="option-label">Enable lightbox</p>
							<p class="option-description">
								Enable lightbox for product images in quick view
								modal.
							</p>
						</div>
					</div>
					<div class="adfy-col right">
						<div class="input">
							<el-switch
								v-model="store.options.enable_lightbox"
								class="enable-addonify-quick-view"
								size="large"
								inline-prompt
								:active-icon="Check"
								:inactive-icon="Close"
							/>
						</div>
					</div>
				</div>
			</div>
			<!-- // adfy-options -->
			<div class="adfy-options">
				<div class="adfy-option-columns option-box">
					<div class="adfy-col left">
						<div class="label">
							<p class="option-label">
								Display view detail button
							</p>
							<p class="option-description">
								Enable display view detail button in modal.
							</p>
						</div>
					</div>
					<div class="adfy-col right">
						<div class="input">
							<el-switch
								v-model="store.options.display_read_more_button"
								class="enable-addonify-quick-view"
								size="large"
								inline-prompt
								:active-icon="Check"
								:inactive-icon="Close"
							/>
						</div>
					</div>
				</div>
			</div>
			<!-- // adfy-options -->
		</div>
		<!-- // adfy-settings-options -->
	</form>
</template>
<style lang="css" scoped>
	.el-checkbox {
		--el-checkbox-font-weight: normal;
	}
	.el-select-dropdown__item.selected {
		font-weight: normal;
	}
	.el-message--success {
		-el-message-text-color: #2f8e00;
	}
</style>
