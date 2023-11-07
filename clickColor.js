var clickColor = document.querySelectorAll('.clickColor')

function selectItens(){
    clickColor.forEach((item)=>
    item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

clickColor.forEach((item)=>
    item.addEventListener('click', selectItens)
)