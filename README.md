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
- -c或者--config 指定asuna.config.js
- -d或者--dest 指定模板生成路径
```
asuna new page //新建一个页面
asuna new component //新建一个组件
```
