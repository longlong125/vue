module.exports = (app)=>{
    app.once('server',server=>{
        console.log('server is running');
    })
    app.on('error',error=>{
        console.log(error);
    })
    app.on('request',ctx=>{
        console.log('request----');
    })
    app.on('response',ctx=>{
        console.log('response-----');
        console.log(ctx.starttime);
        const used = Date.now()-ctx.starttime
        console.log(used);
    })
}