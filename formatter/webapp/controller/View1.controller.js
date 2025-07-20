sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("sap.raj.formatter.controller.View1", {
        onInit() {
        },

        onClickFormatter: function() {
            this.getOwnerComponent().getRouter().navTo("FormatterView")
        },

        onClickTableOne: function() {
            this.getOwnerComponent().getRouter().navTo("TableOne")
        },

        onClickTableTwo: function() {
            this.getOwnerComponent().getRouter().navTo("TableTwo")
        }
    });
});