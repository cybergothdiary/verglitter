const mongoose = require('mongoose');
const Brand = require('./models/Brand');
const Product = require('./models/Product');

mongoose.connect('mongodb://127.0.0.1:27017/habibati')
.then(() => console.log('MongoDB: Successfull connection completed'))
.catch((err) => console.log('MongoDB: Error occured', err));

const fillDatabase = async () => {
    await Brand.deleteMany({})
    .then(() => console.log('All previous brands were wiped'))
    .catch((err) => console.log('An error occured while wiping!', err));

    await Product.deleteMany({})
    .then(() => console.log('All previous products were wiped'))
    .catch((err) => console.log('An error occured while wiping!', err));

    await Brand.insertMany([
        {
            short: 'maybelline',
            name: 'Maybelline New York',
            imageUrl: 'https://i.imgur.com/fRuyCza.jpg',
            foundedIn: 1915,
            country: 'USA',
            history: 'The Company was founded in Chicago by pharmacist Thomas Lyle Williams in 1915. Williams noticed his older sister Mabel applying a mixture of Vaseline and coal dust to her eyelashes to give them a darker, fuller look. Williams renamed his eye beautifier Maybelline in her honor. In 1917, the company produced Maybelline Cake Mascara, the first modern eye cosmetic for everyday use.'
        },
        {
            short: 'loreal',
            name: 'L\'Oreal Paris',
            imageUrl: 'https://i.imgur.com/hbYWnxn.jpg',
            foundedIn: 1909,
            country: 'France',
            history: 'In 1909, Eugène Schueller, a young chemist with an entrepreneurial spirit, founded the company that was to become the L’Oréal Group. It all began with one of the first hair dyes that he formulated, manufactured and sold to Parisian hairdressers. With this, the founder of the Group forged the first link in what is still the DNA of L\'Oréal: research and innovation in the service of Beauty.'
        },
        {
            short: 'lancome',
            name: 'Lancome Paris',
            imageUrl: 'https://i.imgur.com/BWDOOis.jpg',
            foundedIn: 1935,
            country: 'France',
            history: 'Founded in 1935 by Guillaume d\'Ornano and his business partner Armand Petitjean in France, as originally a fragrance house. The name "Lancôme" was inspired by the forest of Lancosme that lies in the Indre valley in the heart of France in the region of Brenne - the name was chosen by Guillaume\'s wife Elisabeth d\'Ornano. The roses in the area inspired the company\'s symbol of the single golden rose.'
        },
        {
            short: 'estee',
            name: 'Estee Lauder',
            imageUrl: 'https://i.imgur.com/mzxAiPE.jpg',
            foundedIn: 1946,
            country: 'USA',
            history: 'The company began in 1946 when Estée Lauder and her husband Joseph began producing cosmetics in New York City. Over the first 15 years, they expanded the range and continued to sell their products in the United States. In 1960, the company started its first international account in the London department store Harrods. The following year it opened an office in Hong Kong.'
        },
        {
            short: 'armani',
            name: 'Armani Beauty',
            imageUrl: 'https://i.imgur.com/ZAFvPOw.jpg',
            foundedIn: 1975,
            country: 'Italy',
            history: 'Armani and his partner, architect Sergio Galeotti, founded Giorgio Armani SpA in 1975, reportedly on money from the sale of Armani\'s Volkswagen. The company signed a license with Gruppo Finanziario Tessile in 1978. It partnered with L\'Oreal on a licensing agreement for the production and distribution of fragrances, cosmetics and beauty products in 1980 and with Luxottica for eyewear in 1988. By 1993, the Armani name was represented by 23 licensees and two large joint ventures in Japan.'
        },
        {
            short: 'clinique',
            name: 'Clinique',
            imageUrl: 'https://i.imgur.com/WR6b5Q3.jpg',
            foundedIn: 1968,
            country: 'USA',
            history: 'In 1967, American Vogue magazine published an article called «Can Great Skin Be Created?»,  written by beauty editor Carol Phillips with Norman Orentreich, discussing the significance of a skin-care routine. Evelyn Lauder, daughter-in-law of Estée Lauder, read the article and brought it to Estée\'s attention. Both Carol Phillips and Orentreich were recruited to help create the brand, and in April 1968, Clinique premiered as the world\'s first allergy tested, dermatologist-driven line at Saks Fifth Avenue in the New York, US, launched with 117 products.'
        }
    ])
    .then(() => console.log('Database successfully loaded with a new data. Disconnecting...'))
    .catch((err) => console.log('An error occured while inserting!', err));
}

fillDatabase().then(() => mongoose.connection.close());