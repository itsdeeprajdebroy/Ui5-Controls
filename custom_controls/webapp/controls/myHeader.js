sap.ui.define([
    "sap/ui/core/Control"
], 
    
    function(Control) {
        "use strict";

        return Control.extend("sap.custom.customcontrols.controls.myHeader", {
                metadata: {
                    properties: {
                        "text" : "",
                        "color" : "",
                        "border" : ""
                    },
                    events: {},
                    aggregations: {},
                    methods: {}
                },

                //constructor
                init: function(){
                    //initialized
                    this.setBorder("2px solid red")
                }, 

                renderer: function(oRm, oControl) {
                    // oRm.write("<h1 style=color:" + oControl.getColor() + "> This is " + oControl.getText() + "</h1>")
                    // oRm.write("<h1 style=color:red> This is Bittu </h1>")

                    //clean way to write
                    oRm.write("<h1");
                    oRm.addStyle("color" , oControl.getColor());
                    oRm.addStyle("border" , oControl.getBorder());
                    oRm.writeStyles();
                    oRm.write(">");
                    oRm.write(oControl.getText());
                    oRm.write("</h1>");
                }
        })
})