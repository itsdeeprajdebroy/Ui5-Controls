/*global QUnit*/

sap.ui.define([
	"sap/ff/formcontrol/controller/Form.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Form Controller");

	QUnit.test("I should test the Form controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
