let num: number = 1;
let contador: number = 1;

while (contador <= 100) {
  if (num % 2 === 0 || num % 3 === 0) {
    console.log(num);
  }

  num = num + 1;
  contador = contador + 1;
}
