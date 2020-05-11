console.log("Hola mundo");

fetch("https://randomuser.me/api/?results=2")
.then((resp)=>resp.json())
.then((data)=>console.log(data))
.catch((error)=>console.log(error));