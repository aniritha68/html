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

    $('.pagerlink').click(function () {
        var idName = $(this).attr('id');
        elementid(idName);
        function elementid(id) {
            $('#' + id).on('Onkeyup change', function () {
                if (id == 'emailnew') {
                    if ($('#' + id).val() != '') {
                        if (validationEmail($('#' + id).val())) {
                            $(".error").fadeOut('slow');
                        } else {
                            $(".error").text("Invalid Email");
                            $(".error").fadeIn('slow');
                        }
                    } else {
                        $(".error").text("Required");
                        $(".error").fadeIn('slow');
                    }
                }
                if (id == 'loginemail') {
                    if ($('#' + id).val() != '') {
                        if (validationEmail($('#' + id).val())) {
                            $(".error_log").fadeOut('slow');
                        } else {
                            $(".error_log").text('Incorrect Email');
                            $(".error_log").fadeIn('slow');
                        }
                    } else {
                        $(".error_log").text("Required");
                        $(".error_log").fadeIn('slow');
                    }
                }
                if (id == 'loginpassword') {
                    if ($('#' + id).val() != '') {
                        if (validationPassword($('#' + id).val())) {
                            $(".error_log2").fadeOut('slow');
                        } else {
                            $(".error_log2").text('Incorrect password');
                            $(".error_log2").fadeIn('slow');
                        }
                    } else {
                        $(".error_log2").text("Required");
                        $(".error_log2").fadeIn('slow');
                    }
                }

                if (id == 'password') {
                   
                        if (validationPassword($('#' + id).val())) {
                            $(".error_1").fadeOut('slow');
                        } else {
                            $(".error_1").text("Invalid password");
                            $(".error_1").fadeIn('slow');
                        }
                        if ($('#' + id).val() == '') {
                            $(".error_1").text("Required");
                            $(".error_1").fadeIn('slow');
                        }
                    
                }
                if (id == 'ConfirmPassword') {
                   
                    if ($('#password').val() == $('#ConfirmPassword').val()) {
                        $('.error_2').fadeOut('fast');
                    } 
                    else { $(".error_2").text("Not same as password");
                        $(".error_2").fadeIn('slow');}
                        
                    } 
                

                if (id == 'Roles') {

                    if ($('#' + id).val() != '') {
                        if (validationRoles($('#Roles').val())) {
                            $('.error_3').fadeOut('fast');
                        } else {
                            $('.error_3').text("Select from dropdown");
                            $('.error_3').fadeIn('slow');
                        }
                    } else {
                        $('.error_3').text("Required");
                        $('.error_3').fadeIn('slow');
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
                if (rolesval == 'Admin' || rolesval == 'User') {
                    return true;
                } else {
                    return false;
                }
            }
        }

    });
    $("#login").click(function (e) {

        var email = $("#loginemail").val().trim();
        var password = $("#loginpassword").val().trim();
        var focusSet = false;
    
        if (!$('#loginemail').val()) { 
            if ($("#loginemail").parent().next(".validation").length == 0) {
                $(".error_log").fadeOut('fast').css({"display":"none"});
                $("#loginemail").parent().after("<div class='validation' style='color:red;margin-bottom: 10px;'>Please enter email address</div>");
            }
            e.preventDefault();
            $('#loginemail').focus();
            focusSet = true;
        } else {
            $("#loginemail").parent().next(".validation").remove();
        }
        if (!$('#loginpassword').val()) {
           
            if ($("#loginpassword").parent().next(".validation").length == 0) {
                $(".error_log2").fadeOut('fast').css({"display":"none"});
                $("#loginpassword").parent().after("<div class='validation' style='color:red;margin-bottom: 10px;'>Please enter password</div>");
            }
            e.preventDefault();
            if (!focusSet) {
                $("#loginpassword").focus();
            }
        } else {
            $("#loginpassword").parent().next(".validation").remove();
        }
        if (email != "" && password != "") {
            $.ajax({
                url: 'process_form',
                type: 'post',
                data: { email: email, password: password },
                contentType: "application/json; charset=utf-8",
                success: function (response) {
                    var msg = "";
                    if (response == 1) {
                        window.location = "prossform";
                    } else {
                        msg = "Invalid username and password!";
                    }
                    $(".email-login").html(msg);
                }
            });
        }

    });
    $("#signup").click(function (e) {
        var email = $("#emailnew").val().trim();
        var password = $("#password").val().trim();
        var conformpassword = $("#ConfirmPassword").val().trim();
        var Roles = $("#Roles").val().trim();
        var focusSet = false;
        $(".login_box").css({"float":"left","height":"auto","width":"100%"});
        if (!$('#emailnew').val()) {
            if ($("#emailnew").parent().next(".validation").length == 0) {
                $(".error").fadeOut('slow');
                $("#emailnew").parent().after("<div class='validation' style='color:red;'>Please enter email address</div>");
            }
            e.preventDefault();
            $('#emailnew').focus();
            focusSet = true;
        } else {
            $("#emailnew").parent().next(".validation").remove();
        }
        if (!$('#password').val()) {
            if ($("#password").parent().next(".validation").length == 0) {
                $(".error_1").fadeOut('slow');
                $("#password").parent().after("<div class='validation' style='color:red;margin-top: 1px;'>Please enter password</div>");
            }
            e.preventDefault();
            if (!focusSet) {
                $("#password").focus();
            }
        } else {
            $("#password").parent().next(".validation").remove();
        }
        if (!$('#ConfirmPassword').val()) {
            if ($("#ConfirmPassword").parent().next(".validation").length == 0) {
                $(".error_2").fadeOut('slow');
                $("#ConfirmPassword").parent().after("<div class='validation' style='color:red;margin-bottom: 0px;'>Required</div>");
            }
            e.preventDefault();
            if (!focusSet) {
                $("#ConfirmPassword").focus();
            }
        } else {
            $("#ConfirmPassword").parent().next(".validation").remove();
        }
        if (!$('#Roles').val()) {
            if ($("#Roles").parent().next(".validation").length == 0) {
                $(".error_2").fadeOut('slow');
                $("#Roles").parent().after("<div class='validation' style='color:red;margin-bottom: 0px;'>Required</div>");
            }
            e.preventDefault();
            if (!focusSet) {
                $("#Roles").focus();
            }
        } else {
            $("#Roles").parent().next(".validation").remove();
        }
        var signup_data = {}
        signup_data.email = email;
        signup_data.password = password;
        signup_data.conformpassword = conformpassword;
        signup_data.Roles = Roles;

        if (username != "" && password != "") {
            $.ajax({
                url: 'process_form',
                type: 'post',
                data: JSON.stringify(signup_data),
                contentType: "application/json; charset=utf-8",
                success: function (response) {
                    var msg = "";
                    if (response == 1) {
                        window.location = "prossform";
                    } else {
                        msg = "Invalid username and password!";
                    }
                    $(".email-login").html(msg);
                }
            });
        }
    });


}); 
