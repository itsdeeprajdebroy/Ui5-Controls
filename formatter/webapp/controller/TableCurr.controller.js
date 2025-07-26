sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/raj/formatter/model/formatter"
  ], (Controller,formatter) => {
    "use strict";
  
    return Controller.extend("sap.raj.formatter.controller.TableCurr", {
        onInit() {
        },

        myformatter : formatter
    });
  });