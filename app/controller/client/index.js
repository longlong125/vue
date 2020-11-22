const {Controller} = require('egg')
class IndexController extends Controller{
    async welcome(){
        this.ctx.body = 'hello welcome'
    }
}
module.exports = IndexController