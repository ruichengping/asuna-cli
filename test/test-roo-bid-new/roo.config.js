const path=require('path')
module.exports={
  bid:{
    pages:[
      {
        name:'love',
        path:path.join(__dirname,'templates/pages/love'),
        prompts:[
          {
            type:'input',
            name:'love',
            message:'your love girl'
          }
        ]
      }
    ],
    components:[
      {
        name:'girl',
        path:path.join(__dirname,'templates/components/girl'),
        prompts:[
          {
            type:'input',
            name:'girl',
            message:'your love girl'
          }
        ]
      }
    ]
  }
}