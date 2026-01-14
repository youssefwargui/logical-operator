//ex1  
function opposite(boolean) {
  return !boolean
}
opposite()

//ex 2

function greaterThan5(num1, num2) {
  if (num1 > 5|| num2 > 5 ) {
    return true
  } 
  return false
    
}
greaterThan5()

//ex 3 

function allGreaterThan5(num1, num2) {
  if (num1 > 5 && num2 > 5 ) {
    return true
  }
  return false
}
allGreaterThan5()

//ex 4 

function largerThan5AndLessThan20(number) {
  if (number > 5 && number < 20 ) {
    return true
  }
  return false
}
largerThan5AndLessThan20()

//ex 5

function not6AndLessThan10(number) {
  if (number !== 6 && number < 10) {
    return true
  }
  return false
}
not6AndLessThan10()

//ex 6 

function largerThan3AndLessThan18(num1, num2, num3) {
  if (num1 > 3 && num2 > 3 && num3 > 3 && num1 <18 &&  num2 <18 && num3 <18 ) {
    return true
  }
  return false
}
largerThan3AndLessThan18()

//ex 7

function cloudyAndRainy(string1, string2) {
  if (string1 === "cloudy" &&  string2 === "rainy" ) {
    return true
  }
  return false

}

//ex 8 

function weatherActivities(weather) {
  if (weather === "sunny") {
    return "Aller se promener ou faire un pique-nique.";
  } else if (weather === "rainy") {
    return "Lire un livre ou regarder un film à la maison.";
  } else if (weather === "snowy") {
    return "Faire un bonhomme de neige ou du ski.";
  } else {
    return "Se reposer ou choisir une activité au hasard.";
  }
}

//ex 9 

function evenAndGreaterThan7(number) {
  if (number % 2 === 0 && number > 7) {
    return
  }
  return false
}
evenAndGreaterThan7()

//plus de pratique
//ex 1

function areValidCredentials(name, password) {
  return name.lenght > 3 && password.lenght >= 8
}
areValidCredentials()

//ex 2

function guessMyNumber(number) {
  
}

//Logique et Conditions (Avancé)
// 1 or

function or(statement1, statement2) {
   return !(!statement1 && statement2)
}
or()
//2 and

function and(statement1, statement2) {
   return !(!statement1 || statement2)
}
and()

// 3 
function shirtWidth(width) {
   if (width >= 20 && width <= 30 ) {
    return  "You should select a size S"
   }
   else if (width >= 30 && width <= 40 ){
    return  "You should select a size M"
   }
   else if (width >= 40 && width <= 50 ){
    return "You should select a size L"
   }
   return "You should select a different shirt"
}
shirtWidth()

// 4
 
function player1Choice(choice) {
   if (choice === "rock") {
    return  "Player 1 chose rock"
   } else if (choice === "paper") {
    return "Player 1 chose paper"
   }
   else if (choice === "scissors"){
    return "Player 1 chose scissors"
   }
   else (choice === "gun" ) {
    return "Player 1 has chosen poorly!"
   }
}
player1Choice()

// 5

function isItTruthy(value) {
   if (value) {
    return "Input is truthy"
   }
   return "Input is falsy"
}
isItTruthy()

//8 

function checkArea(area) {
   if (area > 40 && area < 100) {
    return true
   }
   return false
}
checkArea()
// 6 

function checkMultiply(num1, num2) {
 if (num1 * num2 > 50 && num1 * num2 <150) {
    return true
 }
 return false
}
checkMultiply()
