---
category: Probas
---

## II Sommes, Produits, Coefficients binomiaux et dénombrements

Soit I un ensemble fini et $$x_i \in I$$ une famille de réels indéxés par I

la somme des éléments de la famille (un nombre de #I) se note $$\sum_{i \in I} (x_i)$$ alors que le produit de ces termes se note

 $$\prod_{i \in I} x_i$$

Si les élements de Sont des entiers consécutifs compris entre n et n' c'est à dire si $$I = \{n, \ldots, n'\}$$ on écrit plutôt

$$\sum_{i = n}^{n'} x_i$$

et 

$$\prod_{i = n}^{n'} x_i$$

par la somme et le produit des élements de la famille

* Remarque:
    Sous certaines conditions les définitions de ces sommes et produits peuvent s'étendre au cas où I est infini

* Définition: 
    Suite $$(U_n) (n \in \mathbb{N})$$ est dite arithmétique de raison r avec $$r \in \mathbb{R}$$, si $$\forall n \in \mathbb{N}, U_{n+1} = U_n+r$$

On a alors $$\forall n \in \mathbb{N} U_n = U_0 + nr$$

Une suite arithmétique est totalement définie par la donnée de $$U_0$$ et de r

* Proposition:

Soit $$(U_n)$$ ,$$ n \in \mathbb{N}$$ Une suite arithmétique de raison r

Soient m et n deux entiers naturels . On a alors (formule de la somme de la suite arithmétique)

* Preuve:

l'égalité $$\frac{[(n+m +1)(U_m + U_n)]}{2} = ?$$

descend directement de l'égalité $$U_k = U_0 + nr \quad \forall k \in \mathbb{N}$$

* Preuve 1 

Soit $$n \in \mathbb{N}$$ On fait une récurrence sur n

* Corollaire:
    $$\sum_{i = 1}^{n} = \frac{[n(n+1)]}{2}$$

* Preuve:
    Il s'agit de l'application de la proposition précedente à la suite arithmétique de raison 1 et de premier terme $$U_0 = 0$$ (c'est à dire la suite $$U_n = M \quad \forall n \in \mathbb{N}$$)

* Définition:
    On dit qu'une suite $$(U_n)$$ où $$n \in \mathbb{N}$$, est géometrique de raison r $$\forall n \in \mathbb{N}, U_{n+1} = U_n \times r$$<br>
    Une suite géométrique est totalement définie par la donnée de son premier terme $$U_0$$ et de sa raison $$r$$. Or pour tout entier n, $$[U_n = U_0 \times r^n]$$

* Proposition:
    Soit $$(U_n) n \in \mathbb{N}$$, une suite géometrique de raison r.
    Pour $$(m,n) \in \mathbb{N^2}, m \leq n$$

    $$\sum_{k = m}^{n} U_k = \frac{(U_{n+1} - U_n)}{(q-1)} = U_0 \frac{(q^{n+1} - q^n)}{(1-q)}$$

* Preuve:<br>
    $$
    \begin{aligned}
    (q-1) \sum_{k = m}^{n} U_k & = q \times \sum_{k = m}^{n} U_n \times q^k - \sum_{k = m}^{n} U_0 \times q^k \\
    & = \sum_{k = m+1}^{n+1} U_n \times q^k - \sum_{k = m}^{n} U_0 \times q^k \\
    & = U_0 * q^{n+1} - U_0 \times q^n
    \end{aligned}
    $$
    
    d'où
    
    $$\sum_{k = m}^{n} U_k = U_0 \frac{(q^{n+1} - q^m)}{(q-1)}$$

* Définition: Soit $$n \in \mathbb{N}$$ on définit la grandeur "factorielle n" que l'on note $$n!$$ en prenant

<script type="math/tex; mode=display">
\begin{cases}
\text{si} \quad n > 0 , n! = \prod_{k = 1}^{n} k \\
\text{si} \quad n = 0 , 0! = 1
\end{cases}
</script>

Cela revient à définir $$n!$$ par récurrence, en prenant $$0! = 1$$, et $$\forall n in \mathbb{N}$$, $$(n+1)! = (n+1) n!$$
Soit E un ensemble fini de #n > O et $$k \in \mathbb{N}, k \leq n$$

On appelle k arrangement de E (ou arrangement de k-éléments de E sans répétitions) toute collection ordonnée $$(a_n;a_k)$$ de k éléments de E tous distincts

 un k arrangement de E avec répétition est un k-uplet d'éléments de E non nécessareiement distinct. En particulier , tout k arrangement de E est un k arrangement avec répétition, mais la réciproque est fausse.

 un n arrangement de E est appelé une permutation de E.

 On appelle k combinaison de E tout sous-ensemble de k éléments tous distincts.

 Proposition: E un ensemble avec #E = n $$\in \mathbb{N^*}$$

 Soit $$k \in [0,n]$$ (crochets double barre = encadrement d'entiers $$\{0, 1, 2, \ldots, n\}$$ )

 le nombre de k arrangements (sans répétition) de E possible est $$A_n^k = \frac{n!}{(n-k)!}$$

 On en déduit immédiatement que le nombre de permutations de t est $$n!$$

 le nombre de k arrangements de E avec répétition possible est $$n^k$$ (reste valable si $$k > n$$)

 le nombre de k combinaisons de E possible est 

$$  
    C_n^k =
    \left(
    \begin{array}{c}
        n \\
        k
    \end{array}
    \right)
    = \frac{n!}{(n-k)! k!} = \frac{A_n^k}{k!}
$$

* Remarque: On étend ces définitions en prenant, pour $$k > n$$

$$ C_n^k = A_n^k = 0$$

* Proposition: $$\forall n \in \mathbb{N^*}$$ et $$\forall k \in [0; n]$$ (double brackets) On a les relations:

$$
C_n^k = C_n^{n-k} \\

C_{n+1}^{k+1} = C_n^k + C_n^{k+1}
$$

* Preuve:<br>
$$
    \begin{aligned}
        C_n^k + C_n^{k-1} &= \frac{n!}{(n-k)! k!} + \frac{n!}{(n-k-1)! (k+1)!} \\
        &= \frac{(n+1)!}{((n+1)-(k+1))! (k+1)!} \\
        &= C_{n+1}^{k+1}
    \end{aligned}
$$

$$\forall k = n$$, $$C_n^{k+1} = 0$$ et $$C_n^k = C_{n+1}^{k+1} = 1$$

* Proposition:<br>
    $$
    \forall n \in \mathbb{N}$$ , $$\forall (x, y) \in \mathbb{N^2} \\
    (x+y)^n = \sum_{k = 0}^{n} C_n^k \times x^k \times y^{n-k}
    $$

* Preuve: le résultat est vrai (et trivial) pour $$n = 0$$ ou $$n = 1$$<br> 
    Soit $$n \in \mathbb{N^*}$$ tel que<br>
    $$
    \begin{aligned}
    (x+y)^n &= \sum_{k=0}^{n} C_n^k \times x^k \times y^{n-k} \\
    (x+y)^{n+1} &= (x+y)^n \times (x+y) \\
    &= \sum_{k=0}^n C_n^k \times x^k \times y^{n-k} \times (x+y) \\
    &= \sum_{k=0}^n C_n^k \times x^{k+1} \times y^{n-k} + \sum_{k=0}^{n} C_n^k \times x^k \times y^{n-k+1} \\
    (x+y)^{n+1} &= \sum_{k=0}^{n+1} C_{n+1}^k \times x^k \times y^{n+1-k}
    \end{aligned}
    $$

    ce qui termine la preuve
