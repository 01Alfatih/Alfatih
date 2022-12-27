// isi logic gamemu disini                     fungsi untuk menyebutkan fungsi yang lain dan bisa di singkat dengan simbol
document.querySelectorAll('#option a').forEach((anchor) => {
    // anchor.addEventListener('click', ()=>{
    // }) bisa pilihan ke 1 atau ke 2

    anchor.onclick = (element) => {
        computerChoice(element);
    }
});

function computerChoice(element){
    // membuat sebuah array untuk membuat pilihan komputer
    let choices =['Rock', 'Paper', 'Scissor']

    // menangkap elemant pilihan komputer
    let pilihanKomputer = document.querySelector('#result')

    // menangkap element pilihan user
    let pilihanUser = element.target.innerText;

    // membuat pilihan random untuk komputer
    pilihanKomputer.innerHTML = choices[Math.round(Math.random()* choices.length)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    console.log(pilihanKomputer)

    if(pilihanUser == pilihanKomputer){
        alert('Draw')
    }

    // jika user menang
    if (pilihanUser == 'Rock' && pilihanKomputer == 'Scissor'){
        alert('You Win');
    } else if (pilihanUser == 'Paper' && pilihanKomputer == 'Rock'){
        alert('You Win')
    } else if (pilihanUser == 'Scissor' && pilihanKomputer == 'Paper'){
        alert('You win')
    }

    // jika komperter menang
    if (pilihanUser == 'Rock' && pilihanKomputer == 'Paper'){
        alert('Computer Win');
    } else if (pilihanUser == 'Paper' && pilihanKomputer == 'Scissor'){
        alert('Computer Win')
    } else if (pilihanUser == 'Scissor' && pilihanKomputer == 'Rock'){
        alert('Computer win')
    }
}