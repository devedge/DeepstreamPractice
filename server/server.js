// Deepstream imports
const DeepstreamServer = require('deepstream.io');
const C = DeepstreamServer.constants;

// Initialize the server
const server = new DeepstreamServer({
	host: 'localhost',
	port: 6020
});


// Set complex object settings
//server.set('dataTransforms', [{
//	topic: C.TOPIC.RPC,
//	action: C.ACTIONS.REQUEST,
//	transform: function(data, metaData) {}
//}]);

// Start the server
server.start();

