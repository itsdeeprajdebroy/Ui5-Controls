/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sap/ff/formcontrol/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
