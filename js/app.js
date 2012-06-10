define(['router',
	'views/Company'
], function(router,Company){
    var initialize = function(){
	router.initialize();
    }
    
    return {
	initialize: initialize
    };
})