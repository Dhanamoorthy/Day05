// 1  for the given JSON iterate over all for loops

let json=[
    {
    "name":"Rasheed",
    "Batch":"B45WD",
    "Mail":"rashed015@gmail.com"
},
{
    "name":"Kavin",
    "Batch":"B45WD",
    "Mail":"kavin015@gmail.com"
}
]

// for loop
  for (i=0;i<json.length;i++){
    var details = json[i]

    console.log(details.name)
    console.log(details.Batch)
    console.log(details.Mail)
  }


// for in loop
let details1="";
for (let x in json){
    details1 = json[x]

    console.log(details1.name)
    console.log(details1.Batch)
    console.log(details1.Mail)
}


//for of loop
let details2="";
for (let details2 of json){
    
    console.log(details2.name)
    console.log(details2.Batch)
    console.log(details2.Mail)
}


//for each loop

json.forEach(function(details){
    console.log(details.name)
    console.log(details.Batch)
    console.log(details.Mail)
})



//2 .create your own resume data in json format


let myesume={
    "basics":{
        "name":"DHANA SEKAR V",
        "email":"dhanasekar9540@gmail.com",
        "phone":7904933434,
        "degree":"B.Com",
        "location":{
            "Address":"57/3 siva skathi nager mangalam road",
            "Pincode":637214,
            "city":"Tiruppur",
            "state":"Tamilnadu",
            "country":"India"
        },
        "education":{
            "institution":"Hindusthan college of arts and science",
            "Department":"Banking & Insurance",
            "Study type":"Full time",
            "Batch start year":"2017",
            "Batch end year":"2020"
        },
        "skils":{
            "name":"Javascript,Html,Css,Node.js,React.js,MongoDB,Express.js",
            "Level":"Beginner"
        },
        "languages":{
            "languages":"tamil,english"
        },
    }

}
console.log(myesume);