const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./db')

dotenv.config({ path: 'backend/config/env' });

connectDatabase();
app.listen(process.env.PORT, () => {
    console.log("Server started on port " + process.env.PORT)
})