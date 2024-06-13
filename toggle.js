//make a function that chanch color on an elements


//need somting du modyfy

//need a button to click

//need to classes to classes whit diffrent stayl

//need to get info from css and html = get id and saves it on a varible
//

//make a button that make det button clicked



const toggleColor = document.getElementById("toggleColor")

toggleColor.addEventListener("click", function() {
    const body = document.getElementById("body")
    console.log(body)
body.classList.toggle("green")})

    

    
    function showHiddeToggle(){ 
    const hidden = document.getElementById("hiddenid")
    hidden.classList.toggle("show")
    console.log(hidden)
}
const hiddenid = document.getElementById("hiddenid")
hiddenid.addEventListener("click",showHiddeToggle);


   function menuFunction(){
   const menu = document.getElementById("menu")

    menu.addEventListener("click", function(){
    menu.classList.toggle("active","hidden");
alert ("test")
    })
}