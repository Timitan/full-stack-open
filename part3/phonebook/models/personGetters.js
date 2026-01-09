//const opts = { runValidators: true }

const findById = (Person, id) => {
  return Person.findById(id)
}

const getAllPersons = (Person) => {
  return Person.find({})
}

module.exports = { findById, getAllPersons }