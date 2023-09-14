const generateURL = (protocol) => (domainname) => (page) =>
 `${protocol}${domainname}${page}` 

 const httpsMyWeb = generateURL("https://")("/mypage")
 const about = httpsMyWeb("/about");

 console.log(about);

 const  [pertama,kedua,ketiga] = ["Franzosich","Indonesich","Englich"]

 console.log(pertama)

 const Function = (newNama) => {
    this.nom = newNama
    return {
        name : this.nom
    }
 }
const person = Function("Grind")
console.log(person.name)

class Haus {
    constructor (name,age) {
        this.name = name;
        this.age = age;
    }
}
const x = new Haus ("Joko",30)
console.log(x)

class Orang {
    constructor() {
        this.name = "Abdul";
        this.status = "KIA";
    }
}
const Private = new Orang();
console.log(Private)