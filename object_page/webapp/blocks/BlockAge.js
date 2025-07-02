sap.ui.define(["sap/uxap/BlockBase"], 

    function(BlockBase) {
        "use strict";
    
    return BlockBase.extend("sap.mp.objectpage.blocks.BlockAge", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "sap.mp.objectpage.blocks.BlockAge",
					type: "XML"
				},
				Expanded: {
					viewName: "sap.mp.objectpage.blocks.BlockAge",
					type: "XML"
				}
			}
		}
	});

})