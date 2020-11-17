let dog = {
    breed: "Brithan",
    color: "black",
    birthYear: 2005,
    female: true,
    name: "Nora",
    user: {
        name: "Leksa",
        status: "ipoteka"
    },
    getInfo: function() {
        let age = 2020 - this.birthYear;
        return "Cat " + this.name + ", its age - " + age + " years";
    } 
}

console.log(dog.user.name);

console.log(dog.getInfo());