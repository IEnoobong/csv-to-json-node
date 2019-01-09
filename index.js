const csv = require('csvtojson')
const fs = require('fs')
const path = require('path')

const csvToJson = (inputFilePath = 'customer-data.csv', outputFilePath = 'customer-data.json') => {
    csv()
        .fromFile(inputFilePath)
        .on('error', (error) => {
            console.log(error)
        })
        .then((customerJson) => {
            fs.writeFileSync(path.join(__dirname, outputFilePath), JSON.stringify(customerJson));
        })
}

csvToJson(process.argv[2], process.argv[3])