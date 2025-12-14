const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@fullstackopencluster.r3gog8q.mongodb.net/phonebook?appName=FullStackOpenCluster`

mongoose.set('strictQuery',false)

mongoose.connect(url, { family: 4 })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length > 3) {
    const name = process.argv[3]
    const phone = process.argv[4]

    const person = new Person({
        name: name,
        number: phone,
    })
    
    person.save().then(result => {
        console.log('adding', name, 'number', phone, 'to phonebook')
        mongoose.connection.close()
    })
} else {
    Person
    .find({})
    .then(persons=> {
        console.log("phonebook:")
        persons.forEach(person => {
            console.log(person.name, person.number)
        });
        mongoose.connection.close()
    })
}
