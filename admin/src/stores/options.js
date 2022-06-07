import { defineStore } from 'pinia'
import axios from 'axios';
import _ from 'lodash';
import { ElMessage } from 'element-plus'

let BASE_API_URL = adfy_wp_locolizer.api_url;
let oldOptions = {};

export const useOptionsStore = defineStore({

    id: 'Options',

    state: () => ({
        data: {},   // Holds all datas like options, section, tab & fields.
        options: {}, // Holds the old options to compare with the new ones.
        message: "", // Holds the message to be displayed to the user.
        isLoading: true,
        isSaving: false,
        needSave: false,
        errors: "",
    }),
    getters: {

        // ⚡️ Check if we need to save the options.
        needSave: (state) => {

            return !_.isEqual(state.options, oldOptions) ? true : false;
        },
    },
    actions: {

        // ⚡️ Use Axios to get options from api.
        async fetchOptions() {

            let res = await axios.get(BASE_API_URL + 'get_options')
            try {

                let settingsValues = res.data.settings_values;
                this.data = res.data.tabs;
                this.options = settingsValues;
                oldOptions = _.cloneDeep(settingsValues);
                this.isLoading = false;

            } catch (err) {

                this.errors = err;
                console.log(err);
            }
        },

        // ⚡️ Handle update options & map the values to the options object.
        handleUpdateOptions() {

            let payload = {};
            let changedOptions = this.options;

            Object.keys(changedOptions).map(key => {

                if (!_.isEqual(changedOptions[key], oldOptions[key])) {
                    payload[key] = changedOptions[key];
                }
            });

            this.updateOptions(payload);
            //console.log(payload);
        },

        // ⚡️ Update options using Axios.
        async updateOptions(payload) {

            this.isSaving = true; // Set saving to true.

            let res = await axios.post(BASE_API_URL + 'update_options', payload)
            try {

                //console.log(res);
                this.isSaving = false; // Saving is completed here.
                this.message = res.data.message; // Set the message to be displayed to the user.

                if (res.data.success === true) {
                    ElMessage.success(({
                        message: this.message,
                        offset: 50,
                        duration: 3000,
                    }));
                } else {

                    ElMessage.error(({
                        message: this.message,
                        offset: 50,
                        duration: 3000,
                    }));
                }

                this.fetchOptions(); // Fetch options again.

            } catch (err) {

                this.errors = err;
                console.log(err);
            }
        },
    },
});
