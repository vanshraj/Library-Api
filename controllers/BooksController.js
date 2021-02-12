var Book = require('../models/Book.js');

module.exports = {
	//find all resource with query
	find: function(params, callback) {
		Book.find(params, function(err,disabilities){
			if(err){
				callback(err, null);
				return;
			}
			callback(null, disabilities);
		})
	},

	//find single resource by id
	findById: function(id, callback) {
		Book.findOne({'uuid':id}, function(err, disability){
			if(err){
				callback(err, null);
				return;
			}
			callback(null, disability);
		})
	},

	//create new resource
	create: function(params, req , callback) {
		Book.create(params, function(err, disability){
			if(err){
				callback(err, null);
				return;
			}
			callback(null, disability);
		});
	},

	//update resource by id
	update: function(id, params, callback){
		Book.findOneAndUpdate({'uuid':id}, params, {new:true}, function(err, disability){
			if(err){
				callback(err,null);
				return;
			}
			callback(null, disability);
		});
	},

	//delete resource by id
	delete: function(id, callback) {
		Book.findOneAndDelete({'uuid':id}, function(err, doc){
			if(err){
				callback(err, null);
				return;
			}
			callback(null, doc);
		});
	}
}
