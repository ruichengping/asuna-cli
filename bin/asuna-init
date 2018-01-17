#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')
const path = require('path')
const home = require('user-home')
const exists = require('fs').existsSync
const inquirer = require('inquirer')
const logger = require('../lib/logger')
const checkVersion = require('../lib/check-version')




program
  .usage('<template-name> [project-name]')
  .option('-c, --clone', 'use git clone')
  .option('--offline', 'use cached template')
  .parse(process.argv)

program.args.length < 1 ? program.help() : main()


/**
 * 自定义帮助
 */
program.on('--help', () => {
  console.log('  Examples:')
  console.log()
  console.log(chalk.gray('    # create a new project with a default template'))
  console.log('    $ asuna init default my-project')
  console.log()
  console.log(chalk.gray('    # create a new project straight from a github template'))
  console.log('    $ asuna init username/repo my-project')
  console.log()
})



/**
 * Function main
 */

function main() {
  let template = program.args[0]
  const hasSlash = template.indexOf('/') > -1   //true-采用自定义远程git仓库的模板   false-采用默认的git仓库模板
  const rawName = program.args[1]    //输入的项目名称
  const inPlace = !rawName || rawName === '.'   //是否设置了项目名称  true-未设置  false-已设置
  const name = inPlace ? path.relative('../', process.cwd()) : rawName  //最终的项目名称  true-采用当前文件夹名称  false-采用设置的项目名称
  const to = path.resolve(rawName || '.') //生成的项目所在路径
  const clone = program.clone || false //是否采用git远程仓库的地址获取模板

  // const tmp = path.join(home, '.vue-templates', template.replace(/\//g, '-'))
  // if (program.offline) {
  //   console.log(`> Use cached template at ${chalk.yellow(tildify(tmp))}`)
  //   template = tmp
  // }

  console.log(program.args)
  console.log(program.args[1])
  console.log("rawName:" + rawName)
  console.log("inPlace:" + inPlace);
  console.log("name:" + name);
  console.log("to:" + to);
  console.log("clone:" + clone);



  
  //start-纯属为了显示的好看一些 
   
  console.log()
  process.on('exit', () => {
    console.log()
  })

  //end-纯属为了显示的好看一些
   

  //判断目标路径是否存在
  if(exists(to)){
    //存在-询问是否覆盖已存在的目标路径的内容
    inquirer.prompt([{
      type:'confirm',
      message:inPlace
      ?'Generate project in current directory?'
      :'Target directory exists. Continue?',
      name:'yes'
    }]).then(answers=>{
      if(answers.yes){
        run()
      }
    }).catch(logger.error)
  }else{
    //不存在-询问是否覆盖已存在的目标路径的内容
    run();
  }

}

/**
 * Function run
 */

 function run(){
  checkVersion(()=>{

  })
 }

 /**
 * Function downloadAndGenerate
 */

function downloadAndGenerate(template){

}