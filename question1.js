

//console.log("testing, works!")


let mixedArray = ["PIZZA",10,true,25,false,"wings"]





function lowerCaseWords(input){
    let output = [];
    output
    let c = 0 
    for(let i=0; i < input.length;i++){
        if(typeof input[i] === 'string' || input[i] instanceof String ){
            
            let place = ""
            place+= input[i]            
            output[c] = place.toLowerCase()
            c++

        }
        else{
            //console.log("not string")
            //console.log(input[i])
        }
        
    }
    //promise here
        
    let Q1promise = new Promise((resolve, reject) => {
       
        if (output != null ){
            resolve("success!!!!")
        }else{

            reject("failure")
        }
    })

    Q1promise.then(function(resolve){
        console.log(resolve)
    }, function(error){
        console.log(error)
    })

    return output;
}
console.log(lowerCaseWords(mixedArray))
//lowerCaseWords(mixedArray);
