const {Controller} = require('egg')
class IndexController extends Controller{
    async welcome(){
        this.ctx.body = 'welcome admin page'
    }
}
module.exports = IndexController