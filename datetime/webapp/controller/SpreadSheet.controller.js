sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/mp/datetime/model/formatter",
    "sap/ui/export/library",
    "sap/ui/export/Spreadsheet"
  ], (Controller, formatter) => {
    "use strict";
  
    return Controller.extend("sap.mp.datetime.controller.SpreadSheet", {
        onInit() {
        },

        myFormatter: formatter,

        onExport: function() {
          if(!this._oTable){
            this._oTable = this.byId("_IDGenTable")
          }

          const oTable = this._oTable
          const oBinding = oTable.getBinding('items')
          const aCols = this.createColumnConfig()

          const oSetting = {
            workbook: {
              columns: aCols
            },
            dataSource: oBinding,
            fileName: "My Excel.xlsx"
          }

          const oSpreedSheet = new sap.ui.export.Spreadsheet(oSetting)
          oSpreedSheet.build().finally(function() {
            oSpreedSheet.destroy();
          })
        },

        createColumnConfig: function() {
          return [
            {
              label: "ID",
              type: sap.ui.export.EdmType.Number,
              property: "EmployeeID",
              scale: 0,
              textAlign: "center"
            },
            {
              type: sap.ui.export.EdmType.String,
              property: "Name"
            },
            {
              type: sap.ui.export.EdmType.String,
              property: "Department"
            },
            {
              type: sap.ui.export.EdmType.String,
              property: "Country"
            },
            {
              label: "Joining Date",
              type: sap.ui.export.EdmType.Date,
              property: "JoiningDate"
            },
            {
              type: sap.ui.export.EdmType.Number,
              property: "Salary",
              scale: 2,
              delimiter: true
            }
          ]
        }
    });
  });