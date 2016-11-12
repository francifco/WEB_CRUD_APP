

$("#signInButton").click(function(){


var dataTosend = {

  username : $("#inputUsername").val(),
  password : $("#inputPassword").val()

}

$.ajax({

        type: 'POST',
        url: 'http://localhost:8080/login',
        data: dataTosend,
        dataType: 'json',
        success: function (result, error) {
            //console.log(JSON.stringify(result));

            if(result){
              
              sessionStorage.setItem("user", JSON.stringify(result)); 
              window.location.href = "welcome.html"

            }

          },

        error: function (error) {
            alert("Invalid Credentials"); 
          }
          
      });
event.preventDefault();
});


 