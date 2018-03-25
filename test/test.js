const {expect}=require('chai')
const metadata=require('../lib/options')
const gitUser=require('../lib/git-user')
const path=require('path')
const Handlebars = require('handlebars')

const MOCK_META_JS=path.resolve(__dirname,'./mock-meta-js')
describe("asuna-cli",()=>{

  it("read metadata from js",()=>{
    const meta=metadata("test-project",MOCK_META_JS)
    expect(meta).to.be.an('object')
    expect(meta.prompts).to.have.property("description")
  })


  it("read user and email from git",()=>{
    expect(gitUser()).to.equal("wuming<wuming@maihaoche.com>")
  })

});