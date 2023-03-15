const mongoose = require('mongoose');
const Brand = require('./models/Brand');

mongoose.connect('mongodb://127.0.0.1:27017/habibati')
.then(() => console.log('MongoDB: Successfull connection completed'))
.catch((err) => console.log('MongoDB: Error occured', err));

const fillDatabase = async () => {
    await Brand.deleteMany({})
    .then(() => console.log('All previous data was wiped'))
    .catch((err) => console.log('An error occured while wiping!', err));

    await Brand.insertMany([
        {
            name: 'Maybelline New York',
            imageUrl: 'https://mir-s3-cdn-cf.behance.net/projects/404/9b9e96134935849.Y3JvcCw4NTcsNjcxLDE0LDExOA.jpeg',
            foundedIn: 1915,
            country: 'USA'
        },
        {
            name: 'L\'Oreal Paris',
            imageUrl: 'https://i.pinimg.com/736x/c5/9b/dd/c59bdd94d54d0463a122ff2a0f00f7e9--company-logo-pakistan.jpg',
            foundedIn: 1909,
            country: 'France'
        },
        {
            name: 'Lancome Paris',
            imageUrl: 'https://i.pinimg.com/originals/bd/08/77/bd0877db576877be754251a1731fc991.jpg',
            foundedIn: 1935,
            country: 'France'
        },
        {
            name: 'Estee Lauder',
            imageUrl: 'https://i.pinimg.com/736x/53/e7/ca/53e7cad625dc33d36e9e08e4c6a8d775--estee-lauder-victoria-beckham.jpg',
            foundedIn: 1946,
            country: 'USA'
        },
        {
            name: 'MAC Cosmetics',
            imageUrl: 'https://bolt-gcdn.sc-cdn.net/3/Gb1LmdFrajGqLVRmZI9AM?bo=EhgaABoAMgF9OgEEQgYI38mRjgZIAlASYAE%3D&uc=18',
            foundedIn: 1984,
            country: 'Canada'
        },
        {
            name: 'Clinique',
            imageUrl: 'https://i.pinimg.com/originals/b2/44/c1/b244c1929358226a65012323f04c0083.jpg',
            foundedIn: 1968,
            country: 'USA'
        }
    ])
    .then(() => console.log('Database successfully loaded with a new data. Disconnecting...'))
    .catch((err) => console.log('An error occured while inserting!', err));
}

fillDatabase().then(() => mongoose.connection.close());