
$(document).ready(function(){

    var user = JSON.parse(sessionStorage.getItem("user"));
    
	$.ajax({
         url: "http://localhost:8080/allUsers",
         type: "GET",
         beforeSend: function(xhr){xhr.setRequestHeader('token', user.token);},
         
         success: function(result) { 
         	
         	var test = JSON.stringify(result);
         	var json = JSON.parse(test);
         	var active;
         	var colorBtn;
         	var items = [];

         	for (var i = 0; i < json.count; i++) {
         		
         		active = "enable";
         		colorBtn = "success";

         		items.push("<tr>");
         		items.push("<td id=''"+i+"''>"+json.rows[i].username+ "</td>");
				items.push("<td id=''"+i+"''>"+json.rows[i].phoneNumber+ "</td>");
				items.push("<td id=''"+i+"''>"+json.rows[i].mail+ "</td>");

				if(json.rows[i].active){
					active = "disable";
					colorBtn = "danger";
				}

				items.push("<td><div><button  onclick='disableOrEnableUser("+json.rows[i].id+","
					+json.rows[i].active+")' class='btn btn-"
					+colorBtn+"''>"+ "To "+active +"</button>");
				items.push("</tr>");

			}

         	$("<tbody/>", {html: items.join("")}).appendTo("table");


         },

         error: function (error) {
            alert("Invalid Credentials"); 
         }
    });
});

function disableOrEnableUser(pid, pstatus){

	console.log("id: "+pid);
	console.log("status: "+pstatus);

	var user = JSON.parse(sessionStorage.getItem("user"));

	console.log("TOKEN: "+user.token);

	var url = "http://localhost:8080/activateUser";

	if(pstatus)
		url = "http://localhost:8080/disableUser";

	var dataTosend = {
	  id : pid,
	  token : user.token
	}

	$.ajax({
         url: url,
         type: "POST",
         data: dataTosend,
         dataType: 'json',
         success: function(result) { 

         	console.log(JSON.stringify(result));
         }

    });

    document.location.reload(true);
}



