const inquirer=require('inquirer')
inquirer.prompt({
  type:'input',
  name:'name',
  message:'Project name',
  default:'A Vue.js project'
}).then((answers)=>{
  console.log("答案："+answers)
}).catch(function(){

})