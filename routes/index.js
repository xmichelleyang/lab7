var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(request, response){
  	response.render('index', projects);
  	projects["viewAlt"] = false;
  	console.log("normal view", projects["viewAlt"])
  	viewAlt = false;
};

exports.viewAlt = function(request, response){
  	response.render('index', projects);
  	projects["viewAlt"] = true;
  	console.log("not normal", projects["viewAlt"]);
  	console.log(projects.viewAlt);
  	viewAlt = true;
};
