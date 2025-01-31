function bussFizz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzBuzz!");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

// n = 10. answer will be buzz.
// n = 9. answer will be fizz.
// n = 6 . answer will be fizz.
// n = 7 . answer will be 7.

// can also use :    if (!(i % 3))

function generatePrime() {
  for (let i = 2; i < 100; i++) {
    //ikke vits å ta 1
    if (isPrime(i)) {
      console.log("woho!");
    }
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === parseInt(n % i)) {
      return false;
    }
  }
  return true;
}

generatePrime();

// primtall kan bare deles med seg selv og 1
// oddetall kan ikke deles på 2
