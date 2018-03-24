const async=require('async')
const inquirer = require('inquirer')
module.exports = function ask (prompts, data, done) {
  async.eachSeries(Object.keys(prompts),(key,next)=>{
    prompt(data, key, prompts[key], next)
  },done)
}

function prompt(data, key, prompt, done){
  inquirer.prompt([{
    type: prompt.type,
    name: key,
    message: prompt.message,
    default: prompt.default,
    choices: prompt.choices || [],
    validate: prompt.validate || (() => true)
  }]).then(answers => {
    if (Array.isArray(answers[key])) {
      data[key] = {}
      answers[key].forEach(multiChoiceAnswer => {
        data[key][multiChoiceAnswer] = true
      })
    } else if (typeof answers[key] === 'string') {
      data[key] = answers[key].replace(/"/g, '\\"')
    } else {
      data[key] = answers[key]
    }
    done()
  }).catch(done)
}