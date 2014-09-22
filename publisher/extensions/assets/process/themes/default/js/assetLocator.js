$(document).ready(function() {

	var url = "https://localhost:9443/publisher/apis/processes?type=process";
	var pre_ids  = $("#properties_predecessors").val();	
	var suc_ids = $("#properties_successors").val();
	var gen_ids = $("#properties_generalizations").val();
	var spec_ids = $("#properties_specializations").val();

	alert("Lover");

	// $.get(url, function(response) {
	// 	var tempArray = pre_ids.split(",");
	// 	for (var i = 0; i < tempArray.length; i++){
	// 		for(var i in response ){
	// 			var item = response[i];

	// 			if (tempArray[i].val == item.id){
	// 				tem

	// 			}
	// 		}
	// 	}
			
	// 	};


	// }, "json");

});