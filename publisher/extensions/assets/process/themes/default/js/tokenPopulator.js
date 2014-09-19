 $(document).ready(function() {
    $.ajax({
        url:"https://localhost:9443/publisher/apis/assets?type=process&&fields=id,overview_name",
        type:'GET',
        success:function(response){
        	alert(response.data);
            
// var assets = JSON.stringfy(response.data);
           
               $("#properties_predecessors").tokenInput(response.data);

        },
        error:function(){
            console.log('unable to fetch tag cloud for '+type);
        }
    });


    });

 	// var url = "localhost:9443/publisher/apis/assets?type=process";
  //           $("#properties_predecessors").tokenInput(url,{
  //           	onResult:function(){	
  //           		console.log(''+JSON.stringfy(arguments));
  //           	}
  //           });
