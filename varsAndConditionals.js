/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let johSnowAttack = 35
let jamieLannisterAttack = 35

if (johSnowAttack > jamieLannisterAttack) {
    console.log('john snow has better attack')
} else if (jamieLannisterAttack > johSnowAttack) {
    console.log("jamie lannister has better attack")
} else {
    console.log('they have the same attack')
}

let jonSnowHealth = 100
let jonSnowDefense = 0

if (jonSnowHealth <= jamieLannisterAttack) {
    jonSnowHealth = 0 
    console.log('jon snow has been slain')
} else {
    jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    console.log(`jon snow's health is down to ${jonSnowHealth}`)
}

jonSnowDefense += 25 

if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
    console.log("jon snow has been slain")
} else {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    console.log(`jon snow's health is down to ${jonSnowHealth}`)
}