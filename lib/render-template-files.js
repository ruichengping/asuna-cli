
const async=require('async')
const Handlebars=require('handlebars')
const render = require('consolidate').handlebars.render

//首字母小写
Handlebars.registerHelper('firstLettertoLowercase', function(name) {
  return name[0].toLocaleLowerCase() +  name.substring(1);
})
//首字母大写
Handlebars.registerHelper('firstLettertoUpperCase', function(name) {
  return name[0].toLocaleUpperCase() +  name.substring(1);
})
/**
 * 渲染模板文件
 */
function renderTemplateFiles(){
  return (files, metalsmith, done) => {
    const keys=Object.keys(files)
    const metalsmithMetadata=metalsmith.metadata()
    async.each(keys,(fileName,next)=>{
      const str=files[fileName].contents.toString()
      if (!/{{([^{}]+)}}/g.test(str)) {
        return next()
      }
      render(str, metalsmithMetadata,(err,res)=>{
        if (err) {
          err.message = `[${fileName}] ${err.message}`
          return next(err)
        }
        files[fileName].contents = new Buffer(res)
        next()
      })
    },done)
  }
}

module.exports=renderTemplateFiles
