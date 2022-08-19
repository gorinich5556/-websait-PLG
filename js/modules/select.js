const dropLister = document.querySelectorAll('.drop-list')
function drop(){
    dropLister.forEach(dropList =>{
        var dropButton = dropList.childNodes[1]
        const dropListContent = dropList.childNodes[3]
        var dropListState = false
        function ListClose(){
            if(dropListState == false){
                dropListContent.classList.add('act')
                dropListState = true
            } else{
                dropListContent.classList.remove('act')
                dropListState = false
            }
        }
        for (let el of dropListContent.childNodes) {
            el.addEventListener('click', function(){
                var newPlaceHold = el.innerHTML
                dropButton.innerHTML = newPlaceHold
                dropButton.insertAdjacentHTML('beforeend', '<svg><use xlink:href="img/icons/icons.svg#arrow_3"></use></svg>')
                ListClose()
            })
          }
        dropButton.addEventListener('click', function(){
            ListClose()
        })
    })
}
drop()
