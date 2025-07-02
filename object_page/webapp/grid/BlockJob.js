sap.ui.define(["sap/uxap/BlockBase"], 

    function(BlockBase) {
        "use strict";
    
    return BlockBase.extend("sap.mp.objectpage.grid.BlockJob", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "sap.mp.objectpage.grid.BlockJobColl",
					type: "XML"
				},
				Expanded: {
					viewName: "sap.mp.objectpage.grid.BlockJobExp",
					type: "XML"
				}
			}
		}
	});

})