const fs = require('fs');
const path = require('path');

const dirName = path.dirname(__filename);
const sheetPath = path.join(dirName, 'sheet.csv');

function parseCsv(csvString) {
    try {
        const lines = csvString.trim().replace('/r', '').split('\n');
        
        const sheetData = lines.map((line) => {
            const values = line.split(',');
            return {
                topic: values[0],
                questions: values[1],
                level: values[2],
                day: values[3],
                completed: values[4],
                url: values[5]
            };
        });

        const filteredSheet = sheetData.filter((entry) => entry.completed === 'No' || entry.completed === 'Yes');
        return filteredSheet;
    } catch (error) {
        console.error('Error parsing CSV:', error);
        return []; 
    }
}

// Read CSV file and parse it
const csvString = fs.readFileSync(sheetPath, 'utf8');
const sheet = parseCsv(csvString);



// Export the parsed sheet data
module.exports = sheet;
