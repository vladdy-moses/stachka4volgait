jQuery.extend(jQuery.validator.messages, {
    required: "Это поле обязательно для заполнения.",
    //remote: "Please fix this field.",
    email: "Введите корректный e-mail.",
    //url: "Please enter a valid URL.",
    //date: "Please enter a valid date.",
    //dateISO: "Please enter a valid date (ISO).",
    //number: "Please enter a valid number.",
    //digits: "Please enter only digits.",
    //creditcard: "Please enter a valid credit card number.",
    equalTo: "Данные не совпадают.",
    //accept: "Please enter a value with a valid extension.",
    maxlength: jQuery.validator.format("Максимальная длина {0} симв."),
    minlength: jQuery.validator.format("Минимальная длина {0} симв."),
    //rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
    //range: jQuery.validator.format("Please enter a value between {0} and {1}."),
    //max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
    //min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});