define(['wrap!Backbone',
	'hbs!templates/company'
    ],
    function(Backbone){
	var CompanyView = Backbone.View.extend({
	    el: "#company",
	    tagName: "div",
	    template: _.template("Hello"), //template,
	    render: function(){
		this.$el.html(this.template(this.model.toJSON()));
	    }
	})
	
	return CompanyView;
    })