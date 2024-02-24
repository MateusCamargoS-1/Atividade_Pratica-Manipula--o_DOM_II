const cards = document.querySelectorAll('#container .card');
const titleCard = document.querySelectorAll('.card .titulo-card');
const description = document.querySelectorAll('.card .descricao-card');
const btn = document.querySelectorAll('.card button');

cards.forEach(card => {
    card.style.backgroundColor = '#e16e0e'
})

titleCard.forEach(title => {
    title.style.color = '#2b385b'
    title.style.margin = '20px 0 30px 0'
    title.innerText = 'Meu card';
})

description.forEach(p => {
    p.style.color = '#fff';
    p.style.fontSize = '0.9em';
    p.innerText = 'Descrição modificada pelo javascript'
})

btn.forEach(btn => {
    if(btn.classList.contains('botao-editar') || btn.classList.contains('botao-apagar')) {
        btn.style.color = '#fff';
        btn.style.padding = '8px';
        btn.style.border = 'none';
        btn.style.borderRadius = '7px';
        btn.style.margin = '30px 0';
    }
    
    if(btn.classList.contains('botao-editar')) {
        btn.style.backgroundColor = '#008000';
    } 
    
    if(btn.classList.contains('botao-apagar')){
        btn.style.backgroundColor = '#ff0000';
    }
})

const editarCard = () => {
    alert('Clicou em Editar!');
}

const apagarCard = (btn) => { 
    let verificar = confirm('Tem certeza que deseja excluir esse card?');

    if(verificar) {
        alert('Confirmado!')
        let deleteCard = btn.parentNode;
        deleteCard.remove();
    } else {
        alert('Cancelou!')
    }
}