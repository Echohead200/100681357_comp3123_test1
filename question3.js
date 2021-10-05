var fs = require('fs');
const path = require('path');

const folder = './logbook'  





function logmaker(){
    fs.mkdir(folder,(err)=>{
        if(err){
            throw err;
        }
        console.log("logbook has been created")
    })

    fs.appendFile('logbook/log1.txt',"log 1 here",function(err){
        if(err) throw err;
        console.log('log1 created!');
    })
    fs.appendFile('logbook/log2.txt',"log 2 here",function(err){
        if(err) throw err;
        console.log('log2 created!');
    })
    fs.appendFile('logbook/log3.txt',"log 3 here",function(err){
        if(err) throw err;
        console.log('log3 created!');
    })
    fs.appendFile('logbook/log4.txt',"log 4 here",function(err){
        if(err) throw err;
        console.log('log4 created!');
    })
    fs.appendFile('logbook/log5.txt',"log 5 here",function(err){
        if(err) throw err;
        console.log('log5 created!');
    })
    fs.appendFile('logbook/log6.txt',"log 6 here",function(err){
        if(err) throw err;
        console.log('log6 created!');
    })
    fs.appendFile('logbook/log7.txt',"log 7 here",function(err){
        if(err) throw err;
        console.log('log7 created!');
    })
    fs.appendFile('logbook/log8.txt',"log 8 here",function(err){
        if(err) throw err;
        console.log('log8 created!');
    })
    fs.appendFile('logbook/log9.txt',"log 9 here",function(err){
        if(err) throw err;
        console.log('log9 created!');
    })
    fs.appendFile('logbook/log10.txt',"log 10 here",function(err){
        if(err) throw err;
        console.log('log10 created!');
    })
}

function logDeleter(){
    
    fs.unlink('logbook/log1.txt', function (err) {
        if (err) throw err;
        console.log('log1 deleted!');
      });  
    fs.unlink('logbook/log2.txt', function (err) {
        if (err) throw err;
        console.log('log2 deleted!');
      });
      fs.unlink('logbook/log3.txt', function (err) {
        if (err) throw err;
        console.log('log3 deleted!');
      });
      fs.unlink('logbook/log4.txt', function (err) {
        if (err) throw err;
        console.log('log4 deleted!');
      });
      fs.unlink('logbook/log5.txt', function (err) {
        if (err) throw err;
        console.log('log5 deleted!');
      });
      fs.unlink('logbook/log6.txt', function (err) {
        if (err) throw err;
        console.log('log6 deleted!');
      });
      fs.unlink('logbook/log7.txt', function (err) {
        if (err) throw err;
        console.log('log7 deleted!');
      });
      fs.unlink('logbook/log8.txt', function (err) {
        if (err) throw err;
        console.log('log8 deleted!');
      });
      fs.unlink('logbook/log9.txt', function (err) {
        if (err) throw err;
        console.log('log9 deleted!');
      });
      fs.unlink('logbook/log10.txt', function (err) {
        if (err) throw err;
        console.log('log10 deleted!');
      });
      fs.rmdir("logbook",()=>{
          console.log("logbook deleted!")
      })

}

logmaker();
// note that due to what i think is the stack (first in last out) if you run both in succession it will leave the folder un-deleted 
//comment one out when testing )
logDeleter();