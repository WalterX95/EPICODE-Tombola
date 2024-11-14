const numbersContainer = [];
const remeberNumbers = [];


function pushDataNumber(arrayData,index) {
    arrayData.push(index);
}

const createNumbers = ()  => {
    const tombolone = document.querySelector("#tombolone");
    for(let i = 0; i < 90; i++) {
        const numbersDiv = document.createElement('div');
        numbersDiv.innerHTML += i + 1;
        numbersDiv.setAttribute("class","numbers");
        tombolone.appendChild(numbersDiv);
        console.log(tombolone);
    }
}

const randomNumber = () => {
    return Math.floor((Math.random() * 90) +1);
}

function rememberNumber() {
    const numbTomb = document.querySelectorAll('#tombolone div');
    console.log(numbersContainer.length);
    for(let i = 0; i < numbersContainer.length; i++) {
        if(remeberNumbers[i] === numbersContainer[i]) {
            randomNumber();
            console.log('X');
            return;
        }
        else {
            console.log('Y');
            numbTomb[i].classList.add('hasExtract');
        }
    }
}


function chooseNumber() {
    let numberChoose = randomNumber();
    let inputForm = document.getElementById("numberTitle");
    inputForm = numberChoose;
    pushDataNumber(remeberNumbers,parseInt(inputForm));
    pushDataNumber(numbersContainer,parseInt(inputForm))
    console.log(remeberNumbers);
    let span = document.getElementById("numberTitle");
    span.innerText = numberChoose;
    rememberNumber();
}


document.getElementById("extractSubmit").addEventListener("click", function() {
    chooseNumber();
   
});


createNumbers();