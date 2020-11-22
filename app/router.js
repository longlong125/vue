module.exports = app=>{
    const {router,controller} =app
    router.get('/',controller.client.index.welcome)
    router.get('/admin',controller.admin.index.welcome)
}