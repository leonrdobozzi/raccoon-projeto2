const buttonCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal-cadastro');
const buttonOpenModal = document.querySelectorAll('.button-open-modal');

function toggleModal(){
    modal.classList.toggle('modal-open');
};

buttonCloseModal.addEventListener('click', () => {
    toggleModal();
});

buttonOpenModal.forEach(button => {
    button.addEventListener('click', () => {
        toggleModal();
    });
});

const cpf = document.getElementById('cpf');
function maskCPF(){
    if(cpf.value.length == 3 || cpf.value.length == 7){
        cpf.value += '.'
    }else if(cpf.value.length == 11){
        cpf.value += '-'
    }else if(cpf.value.length >= 14){
        cpf.value = cpf.value.slice(0, 14);
    }
}

cpf.addEventListener('keyup', () => {
    maskCPF();
});

const sendform = document.querySelector('.send-form');
const check = document.getElementById('check');

sendform.addEventListener('click', e => {
    if(check.checked){
        return;
    }else{
        document.getElementById('check-terms').style.color = "#ff0054";
        e.preventDefault()
    }
})

check.addEventListener('click', () => {
    document.getElementById('check-terms').style.color = "white";
})

const competences = document.querySelectorAll('.competence');
const aboutCompetences = document.querySelectorAll('.about-competence');
const arrowCompetence = document.querySelectorAll('.arrow-competence');

competences.forEach(competenceContainer => {
    competenceContainer.addEventListener('click', () => {
        competenceContainer.classList.toggle('opened')
        aboutCompetences.forEach(competence => {
            if(competence.parentElement.classList.contains('opened')){
                competence.classList.add('about-display');
                arrowCompetence.forEach(arrow => {
                    if(arrow.parentNode.parentElement.classList.contains('opened')){
                        arrow.style.transform = 'rotate(180deg)';
                    }else{
                        
                    }
                })
            }else if(!competence.parentElement.classList.contains('opened')){
                competence.classList.remove('about-display');
                arrowCompetence.forEach(arrow => {
                    if(!arrow.parentNode.parentElement.classList.contains('opened')){
                        arrow.style.transform = 'rotate(0deg)';
                    }
                })
            }
        })
        
    })
})
