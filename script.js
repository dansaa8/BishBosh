const form = document.querySelector('form');
const output = document.querySelector('#output');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const iterationsValue = formData.get('iterations');
  const bishValue = formData.get('bish-input');
  const boshValue = formData.get('bosh-input');

  e.target.reset();

  const result = BishBosh(iterationsValue, bishValue, boshValue);
  const textNode = document.createTextNode(result);
  const p = document.createElement('p');
  p.appendChild(textNode);
  
  output.appendChild(p);
});

function BishBosh(iterations, bishDivisor, boshDivisor) {
  let result = '';
  for (let i = 1; i <= iterations; i++) {
    let message = '';

    if (i % bishDivisor === 0 && i % boshDivisor === 0) message += 'Bish-Bosh';
    else if (i % bishDivisor === 0) message += 'Bish';
    else if (i % boshDivisor === 0) message += 'Bosh';

    if (message === '') message += i;

    if (i < iterations) message += ', ';

    result += message;
  }
  return result;
}
