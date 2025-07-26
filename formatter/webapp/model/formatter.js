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
            },

            formatCurrency: function(curr, code) {
                //isNaN - is Not a number
                const getUserLocale = sap.ui.getCore().getConfiguration().getLocale()
                const showCode = code !== "INR"
                //Set Locale object - new sap.ui.core.Locale(sStringLocale) -> en_US, hi_IN, de_DE
                if(isNaN(curr) || !code){
                    return "N/A"
                }
                const oCurrencyInstance = sap.ui.core.format.NumberFormat.getCurrencyInstance({
                    showMeasure: showCode,
                    currencyCode: false,
                    decimals: 2
                }, getUserLocale)
                return oCurrencyInstance.format(curr, code)
            }
        }
    }
)