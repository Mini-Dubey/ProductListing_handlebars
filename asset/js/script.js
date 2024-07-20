// let displayProduct= async()=>{
// let product= await fetch("https://fakestoreapi.com/products");
// let finalproduct = await product.json();
// console.log(finalproduct);
// finalproduct.forEach(element =>{
//     console.log(element);
// })
// }
// displayProduct();


let displayproduct = fetch("https://fakestoreapi.com/products");
displayproduct.then((response) =>{
    console.log(response.status);
    console.log(response.ok);
    return response.json();

}).then((data) => {
    
    var output=document.getElementById('employee-template').innerHTML;
    var template=Handlebars.compile(output);
    var html= template({products:data});
    document.querySelector('.box').innerHTML=html;

})

// Handlebars.registerHelper('starRating', function(star)){

// }



// var names = {
//     "employee" : [{
//         "firstname" : "Mini",
//         "lastname" : "Dubey"
//     },
//     {
//        "firstname" : "Prabhat",
//        "lastname" : "Tripathi" 
//     },
//     {
//         "firstname" : "Sonu",
//         "lastname" : "Sadan"
//     },
//     {
//         "firstname" : "Mantu",
//         "lastname" : "Master"
//     },
//     {
//         "firstname" : "Moto",
//         "lastname" : "Patlo"
//     }
// ]
// }

// var output=document.getElementById('employee-template').innerHTML;
// var template=Handlebars.compile(output);
// var html= template(names);
// document.querySelector('.box').innerHTML=html;
