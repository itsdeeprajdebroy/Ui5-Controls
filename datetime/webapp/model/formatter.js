sap.ui.define([
   
], 
function () {
    "use strict";

    return {
        dateConverter: function(joinDate) {
            if(!joinDate) return ""
            else{
                const oJoinDate = new Date(joinDate)

                return sap.ui.core.format.DateFormat.getDateInstance({
                    style: 'medium'
                })?.format(oJoinDate)
            }
        }
    };

});