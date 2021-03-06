
export default (db, schemas) => {
	for(let schema of schemas){
		console.log('Create DB schema')
		db.version(1).stores(schema)
	}

	if(!db.isOpen()){
		console.log('DB not open, opening...')
		db.open().catch(function(error){
			console.error('A IndexedDB error occured', error)
		})
	}
}
