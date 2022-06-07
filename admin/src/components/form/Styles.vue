<template>
	<form id="adfy-styles-form" class="adfy-form" @submit.prevent>
		<h3 class="option-box-title">General</h3>
		<div class="adfy-options">
			<div class="adfy-option-columns option-box">
				<div class="adfy-col left">
					<div class="label">
						<p class="option-label">
							Enable plugin styles
							<span class="badge"> Optional </span>
						</p>
						<p class="option-description">
							If enabled, the colors selected below will be
							applied to the quick view modal & elements.
						</p>
					</div>
				</div>
				<div class="adfy-col right">
					<div v-if="!enableQuickViewPluginStyles" class="input">
						<el-tooltip
							content="You may encounter issues with the theme styles if enabled."
							placement="top"
						>
							<el-switch
								v-model="enableQuickViewPluginStyles"
								class="enable-addonify-quick-view"
								size="large"
								inline-prompt
								:active-icon="Check"
								:inactive-icon="Close"
							/>
						</el-tooltip>
					</div>
					<div v-else class="input">
						<el-switch
							v-model="enableQuickViewPluginStyles"
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
		<div class="adfy-color-options" v-if="enableQuickViewPluginStyles">
			<h3 class="option-box-title">Modal</h3>
			<div class="adfy-options">
				<div class="adfy-option-columns option-box fullwidth">
					<div class="adfy-col left">
						<div class="label">
							<p class="option-label">Modal box color</p>
							<p class="option-description">
								Change the look & feel of modal box.
							</p>
						</div>
					</div>
					<div class="adfy-col right">
						<div class="input-group">
							<div class="input">
								<el-color-picker
									v-model="overlayBgColor"
									show-alpha
								/>
								<label>Overlay background color</label>
							</div>
							<div class="input">
								<el-color-picker
									v-model="modalBgColor"
									show-alpha
								/>
								<label>Modal background color</label>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- // adfy-options -->
			<h3 class="option-box-title">Modal Box Content</h3>
			<div class="adfy-options">
				<div class="adfy-option-columns option-box">
					<div class="adfy-col left">
						<div class="label">
							<p class="option-label">Product title color</p>
						</div>
					</div>
					<div class="adfy-col right">
						<div class="input-group">
							<div class="input">
								<el-color-picker
									v-model="productTitleColor"
									show-alpha
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- // adfy-options -->
			<div class="adfy-options">
				<div class="adfy-option-columns option-box fullwidth">
					<div class="adfy-col left">
						<div class="label">
							<p class="option-label">Product rating color</p>
						</div>
					</div>
					<div class="adfy-col right">
						<div class="input-group">
							<div class="input">
								<el-color-picker
									v-model="productIsUnratedColor"
									show-alpha
								/>
								<label>If product is unrated</label>
							</div>
							<div class="input">
								<el-color-picker
									v-model="productIsRatedColor"
									show-alpha
								/>
								<label>If product is rated</label>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- // adfy-options -->
			<div class="adfy-options">
				<div class="adfy-option-columns option-box fullwidth">
					<div class="adfy-col left">
						<div class="label">
							<p class="option-label">Product price color</p>
						</div>
					</div>
					<div class="adfy-col right">
						<div class="input-group">
							<div class="input">
								<el-color-picker
									v-model="regularPriceColor"
									show-alpha
								/>
								<label>Regular price</label>
							</div>
							<div class="input">
								<el-color-picker
									v-model="onsalePriceColor"
									show-alpha
								/>
								<label>On sale price</label>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- // adfy-options -->
			<div class="adfy-options">
				<div class="adfy-option-columns option-box">
					<div class="adfy-col left">
						<div class="label">
							<p class="option-label">Product excerpt color</p>
						</div>
					</div>
					<div class="adfy-col right">
						<div class="input-group">
							<div class="input">
								<el-color-picker
									v-model="productExcerptColor"
									show-alpha
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- // adfy-options -->
			<div class="adfy-options">
				<div class="adfy-option-columns option-box fullwidth">
					<div class="adfy-col left">
						<div class="label">
							<p class="option-label">Product meta color</p>
						</div>
					</div>
					<div class="adfy-col right">
						<div class="input-group">
							<div class="input">
								<el-color-picker
									v-model="productMetaColor"
									show-alpha
								/>
								<label>Default</label>
							</div>
							<div class="input">
								<el-color-picker
									v-model="productMetaHoverColor"
									show-alpha
								/>
								<label>On mouse hover</label>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- // adfy-options -->
			<h3 class="option-box-title">Buttons Inside Modal Box</h3>
			<div class="adfy-options">
				<div class="adfy-option-columns option-box fullwidth">
					<div class="adfy-col left">
						<div class="label">
							<p class="option-label">Close button color</p>
							<p class="option-description">
								Change the look & feel of close modal box
								button.
							</p>
						</div>
					</div>
					<div class="adfy-col right">
						<div class="input-group">
							<div class="input">
								<el-color-picker
									v-model="closeButtonColor"
									show-alpha
								/>
								<label>Default text</label>
							</div>
							<div class="input">
								<el-color-picker
									v-model="closeButtonHoverColor"
									show-alpha
								/>
								<label>Text color on mouse hover</label>
							</div>
							<div class="input">
								<el-color-picker
									v-model="closeButtonBgColor"
									show-alpha
								/>
								<label>Default background</label>
							</div>
							<div class="input">
								<el-color-picker
									v-model="closeButtonBgHoverColor"
									show-alpha
								/>
								<label>Background color on mouse hover</label>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- // adfy-options -->
			<div class="adfy-options">
				<div class="adfy-option-columns option-box fullwidth">
					<div class="adfy-col left">
						<div class="label">
							<p class="option-label">
								Miscellaneous buttons color
							</p>
						</div>
					</div>
					<div class="adfy-col right">
						<div class="input-group">
							<div class="input">
								<el-color-picker
									v-model="otherButtonTextColor"
									show-alpha
								/>
								<label>Default text</label>
							</div>
							<div class="input">
								<el-color-picker
									v-model="otherButtonTextHoverColor"
									show-alpha
								/>
								<label>Text on mouse hover</label>
							</div>
							<div class="input">
								<el-color-picker
									v-model="otherButtonBgColor"
									show-alpha
								/>
								<label>Default background</label>
							</div>
							<div class="input">
								<el-color-picker
									v-model="otherButtonBgHoverColor"
									show-alpha
								/>
								<label>Background color on mouse hover</label>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- // adfy-options -->
			<h3 class="option-box-title">Developer</h3>
			<div class="adfy-options">
				<div class="adfy-option-columns option-box fullwidth">
					<div class="adfy-col left">
						<div class="label">
							<p class="option-label">Custom CSS</p>
							<p class="option-description">
								If required, you may add your own custom CSS
								code here.
							</p>
						</div>
					</div>
					<div class="adfy-col right">
						<div class="input">
							<el-input
								v-model="customCSS"
								class="custom-css-box"
								type="textarea"
								rows="10"
								placeholder="#app { color: blue }"
								resize="vertical"
								input-style="display:block;width: 100%;"
							/>
						</div>
					</div>
				</div>
			</div>
			<!-- // adfy-options -->
		</div>
	</form>
</template>
<script setup>
	import { ref } from "vue";
	import { Check, Close } from "@element-plus/icons-vue";

	const enableQuickViewPluginStyles = ref(false);

	const overlayBgColor = ref("#000000");
	const modalBgColor = ref("#FFFFFF");

	const productTitleColor = ref("#000000");
	const productIsUnratedColor = ref("#d3ced2");
	const productIsRatedColor = ref("#f5c40e");
	const regularPriceColor = ref("#000000");
	const onsalePriceColor = ref("#FF0000");
	const productExcerptColor = ref("#000000");
	const productMetaColor = ref("#000000");
	const productMetaHoverColor = ref("#0286e7");

	const closeButtonColor = ref("#ffffff");
	const closeButtonHoverColor = ref("#ffffff");
	const closeButtonBgColor = ref("#000000");
	const closeButtonBgHoverColor = ref("#0286e7");

	const otherButtonTextColor = ref("#ffffff");
	const otherButtonTextHoverColor = ref("#ffffff");
	const otherButtonBgColor = ref("#000000");
	const otherButtonBgHoverColor = ref("#0286e7");

	const customCSS = ref("");
</script>
<style lang="css">
	.adfy-options .tooltip-base-box {
		width: 400px;
	}
	.adfy-options .el-textarea__inner {
		display: block;
		width: 100%;
		font-family: monospace;
		min-height: 200px;
	}

	.adfy-options .el-color-picker__trigger,
	.adfy-options .el-color-picker__color,
	.adfy-options .el-color-picker__color-inner {
		border-radius: 100%;
	}

	.adfy-options .el-color-picker__color {
		border: none;
	}

	.adfy-options .el-color-picker__trigger {
		height: 36px;
		width: 36px;
		padding: 5px;
		border: 2px dotted #bbbbbb;
	}
</style>
