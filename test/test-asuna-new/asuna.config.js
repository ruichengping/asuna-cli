const path=require('path')
module.exports={
  page:{
    output:path.join(__dirname,'pages'),
    templates:[
      {
        name:'love',
        src:path.join(__dirname,'templates/pages/Love'),
        prompts:[
          {
            type:'input',
            name:'love',
            message:'your love girl'
          }
        ]
      }
    ]
  },
  component:{
    output:path.join(__dirname,'components'),
    templates:[
      {
        name:'girl',
        src:path.join(__dirname,'templates/components/Girl'),
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