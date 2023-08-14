const xlsx = require('xlsx');             
const ResultModule = require('../models/Results.js')
module.exports = {
  readExcelController:  (req, res) => {
    const workbook = xlsx.readFile(`${__dirname}/Copy of Stage_New_Search(2).xlsx`);  
  
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const readOptions = { sheetRows: 100 , cellDates: true, // This option will parse date cells correctly
    cellText: false,}; // Adjust the chunk size as needed

    const stream = xlsx.stream.to_json(worksheet, readOptions);
    
    stream.on('data', async chunk => {
      // Process and store each chunk of data in the database
      try {
        console.log('Chunk stored in the database:', chunk);
      } catch (error) {
        console.error('Error storing chunk in the database:', error);
      }
    });
  
  },
};