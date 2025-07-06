sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("sap.po.actionall.controller.FilterList", {
        onInit() {
        },

        onClickFilterIcon: function() {
            const oList = this.byId("_IDGenList")

            const oBindings = oList.getBinding("items")

            const aFilter = [
                new Filter('UnitPrice', FilterOperator.BT, 20, 25),
                new Filter('UnitsInStock', FilterOperator.GT, 10)
            ]

            const oFilter = new Filter(aFilter, true)

            oBindings.filter([oFilter])
        },

        onClickFilterIconEmp: function() {
            // "show employees in 'IT' department AND name contains 'a' AND age between 25–40"
            const oList = this.byId("_IDGenList-emp")

            const oBindings = oList.getBinding("items")

            const aFilter = [
                new Filter('Department', FilterOperator.EQ, 'IT'),
                new Filter('Name', FilterOperator.Contains, 'a'),
                new Filter('Age', FilterOperator.BT, 25, 40)
            ]

            const oFilter = new Filter(aFilter, true)

            oBindings.filter([oFilter])
        }
    });
});