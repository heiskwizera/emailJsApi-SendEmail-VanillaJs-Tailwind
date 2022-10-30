

function initSend() {

    let first = document.getElementById('firstname');
    let last = document.getElementById('lastname');
    let subject = document.getElementById('subject');
    let email = document.getElementById('email');
    let msg = document.getElementById('message');

    let profile = {
        umukiriya: 'Codenet-Bts Support Team',
        from_name: first.value + ' ' + last.value,
        message: msg.value,
        subject: subject.value,
        email: email.value,
    }

    let fields = [first, last, subject, email, msg];
    let response = document.getElementsByTagName("subiza");
    let index = 0,
        error = 0;
    fields.forEach(element => {
        let fieldName = document.getElementsByTagName("subiza")[index].id;
        if (!element.checkValidity()) (element.value == "") ? response[index].innerHTML = fieldName + ' Is required' : response[index].innerHTML = element.validationMessage;
        if (element.checkValidity()) {
            response[index].innerHTML = "";
        }else{
            error++;
        }
        index++;
    });
    console.log(error);
    if (error === 0) sendMail(profile);
}

function sendMail(params) {
    emailjs.send("service_umed9ca", "template_ffg34l9", params)
        .then(function (response) {
            alert('Email sent successfully');
        }, function (error) {
            alert('error :  ' + error);
        });


  

}