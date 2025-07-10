sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter",
    "sap/ui/core/Fragment"
], (Controller, Filter, FilterOperator, Sorter, Fragment) => {
    "use strict";

    return Controller.extend("sap.po.actionall.controller.Combination", {
        onInit() {

            this._allFragments = {}
            
        },

        onSortApply: function(oEvent) {
            const orderSelectedKey = this.byId("_IDGenSelect").getSelectedKey()
            const bySelectedKey = this.byId("_IDGenSelect_2").getSelectedKey()
            const bDescending = orderSelectedKey === 'asc' ? false : true

            const aSorter = [new Sorter(bySelectedKey, bDescending)]
            this.oBinding.sort(aSorter)
            oEvent.getSource().getParent().close()
        },

        onFilterApply: function(oEvent) {
            const bySelectedKey = this.byId("_IDGenSelect1")?.getSelectedKey()

            if(bySelectedKey === 'All') this.oBinding?.filter([])
            else{
                const aFilter = [new Filter('Department', FilterOperator.EQ, bySelectedKey)]
                this.oBinding.filter(aFilter)
            }
            oEvent.getSource()?.getParent()?.close()
        },

        onGroupApply: function(oEvent) {
            const bySelectedKey = this.byId("_IDGenSelect2")?.getSelectedKey()

            const aGroup = [new Sorter(bySelectedKey, true, function(oContext){
                const sValue = oContext.getProperty(bySelectedKey)
                return{
                    key: sValue,
                    text: bySelectedKey + ' : ' + sValue
                }
            })]
            this.oBinding.sort(aGroup)
            oEvent.getSource().getParent().close()
        },

        _loadFragment: function(nameFragment) {
            this.oBinding = this.byId("_IDGenList_All").getBinding("items")
            var that = this
            return Fragment.load({
                name: "sap.po.actionall.view.Fragments." + nameFragment,
                id : that.getView().getId(),
                controller: that
            })
        },

        showDialogFragment: function(nameFragment) {
            this.oDialog = this._allFragments[nameFragment]

            if(!this.oDialog){
                this._loadFragment(nameFragment)
                    .then((oDialog) => {
                        this._oDialog = oDialog
                        this._allFragments[nameFragment] = oDialog
                        this.getView().addDependent(oDialog);
                        oDialog.open()
                })
            }
            else{
                this.oDialog.open()
            }
        },

        onClickSorting: function() {
            this.showDialogFragment("SortDialog")
        },

        onClickFiltering: function() {
            this.showDialogFragment("FilterDialog")
        },

        onClickGrouping: function() {
            this.showDialogFragment("GroupDialog")
        },

        onDialogClose: function(oEvent) {
            oEvent.getSource().getParent().close()
        }

    });
});