sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], (Controller, MessageToast, MessageBox) => {
    "use strict";

    return Controller.extend("sap.custom.customcontrols.controller.View1", {
        onInit() {
        },

        onMove: function() {
            // MessageToast.show("Hello");
            MessageBox.alert("Hello")
        }
    });
});