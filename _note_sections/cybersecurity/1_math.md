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

Consider the set $\mathbb{Z}_p^{*} = \{1, 2, ..., p-1 \}: \gcd(k, p)=1$ where $p$ is prime and $k \in \mathbb{Z}_p^{*}$

By the Modulo Inequality Lemma, $ai \neq aj \mod n$ for any $i, j \in \mathbb{Z}_p^{*}$

Then we have the set $\{a \mod p, 2a \mod p, ..., (p-1)a \mod p \}$ where each element is distinct and each is coprime with $p$, with cardinality is $p-1$.
This must mean the set is equal to $\mathbb{Z}_p^{*}$, multiplying elements within each set and equating:

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

One can find a unique solution $x$ modulo $n_1n_2...n_x$ to

$x = a_1 \mod n_1$

...

$x = a_x \mod n_x$

which is an integer that has remainders a's when divided by each n

$n_1 \mid (x-a_1)$

$n_2 \mid (x-a_2)$

...

$n_x \mid (x-a_x)$