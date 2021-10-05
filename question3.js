var fs = require('fs');
const path = require('path');
// ran out of time was planing making a sricpt that gererated 


function logmaker(){
    fs.appendFile('log1.txt',"log 1 here",function(err){
        if(err) throw err;
    })
    fs.appendFile('log2.txt',"log 2 here",function(err){
        if(err) throw err;
    })
    fs.appendFile('log3.txt',"log 3 here",function(err){
        if(err) throw err;
    })
    fs.appendFile('log4.txt',"log 4 here",function(err){
        if(err) throw err;
    })
    fs.appendFile('log5.txt',"log 5 here",function(err){
        if(err) throw err;
    })
    fs.appendFile('log6.txt',"log 6 here",function(err){
        if(err) throw err;
    })
    fs.appendFile('log7.txt',"log 7 here",function(err){
        if(err) throw err;
    })
}