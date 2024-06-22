// const { format } = require('date-fns');
// const { v4: uuid } = require('uuid');

// const fs = require('fs');
// const fsPromises = require('fs').promises;
// const path = require('path');

// const logEvents = async (message) => {
//     const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
//     const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

//     try {
//         if (!fs.existsSync(path.join(__dirname,'..', 'logs'))) {
//             await fsPromises.mkdir(path.join(__dirname, '..','logs'));
//         }

//         await fsPromises.appendFile(path.join(__dirname,'..' ,'logs','reqqLog.txt'), logItem);
//     } catch (err) {
//         console.log(err);
//     }
// }

// module.exports = logEvents;

const {format} = require('date-fns')
const {v4:uuid} = require('uuid')
const path = require('path')
const fs = require('fs')
const fsPromises = require('fs').promises


const logEvents = async (message)=>{
    const dateTime = `${format(new Date() ,'yyyyMMdd\tHH:mm:ss')}`
    const logData = `${dateTime}\t${uuid()}\t${message}\n`
    try {
        if(!fs.existsSync(path.join(__dirname,'..','logs'))){
            await fsPromises.mkdir(path.join(__dirname,'..','logs'))
        }
        await fsPromises.appendFile(path.join(__dirname,'..','logs','reqqwLog.txt'),logData)
    } catch(err){
        console.log(err);
    }
}

module.exports = logEvents       