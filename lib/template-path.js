const path=require('path')
const request=require('request')
const logger=require('./logger')
module.exports={
  getOriginTemplatePath(template,callback){
    request({
      url:"https://ruichengping.github.io/config/asuna-cli-template.json",
      timeout: 1000
    },(err,res,body)=>{
      if(!err&&res.statusCode===200){
        let templateArray=JSON.parse(body);
        templateArray=templateArray.filter((item)=>{
            return item.name===template
        })
        if(templateArray.length>0){
          callback(templateArray[0].template)
        }else{
          logger.error("Sorry,cannot find the template.Please check the template name")
        }
      }else{
        logger.error("Sorry,server error,download template unsuccessfully.Please try again later!")
      }
    })
  }
}