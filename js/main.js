require.config({
    paths: {
    "Backbone": 'libs/backbone/backbone-min',
    "underscore": 'libs/underscore/underscore',
    "Handlebars": 'libs/handlebars/Handlebars',
    "Handlebars/i18nprecompile": "libs/i18nprecompile/i18nprecompile",
    "JQuery": 'libs/jquery/jquery.min',
    "json2": 'libs/json/json2',
    
    "wrap": 'libs/require/plugins/wrap',
    "json": 'libs/require/plugins/json',
    "text": 'libs/require/plugins/text',
    "hbs": 'libs/require/plugins/hbs',
    "order": 'libs/require/plugins/order'
    },
    wrapJS:{
	"Backbone":{
	    deps: ['underscore', 'JQuery'],
	    attach: "Backbone"
	}
    },
    hbs:{
	templateExtension: 'hbs',
	//// if disableI18n is `true` it won't load locales and the i18n helper
	// won't work as well.
	disableI18n : true,
	helperPathCallback: function(name){ return 'helpers/' + name}
    }
})

require([
    "JQuery"
],function($){
    require(['app'], function(app){
	app.initialize();
    })
})