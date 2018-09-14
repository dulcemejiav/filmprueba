// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/prueba2/',
    	url: 'prueba2.html',
    	name: 'prueba2',
  		},
	
		{
		path: '/info-productos-prueba/',
    	url: 'info-productos-prueba.html',
    	name: 'info-productos-prueba',
  		},
		
		
	]
});

// Export selectors engine
var $$ = Dom7;





 

