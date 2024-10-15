const form = document.querySelector('form');
const outputSection = document.querySelector('#output-section');
const infoButton = document.querySelector('#toggle-info-btn');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const iterationsValue = formData.get('iterations');
  const bishValue = formData.get('bish-input');
  const boshValue = formData.get('bosh-input');

  e.target.reset();

  const result = BishBosh(iterationsValue, bishValue, boshValue);

  outputSection.appendChild(result);
});

infoButton.addEventListener('click', function () {
  const infoSection = document.querySelector('#info-section');
  infoSection.classList.toggle('visible');
});

function BishBosh(iterations, bishDivisor, boshDivisor) {
  const container = document.createElement('div');
  container.className = 'bish-bosh-container';

  for (let i = 1; i <= iterations; i++) {
    const p = document.createElement('p');

    if (i % bishDivisor === 0 && i % boshDivisor === 0) {
      p.appendChild(createBishBosh());
    } else if (i % bishDivisor === 0) {
      p.appendChild(createBish());
    } else if (i % boshDivisor === 0) {
      p.appendChild(createBosh());
    } else {
      p.appendChild(createNumber(i));
    }

    container.appendChild(p);
  }

  return container;
}

function createBish() {
  const bishSpan = document.createElement('span');
  bishSpan.className = 'yellow';
  bishSpan.textContent = 'Bish';
  return bishSpan;
}

function createBosh() {
  const boshSpan = document.createElement('span');
  boshSpan.className = 'orange';
  boshSpan.textContent = 'Bosh';
  return boshSpan;
}

function createBishBosh() {
  const container = document.createElement('span'); // Container for Bish-Bosh

  const bishSpan = createBish();
  const dashSpan = document.createElement('span');
  dashSpan.className = 'white';
  dashSpan.textContent = '-';
  const boshSpan = createBosh();

  container.appendChild(bishSpan);
  container.appendChild(dashSpan);
  container.appendChild(boshSpan);

  return container;
}

function createNumber(num) {
  const numberSpan = document.createElement('span');
  numberSpan.className = 'green';
  numberSpan.textContent = num;
  return numberSpan;
}
