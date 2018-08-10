const async=require('async')
const render = require('consolidate').handlebars.render
/**
 * 渲染模板文件
 */
function renderTemplateFiles(){
  return (files, metalsmith, done) => {
    const keys=Object.keys(files)
    const metalsmithMetadata=metalsmith.metadata()
    async.each(keys,(fileName,next)=>{
      const str=files[fileName].contents.toString()
      render(str, metalsmithMetadata,(err,res)=>{
        if (err) {
          err.message = `[${file}] ${err.message}`
          return next(err)
        }
        files[fileName].contents = new Buffer(res)
        next()
      })
    },done)
  }
}

module.exports=renderTemplateFiles