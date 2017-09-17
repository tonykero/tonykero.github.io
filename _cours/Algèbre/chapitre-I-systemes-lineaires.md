---
category: Algebre
---

# Chapitre 1: Systèmes Linéaires

## Matrices

### Généralités

* <u>Définition:</u><br>
Une matrice de **n** lignes et **p** colonnes est un tableau de valeurs de **n** lignes et **p** colonnes.

On note en général par:

<script type="math/tex; mode=display">
\begin{align*}
    A =
    \begin{pmatrix}
        a_{1,1}     & a_{1,2}   & \cdots    & a_{1,n}   \\
        a_{2, 1}    & a_{2,2}   & \cdots    & a_{2,n}   \\
        \vdots      & \vdots    & \ddots    & \vdots    \\
        a_{n,1}     & a_{n,2}   & \cdots    & a_{n,p}   \\
    \end{pmatrix}
\end{align*}
</script>

* <u>Remarque:</u><br>
L'élement de A qui se situe à la $$i^{ème}$$ ligne et la $$j^{ème}$$ colonne se note:

$$
\huge{a_{i,j}}
$$

* <u>Exemple:</u><br>

<script type="math/tex; mode=display">
\begin{align*}
    E =
    \begin{pmatrix}
        1 & 2 & 3   \\
        4 & 5 & 6   \\
        7 & 8 & 9   \\
    \end{pmatrix}
    \quad E_{2,3} = 6
\end{align*}
</script>

### Pivot

Soit A une matrice $$\mathcal{M_{n\times p}}$$ (l'ensemble des matrices à **n** lignes et **p** colonnes)

On fixe  $$ i \in \{1,\cdots,n\}$$

* <u>Définition:</u><br>
On appelle $$i^{ème}$$ Pivot de la matrice A le $$1^{er}$$ élément non-nul de la $$i^{ème}$$ ligne
* <u>Exemple:</u><br>

<script type="math/tex; mode=display">
\begin{align*}
    B =
    \begin{pmatrix}
        \fbox{1}    & 0             & 5                     \\
        0           & 0             & \fbox{$\frac{3}{2}$}  \\
        0           & \fbox{$\pi$}  & \sqrt{7}              \\
    \end{pmatrix}
\end{align*}
</script>

### Matrice réduite (lignes-échelons)

* <u>Définition:</u><br>
Une matrice A est dite réduite si:
    * Tous les pivots sont égaux à 1
    * Chaque pivot est le seul élément non-nul dans sa colonne
* <u>Exemple:</u><br>
    1.  
$$
A =
\begin{pmatrix}
    1 & 2 & 0   \\
    0 & 1 & 0   \\
    0 & 0 & 1   \\
\end{pmatrix}
\quad , A
$$
non réduite

    2.  
$$
B =
\begin{pmatrix}
    1 & 0 & 0   \\
    0 & 0 & 1   \\
    0 & 1 & 0   \\
\end{pmatrix}
\quad , B
$$
réduite

## Systèmes Linéaires

### Généralités

* <u>Définition:</u><br>
Un système linéaire à $$n$$ équations et $$p$$ inconnues et la donné de $$n$$ équations de la forme:

<script type="math/tex; mode=display">
    \begin{array}{ccc}
        a_{1,1}x_{1}    & + & a_{1,2}x_2    & + & a_{1,3}x_3    & + & \cdots    & + & a_{1,p}x_{p} & = & b_1    \\
        a_{2,1}x_{1}    & + & a_{2,2}x_2    & + & a_{2,3}x_3    & + & \cdots    & + & a_{2,p}x_{p} & = & b_2    \\
        \vdots          &   & \vdots        &   & \vdots        &   &           &   & \vdots       &   & \vdots \\
        a_{n,1}x_{1}    & + & a_{n,2}x_2    & + & a_{n,3}x_3    & + & \cdots    & + & a_{n,p}x_{p} & = & b_n
    \end{array}
</script>

où $$a_{1,1}, a_{1,2} \ldots a_{n,p},$$ et $$b_1 \ldots b_n$$ sont les données

et $$(x_1, x_2 \ldots x_p)$$ est le vecteur des inconnues

* <u>Exemple:</u><br>
$$\quad n = p = 3$$
<script type="math/tex; mode=display">
S = 
\begin{cases}
    \begin{align*}
    x + y + 2z = 5 \\
    x - y - z = 1 \\
    x     + z = 3 \\
    \end{align*}
\end{cases}
\Leftrightarrow
\begin{cases}
    1x + 1y + 2z = 5 \\
    1x - 1y - 1z = 1 \\
    1x + 0y + 1z = 3 \\
\end{cases}
</script>
    * But: Trouver les valeurs $$x, y, z$$ qui vérifient le système $$S$$

### Matrice Augmentée

Pour le système $$S$$ la matrice augmentée est:

<script type="math/tex; mode=display">
\left[
\begin{array}{ccc|c}
    1 & 1  & 2  & 5 \\
    1 & -1 & -1 & 1 \\
    1 & 0  & 1  & 3 \\
\end{array}
\right]
</script>
* But: Réduire (via échelonnement de lignes) la matrice augmentée associée au système en utilisant le pivot de Gauss

### Résolution par la méthode de Gauss

<script type="math/tex; mode=display">
\left[
\begin{array}{ccc|c}
    \fbox{1} & 1  & 2  & 5 \\
    1        & -1 & -1 & 1 \\
    1        & 0  & 1  & 3 \\
\end{array}
\right]
</script>

* <u>Remarque:</u> Résoudre le système $$S$$ revient à trouver la matrice réduite lignes-échelonnées relatives à la matrice augmentée donnée au départ.

#### Phase de descente:

<script type="math/tex; mode=display">

\begin{array}{l}
    \sim \\
    L_2 \leftarrow L_2 - L_1 \\
    L_3 \leftarrow L_3-L_1
\end{array}
\left[
    \begin{array}{ccc|c}
        1 & 1           & 2  & 5    \\
        0 & \fbox{-2}   & -3 & -4    \\
        0 & -1          & -1 & -2   \\
    \end{array}
\right] \\

\begin{array}{l}
    \sim \\
    L_2 \leftrightarrow L_3 \\
\end{array}
\left[
    \begin{array}{ccc|c}
        1 & 1 & 2  & 5 \\
        0 & -1 & -1 & -2 \\
        0 & -2 & -3  & -4 \\
    \end{array}
\right] \\

\begin{array}{l}
    \sim \\
    L_2 \leftarrow (-1) \times L_2 \\
\end{array}
\left[
    \begin{array}{ccc|c}
        1 & 1 & 2  & 5 \\
        0 & 1 & 1 & 2 \\
        0 & -2 & -3  & -4 \\
    \end{array}
\right] \\

\begin{array}{l}
    \sim \\
    L_3 \leftarrow L_3 + 2L_2 \\
\end{array}
\left[
    \begin{array}{ccc|c}
        1 & 1 & 2  & 5 \\
        0 & 1 & 1 & 2 \\
        0 & 0 & -1  & 0 \\
    \end{array}
\right] \\

\begin{array}{l}
    \sim \\
    L_3 \leftarrow L_3 \times (-1) \\
\end{array}
\left[
    \begin{array}{ccc|c}
        1 & 1 & 2  & 5 \\
        0 & 1 & 1 & 2 \\
        0 & 0 & 1  & 0 \\
    \end{array}
\right] \\
</script>

#### Phase de remontée:

<script type="math/tex; mode=display">
\begin{array}{l}
    \sim \\
    L_1 \leftarrow L_1 - 2L_3 \\
    L_2 \leftarrow L_2 - L_3 
\end{array}
\left[
    \begin{array}{ccc|c}
        1 & 1 & 0  & 5 \\
        0 & 1 & 0 & 2 \\
        0 & 0 & 1  & 0 \\
    \end{array}
\right] \\

\begin{array}{l}
    \sim \\
    L_1 \leftarrow L_1 - L_2 \\ 
\end{array}
\left[
    \begin{array}{ccc|c}
        1 & 0 & 0  & 3 \\
        0 & 1 & 0 & 2 \\
        0 & 0 & 1  & 0 \\
    \end{array}
\right] \\

</script>

#### Vérification:

<script type="math/tex; mode=display">
S
\begin{cases}
    x + y + 2z = 5 \\
    x - y - z = 1 \\
    x + z = 3 \\
\end{cases}
\Leftrightarrow
\begin{cases}
    3 + 2 + 2 \times 0 = 5 \\
    3 - 2 - 0 = 1 \\
    3 + 0 + 0 = 3 \\
\end{cases}
</script>