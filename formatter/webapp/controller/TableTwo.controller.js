sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
], (Controller, Fragment) => {
    "use strict";

    return Controller.extend("sap.raj.formatter.controller.TableTwo", {
        onInit() {
            this.getOwnerComponent().getModel().setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay)
        },

        onPressAddColumn: function() {
            const oTable = this.byId("_IDGenTable1"),
            oCol = new sap.m.Column({
                hAlign: "End",
                header: new sap.m.Title({
                    text: "Dynamic Table"
                })
            })

            oTable.addColumn(oCol);
        },

        onEditPress: function(){
            const oTable = this.byId("_IDGenTable1")
            const oSelectedItem = oTable.getSelectedItem()

            if(oSelectedItem){
                const oContext = oSelectedItem.getBindingContext()
                //deepcopy
                this.oOriginalData = JSON.parse(JSON.stringify(oContext.getProperty(oContext.getPath())))
                console.log(oContext.getPath())
                this._displayDialogForm(oContext)
            }
            else{
                return sap.m.MessageToast.show("Select atleast One Item to Edit")
            }
        },

        _displayDialogForm: function(oContext) {
            const oModel = this.getView()?.getModel()
            this._loadFragment().then(oDialogForm => {
                //explicitly setting model - Important
                oDialogForm.setModel(oModel)
                this.oDialog = oDialogForm
                this.bindFormDialog(oContext, oDialogForm)
                oDialogForm.open()
            })
        },

        _loadFragment: function(){
            const oView = this.getView()
            if(!this._pDialogForm){
                this._pDialogForm = Fragment.load({
                    id: oView.getId(),
                    name: "sap.raj.formatter.view.DialogFormFragment",
                    controller: this
                })
            }
            return this._pDialogForm
        },

        bindFormDialog: function(oContext, oDialogForm){
            try {
                const sPath = oContext?.getPath().toString()
                oDialogForm.bindElement({
                    path: sPath
                })
            } catch (error) {
                
            }
        },

        onClickSave: function(){
            this.oDialog.close()
            sap.m.MessageToast.show("Changes saved successfully!");
            const oTable = this.byId("_IDGenTable1")
            oTable.removeSelections(); 
        },

        onClickCancel: function(){
            const oModel = this.getView().getModel();
            // oModel.resetChanges();
            //setProperty for oData is not simple, we need to do it manually by taking each property at a time
            //never use for in as it updates the inherited prop as well
            //try using Object.keys(data).forEach
            // for(let key in this.oOriginalData){
            //     oModel.setProperty(this.oDialog.getBindingContext().getPath() + '/' + key, this.oOriginalData[key])
            // }
            Object.keys(this.oOriginalData).forEach((key) => {
                oModel.setProperty(this.oDialog.getBindingContext().getPath() + '/' + key, this.oOriginalData[key])
            })
            this.oDialog.close()
            const oTable = this.byId("_IDGenTable1")
            oTable.removeSelections(); 
            sap.m.MessageToast.show("Changes are not saved!");
        }
    });
});