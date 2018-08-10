const path=require('path')
module.exports={
  transformIntoAbsolutePath:function(localPath){
    if(typeof localPath === 'string'){
      return path.isAbsolute(localPath)?localPath:path.join(process.cwd(),localPath)
    }
    return localPath;
  }
}