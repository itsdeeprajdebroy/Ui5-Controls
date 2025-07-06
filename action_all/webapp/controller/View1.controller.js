sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("sap.po.actionall.controller.View1", {
        onInit() {
        },

        onClickList: function() {
            this.getOwnerComponent().getRouter().navTo("RouteFilterList")
        }
    });
});