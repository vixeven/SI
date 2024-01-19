function isPrime(num: bigint): boolean {
  if (num < 2n) return false;
  if (num === 2n) return true;
  if (num % 2n === 0n) return false;

  for (let i = 3n; i * i <= num; i += 2n) {
    if (num % i === 0n) {
      return false;
    }
  }

  return true;
}

export function generatePrime(numBits: number = 42): bigint {
  let prime: bigint;

  do {
    // Generăm un număr aleatoriu cu numărul specificat de biți
    prime = BigInt(
      "0b" +
        Array(numBits)
          .fill(0)
          .map(() => Math.round(Math.random()))
          .join("")
    );

    // Ca sa marim sansele sa fie prim, facem numarul impar
    if (prime % 2n === 0n) {
      prime += 1n;
    }
  } while (!isPrime(prime));

  return prime;
}

/**
 * Generează numerele Q și P pentru Algoritmul de Semnătură Digitală (DSA).
 * Q este un număr prim mic, iar P este un număr prim mare astfel încât P - 1 să fie divizibil cu Q.
 */
export function generateQandP(
  qBits: number = 21,
  pBits: number = 42
): [bigint, bigint] {
  let q: bigint;
  let p: bigint;

  do {
    // Generăm un număr prim Q cu qBits biți.
    q = generatePrime(qBits);

    // Generăm P astfel încât P - 1 să fie divizibil cu Q.

    // Calculăm un factor aleatoriu pentru a ajunge la dimensiunea dorită pentru P.
    const randomFactor = BigInt(2) ** BigInt(pBits - qBits - 1);

    // Adăugăm un offset aleatoriu pentru a varia P, păstrându-l divizibil cu Q.
    const randomOffset = BigInt(
      Math.floor(Math.random() * Number(randomFactor))
    );

    // Calculăm P. Formula: P = Q * randomFactor + randomOffset * Q + 1.
    // Asigură că P - 1 este divizibil cu Q și P are pBits biți.
    p = q * randomFactor + randomOffset * q + 1n;
  } while (!isPrime(p)); // Repetăm până când P este de asemenea prim.

  // Returnăm numerele Q și P generate.
  return [q, p] as const;
}
