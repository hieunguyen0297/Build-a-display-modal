//get modal element 
var modal = document.getElementById('simpleModal');
//get button
var modalBtn = document.getElementById('modalBtn')
//get closeBtn
var closeBtn = document.getElementsByClassName('closeBtn')[0]
 
//Listen for click

modalBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
window.addEventListener('click', clickOutside)

//function openModal
function openModal(){
    modal.style.display = 'block'
}

//function closeModal
function closeModal(){
    modal.style.display = 'none'

}

//function clickOutside
function clickOutside(e){
    if(e.target == modal){
            modal.style.display = 'none'
    }
}