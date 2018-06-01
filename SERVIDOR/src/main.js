function getPersonalData(){
    let request = new XMLHttpRequest();
    request.addEventListener('load', getPersonalData);
    let data = JSON.parse(request.responseText);
    request.open('GET', 'http://localhost:3000/api/personal-data');
    request.send();
 }

// function getPersonalData(){
//     let promiseData = new Promise(function(resolve, reject){
//         let request = new XMLHttpRequest();
//      request.addEventListener('load',function() {
//         let data = JSON.parse(request.responseText);
//         resolve(data)
//      });
    
//     request.open('GET', 'http://localhost:3000/api/personal-data');
//     request.send();
// });
// return promiseData;
// }