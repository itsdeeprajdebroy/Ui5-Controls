sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("sap.bar.barscontainer.controller.Bar", {
        onInit() {
            var onModel = this.getOwnerComponent().getModel()
            const oData = onModel.getData()
            const oRawUserData = oData;
            const aDisplayData = [];

            for (const key in oRawUserData[0]) {
            const value = oRawUserData[0][key];
            aDisplayData.push({
                key: key,
                value: this.filter(key, value)
            });
            }

            const oModel = new sap.ui.model.json.JSONModel({ data: aDisplayData });
            this.getView().setModel(oModel, "user");
        },

        filter: function (key, value){
            if(key !== "memberOf")
            {
                if(Array.isArray(value)){
                    return value.join("\n")
                }
                return value
            }
            else{
                 const empArr = []
                 value.forEach(element => {
                    const nEl = element.split(",")[0];
                    empArr.push(nEl)
                });
                return empArr.join("\n")
            }
        }
    });
});