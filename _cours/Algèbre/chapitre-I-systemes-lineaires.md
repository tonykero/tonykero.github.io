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
