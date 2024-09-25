const fs = require('fs');

// Read CSV file
fs.readFile('sheet.csv', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    
    const csvString = data.toString();

    
    parseCsv(csvString);
});

function parseCsv(csvString) {
    // Your CSV parsing logic here
    const lines = csvString.trim().replaceAll('\r', '').split('\n');

    const res=lines.map((elem)=>{
        const values=elem.split(',');
        const obj={
            topic:values[0],
            questions:values[1],
            level:values[2],
            day:values[3],
            completed:values[4],
            url:values[5]
        }

        return obj;
    })

    const sheet=res.filter((e)=>(e.completed=='No'||e.completed=='Yes'));
    console.log(sheet);
    
    return sheet;
}

export default parseCsv()
