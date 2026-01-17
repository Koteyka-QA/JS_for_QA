var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com>"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];


    const emailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;
    var trustedEmails = [];
    for (var i = 0; i < arr.length; i++) {
        var email = arr[i].email;
        if (emailRegex.test(arr[i].email)) {
            trustedEmails.push(arr[i].email);
        }
    }

    console.log(emailRegex.test("test.test@gmail.com"));
    console.log(emailRegex.test("dmitro.porohov@yahoo.com"));
    console.log(emailRegex.test("andrii@mail.ru"));