Object.defineProperty( Object.prototype, "has",
	{
		"enumerable": false,
		"configurable": true,
		"writable": false,
		"value": function has( property ){
			try{
				return ( this[ property ] !== undefined || property in this );
			}catch( error ){
				return false;
			}
		}
	} );