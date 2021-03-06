//Modal
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

//Mascaras
const cpf = document.getElementById('cpf');
function maskCPF(){
    if(isNaN(cpf.value)){
        let newValue =  cpf.value.replace(/[A-z]/g, '');
        cpf.value = newValue;
    }
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
        const inputEmail = document.getElementById('email').value;
        const inputName = document.getElementById('name').value;
        const inputCpf = document.getElementById('cpf').value;
        const inputTellphone = document.getElementById('tellphone').value;
        const check = check.checked;
        let dados = {
            email: inputEmail,
            name: inputName,
            cpf: inputCpf,
            tellphone: inputTellphone,
            check
        }
        fetch('', {
            method: 'POST',
            body: JSON.stringify(dados)
        }).then(() => {
            alert("Enviado com sucesso!")
        });
    }else{
        document.getElementById('check-terms').style.color = "#ff0054";
        e.preventDefault()
    }
});

check.addEventListener('click', () => {
    document.getElementById('check-terms').style.color = "white";
});

//Accordion
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
                    }
                })
            }else if(!competence.parentElement.classList.contains('opened')){
                competence.classList.remove('about-display');
                arrowCompetence.forEach(arrow => {
                    if(!arrow.parentNode.parentElement.classList.contains('opened')){
                        arrow.style.transform = 'rotate(0deg)';
                    }
                });
            };
        });
    });
});


const competenceDesktop = document.querySelectorAll('input[name="competence"]');

competenceDesktop.forEach(input => {
  input.addEventListener('click', () => {
    document.querySelectorAll('label').forEach(label => {
        const text = document.querySelector('.about-text');
    if(label.classList == input.id){
        label.classList.add('checked')
        if(label.classList.contains('competence-1')){
            text.innerText = 'Esta se????o visa explicar as compet??ncias que os alunos possuir??o uma vez que conclu??rem o curso.';
        }else if(label.classList.contains('competence-2')){
            text.innerText = 'Esta se????o visa explicar as compet??ncias para se fazer o curso.';
        }else if(label.classList.contains('competence-3')){
            text.innerText = 'Esta se????o visa explicar as compet??ncias da empresa com o curso.';
        }else if(label.classList.contains('competence-4')){
            text.innerText = 'Esta se????o visa explicar as compet??ncias com o mercado de trabalho.';
        }
      }else{
        label.classList.remove('checked')
      }
    });
  });
})

