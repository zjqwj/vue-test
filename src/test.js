function LazyMan(name){
    return new _lazyman(name)
}
function _lazyman(name){
    var obj = {};
    this.sleep = async function(time){
        
        await setTimeout(function(){
            console.log('等待' + time + '秒')
        },time * 1000)
        return this;
    }
    this.eat = function(){
        console.log('Eat dinner')
        return this;
    }
    setTimeout(function(){
        console.log('Hi This is ' + name)
    })
    
    return this;
    
}
console.log(LazyMan('Hank').sleep(4))