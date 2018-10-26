# asuna-cli 
前端项目构建工具
## Install
```
  npm i asuna-cli -g
```
## Usage
### asuna create
构建流程：
1. 拉取远程模板信息
2. 选择你需要的远程模板
3. 判断本地模板仓库是否有这个模板？如有没有进入下一步；如果有，进入覆盖确认，确认覆盖则进入下一步，反之跳到第6步
4. 输入模板远程仓库中你所需要的分支，默认是master
5. 下载模板至本地模板库
6. 回答四个问题：a)项目名称 b)项目版本 c)项目描述 d)项目
7. 进入构建过程
8. 构建完成，开始你的coding之旅
### asuna new
- -c或者--config asuna.config.js
- -d或者--dest 指定模板生成路径
```
asuna new page //新建一个页面
asuna new component //新建一个组件
```
**asuna.config.js配置示例：**
```
const path=require('path')
module.exports={
  bid:{
    helpers:{
      toLowercase:(str)=>str.toLocaleLowerCase()
    },
    page: {
      output:path.join(__dirname,'src/pages'),
      templates:[
        {
          name:'PageSample',
          src:path.join(__dirname,'templates/pages/PageSample'),
          prompts:[]
        },
        {
          name:'PageReducer',
          src:path.join(__dirname,'templates/pages/PageReducer'),
          prompts:[]
        }
      ]
    },
    component:{
      output:path.join(__dirname,'src/components'),
      templates:[
        {
          name:'ComSample',
          src:path.join(__dirname,'templates/components/ComSample'),
          prompts:[
            {
              type:'input',
              name:'content',
              message:'the content of component'
            }
          ]
        }
      ]
    }
  }
}

```
#### helpers
通过helpers属性可以注册Handlebars的helpers。
```
module.exports = {
  helpers: {
    lowercase: str => str.toLowerCase()
  }
}
```
```
{{ lowercase name }}
```
#### pages
- output 页面生成目录
- templates 可选择构建页面模板列表

templates每一项配置：
- name 模板名称
- src 模板路径
- prompts 构建页面时询问的问题列表,拿到的答案可用于后续的模板渲染，可参照 [inquirer](https://github.com/SBoudrias/Inquirer.js)


#### component
- output 组件生成目录
- templates 可选择构建组件模板列表

templates每一项配置：
- name 模板名称
- src 模板路径
- prompts 构建页面时询问的问题列表，拿到的答案可用于后续的模板渲染，可参照 [inquirer](https://github.com/SBoudrias/Inquirer.js)


**注：**
templates每一项配置中的prompts使用示例：
```
{
  templates:[
    {
      name:'PageSample',
      src:path.join(__dirname,'templates/pages/PageSample'),
      prompts:[{
        type:'input',
        name:'content',
        message:'the content of component'
      }]
    }
  ]
}
```
```
{{content}}
```
**项目实战：**

asuna new page 和 asuna new component具体在项目中的使用可参考如下这个项目：

[react-webpack-pc](https://github.com/ruichengping/react-webpack-pc)