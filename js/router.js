define(["wrap!Backbone"],
    function(Backbone){
	var Router = Backbone.Router.extend({
	    routes: {
		'/companies' : "showCompanies",
		'/company/:companyid' : 'showCompany',
		'' : 'defaultAction'
		
	    },
	    showCompanies: function(){
		console.log("Going to show companies");
	    },
	    showCompany: function(){
		console.log("Going to show company");
	    },
	    defaultAction: function(actions){
		console.log("No Route: ", actions)
	    },
	    initialize: function(){
		return this;
	    }
	})
	
	function initialize() {
		new Router();
		Backbone.history.start();
	}
		
	return {
		initialize: initialize
	}
	
    }
)