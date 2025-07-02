sap.ui.define(["sap/uxap/BlockBase"], 

    function(BlockBase) {
        "use strict";
    
    return BlockBase.extend("sap.mp.objectpage.blocks.BlockCourse", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "sap.mp.objectpage.blocks.BlockCourse",
					type: "XML"
				},
				Expanded: {
					viewName: "sap.mp.objectpage.blocks.BlockCourse",
					type: "XML"
				}
			}
		}
	});

})