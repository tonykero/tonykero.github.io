---
category: Probas
---

# <u>Ensembles & Eléments</u>

| Sommaire                              |
| :---:                                 |
| [Légende](#legend)                    |
| [Notions Fondamentales](#1)           |
| [Opérations sur les ensembles](#2)    |

## <a id="legend"> Légende

| Symbole   | Description                   |
| :---:     | :---                          |
| ⊂         | est inclus dans               |
| Ω         | Ensemble Universel            |
| ∅         | Ensemble vide                 |
| ∈         | Appartient à                  |
| ∪         | Union                         |
| ∩         | Intersection                  |
| ∆         | Différence Symmétrique        |
| X&#773;   | Inverse (ou complément) de X  |

## <a id="1"> Notions fondamentales

Il n'y a pas de définitions mathématiques précises de ce qu'est un ensemble; c'est une notion **première**.

On dira qu'un ensemble est une collection d'objets appelés éléments.

On distingue 3 types d'ensembles:
* **Fini**
    * Un ensemble est dit fini s'il contient un nombre fini d'élements. On Appelle **Cardinal** d'un ensemble fini A le nombre d'élements dans A (#A)
* **Non-fini**
    * On dit qu'un ensemble est infini dénombrable si chacun de ses éléments peut être numéroté (de façon unique) en utilisant une seule fois chaque entier naturel. C'est à dire s'il est en bijection avec N.

        * Soient A et B 2 ensembles et f une application de A dans B
            * On dit que f est une surjection si chaque élement de B possède au moins un antécédent dans A.
            * On dit que f est une injection si chaque élément de B possède au plus un antécédent dans A.
            * On dit que f est une bijection si f est une injection & une surjection (Tout élement de B a un unique antécédent)

* **Indénombrable**
    * Dans le cas restant on dit qu'il est (infini) indénombrable

Si a est un élément de l'ensemble A on dit que a appartient à A et on note a ∈ (appartient) A

On peut se donner un ensemble universel qui contient tous les élements considérés. L'ensemble qui ne contient aucun élement s'apelle l'ensemble vide ∅

On dit que l'ensemble A est inclus dans l'ensemble B (ou est un sous-ensemble de B) si tous les élements de A sont dans B.
Cela se note A ⊂ B (est inclus)

En particulier travaillant dans l'ensemble dans l'univers Ω on a toujours
* A ⊂ Ω
* ∅ ⊂ A

De plus on a l'équivalence { A ⊂ B, B ⊂ A <=> A = B

L'ensemble des sous ensembles d'un ensemble de A s'appelle l'ensemble des parties et se note P(A)

Proposition: Soit A un ensemble fini de cardinal n ∈ N Alors P(A) est finie et Card P(A) = 2^n

...

Exemple:  
* A {1, 2, 3} est un ensemble fini de cardinal 3  
P(A) = {𝜙, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}
* ℕ = {0, 1, 2}, ℤ = { , -2, -1, 0, 1, 2}
* ℚ = {p/q, p ∈ ℤ, q ∈ ℕ^x}  

sont des ensembles infini dénombrables (B & C sont indénombrables)

* 1 ∈ R et {1} ⊂ R

## <a id="2"> Opérations sur les ensembles
Soient A et B 2 ensembles dans un univers Ω. On définit les opérations suivantes:

* Réunion
    * A ∪ B = {x ∈ Ω, x ∈ A ou x ∈ B}
    * ![](https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Venn0111.svg/256px-Venn0111.svg.png)
* Intersection
    * A ∩ B = (x ∈ Ω, x ∈ ℕ et x ∈ B)
    * ![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Venn0001.svg/256px-Venn0001.svg.png)
* Complémentarité
    * A&#773; = Ca = {x ∈ Ω , x ∈ A ou x ∈ B}
    * ![](https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Venn10.svg/256px-Venn10.svg.png)
* Différence
    * A - B = A \ B = {x ∈ Ω , x ∈ A ou x ∈ B}
    donc A - B = A ∩ B&#773;
    * ![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Venn0010.svg/256px-Venn0010.svg.png)
* Différence symmétrique
    * A ∆ B = (A + B) ∪ (B - A) = A ∪ B - (A ∆ B)
    * ![](https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Venn0110.svg/256px-Venn0110.svg.png)

* Produit
    * A x B != B x A
    * A x B = { (a, b) a ∈ A et b ∈ B }
    * ![](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Cartesian_Product_qtl1.svg/256px-Cartesian_Product_qtl1.svg.png)

> Exemple: A = {1, 2} et B = {3, 4}  
> A x B = {1, 2} x {3, 4} = {(1, 3), (1, 4), (2, 3), (2, 4)}  
> B x A = {3, 4} x {1, 2} = {(3, 1), (3, 2), (4, 1), (4, 2)}  
> A x B ≠ B x A  
> Exemple: A = {1, 2} et B = ∅  
> A x B = {1, 2} x ∅ = ∅  
> B x A = ∅ x {1, 2} = ∅   
> A x B = B x A

Si A ∩ B = ∅ on dit que A et B sont disjoints

### Propriétés remarquables

* Associativité
    * A ∪ (B ∪ C) = (A ∪ B) ∪ C
    * (A ∩ B) ∩ C = (A ∩ (B) ∩ C)
> Cela entraîne les écritures  A ∪ B ∪ C & A ∩ B ∩ C

* Commutativité
    * A ∪ B = B ∪ A
    * A ∩ B = B ∩ A

* Distributivité
    * A ∩ ( B ∪ C ) = (A ∩ B) ∪ (A ∩ C)
    * A ∪ ( B ∩ C) = (A ∪ B) ∩ (A ∪ C)
* Autres égalités
    * A ∩ Ω = 1
    * A ∪ Ω = Ω
    * A ∩ ∅ = ∅
    * A ∪ ∅ = A
    * <span style="text-decoration: overline">(A ∪ B)</span> = A&#773; ∪ B&#773;
    * <span style="text-decoration: overline">(A ∩ B)</span> = A&#773; ∩ B&#773;
    * A  ∩ A&#773; = ∅
    * A ∪ A&#773; = Ω