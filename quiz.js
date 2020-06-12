const button = document.querySelector('.button');
const result = document.querySelector('.result');
const output = document.querySelector('.output-close');
const form = document.querySelector('.quiz');

const canswers = ['A','C','B','B','B','B','A','A'];

button.addEventListener('click', (e) => {
    e.preventDefault();
    result.style.display = 'block';
    let score = 0;
    const fanswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,
            form.q6.value,form.q7.value,form.q8.value];
    fanswers.forEach((answer, index) => {
        if(answer === canswers[index]){
            score += 12.5;
        }
    window.scrollTo(0,0);
    let op= 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `You have scored ${op}%, Congrats !`;
        if (op === score){
            clearInterval(timer);
        }
        else{
            op++;
        }
    },50);
    setInterval('window.location.reload()', 10000);
    });
});

output.addEventListener('click', () => {
    result.style.display = 'none';
});

result.addEventListener('click', () => {
    result.style.display = 'none';
});