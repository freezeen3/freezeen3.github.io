---
section_title: Modulo Mathematics
---

Topics include
- Modular Inverse
- Extended Euclidean
- Fermat's Little Theorem
- Euler's Theorem
- Chinese Remainder Theorem

## Modular Inverse
Given $\gcd(a, n)=1$, if $ab=1 \mod n$, then $b=a^{-1} \mod n$ is the modular multiplicative inverse of $a$ modulo $n$.

$\gcd(a, n)=1 \Leftrightarrow \text{existence of inverse}$



<details>
<summary class="small-summary">This can be seen via:</summary>

$ab=1 \mod n$ implies $ab = kn + 1$ for some integer $k$ $\Leftrightarrow$ $ab-kn=1$

Now if they have some nontrivial common divisor i.e. $\gcd(a, n) = c \neq 1$, then $ab-kn = c(b\frac{a}{c}-k\frac{n}{c}) = cx$ where $x \in \mathbb{Z}$, but $cx$ cannot be $1$, leading to contradiction. 
</details>



## Extended Euclidean Algorithm

The basic **Euclidean Algorithm** is as follows:

$\gcd(a, b) = \gcd(b, a \mod b)$

Allowing us to find the gcd between two numbers from the sequence of divisons, dividing the divisor of the previous by the remainder of the previous:

Here $a=r_0, \quad b=r_1,$

$r_0 = q_1 r_1 + r_2$

$r_1 = q_2 r_2 + r_3$

...

$r_{n-3} = q_{n-2} r_{n-2} + r_{n-1}$

$r_{n-2} = q_{n-1} r_{n-1} + r_{n}$

$r_{n-1} = q_n r_n$

giving the gcd as $r_n$, since gcd between $r_{n-1}$ and $r_n$ is $0$, we look at the remainder of the previous iteration as gcd.

The **Extended Euclidean** gives us the gcd of two numbers as their linear combination:

$\gcd(a, b) = k_1 a + k_2 b$ for some integers $k_1, k_2$

### Backward Substituion
The linear combination can be found by carrying out the division operations like in normal Euclidean:

Then one can pinpoint the remainder from bottom up to write

$r_n = r_{n-2} - q_{n-1} r_{n-1}$

$r_n = r_{n-2} - q_{n-1} (r_{n-3} - q_{n-2} r_{n-2}) = (q_{n-2} + 1)r_{n-2} - q_{n-1} r_{n-3}$

...

Eventually you can express $r_n$ which is the desired gcd in terms of the two initial numbers.

E.g. To find the linear combination of $\gcd(28, 51)$

$51 = 1(28) + 23$

$28 = 1(23) + 5$

$23 = 4(5) + 3$

$5 = 1(3) + 2$

$3 = 1(2) + 1$

$2 = 2(1)$

Then backward sub

$1 = 3 - 2 = 3 - (5-3) = 2(3) - 5 = 2(23-4(5)) - 5 = 2(23) - 9(5)$

$ = 2(23) - 9(28-23) = 11(23) - 9(28) = 11(51-28) - 9(28) = 11(51) - 20(28)$


### Inverse Finding
If $\gcd(a, n)=1$,
the modular inverse of $a^{-1} \mod n$ is then given by $k_1$.

Seen from $1 = k_1 a + k_2 n$, then take mod n both sides

$1 = k_1 a + 0 \mod n \Rightarrow k_1 = a^{-1} \mod n$


## Fermat's Little Theorem

Given prime $p$

$a^{p-1} = 1 \mod p$

### Modulo Inequality Lemma

Given $\gcd(a, n)=1$,  $i \neq j$ and $i \lt j \lt n$, then

$ia \neq ja \mod n$

Since assume the contrary $ia = ja \mod n \Rightarrow a(j-i) = 0 \mod n$

$\Rightarrow n \mid (j-i)$ as $n \nmid a$. But $n > (j-i) > 0$ which means $n$ cannot divide $(j-i)$ (can imagine a 1D number line).

<details>
<summary class="small-summary">Interesting trick to prove:</summary>

Idea: equate two sets of cardinality $p-1$, multiply elements within each set, multiply inverse of factorial to both sides

TODO: Combinatorial proof

Consider the set $\mathbb{Z}_p^{\ast } = \{1, 2, ..., p-1 \}: \gcd(k, p)=1$ where $p$ is prime and $k \in \mathbb{Z}_p^{\ast }$

By the Modulo Inequality Lemma, $ai \neq aj \mod n$ for any $i, j \in \mathbb{Z}_p^{\ast }$

Then we have the set $\{a \mod p, 2a \mod p, ..., (p-1)a \mod p \}$ where each element is distinct and each is coprime with $p$, with cardinality is $p-1$.
This must mean the set is equal to $\mathbb{Z}_p^{\ast }$, multiplying elements within each set and equating:

$1 \cdot 2 \cdot ... \cdot (p-1) \mod p = a^{p-1} 1 \cdot 2 \cdot ... \cdot (p-1) \mod p$

$(p-1)! \mod p = a^{p-1} (p-1)! \mod p$

Since $\gcd(p, (p-1)!) = 1$, inverse $(p-1)!^{-1} \mod p$ exists and we multiply both sides by this inverse to get

$a^{p-1} = 1 \mod p$

</details>

## Euler's Theorem

### Euler's Totient
Number of integers smaller than and coprime with $n$

For prime $p$, $\phi(p) = p-1$

For $n=pq$ where $p, q$ are prime, $\phi(n) = (p-1)(q-1)$

### The Theorem
Given $\gcd(a, n) = 1$,

$a^{\phi(n)} = 1 \mod n$



It is in fact a more general case of FLT

<details>
<summary class="small-summary">The proof is also similar to FLT's:</summary>

Idea: equate to sets, multiply elements within each, multiply inverse to both sides.

Consider the set $\{k_1, k_2, ..., k_{\phi(n)} \}: \gcd(n, k_i)=1, 1 \leq k_i \leq n$ 

$k_1 \cdot k_2 \cdot ... \cdot k_{\phi(n)} = a^{\phi(n)} k_1 \cdot k_2 \cdot ... \cdot k_{\phi(n)} \mod n$
</details>

### Euler's Theorem Corollary

$a^{\phi(n)+1} \mod n = a \mod n$


## Chinese Remainder Theorem
Given pair-wise coprime positive integers $n_1, n_2, ..., n_k$

One can find a *unique* solution $x$ modulo $n_1n_2...n_x$ to

$x \mod n_1 = a_1 \mod n_1$

$x \mod n_2 = a_2 \mod n_2$

...

$x \mod n_x = a_x \mod n_x$

which is an integer that has remainders a's when divided by each n

Closed-form solution: $x=[\sum_{i=1}^k a_i M_i(M_i^{-1} \mod n)] \mod M$ where $M=n_1n_2...n_k, M_i = \frac{M}{n_i}$

### Application example

In RSA, three users encrypt message $m$ with their own modulo $n_1, n_2, n_3$ and exponent $3$.
Their ciphertexts $(c_i = m^3 \mod n_i)$ are intercepted, can $m$ be retrieved?

Solve for $x \mod n_1n_2n_3$

$x \mod n_1 = m^3 \mod n_1$

$x \mod n_2 = m^3 \mod n_2$

$x \mod n_3 = m^3 \mod n_3$

$x = m^3 \Rightarrow m = x^{\frac{1}{3}}$


## Groups, Rings and Fields

### Groups
A group $\{G, \ast \}$ has the properties

G1. Closure: For any $a, b \in G$, $a\ast b \in G$

G2. Associativity: $a\ast (b\ast c) = (a\ast b)\ast c$

G3. Identity: $\exists \, e \in G: \, a\ast e=e\ast a=1$

G4. Inverse: $\exists \, a^{-1} \in G: \, a^{-1}\ast a=1$ 

#### Abelian Groups
An abelian group satisfies G1-G4 and:

G5. Commutativity: $a\ast b=b\ast a$

Notations:
- Binary operation: $+$
- Identity element: $0$
- Inverse of $a$: $-a$

#### Cyclic Groups
A cyclic group satisfies G1-G4 and:

G6. Cyclicity: every element in $G$ can be expressed as $g^k$ for some integer $k$, $g$ is generator of $G$

### Rings
A ring $\{R, +, \ast\}$ has two binary operations $+$ and $\ast$, and satisfies:

R1. Abelian Group w.r.t. $+$: satisfies G1-G5

R2. Multiplicative Closure: For any $a, b \in R$, $a\ast b \in R$

R3. Multiplicative Associativity: $a\ast (b\ast c) = (a\ast b)\ast c$

R4. Distributivity: $(a+b)\ast c = a\ast c + b\ast c$

#### Commutative Rings
Satisfies R1-R4, and

R5. Multiplicative commutativity: $a \ast b=b \ast a$

#### Integral Domain
A commutative ring is also an integral domain if it satisfies R1-R5 and

R6. Multiplicative Identity: $a \ast 1=1 \ast a=a$

R7. No zero divisor: $a \ast b=0 \Rightarrow a=0 \text{ or } b=0$

### Fields
A field $\{F,+,\ast\}$ satisfies

F1. Integral Domain: R1-R7

F2. Multiplicative Inverse: $a \ast a^{-1}=a^{-1} \ast a=1$

In other words, a field has
- multiplicative: closure, associativity, identity, inverse, commutativity &rarr; abelian group w.r.t. $\ast $
- addition: closure, associativity, identity, inverse, commutativity &rarr; abelian group w.r.t. $+$
- distributivity, no zero divisor, 


## Polynomial Arithmetic & Fast Muliplication

### Irreducibility
A polynomial $f(x)$ over field $F$ is irreducible iff it cannot be factored into two polynomials with degrees less than $f(x)$'s

### Finite Field of Order $p$
For prime $p$, the set $\mathbb{Z}_p = \{0, 1, ..., p-1\}$ with its arithmetic operations $\mod p$ form the *finite field of order $p$* denoted by $GF(p)$

A finite field of order $p^n$ has polynomials of degrees $\leq n$ over $GF(p)$, having the form $\sum_{i=0}^{n-1} a_i x^i$ where $a_i \in \mathbb{Z}_p$.

Additions and subtractions performed coefficientwise modulo $p$, multiplication also coefficientwise mod $p$, but it is then divided by the irreducible $p(x)$ of degree $n$.

If $x=2$, each coefficient can be represented in bits form $(a_{n-1}...a_1a_0)$, and coefficientwise mod $p$ is mod $2$, basically doing XOR.


### Fast Multiplication
In $GF(2^n)$ with $p(x)$ having $\deg n$, 

$x^n \mod p(x) = p(x)-x^n$