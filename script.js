BishBosh(3, 4);

function BishBosh(divisor1, divisor2) {
  for (let i = 1; i < 100; i++) {
    let message = '';
    if (i % divisor1 === 0 && i % divisor2 === 0) {
      message += 'Bish-Bosh';
    } else if (i % divisor1 === 0) {
      message += 'Bish';
    } else if (i % divisor2 === 0) {
      message += 'Bosh';
    }
    if (message === '') {
      console.log(i);
    } else {
      console.log(message);
    }
  }
}
