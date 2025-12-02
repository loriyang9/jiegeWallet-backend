const dotenv = require('dotenv');
dotenv.config();

console.log('Loaded from .env:');
console.log('GOOGLE_SHEET_ID:', process.env.GOOGLE_SHEET_ID);
console.log('Length:', process.env.GOOGLE_SHEET_ID ? process.env.GOOGLE_SHEET_ID.length : 0);
