const { google } = require('googleapis');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const KEY_FILE = 'my-accounting-app-480005-157f28b943b0.json';

console.log(`Testing connection to Sheet ID: ${SHEET_ID}`);
console.log(`Using key file: ${KEY_FILE}`);

async function testConnection() {
    try {
        const auth = new google.auth.GoogleAuth({
            keyFile: path.join(__dirname, KEY_FILE),
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        const response = await sheets.spreadsheets.get({
            spreadsheetId: SHEET_ID,
        });

        console.log('Connection successful!');
        console.log('Spreadsheet Title:', response.data.properties.title);
    } catch (error) {
        console.error('Connection failed:', error.message);
        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Status Text:', error.response.statusText);
        }
    }
}

testConnection();
