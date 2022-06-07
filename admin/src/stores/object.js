let a = {
    setting: {
        general: {
            settings: {
                enable1: {
                    value: true,
                },
                disable1: {
                    value: false,
                },
            },
        },
        button: {
            settings: {
                enable2: {
                    value: true,
                },
                disable2: {
                    value: false,
                },
            },
        },
    },
};

let aValue = {};

//console.log(a);
//console.log(Object.keys(a.setting));

Object.keys(a.setting).map(function (key) {
    let keySettings = a.setting[key].settings;

    Object.keys(keySettings).map(function (settingId) {
        let settingValue = keySettings[settingId].value;
        //console.log(settingId + ": " + settingValue);
        aValue[settingId] = settingValue;
    });
});

console.log(aValue);