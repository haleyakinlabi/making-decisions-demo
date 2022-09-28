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
//villager throws jon a health kit
if (jonSnowHealth + 50 >= 100) {
    jonSnowHealth + 100
} else {
    jonSnowHealth += 50
}
console.log(`jon snow health after the health kit is ${jonSnowHealth}`)


let coinLandHeads = true

if (coinLandHeads) {
    console.log('the fight continues')
} else {
    console.log('jon is allowed to run away')
}

//jamie attacks jon 5 times
for (let i = 0; < 5; i++) {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
console.log("jon/'s health is now" + jonSnowHealth)
}

//Post-lab assignment 1:
//Write logic in the for loop that detects if Jon's health gets 0 or less, in which case, you will print that Jon is dead
//   and you will stop futher loop iterations (see the "break" JS keyword for leaving a loop early)

//Post-lab assignment 2:
//Write the for loop (including the logic your wrote for the first assignement) as a while loop.
//   it should behave exactly the same