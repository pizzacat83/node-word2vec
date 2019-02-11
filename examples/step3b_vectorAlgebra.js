'use strict';

var w2v = require( './../lib' );

w2v.loadModel( { file : __dirname + '/fixtures/vectors.txt', is_binary: false } , function( err, model ) {
	var wordVecs = model.getVectors( [ 'Hamlet', 'father', 'king' ] );
	var result = wordVecs[0]
		.subtract( wordVecs[1] )
		.add( wordVecs[2] );

	console.log( model.getNearestWords(result, 10 ) );
});
