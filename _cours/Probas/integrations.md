---
category: Probas
---

# III Intégrations

Dans la suite, I désigne un intervalle de $$\mathbb{R}$$

* Proposition: Soient f une fonction continue (par morceaux) sur I et F une primitive de f Alors $$\forall (a,b) \in I^2$$

$$\int_a^b f(x) dx = [F(x)]_a^b = F(b)-F(a)$$

* Proposition: Soient f et g deux fonctions continues (par morceaux) sur I, $$(a,b,c) \in I^3$$ et $$\lambda \in \mathbb{R}$$. On a les relations suivantes

* $$\int_a^b f(x) dx = - \int_b^a f(x) dx$$
* $$\int_a^b f(x) dx + \int_b^c f(x) dx = \int_a^c f(x) dx$$
* $$\int_a^b \lambda f(x) dx = \lambda \int_a^b f(x) dx$$
* $$\int_a^b (f(x)+g(x)) dx = \int_a^b f(x)dx + \int_a^b g(x)dx$$

## Primitives usuelles

Fonction f                              | Df                                        | Primitive
a, $$a \in \mathbb{R}$$                 | $$\mathbb{R}$$                            | $$ax (+ C)$$
$$x^a, a \in \mathbb{R}\text{\\{-1}}$$  | $$\mathbb{R^*}$$ si $$a \in \mathbb{Z}$$  | $$\frac{x^{a+1}}{a+1}$$
$$\frac{1}{x}$$                         | $$\mathbb{R^{*+}}$$                       | $$ \ln \vert x \vert $$
$$\exp x$$                              | $$\mathbb{R}$$                            | $$\exp x$$
$$\cos x$$                              | $$\mathbb{R}$$                            | $$\sin x$$
$$\sin x$$                              | $$\mathbb{R}$$                            | $$-\cos x$$
$$a^x, a \in \mathbb{R^{*+}}$$          | $$\mathbb{R}$$                            | $$\frac{a^x}{\ln a}$$
$$\frac{1}{\sqrt{1-x^2}}$$              | $$]-1;1[$$                                | $$\arcsin x$$
$$\frac{1}{\sqrt{1+x^2}}$$              | $$\mathbb{R}$$                            | $$\arctan x$$
$$\frac{1}{\sqrt{x^2-1}}$$              | $$]1;+\infty[$$                           | $$\mathrm{arcosh} \, x$$
$$\frac{1}{\sqrt{x^2+1}}$$              | $$\mathbb{R}$$                            | $$\mathrm{arcsinh} \, x$$

## Primitives et fonctions composées

Soient $$(a,b) \in I^2$$, $$u$$ une fonction dérivable sur $$[a,b]$$ et f une fonction dérivable sur $$u([a,b])$$

Nous savons alors que $$f \circ u$$ est dérivable sur $$[a,b]$$ avec $$(f \circ u)'(x) = u'(x)f'(u(x))$$

Cette formule nous permet de reconnaître certaines primitives:

Fonction                        | Primitive
$$u'(x) \exp u(x)$$             | $$\exp u(x)$$
$$u'(x) \sin u(x)$$             | $$-\cos u(x)$$
$$u'(x) \cos u(x)$$             | $$\sin u(x)$$
$$\frac{u'(x)}{u(x)}$$          | $$\ln u(x)$$
$$u'(x)u^a(x), a \neq -1$$      | $$\frac{u^{a+1}(x)}{a+1}$$

## Intégration par parties (IPP)

* Proposition:
    Soient U et V deux fonctions dérivables sur $$[a;b]$$

    $$\int_a^b u'(x)v(x)dx = [u(x)v(x)]_a^b - \int_a^b u(x)v'(x) dx$$

    En effet, $$U \times V$$ est dérivable et $$\forall x \in [a,b]$$

    $$(U \times V)'(x) = u'(x)v(x) + u(x)v'(x)$$

    En intégrant de a à b, on a

    $$\int_a^b (uv)'(x)dx = \int_a^b u'(x)v(x)dx + \int_a^b u(x)v'(x)dx$$

    D'où le résultat

    $$\int_a^b u'(x)v(x)dx = [u(x)v(x)]_a^b - \int_a^b u(x)v(x)' dx$$

* Proposition: (intégration par changement de variable)

    Soit $$[a,b]$$ un intervalle de $$\mathbb{R}$$
    Soient $$\varphi$$ une fontion de classe $$C_1$$ sur $$[a,b]$$, $$\varphi$$ dérivable sur $$[a,b]$$ et de dérivée continue
    et f une fonction continue sur $$\varphi([a,b])$$

Alors

$$\int_{\varphi(a)}^{\varphi(b)} f(x)dx = \int_a^b \varphi'(t) f(\varphi(t)) dt$$

En effet soit F une primitive de f

$$\int_{\varphi(a)}^{\varphi(b)} f(x)dx = F(\varphi(b)) - F(\varphi(a))$$

De plus $$F(\varphi(t))' = \varphi'(t) f(\varphi(t))$$ donc
$$
    \begin{aligned}
    \int_a^b \varphi'(t) f(\varphi(t)) dt &= \int_a^b (F \circ \varphi)'(t) dt \\
    &= [(F \circ \varphi)(t)]_a^b \\
    &= F(\varphi(b)) - F(\varphi(a))
    \end{aligned}
$$