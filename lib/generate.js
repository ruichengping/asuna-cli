const path=require('path')
const getOptions=require('./options')
const Metalsmith=require('metalsmith')
const Handlebars=require('handlebars')
const chalk=require('chalk')
const logger=require('./logger')
const ask=require('./ask')
Handlebars.registerHelper("if_eq",function(a,b,opts){
  return a === b
    ? opts.fn(this)
    : opts.inverse(this)
})

Handlebars.registerHelper('unless_eq', function (a, b, opts) {
  return a === b
    ? opts.inverse(this)
    : opts.fn(this)
})


module.exports = function generate(name, src, dest, done) {
  const opts = getOptions(name, src)
  const metalsmith=Metalsmith(path.join(src,"/template"))
  const data=Object.assign(metalsmith.metadata(),{
    destDirName:name,
    inPlace:dest === process.cwd(),
    noEscape: true
  })
  
  opts.helpers&&Object.keys(opts.helpers).map(key=>{
    Handlebars.registerHelper(key,opts.helpers[key])
  })

  const helpers={chalk,logger}

  if(opts.metalsmith&&typeof opts.metalsmith.before==='function'){
    opts.metalsmith.before(metalsmith,opts,helpers)
  }

  metalsmith.use()
}

function askQuestions(prompts){
  return (files,metalsmith,done)=>{
    ask(files,metalsmith.metadata(),done)
  }
}