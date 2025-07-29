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
                    decimals: 2,
                    style: "long"
                }, getUserLocale)
                return oCurrencyInstance.format(curr, code)
            },

            formatDateTime: function(dateTime) {
                let oDate
                if(!dateTime){
                    return "N/A"
                }
                else if(dateTime.startsWith("/Date(")){
                    oDate = new Date((Number(dateTime.match(/\d+/)[0])))
                }
                else{
                    const oDateTimeInstance = sap.ui.core.format.DateFormat.getDateTimeInstance({
                        pattern: "dd-MM-yyyy HH:mm"
                    })
                    oDate = oDateTimeInstance.parse(dateTime)
                }
                const oDateTimeInstanceFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({
                    pattern: "EEE, d MMM HH:mm a",
                    relative: true
                })

                return oDateTimeInstanceFormat.format(oDate)
            }
        }
    }
)