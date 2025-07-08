sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Sorter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller, Sorter, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("sap.po.actionall.controller.Sorter-Group", {
        onInit() {
        },

        onClickSortIconEmp: function() {
            const oList = this.byId("_IDGenList1")
            const oBindings = oList.getBinding("items")

            //const oSort = new Sorter('Name', true)

            //const oSort = new Sorter('Age', true, true)
            
            const oSort1 = new Sorter('Department', true, function(oContext){
                const dept = oContext.getProperty('Department')
                return {
                    key: dept,
                    text: 'Dept: ' + dept
                }
            })
            const aSort = [
                oSort1, 
                new Sorter('Age', true)
            ]

            oBindings.sort(aSort)
        },

        onClickFilIconEmp: function() {
            const oFilter = new Filter('Department', FilterOperator.EQ, 'IT')

            const oList = this.byId("_IDGenList1")
            const oBindings = oList.getBinding("items")

            oBindings.filter([oFilter])
        }
    });
});