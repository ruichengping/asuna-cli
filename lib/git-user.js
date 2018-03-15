const exec=require('child_process').execSync
module.exports=()=>{
  let name,email
  try {
    name=exec('git config --get user.name')
    email=exec('git config --get user.email')
  } catch (error) {}
  console.log(name.toString().trim().slice(1,-1))
  name =name && JSON.stringify(name.toString().trim()).slice(1,-1)

  email =email && ('<'+email.toString().trim()+'>')
  return (name||'') +(email||'')
}