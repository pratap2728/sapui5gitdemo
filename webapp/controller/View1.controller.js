sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("INVENIO.COMODATA_CRUDQ.controller.View1", {
		loadData: function() {
			var oModel = this.getOwnerComponent().getModel(); //Getting Service OData model defined in Component.js
			var oDModel = this.getOwnerComponent().getModel("oDModel"); //JSON Model defined in Component.js
			var view = this.getView();

			oModel.read("/ET_DEMOSet", { //Calling backend
				success: function(oData, oResponse) { // Success call back function
					var results = oResponse.data; //Results
					oDModel.setData(results); // Setting the data to the model
					view.byId("idProductsTable").setModel(oDModel, "TableModel"); // Setting the model to the table
				},

				error: function(oError) {

					} //Error Call Back Functon

			});
		}
	});
});