sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("sap.po.actionall.controller.View1", {
        onInit() {
        },

        onClickList: function() {
            this.getOwnerComponent().getRouter().navTo("RouteFilterList")
        },

        onClickSort: function() {
            this.getOwnerComponent().getRouter().navTo("RouteSort")
        },

        onClickNext: function() {
            this.getOwnerComponent().getRouter().navTo("RouteAll")
        },

        onClickPlus: function() {
            this.getOwnerComponent().getRouter().navTo("RouteInView")
        }
    });
});