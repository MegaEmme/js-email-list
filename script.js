console.log("Mike's mail list");

const mailBoolean = "https://flynn.boolean.careers/exercises/api/random/mail";
console.log(mailBoolean);

mailListElement = document.getElementById('mail-list');
console.log(mailListElement);

let mail = '';

for (let i=0; i< 10; i++) {

axios.get(mailBoolean).then((response) =>{

    mail += `<div id="mail-list">${response.data.response}</div>`

mailListElement.innerHTML = mail;
})
.catch(error => {
    console.log('errore')
})

}