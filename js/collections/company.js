define([
    'wrap!Backbone',
    'models/company'
],
function(Backbone, Company){
    var CompanyCollection = Backbone.Collection.extend({
	url: "localhost:3000/company",
	model: Company,
	initialize: function(){
	    console.log("Initializing Company Collection");
	}
    })
})