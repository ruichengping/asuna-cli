const path = require('path')
const exists = require('fs').existsSync
const metadata = require('read-metadata')
const getGitUser = require('./git-user')
module.exports = function options(name, dir) {
  const opts = getMetadata(dir)
  
  setDefault(opts,'name',name)
  const author=getGitUser()
  if(author){
    setDefault(opts,'author',author)
  }
  return opts
}
/**
 * Gets the metadata from meta.js file.
 * @param {Stirng}
 * @returns {Object} 
 */
function getMetadata(dir) {
  const js = path.join(dir, 'meta.js')
  let opts = {}
  if (exists(js)) {
    const req = require(path.resolve(js))
    if (req !== Object(req)) {
      throw new Error('meta.js needs to expose an object')
    }
    opts = req
  }
  return opts
}


/**
 * Set the default value for a prompt question
 * @param {Object} options 
 * @param {Stirng} key 
 * @param {Stirng} val 
 */
function setDefault(options,key,val){
  const prompts=options.prompts||(options.prompts={})
  if(!prompts[key]||typeof prompts[key] !=='object'){
    prompts[key]={
      'type':'string',
      'default':val
    }
  }else {
    prompts[key]['default']=val
  }
}