define(['wrap!Backbone'],
function(Backbone){
    var Company = Backbone.Model.extend({
	initialize: function(){
	    console.log("initilizing Company");
	}
    })
    return Company;
})