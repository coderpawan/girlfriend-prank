const Name = document.querySelector("#name")
const Img = document.querySelector(".rotateImg")
const Button = document.querySelector(".button")
function showMyLover(){
    Name.style.display="flex"
    Img.style.display="flex"
    Button.innerHTML="Aur batao kisko dekhna hai mera GF<br>😂🤣😆"
}
document.getElementById('button').addEventListener('onclick',function(){
    Name.style.display="none"
    Img.style.display="none"
})