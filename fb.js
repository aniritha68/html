$(document).ready(function () {
    $(".email-signup").hide();
    $("#signup-box-link").click(function () {
        $(".email-login").fadeOut(100);
        $(".email-signup").delay(100).fadeIn(100);
        $("#login-box-link").removeClass("active");
        $("#signup-box-link").addClass("active");
    });
    $("#login-box-link").click(function () {
        $(".email-login").delay(100).fadeIn(100);;
        $(".email-signup").fadeOut(100);
        $("#login-box-link").addClass("active");
        $("#signup-box-link").removeClass("active");
    });

    $('.pagerlink').click(function() { 
        var idName = $(this).attr('id');
    elementid(idName);  
 function elementid(id){
    $('#'+ id).on('keypress change', function () {
        if(id == 'emailnew'){
        if($('#' + id).val() != ''){
        if(validationEmail($('#' + id).val()) ){
            $(".error").fadeOut('slow');
        } else {
            $(".error").text("Invalid Email");
                   $(".error").fadeIn('slow');
        }
    } else{
        $(".error").text("Required");
                   $(".error").fadeIn('slow');
    }
}
if(id == 'password'){
        if($('#' + id).val() != ''){
        if(validationPassword($('#' + id).val()) ){
            $(".error_1").fadeOut('slow');
        } else {
            $(".error_1").text("Invalid password");
                   $(".error_1").fadeIn('slow');
        }
    } else{
        $(".error_1").text("Required");
                   $(".error_1").fadeIn('slow');
    }
}
if(id == 'ConfirmPassword'){
         if ( $('#password').val() == $('#ConfirmPassword').val()) {
            $('.error_2').fadeOut('fast');
    }else if($('#password').val() == ''){
        $('.error_2').text("Required");
        $('.error_2').fadeIn('slow');
    } else{
        $(".error_2").text("Not same as password");
            $(".error_2").fadeIn('slow');     
    }
}   

if(id == 'Roles'){
    
    if($('#' + id).val() == ''){
     if(validationRoles($('#Roles').val())){
        $('.error_3').fadeOut('fast');  
          } else{
            $('.error_3').text("Select from dropdown");
            $('.error_3').fadeIn('slow');
        } 
    } else{   
        $('.error_2').text("Required");
        $('.error_2').fadeIn('slow');
        }
        
    } 

 });
 function validationEmail(emailval) {
   
   var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
   if (emailReg.test(emailval)) {
       return true;
   } else {
       return false;
   } 
}
function validationPassword(passwordval) {
   var Regxpassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
   if (Regxpassword.test(passwordval)) {
       return true;
   } else {
       return false;
}
}
function validationRoles(rolesval) {
   if (rolesval== 'Admin' || rolesval== 'User') {
       return true;
   } else {
       return false;
}
}
}

}); 
$("#login").click(function(e){
    
    var email = $("#loginemail").val().trim();
    var password = $("#loginpassword").val().trim();
    var focusSet = false;
    if (!$('#loginemail').val()) {
        if ($("#loginemail").parent().next(".validation").length == 0) 
        {
            $("#loginemail").parent().after("<div class='validation' style='color:red;margin-bottom: 20px;'>Please enter email address</div>");
        }
        e.preventDefault(); 
        $('#loginemail').focus();
        focusSet = true;
    } else {
        $("#loginemail").parent().next(".validation").remove(); 
    }
    if (!$('#loginpassword').val()) {
        if ($("#loginpassword").parent().next(".validation").length == 0) 
        {
            $("#loginpassword").parent().after("<div class='validation' style='color:red;margin-bottom: 20px;'>Please enter password</div>");
        }
        e.preventDefault(); 
        if (!focusSet) {
            $("#loginpassword").focus();
        }
    } else {
        $("#loginpassword").parent().next(".validation").remove(); 
    }
    if( email != "" && password != "" ){
        $.ajax({
            url:'process_form',
            type:'post',
            data:{email:email,password:password},
            contentType: "application/json; charset=utf-8",
            success:function(response){
                var msg = "";
                if(response == 1){
                    window.location = "prossform";
                }else{
                    msg = "Invalid username and password!";
                }
                $(".email-login").html(msg);
            }
        });
    }
       
});
$("#email-signup").click(function(){
    var email = $("#emailnew").val().trim();
    var password = $("#password").val().trim();
    var conformpassword = $("#ConfirmPassword").val().trim();
    var Roles = $("#Roles").val().trim();
    var signup_data = {}
    signup_data.email=email;
    signup_data.password=password;
    signup_data.conformpassword=conformpassword;
    signup_data.Roles=Roles;

    if( username != "" && password != "" ){
        $.ajax({
            url:'process_form',
            type:'post',
            data:JSON.stringify(signup_data),
            contentType: "application/json; charset=utf-8",
            success:function(response){
                var msg = "";
                if(response == 1){
                    window.location = "prossform";
                }else{
                    msg = "Invalid username and password!";
                }
                $(".email-login").html(msg);
            }
        });
    }
});
    
    
}); 
