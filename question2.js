

const question2 = {
    resolvedPromise: function(){
        setTimeout(() =>{
            let success = {'message':'promise timer worked'}
            console.log(success);
        },500)
    },
    rejectedPromise: function(){
        setTimeout(() =>{
            try{
                throw new Error("error: rejected promise");
            }catch(e){
                console.error(e)
            }
        },500)
    }
}



console.log(question2.resolvedPromise())
console.log(question2.rejectedPromise())

