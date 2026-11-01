let home = 0
let guest = 0
let homescreen =document.getElementById("home")
let guestscreen =document.getElementById("guest")

//Ab hier fubnktionen für home

function home1(){
  home += 1
  homescreen.textContent = home
  }

function home2(){
  home += 2
  homescreen.textContent = home
  }

function home3(){
  home += 3
  homescreen.textContent = home
  }
  
//Ab hier fubnktionen für guest
function guest1(){
  guest += 1
  guestscreen.textContent = guest
  }
  
function guest2(){
  guest += 2
  guestscreen.textContent = guest
  }

function guest3(){
  guest += 3
  guestscreen.textContent = guest
  }
// Resetbutton

function reset() {
    home = 0
    guest = 0
    homescreen.textContent = 0
    guestscreen.textContent = 0
}

