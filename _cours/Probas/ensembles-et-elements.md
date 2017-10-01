---
category: Probas
---

# <u> I Ensembles & Eléments</u>

## Notions fondamentales

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

Si a est un élément de l'ensemble A on dit que a appartient à A et on note $$a \in A$$

On peut se donner un ensemble universel qui contient tous les élements considérés. L'ensemble qui ne contient aucun élement s'apelle l'ensemble vide $$\emptyset$$

On dit que l'ensemble A est inclus dans l'ensemble B (ou est un sous-ensemble de B) si tous les élements de A sont dans B.
Cela se note $$A \subset B$$ (est inclus)

En particulier travaillant dans l'ensemble dans l'univers Ω on a toujours
* $$A \subset \Omega$$
* $$\emptyset \subset A$$

De plus on a l'équivalence $$\{ A \subset B, B \subset A \Leftrightarrow A = B$$

L'ensemble des sous ensembles d'un ensemble de A s'appelle l'ensemble des parties et se note P(A)

Proposition: Soit A un ensemble fini de cardinal $$n \in N$$ Alors P(A) est finie et Card P(A) = 2^n

...

Exemple:  
* A {1, 2, 3} est un ensemble fini de cardinal 3  
 $$P(A) = \{\emptyset, \{1\}, \{2\}, \{3\}, \{1, 2\}, \{1, 3\}, \{2, 3\}, \{1, 2, 3\}\}$$
* $$\mathbb{N} = \{0, 1, 2\}, \mathbb{Z} = \{ , -2, -1, 0, 1, 2\}$$
* $$\mathbb{Q} = \{\frac{p}{q}, p \in \mathbb{Z}, q \in \mathbb{N}^x\}$$

sont des ensembles infini dénombrables (B & C sont indénombrables)

* $$1 \in \mathbb{R} et {1} \subset \mathbb{R}$$

## <a id="2"> Opérations sur les ensembles
Soient A et B 2 ensembles dans un univers $$\Omega$$. On définit les opérations suivantes:

* Réunion
    * $$A \cup B = \{x \in \Omega, x \in A$$ ou $$x \in B\}$$
    * ![](https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Venn0111.svg/256px-Venn0111.svg.png)
* Intersection
    * $$A \cap B = (x \in \Omega, x \in \mathbb{N}$$ et $$x \in B)$$
    * ![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Venn0001.svg/256px-Venn0001.svg.png)
* Complémentarité
    * $$\overline{A} = C_a = \{x \in \Omega , x \in A$$ ou $$x \in B\}$$
    * ![](https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Venn10.svg/256px-Venn10.svg.png)
* Différence
    * $$A - B = A \ B = \{x \in \Omega , x \in A$$ ou $$x \in B\}$$
    donc $$A - B = A \cap \overline{B}$$
    * ![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Venn0010.svg/256px-Venn0010.svg.png)
* Différence symmétrique
    * $$A \triangle B = (A + B) \cup (B - A) = A \cup B - (A \triangle B)$$
    * ![](https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Venn0110.svg/256px-Venn0110.svg.png)

* Produit
    * $$A \times B \neq B \times A$$
    * $$A \times B = \{ (a, b) a \in A$$ et $$b \in B \}$$
    * ![](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Cartesian_Product_qtl1.svg/256px-Cartesian_Product_qtl1.svg.png)

> Exemple: $$A = \{1, 2\}$$ et $$B = \{3, 4\}$$  
> $$A \times B = \{1, 2\} \times \{3, 4\} = \{(1, 3), (1, 4), (2, 3), (2, 4)\}$$  
> $$B \times A = \{3, 4\} \times \{1, 2\} = \{(3, 1), (3, 2), (4, 1), (4, 2)\}$$
> $$A \times B \neq B \times A$$  
> Exemple: $$A = \{1, 2\}$$ et $$B = \emptyset$$  
> $$A \times B = \{1, 2\} \times \emptyset = \emptyset$$  
> $$B \times A = \emptyset \times \{1, 2\} = \emptyset$$
> $$A \times B = B \times A$$

Si $$A \cap B = \emptyset$$ on dit que A et B sont disjoints

### Propriétés remarquables

* Associativité
    * $$A \cup (B \cup C) = (A \cup B) \cup C$$
    * $$(A \cap B) \cap C = (A \cap (B) \cap C)$$
> Cela entraîne les écritures  $$A \cup B \cup C$$ et $$A \cap B \cap C$$

* Commutativité
    * $$A \cup B = B \cup A$$
    * $$A \cap B = B \cap A$$

* Distributivité
    * $$A \cap ( B \cup C ) = (A \cap B) \cup (A \cap C)$$
    * $$A \cup ( B \cap C) = (A \cup B) \cap (A \cup C)$$

* Autres égalités
    * $$A \cap \Omega = 1$$
    * $$A \cup \Omega = \Omega$$
    * $$A \cap \emptyset = \emptyset$$
    * $$A \cup \emptyset = A$$
    * $$\overline{(A ∪ B)} = \overline{A} \cup \overline{B}$$
    * $$\overline{(A ∩ B)} = \overline{A} \cap \overline{B}$$
    * $$A \cap \overline{A} = \emptyset$$
    * $$A \cup \overline{A} = \Omega$$


* Définition:
    Soit A un ensemble dans un univers $$ \Omega $$ . On appelle fonction indicatrice de A, et on note $$\chi_F$$ , la fonction égale à 1 lorsque son argument appartient à A et égale à 0 autrement 
    <script type="math/tex; mode=display">
    \chi_F:E \mapsto \{ 0, 1 \} \\
    x \longmapsto
    \begin{cases}
        1 \quad \text{si} \quad x \in A \\
        0 \quad \text{si} \quad x \notin A
    \end{cases}
    </script>

* Définition: Une collection ordonnée de k élements ($$k \in \mathbb{N^*}$$) (est appelée un k-uplet)

* Définition: Soient E et F deux ensembles
Une application de f de E dans F est une relation entre ces ensembles que associe à chaque élement de E un unique élement de F:

$$\forall x \in E, y \in F$$ tel que $$f(x) = y$$ <br> y est l'image de x (par f) et x est l'antécédent de y


Remarque:
 "Application" et "fonction" sont de plus en plus souvent utilisés comme des synonymes. En fait, une fonction est une relation entre l'ensemble E et F qui à tout élement de E associe au plus un élement de F. la fontion peut ne pas être définie par certains élements de E

 Une fonction est une application de son ensemble de définition dans un ensemble donné

 Pour une application f, $$E \rightarrow F$$ et $$A \subset E, B \subset F$$

 On note f (A) l'ensemble des éléments de F ayant un antécédent par f dans A

 $$f(A) = \{ y \in F\|\exists x \in A$$ tel que $$f(x)=y\} = \{f(x)\|x \in A\}$$

 On note $$f^{-1}(B)$$ l'ensemble des élements e E ayant par image un élément de B $$f^{-1}(B) = \{x \in E f(x) \in B\}$$

* Attention:
 Il ne faut pas confondre cette notation avec celle de l'application réciproque qui elle n'existe que si f est bijective
