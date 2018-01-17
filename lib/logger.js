const chalk = require('chalk')
const format = require('util').format



//普通日志-打印
exports.info=function(...args){
    const msg = format.apply(format, args)
    console.log()
    console.log(chalk.white('Info:'), msg)
}

//错误日志-打印
exports.error=function(...args){
    if(args[0] instanceof Error) args[0]=args[0].message.trim()
    const msg = format.apply(format, args)
    console.error()
    console.error(chalk.red('Error:'),msg)
    process.exit(1)
}

//成功日志-打印
exports.success=function(...args){
    const msg = format.apply(format, args)
    console.log()
    console.log(chalk.green('Success'), msg)
}