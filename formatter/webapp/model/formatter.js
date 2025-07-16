sap.ui.define(
    [],
    
    function() {
        "use strict";

        return {
            myCombiner: function(address, code) {
                if(!(address && parseInt(code))){
                    return "Nothing"
                }
                else if(parseInt(code) > 1000){
                    return address + " New City"
                }
                else
                    return "Nothing - Executed"
            },

            myCustomFormatter: function(country) {
                if(!country)
                    return "Unknown"
                else if(country === "USA")
                    return "Domestic"
                else if(country === "Canada" || country === "Mexico")
                    return "Neighbor"
                else
                    return "International"
            }
        }
    }
)