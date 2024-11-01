const getElemId = id => document.getElementById(id);


getElemId('enterInput').addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        getElemId('enterMessage').innerHTML = `You pressed Enter! Value: ${event.target.value}`;
    }
});


getElemId('dblClickBtn').addEventListener('dblclick', () => {
    getElemId('dblClickMessage').innerHTML = 'Button was double-clicked!';
});


let progress = 0;
function increaseProgress() {
    if (progress < 100) {
        progress += 10;
        getElemId('progressBar').style.width = `${progress}%`;
    }
}


function runFizzBuzz() {
    let output = '';
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) output += 'FizzBuzz ';
        else if (i % 3 === 0) output += 'Fizz ';
        else if (i % 5 === 0) output += 'Buzz ';
        else output += i + ' ';
    }
    getElemId('fizzBuzzResult').innerHTML = output.trim();
}
