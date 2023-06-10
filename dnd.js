const items = document.getElementsByClassName('item')
const rightCntr = document.getElementById('right')
const leftCntr = document.getElementById('left')
const resetButton = document.getElementById('btn');
const popup = document.getElementById('popup');
const initialContent = leftCntr.innerHTML;

function dnd(){
    for(let item of items){
        item.addEventListener('dragstart', function(e){
            let selected = e.target
    
            rightCntr.addEventListener('dragover', function(e){
                e.preventDefault()
            })
            rightCntr.addEventListener('drop', function(e){
                rightCntr.appendChild(selected)
                selected = null
                showPopup()
            })
            leftCntr.addEventListener('dragover', function(e){
                e.preventDefault()
            })
            leftCntr.addEventListener('drop', function(e){
                leftCntr.appendChild(selected)
                selected = null
                showPopup()
            })
        })
    }    
}
function showPopup() {
    popup.style.display = 'block';
    setTimeout(() => {
      hidePopup();
    }, 1000);
}
  
function hidePopup() {
    popup.style.display = 'none';
}

dnd()

resetButton.addEventListener('click', () => {
    resetButton.style.backgroundColor = 'black'
    setTimeout(() => {
        resetButton.style.backgroundColor = 'rgb(130, 68, 255)'
    }, 100);
    leftCntr.innerHTML = initialContent;
    rightCntr.innerHTML = null;
    dnd();
    hidePopup();
});