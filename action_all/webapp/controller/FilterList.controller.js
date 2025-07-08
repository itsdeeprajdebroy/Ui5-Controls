sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("sap.po.actionall.controller.FilterList", {
        onInit() {
        },

        // onClickFilterIcon: function() {
        //     const oList = this.byId("_IDGenList")

        //     const oBindings = oList.getBinding("items")

        //     const aFilter = [
        //         new Filter('UnitPrice', FilterOperator.BT, 20, 25),
        //         new Filter('UnitsInStock', FilterOperator.GT, 10)
        //     ]

        //     const oFilter = new Filter(aFilter, true)

        //     oBindings.filter([oFilter])
        // },

        onClickFilterIconEmp: function() {
            // "show employees in 'IT' department AND name contains 'a' AND age between 25–40"
            const oList = this.byId("_IDGenList-emp")
            const oBindings = oList.getBinding("items")
            const aFilter = [];

            var sName = this.byId("nameInput").getValue().trim();
            var sDept = this.byId("deptInput").getValue().trim();
            var sMinAge = this.byId("minAgeInput").getValue().trim();
            var sMaxAge = this.byId("maxAgeInput").getValue().trim();

            if(sName) aFilter.push(new Filter('Name', FilterOperator.Contains, sName))
            if(sDept) aFilter.push(new Filter('Department', FilterOperator.EQ, sDept))
            if(sMaxAge && sMinAge) aFilter.push(new Filter('Age', FilterOperator.BT, parseInt(sMinAge), parseInt(sMaxAge)))
            else if(sMaxAge) aFilter.push(new Filter('Age', FilterOperator.LT, parseInt(sMaxAge)))
            else if(sMinAge) aFilter.push(new Filter('Age', FilterOperator.GT, parseInt(sMinAge)))

            const oFilter = new Filter(aFilter, true)
            oBindings.filter([oFilter])
        }
    });
});