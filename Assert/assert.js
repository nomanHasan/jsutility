var chalk = require('chalk');

const assert = (target, source, title = `TEST ${target} === ${source}`) => {
    let status, success;
    if (target === source) {
        status =  "SUCCESS";
        success = true;
    } else {
        status = "FAILED";
        success = false;
    }
    
    switch(status){
        case "SUCCESS": {
            console.log(chalk.bgBlack(title),chalk.bgGreen(status));
            break;
        }
        case "FAILED": {
            console.log(chalk.bgBlack(title),chalk.bgRed(status));
        }
    }


    return status;
}

module.exports = assert;