const faker = require('faker');
const Items = require('./list.model');
const connectDatabase = require('../db');

const dotenv = require('dotenv');
dotenv.config({ path: 'backend/config/env' });

connectDatabase();

const seedItems = async() => {
    try {
        await Items.deleteMany();
        console.log("Items Reset");

        for (var i = 0; i < 10; i++) {
            let items = await Items.create({
                "title": faker.commerce.product(),
                "description": faker.commerce.productDescription(),
                "date": faker.datatype.datetime(),
            });
            console.log(items);
        }
        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

seedItems();