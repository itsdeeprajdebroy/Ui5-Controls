sap.ui.define(["sap/uxap/BlockBase"], 

    function(BlockBase) {
        "use strict";
    
    return BlockBase.extend("sap.mp.objectpage.blocks.BlockAnnounce", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "sap.mp.objectpage.blocks.BlockAnnounce",
					type: "XML"
				},
				Expanded: {
					viewName: "sap.mp.objectpage.blocks.BlockAnnounce",
					type: "XML"
				}
			}
		}
	});

})