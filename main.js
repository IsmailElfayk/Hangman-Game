let buttons = [...document.querySelectorAll(".letters div")];
let replay = document.querySelector(".replay");
let one = document.querySelector(".one");
let draws = document.querySelectorAll(".the-draw div");
const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
let guess = document.querySelector(".letters-guess");
let i = 0;
buttons.forEach((ele) => {
  ele.textContent = alphabet[i];
  i++;
});

// let myData = new XMLHttpRequest();
// myData.open("GET", "https://mocki.io/v1/91c02106-83cc-401a-84a5-a368d4bebc45");
// myData.send();

// let score = 0;
// myData.addEventListener("readystatechange", () => {
//   if (myData.readyState == 4 && myData.status == 200) {
//     let Data = JSON.parse(myData.responseText);

//   }
// });
let Data = {
  Country: ["Afghanistan", "Islands", "Albania", "Algeria", "Egypte"],
  name: ["ismail", "mohammed", "ahmed", "abdullah", "karim"],
  capitale: ["rabat", "madrid", "riyadh", "paris", "cairo", "dakar"],
};

// choosing Caregory
function getCategory() {
  let x = Math.floor(Math.random() * Object.keys(Data).length);
  return Object.entries(Data)[x][0];
}
// Choosing Element from this Category
function getElement() {
  let x = Math.floor(Math.random() * Data[Category].length);
  return Data[Category][x];
}
//Set Game PARAMETRE
function setGame() {
  Category = getCategory();
  document.querySelector(".category span").textContent = Category;
  Element = getElement().toUpperCase();
  document.querySelector(".result span").textContent = Element;
  return Element;
}
//resret game
function reset() {
  document.querySelector(".result span").style.visibility = `hidden`;
  one.style = `display:none`;
  buttons.forEach((ele) => {
    ele.classList.remove("ticked");
    ele.classList.remove("right");
  });
  draws.forEach((ele) => {
    ele.style = "display: none";
  });
  guess.innerHTML = "";
  f = 0;
}
//###########################################
//###########################################
//###########################################
//###########################################
let s = 0;

function play() {
  console.log("start play");
  reset();
  Element = setGame();
  eleArr = [...Element];
  console.log(Element);
  //###########
  for (let i = 0; i < Element.length; i++) {
    let div = document.createElement("div");
    div.setAttribute("id", `case${i}`);
    document.querySelector(".letters-guess").appendChild(div);
  }
  //###########
  let f = 0;
  let t = 0;
  buttons.forEach((bu) => {
    bu.addEventListener("click", () => {
      // console.log(bu.textContent);
      // console.log(Element);
      if (eleArr.includes(bu.textContent)) {
        eleArr.forEach((ele, index) => {
          if (bu.textContent == ele) {
            document.querySelector(`#case${index}`).textContent = ele;
            bu.classList.add("right");
            t++;
          }
        });
      } else {
        bu.classList.add("ticked");
        draws[f].style = `display:block`;
        f++;
      }
      console.log("number of true is:", t);
      console.log("number of false is:", f);
      console.log("###############");
      if (f == 7 || t == Element.length) {
        document.querySelector(".result span").style.visibility = "visible";
        if (t == Element.length) {
          s++;
          document.querySelector(".score").textContent = s;
          t = 0;
          f = 0;
          setTimeout(() => {
            console.log("start play");
            reset();
            Element = setGame();
            eleArr = [...Element];
            console.log(Element);
            console.log("Exit");
            //#############
            for (let i = 0; i < Element.length; i++) {
              let div = document.createElement("div");
              div.setAttribute("id", `case${i}`);
              document.querySelector(".letters-guess").appendChild(div);
            }
          }, 2000);
        } else {
          s = 0;
          document.querySelector(".score").textContent = s;
          t = 0;
          f = 0;
          setTimeout(() => {
            one.style.display = `flex`;
          }, 2000);
          replay.addEventListener("click", () => {
            console.log("start play");
            reset();
            Element = setGame();
            eleArr = [...Element];
            console.log(Element);
            console.log("Exit");
            //#############
            for (let i = 0; i < Element.length; i++) {
              let div = document.createElement("div");
              div.setAttribute("id", `case${i}`);
              document.querySelector(".letters-guess").appendChild(div);
            }
          });
        }
        // console.log("game over");
      }
    });
  });
  console.log("Exit");
  return 0;
}

document.querySelector(".two .start").addEventListener("click", () => {
  document.querySelector(".two").style.display = `none`;
  play();
});
