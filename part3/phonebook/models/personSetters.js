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

module.exports = { savePerson, deletePerson };