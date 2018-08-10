const request=require('request')
const ora=require('ora')
const chalk=require('chalk')

module.exports=(callback)=>{
  const spinner = ora('fetching template list...')
  spinner.start()
  request({
    uri:'https://ruichengping.github.io/config/asuna-cli-template.json',
    timeout:5000
  },(err, response, body)=>{
    if(err) {
      spinner.fail(chalk.red('fetch template list unsuccessfully'))
      console.log(err)
    }
    if(response&&response.statusCode===200){
      spinner.succeed(chalk.green('fetch template list successfully'))
      callback(JSON.parse(body));
    }
  })
}
