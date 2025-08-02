sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("sap.mp.datetime.controller.View1", {
        onInit() {
            const oData = {
                "isVisible" : false
            }

            const oModel = new sap.ui.model.json.JSONModel(oData)
            this.getOwnerComponent().setModel(oModel, "myModel")
        },

        // onDateCollect1: function(oEvent){
        //     const sDate = oEvent.getParameters().value,
        //     oDate = new Date(sDate);

        //     //converting to UTC from loacl date
        //     sUTCString = oDate.toISOString()
        //     this.by

        //     //converting to local date from UTC

        // },

        onPressButton: function(){
            try {
                //gives JS date object
                const oDateTime = this.byId("_IDGenDateTimePicker_1")?.getDateValue()
                if(!(oDateTime instanceof Date)){
                    sap.m.MessageToast.show("Not a valid Date")
                    return
                }
                //converting to UTC from loacl date
                const sUTCString = oDateTime?.toISOString()

                //converting to local from UTC
                const oDateLocal = new Date(sUTCString)

                const sFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({
                    style: "short"
                })?.format(oDateLocal)

                //update Text
                const oText = this.byId("_IDGenText"),
                oText2 = this.byId("_IDGenText2")
                if(oDateTime) this.getView()?.getModel("myModel")?.setProperty("/isVisible", true)
                oText.setText(sUTCString)
                oText2.setText(sFormat)
            } catch (error) {
                console.log(error)
            }
        },

        onPressButtonNext: function(){
            this.getOwnerComponent().getRouter().navTo("SpreadSheet")
        }
    });
});