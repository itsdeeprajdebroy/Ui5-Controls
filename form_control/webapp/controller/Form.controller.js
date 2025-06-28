sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
], (Controller, Fragment) => {
    "use strict";

    return Controller.extend("sap.ff.formcontrol.controller.Form", {
        onInit() {
            const oView = this.getView()

            oView.bindElement("/Address/0/")

            this._fragment = {}

            this._showFragment("Display")
        },

        // onClickDialog: function() {
        //     const oView = this.getView()

        //     if(!this.oDialog){
        //         Fragment.load({
        //             id: oView.getId(),
        //             name: "sap.ff.formcontrol.view.Dialog",
        //             controller: this
        //         }).then((oDialog) => {
        //             this.oDialog = oDialog
        //             oView.addDependent(oDialog)
        //             oDialog.open()
        //         }).catch((oError) => {
        //             new Error("Error", oError)
        //         })
        //     }else{
        //         this.oDialog.open()
        //     }
        // },

        // onClosePress: function() {
        //     this.oDialog.close()
        // }

        handleEditPress: function() {
            this.toggleAndView(true)
            this._oSupplier = Object.assign({}, this.getView().getModel().getData().Address[0]);
        },

        handleSavePress: function() {
            this.toggleAndView(false)
        },

        handleCancelPress: function() {
            var oModel = this.getView().getModel();
			var oData = oModel.getData();
			oData.Address[0] = this._oSupplier;
			oModel.setData(oData);

            this.toggleAndView(false)
        },

        toggleAndView: function(bValue) {
            this.byId('edit').setVisible(!bValue)
            this.byId('save').setVisible(bValue)
            this.byId('cancel').setVisible(bValue)

            this._showFragment(bValue ? "Change" : "Display")
        },

        _loadFragment: function(sFragmentName) {
            var pFormFragment = this._fragment[sFragmentName]
            if(!pFormFragment){
                pFormFragment = Fragment.load({
                    id: this.getView().getId(),
                    name: "sap.ff.formcontrol.view." + sFragmentName
                })
                this._fragment[sFragmentName] = pFormFragment
            }
            return pFormFragment
        },


        _showFragment: function(sFragmentName) {
            this._loadFragment(sFragmentName).then((oform) => {
                const oPage = this.byId("_IDGenPage")
                oPage.removeAllContent();
                oPage.insertContent(oform);
            })
        }

        
    });
});