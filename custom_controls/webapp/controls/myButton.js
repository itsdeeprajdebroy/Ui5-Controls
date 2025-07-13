sap.ui.define([
    "sap/m/Button"
], 

    function(Button) {
        "use strict";
        return Button.extend("sap.custom.customcontrols.controls.myButton" , {
            metadata: {
                properties: {},
                events: {
                    //curly braces means any function can be attached in move
                    move: {}
                },
                aggregations: {},
                methods: {}
            },

            onmouseover: function(){
                this.fireMove()
            },

            //Remember we need to keep renderer blank to load super class property
            renderer: {}
        })
}
)