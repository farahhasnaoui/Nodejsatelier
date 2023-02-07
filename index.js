const express = require('express');
const app =express()
const router =express.Router()
router.get('/farouha',(req,res)=>{
    res.send("farouha")
})
const router1=express.Router()
app.use('/',router)
app.listen(3000,()=>console.log("serveur en marche"))

 router.get('/:drink',(req,res)=>
 {res.send("vous  avez demandez"+`${req.params.drink}`)})

console. log("Début")
// Délai de 2 secondes avant de lancer L'application
setTimeout (function(){

console.log('A')
},1000)
setTimeout (function()  {

    console.log('b')
    },0)
    setTimeout (function(){

        console.log('d')
        },1000)
console.log('E')
