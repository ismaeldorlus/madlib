document.getElementById("mad").addEventListener("click", madlib);

function madlib() {
  // Input
  let Pnoun = document.getElementById("Pnoun").value;
  let adj = document.getElementById("adj").value;
  let PTV = document.getElementById("PTV").value;
  let noun = document.getElementById("noun").value;
  // Process
  let output = `"There are too many ${Pnoun} on this ${adj} airplane!", I screamed. "Somebody has to ${PTV} on the ${noun} to solve this problem!"`;

  // output
  document.getElementById("sentence").innerHTML = output;
}

document.getElementById("mad2").addEventListener("click", madlib2);

function madlib2() {
  // Input
  let Pnoun = document.getElementById("Pnoun").value;
  let adj = document.getElementById("adj").value;
  let PTV = document.getElementById("PTV").value;
  let noun = document.getElementById("noun").value;
  // Process
  let output = `"Who told the ${Pnoun} that they could have ${adj} things? Don't you know they will ${PTV} with the ${noun}?`;

  // output
  document.getElementById("sentence2").innerHTML = output;
}
