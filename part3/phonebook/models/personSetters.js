const savePerson = (Person, personObj) => {
    const person = new Person({
        name: personObj.name,
        number: personObj.number,
    })
    console.log(personObj, person);

    return person.save()
};

const deletePerson = (Person, id) => {
    return Person.findByIdAndDelete(id)
}

const updatePerson = (Person, id, personObj) => {
    return Person.findById(id)
        .then(person => {
            person.name = personObj.name;
            person.number = personObj.number;
            return person.save();
        });
}

module.exports = { savePerson, deletePerson, updatePerson };