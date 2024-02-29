$(document).ready(function () {

    (function ($) {
        "use strict";


        jQuery.validator.addMethod('answercheck', function (value, element) {
            return this.optional(element) || /^\bcat\b$/.test(value)
        }, "type the correct answer -_-");

        // validate contactForm form
        $(function () {
            $('#contactForm').validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                    },
                    subject: {
                        required: true,
                        minlength: 3
                    },
                    number: {
                        required: true,
                        minlength: 10
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true,
                        minlength: 10
                    }
                },
                messages: {
                    name: {
                        required: "Enter your Name",
                        minlength: "The name must contain at least two characters"
                    },
                    subject: {
                        required: "Enter the Subject",
                        minlength: "The subject must contain at least four characters"
                    },
                    number: {
                        required: "come on, you have a number, don't you?",
                        minlength: "your Number must consist of at least 10 Digit"
                    },
                    email: {
                        required: "Enter your Email"
                    },
                    message: {
                        required: "write a message",
                        minlength: "The message must contain at least 10 characters"
                    }
                },
                submitHandler: function (form) {
                    $(form).ajaxSubmit({
                        type: "POST",
                        data: $(form).serialize(),
                        url: "contact_process.php",
                        success: function () {
                            $('#contactForm :input').attr('disabled', 'disabled');
                            $('#contactForm').fadeTo("slow", 1, function () {
                                $(this).find(':input').attr('disabled', 'disabled');
                                $(this).find('label').css('cursor', 'default');
                                $('#success').fadeIn()
                                $('.modal').modal('hide');
                                $('#success').modal('show');
                            })
                        },
                        error: function () {
                            $('#contactForm').fadeTo("slow", 1, function () {
                                $('#error').fadeIn()
                                $('.modal').modal('hide');
                                $('#error').modal('show');
                            })
                        }
                    })
                }
            })
        })

    })(jQuery)
})