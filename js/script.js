$(function () {
    playerInit();
    popupInit();
    formsValidationInit();
    partnersButtonInit();
});

/* YouTube functions BEGIN */
var player;

playerInit = function () {
    $('#mediaWrapper .button.video').click(function (event) {
        event.preventDefault();
        $(this).addClass('disabled');

        // 2. This code loads the IFrame Player API code asynchronously.
        var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    });
};

function onYouTubeIframeAPIReady() {
    $('#mediaWrapper .button.video').hide();
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'bt-Xy0F0Fds',
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

/* END */

/* Popup BEGIN */
popupInit = function () {
    // hide success popup
    $('#successPopup').hide();

    $(".button.register").click(function (e) {
        e.preventDefault();
        if (!$(this).hasClass('disabled')) {
            $('body').addClass('popupOpened');
            $(".popup").focus();
        }
    });

    $('.close').click(function () {
        $('body').removeClass('popupOpened');
    });

    $('#popupWrapper').click(function (e) {
        if (this === e.target) {
            $('body').removeClass('popupOpened');
        }
    });
};
/* END */

/* Forms validation BEGIN */
formsValidationInit = function () {
    $('#registerForm').validate({
        rules: {
            firstName: {
                minlength: 1,
                maxlength: 64,
                required: {
                    depends: trimField
                },
                regex: /^[A-Za-zА-Яа-я\s-]*$/
            },
            lastName: {
                minlength: 1,
                maxlength: 64,
                required: {
                    depends: trimField
                },
                regex: /^[A-Za-zА-Яа-я\s-]*$/
            },
            email: {
                minlength: 5,
                maxlength: 128,
                email: true,
                regex: /^[^@]+@[^\.]+\.[^\.]{2,}/
            },
            password: {
                minlength: 8,
                maxlength: 32,
                passswordCheck: true
            },
            passwordReply: {
                equalTo: "#password"
            }
        },
        messages: {
            firstName: {
                regex: "К вводу допускаются только буквы, цифры, знак - и пробел."
            },
            lastName: {
                regex: "К вводу допускаются только буквы, цифры, знак - и пробел."
            },
            email: {
                regex: "Почта должна находиться на домене минимум второго уровня."
            }
        },
        submitHandler: function () {
            $('#registerPopup').hide();
            $('#successPopup').show();
            $('.button.register').addClass('disabled');
        },
        errorPlacement: function (error, element) {
            var container = $('<div />');
            container.addClass('errorWrapper');  // add a class to the wrapper
            error.insertAfter(element);
            error.wrap(container);
            $("<div class='errorImage'></div>").insertAfter(error);
        },
        success: function (element) {
            $(element).addClass("checked");
        }
    });
};

trimField = function () {
    var currentVal = $(this).val();
    var trimmedVal = $.trim(currentVal);
    if (currentVal !== trimmedVal) {
        $(this).val(trimmedVal);
    }
    return true;
};

$.validator.addMethod(
    "regex",
    function (value, element, regexp) {
        var re = new RegExp(regexp);
        return this.optional(element) || re.test(value);
    }
);
$.validator.addMethod(
    "passswordCheck",
    function (value, element) {
        return /^[A-Za-z\d=!\-@._*]*$/.test(value) && /[A-Z]/.test(value) && /\d/.test(value) && /[=!\-@._*]/.test(value);
    },
    "Пароль обязательно должен состоять из латинских символов и содержать: минимум 1 заглавную букву, спецсимвол (= ! - @ . _ *) или цифру."
);
/* END */

/* PartnersButton functionality BEGIN */
partnersButtonInit = function () {
    var dropdownOpened = false;
    $('#partnersButton').click(function (e) {
        e.preventDefault();

        if (dropdownOpened) {
            $(this).siblings('ul').fadeOut(150);
            dropdownOpened = false;
        } else {
            $(this).siblings('ul').fadeIn(150);
            dropdownOpened = true;
        }
    });
};
/* END */