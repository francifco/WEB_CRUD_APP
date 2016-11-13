
$("#idRegisterUser").click(function(){


  var confirmPassword = $("#idConfPassword").val();

  console.log(confirmPassword);

  var dataTosend = {

    username : $("#idUsername").val(),
    password : $("#idPassword").val(),
    phoneNumber : $("#idPhoneNumber").val(),
    mail : $("#idMail").val(),
    address : $("#idAddress").val()
  }

  console.log(dataTosend);

  if(confirmPassword === dataTosend.password) {

    $.ajax({

      type: 'POST',
      url: 'http://localhost:8080/register',
      data: dataTosend,
      dataType: 'json',
      
      success: function (result, error) {
        if(result){ 
            alert("The user is already registered");
            window.location.href = "login.html"
          }
      },

      error: function (error) {
        alert("Invalid credentials"); 
      }
            
    });
    event.preventDefault();

  } else {

    alert("!The password and confirmation password no match!");
  }


});