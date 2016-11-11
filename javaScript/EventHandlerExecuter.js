

//API default routes.
var Routes = {

login : "http://localhost:8080/login",                  //to login a user
allUsers : "http://localhost:8080/allUsers",            //to get all users
usersDisabled : "http://localhost:8080/usersDisabled",  //to get all users disabled
usersEnabled : "http://localhost:8080/usersEnabled",    //to get all users enabled
activateUser : "http://localhost:8080/activateUser"     //to activate users

};


////la activacion o desactivacion es con multiples ID ahy que modificar la api


$("#signInButton").click(function(){


var dataTosend = {

  username : $("#inputUsername").val(),
  password : $("#inputPassword").val()

}

$.ajax({

        type: 'POST',
        url: Routes.login,
        data: dataTosend,
        dataType: 'json',
        success: function (result, error) {
            console.log(JSON.stringify(result));
          },

        error: function (error) {
            alert("Invalid Credentials"); 
          }
          
      });
event.preventDefault();


});


 