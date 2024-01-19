Pasi de criptare pentru S-DES (Simplified DES):
1. Alegem o cheie de 10 biți
2. Permutăm cheia cu P10
3. Divizăm cheia în două jumătăți de 5 biți
4. Rotim cele două jumătăți cu o poziție spre stânga
5. Permutăm cheia cu P8
6. Divizăm cheia în două jumătăți de 5 biți
7. Rotim cele două jumătăți cu două poziții spre stânga
8. Permutăm cheia cu P8
9. Criptarea unui mesaj `m` se face cu formula `c = IP^-1(FK2(SW(FK1(IP(m)))))`
10. Decriptarea unui mesaj `c` se face cu formula `m = IP^-1(FK1(SW(FK2(IP(c)))))`

Concluzie: Fost standard pentru criptare, acum este în mare parte învechit și înlocuit de AES.
---

Pasi de criptare pentru RSA (Rivest–Shamir–Adleman):
1. Alegem 2 numere prime mari `p` și `q`
2. Calculăm `n = p * q`
3. Calculăm `phi(n) = (p - 1) * (q - 1)`
4. Alegem un număr `e` astfel încât `1 < e < phi(n)` și `e` și `phi(n)` să fie prime între ele
5. Calculăm `d` astfel încât `d * e = 1 mod phi(n)`
6. Cheia publică este `(e, n)`
7. Cheia privată este `(d, n)`
8. Criptarea unui mesaj `m` se face cu formula `c = m^e mod n`
9. Decriptarea unui mesaj `c` se face cu formula `m = c^d mod n`

Concluzie: Un algoritm versatil, folosit atât pentru criptare cât și pentru semnături digitale. Siguranța sa depinde de lungimea cheii și de securitatea implementării.
---

Pasi de criptare pentru DSA (Digital Signature Algorithm):
1. Alegem un număr prim `q` de 160 de biți
2. Alegem un număr prim `p` de 1024-3072 biți, astfel încât `q` să fie un divizor prim al lui `p - 1`
3. Alegem un număr `g` astfel încât `g^((p - 1) / q) mod p = 1`
4. Alegem un număr `x` astfel încât `0 < x < q`
5. Calculăm `y = g^x mod p`
6. Cheia publică este `(p, q, g, y)`
7. Cheia privată este `(p, q, g, x)`
8. Semnătura unui mesaj `m` se face cu formula `r = (g^k mod p) mod q` și `s = k^-1 * (H(m) + x * r) mod q`
9. Verificarea unei semnături `s` se face cu formula `v = (H(m) * s^-1 mod q) mod q` și `r = (g^v * y^r mod p) mod q`
10. Daca `r = v` atunci semnătura este validă

Concluzie: Specializat în semnături digitale și oferă o alternativă la RSA pentru acest scop, fiind mai eficient în unele scenarii.

---

| Proprietate/Criteriu | DES (Data Encryption Standard) | RSA (Rivest–Shamir–Adleman) | DSA (Digital Signature Algorithm) |
|----------------------|--------------------------------|-----------------------------|-----------------------------------|
| **Tip de Criptografie** | Simetrică | Asimetrică | Asimetrică |
| **Utilizare Principală** | Criptarea datelor | Criptare și Semnături Digitale | Semnături Digitale |
| **Lungimea Cheii** | 56 biți | 1024-4096 biți (2048+ recomandat) | 1024-3072 biți (pentru cheia de semnătură) |
| **Securitate** | Considerat nesigur datorită lungimii scurte a cheii | Foarte sigur, depinde de dificultatea factorizării numerelor mari | Foarte sigur, bazat pe dificultatea logaritmului discret |
| **Performanță** | Rapid în criptarea datelor | Mai lent datorită operațiilor cu numere mari | Generare rapidă a semnăturilor, dar verificare mai lentă |
| **Lungimea Datelor Criptate/Semnăturii** | Fixă (64 de biți pentru blocul de date) | Variabilă, depinde de lungimea cheii | Relativ mică comparativ cu RSA |
| **Complexitatea Algoritmului** | Relativ simplu, bazat pe substituții și permutări | Complex, include aritmetică modulară și exponențiere | Complex, folosește aritmetică modulară și logaritmi discreți |
| **Rezistență la Atacuri** | Vulnerabil la atacuri de forță brută | Rezistent la atacuri cunoscute | Rezistent la atacuri cunoscute |
| **Adaptabilitate** | Limitat, înlocuit de AES pentru securitate mai mare | Larg utilizat pentru securitate robustă și flexibilitate | Specializat în semnături digitale, mai puțin flexibil decât RSA |
