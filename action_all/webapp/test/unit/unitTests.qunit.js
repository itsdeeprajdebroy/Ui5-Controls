/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sap/po/actionall/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
