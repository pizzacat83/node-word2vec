'use strict';

var w2v = require( './../lib' );

w2v.loadModel( { file : __dirname + '/fixtures/vectors.txt', is_binary: false } , function( err, model ) {
	console.log( model );

	var wordVecs = model.getVectors( [ 'Hamlet', 'daughter' ] );
	console.log( model.getNearestWord( wordVecs[0].values, 1 ) );

	var similar = model.mostSimilar( 'dead', 20 );
	console.log( similar );

	var analogy = model.analogy( 'mother',[ 'Hamlet', 'father' ], 10 );
	console.log( analogy );

	var similarity = model.similarity( 'father', 'mother' );
	console.log( similarity );
});
