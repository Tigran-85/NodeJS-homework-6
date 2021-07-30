const http = require('http');
const url = require('url');
const fs = require('fs');
const argv = require('minimist')( process.argv.slice(2) );
const os = require('os');
const path = require('path')

//Homework1

// const server = http.createServer((req, res) =>{
//     if(req.url === '/sunny'){
//        console.log('Yes') 
//     }
//     res.end()
// })

// server.listen(3000);

//Homework2

// const server = http.createServer((req, res) => {
//    const urlData = url.parse(req.url, true);
//    if(urlData.query.file === 'sunny'){
//         fs.createReadStream('./sunny.txt').on('data', (chunk) => {
//             res.end(chunk)
//         });
//    }else{
//       res.writeHead(404, {"Content-Type": "text/plain"});
//       res.end("Data not found");
//    }
// });

// server.listen(3000);


//Homework3

// let arr = [];

// const server = http.createServer((req, res) => {
//     const urlData = url.parse(req.url, true).query.filter;
//     if(urlData){
//         fs.readFile('./users.json', (err, data) => {
//             const contJson = JSON.parse(data.toString());
//             for(let key in contJson){
//                 if(contJson[key].first_name === urlData){
//                     arr.push(contJson[key]);
                    
//                 }
//                 if(contJson[key].last_name === urlData){
//                     arr.push(contJson[key]);
                   
//                 }
//             }
//             res.end(JSON.stringify(arr))
//         })
//     }
// });

// server.listen(3000);

//Homework4

// Array.prototype.myMap = function myMap(fun){
//     let newArr = [];
//      for(let i = 0; i < this.length; i++){
//         newArr.push(fun(this[i], i, this))
        
//     }
//     return newArr
// };



// console.log([4, 5, 9, 5].myMap(function foo(val){
//     return val * 5
//  }));


// const folder = argv.u;

// console.log(argv);

