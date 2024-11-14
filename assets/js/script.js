const remeberNumbers = [];

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
    let span = document.getElementById("numberTitle").innerText;
    console.log(remeberNumbers.length);
    for(let i = 0; i < remeberNumbers.length; i++) {
        if(remeberNumbers[i] === span) {
            randomNumber();
            return;
        }
        else {
            indexTomb = remeberNumbers[i] - 1 ;
            numbTomb[indexTomb].classList.add('hasExtract');
        }
    }
}

function chooseNumber() {
    let numberChoose = randomNumber();
    let span = document.getElementById("numberTitle");
    remeberNumbers.push(numberChoose);
    console.log(remeberNumbers);
    span.innerText = numberChoose;
    rememberNumber();
}


document.getElementById("extractSubmit").addEventListener("click", function() {
    chooseNumber();
   
});


createNumbers();