# Opérateurs booléens et portes logiques

|Notions|Compétences|Remarques|
|--|--|--|
|Valeurs booléennes : 0, 1.<br> Opérateurs booléens : and, or, not.<br>Expressions booléennes| Dresser la table d'une expression booléenne.|Le ou exclusif (xor) est évoqué.<br>Quelques applications directes comme l'addition binaire sont présentées.<br>L'attention des élèves est attirée sur le caratctère séquentiel de certains opérateurs booléens. |

<center>
<img src="/assets/images/watergates.gif" speed="1" play></img>
</center>


## Le langage binaire

Avec le développement des premiers calculateurs fonctionnants à l'électricité, à base de relais, de tubes électroniques, de transistors, et enfin de circuits intégrés au sein de microprocesseurs, l'informatique s'est orienté vers un **langage binaire** : 

- **0** : le courant ne passe pas

- **1** : le courant passe

Mathématiquement, on dira que les ordinateurs effectuent des opérations en **base 2** (binaire), et non dans la **base 10** (décimale) que nous avons l'habitude d'utiliser.

## Logique booléenne

### Un peu d'histoire
En 1847, le  britannique  *George BOOLE*  inventait un formalisme permettant d'écrire des raisonnements logiques : l'algèbre de Boole. La notion même d'informatique n'existait pas à l'époque, même si les calculs étaient déjà automatisés (penser à la Pascaline de 1642). 
Bien plus tard, en  1938, les travaux de l'américain *Claude  SHANNON*  prouva  que des  circuits  électriques
peuvent  résoudre tous  les  problèmes  que l'algèbre  de  Boole peut  elle-même résoudre.  Pendant la deuxième guerre mondiale, les travaux  d'*Alan  TURING*  puis de *John VON NEUMANN* poseront définitivement les bases de l'informatique moderne.

### L'algèbre de Boole : une logique binaire

L'algèbre de Boole définit des opérations dans un ensemble
qui ne contient que **deux éléments** notés **0 et 1**, ou bien **FAUX et VRAI**, ou encore **False** et **True** (en Python)

Les opérations fondamentales sont :

- la *conjonction* : **A ET B** 
- la *disjonction* : **A OU B** 
- la *négation* : **NON A**

De nombreuses autres peuvent être obtenues en combinant les opérations fondamentales, on notera en particulier :

- la *disjonction exclusive* : **OU EXCLUSIF** = (A ET non B) OU (non A ET B)


## Les portes logiques

Les transistors effectuent des **opérations booléennes** directement liées à l'algèbre de Boole. Ainsi, un circuit logique prend en **entrée** un ou des signaux électriques - chaque entrée est dans un état "haut" (symbolisé par un "1") ou à un état "bas" (symbolisé par un "0") - et donne en **sortie** un ou des signaux électriques (chaque sortie est aussi dans un état "haut" ou à un état "bas"). 

!!! Note "Remarque"
	Il existe deux catégories de circuit logique :

	- les circuits **combinatoires** : les états en sortie dépendent uniquement des états en entrée.

	- les circuits **séquentiels** : les états en sortie dépendent des états en entrée ainsi que du temps et des états antérieurs.

	Dans la suite nous nous intéresserons principalement aux **circuits combinatoires**.

=== "La négation : porte NON - NOT" 
	- symbole usuel : ~
	- français : NON
	- anglais (et Python) : `not`
	- notation logique :  $\neg$
	- notation mathématique :  $\overline{x}$
	
	Le plus simple des circuits combinatoires est la porte "NON" ("NOT" en anglais) qui inverse l'état en entrée : si l'entrée de la porte est dans un état "bas" alors la sortie sera dans un état "haut" et vice versa. 
 

	<div style="width: 100%; height: 70px">
	<logic-editor class="dark" mode="tryout">
		<script type="application/json">
		{ // JSON5
			v: 6,
			components: {
			in0: {type: 'in', pos: [20, 35], id: 0},
			not0: {type: 'not', pos: [120, 35], in: 1, out: 2},
			out0: {type: 'out', pos: [240, 35], id: 3},
			},
			wires: [[2, 3], [0, 1]]
		}
		</script>
	</logic-editor>
	</div>
	
	!!! conclu "Table de vérité de NON"
		Si on symbolise l'état "haut" par un "1" et l'état "bas" pour un "0", on peut obtenir ce que l'on appelle la table de vérité de la porte "NON" :

		|E (Entrée)| 	S (Sortie)|
		|:--:|:--:|
		|1 |	0|
		|0 |	1|

=== "La disjonction : porte OU - OR" 
	- symbole usuel : | appelé _pipe_ en anglais
	- français : OU
	- anglais (et Python) : `or`
	- notation logique : $\vee$
	- notation mathématique :  $+$

    La porte "OU" a deux entrées (E1 et E2) et une sortie S

	<div style="width: 100%; height: 90px">
	<logic-editor mode="tryout">
		<script type="application/json">
		{ // JSON5
			v: 6,
			components: {
			in0: {type: 'in', pos: [20, 25], id: 0},
			or0: {type: 'or', pos: [110, 45], in: [1, 2], out: 3},
			out0: {type: 'out', pos: [190, 45], id: 4},
			in1: {type: 'in', pos: [20, 65], id: 5},
			},
			wires: [[0, 1], [5, 2], [3, 4]]
		}
		</script>
	</logic-editor>
	</div>
	!!! conclu "Table de vérité de OU"
		|E1 |	E2 |	S|
		|:-:|:-:|:-:|	
		|0 |	0 |	0|
		|0 |	1 |	1|
		|1 |	0 |	1|
		|1 |	1 |	1|

=== "La conjonction : porte ET - AND" 
	- symbole usuel : & (appelé _esperluette_ en français et _ampersand_ en anglais)
	- français : ET
	- anglais (et Python) : `and`
	- notation logique : $\wedge$
	- notation mathématique :  `.` 

    La porte "ET" ("AND") a deux entrées (E1 et E2) et une sortie S

	<div style="width: 100%; height: 90px">
	<logic-editor mode="tryout">
		<script type="application/json">
		{ // JSON5
			v: 6,
			components: {
			in0: {type: 'in', pos: [20, 25], id: 0},
			out0: {type: 'out', pos: [190, 45], id: 4},
			in1: {type: 'in', pos: [20, 65], id: 5},
			and0: {type: 'and', pos: [105, 45], in: [6, 7], out: 8},
			},
			wires: [[8, 4], [0, 6], [5, 7]]
		}
		</script>
	</logic-editor>
	</div>

	!!! conclu "Table de vérité de ET"
		|E1	|E2 |	S|
		|:-:|:-:|:-:|	
		|0 	|0 |	0|
		|0 	|1 |	0|
		|1 	|0 |	0|
		|1 |	1 |	1|

=== "La disjonction exclusive : porte OU EXCLUSIF - XOR" 
    - symbole usuel : ⊕
	- français : OU exclusif
	- anglais (et Python) : `XOR`
	- Python : `^`   
	- notation logique : ⊕
	- notation mathématique :  ↮

	<div style="width: 100%; height: 90px">
	<logic-editor mode="tryout">
		<script type="application/json">
		{ // JSON5
			v: 6,
			components: {
			in0: {type: 'in', pos: [20, 25], id: 0},
			out0: {type: 'out', pos: [190, 45], id: 4},
			in1: {type: 'in', pos: [20, 65], id: 5},
			xor0: {type: 'xor', pos: [105, 45], in: [9, 10], out: 11},
			},
			wires: [[11, 4], [5, 10], [0, 9]]
		}
		</script>
	</logic-editor>
	</div>

	!!! conclu "Table de vérité de OU EXCLUSIF"
		|E1 |	E2 |	S |
		|:-:|:-:|:-:|
		|0 |	0 |	0 |
		|0 |	1 |	1 |
		|1 |	0 |	1 |
		|1 |	1 |	0 |
  


{{exercice(1)}}	
	=== "Énoncé"
		Des portes logique peuvent s'obtenir en combinant 2 autres.
		Constituer les portes `NON OU` et `NON ET` et en établir le tableau de vérité.
		<div style="width: 100%; height: 400px">
			<logic-editor mode="design" showonly="in out and or not xor">
				<script type="application/json">
				{ // JSON5
					v: 6
				}
				</script>
			</logic-editor>
		</div>

	=== "Réponse"

		**NON OU**

		<div style="width: 100%; height: 100px">
			<logic-editor mode="tryout">
				<script type="application/json">
					{ // JSON5
					v: 6,
					components: {
						and0: {type: 'and', pos: [135, 60], in: [0, 1], out: 2},
						in0: {type: 'in', pos: [50, 45], id: 3},
						in1: {type: 'in', pos: [50, 85], id: 4},
						not0: {type: 'not', pos: [230, 60], in: 5, out: 6},
						out0: {type: 'out', pos: [315, 60], id: 7},
					},
					wires: [[3, 0], [4, 1], [2, 5], [6, 7]]
					}
				</script>
			</logic-editor>
		</div>

		*Table de vérité*

		|E1 |	E2 |	S |
		|:-:|:-:|:-:|
		|0 |	0 |	1 |
		|0 |	1 |	1 |
		|1 |	0 |	1 |
		|1 |	1 |	0 |

		**NON ET**

		<div style="width: 100%; height: 100px">
			<logic-editor mode="tryout">
				<script type="application/json">
					{ // JSON5
					v: 6,
					components: {
						or0: {type: 'or', pos: [135, 60], in: [0, 1], out: 2},
						in0: {type: 'in', pos: [50, 45], id: 3},
						in1: {type: 'in', pos: [50, 85], id: 4},
						not0: {type: 'not', pos: [230, 60], in: 5, out: 6},
						out0: {type: 'out', pos: [315, 60], id: 7},
					},
					wires: [[3, 0], [4, 1], [2, 5], [6, 7]]
					}
				</script>
			</logic-editor>
		</div>

		*Table de vérité*

		|E1 |	E2 |	S |
		|:-:|:-:|:-:|
		|0 |	0 |	1 |
		|0 |	1 |	0 |
		|1 |	0 |	0 |
		|1 |	1 |	0 |

!!! info "Application : l'additionneur"

		En combinant les portes logiques, on obtient des circuits plus complexes. Par exemple en combinant 2 portes "OU EXCLUSIF", 2 portes "ET" et une porte "OU" on obtient un additionneur, qui permet d'additionner 2 bits (E1 et E2) en tenant compte de la retenue entrante (C0). En sortie on obtient le résultat de l'addition (S) et la retenue sortante ("C1").

		<div style="width: 100%; height: 300px">
			<logic-editor mode="tryout">
				<script type="application/json">
				{ // JSON5
					v: 6,
					components: {
					in0: {type: 'in', pos: [25, 40], id: 12},
					in1: {type: 'in', pos: [25, 145], id: 13},
					in2: {type: 'in', pos: [25, 95], id: 14},
					xor0: {type: 'xor', pos: [150, 65], in: [15, 16], out: 17},
					xor1: {type: 'xor', pos: [255, 75], in: [18, 19], out: 20},
					and0: {type: 'and', pos: [255, 130], in: [21, 22], out: 23},
					and1: {type: 'and', pos: [255, 190], in: [24, 25], out: 26},
					or0: {type: 'or', pos: [355, 160], in: [27, 28], out: 29},
					out0: {type: 'out', pos: [440, 90], id: 0},
					out1: {type: 'out', pos: [440, 160], id: 1},
					label0: {type: 'label', pos: [25, 15], text: 'E1'},
					label1: {type: 'label', pos: [25, 70], text: 'E2'},
					label2: {type: 'label', pos: [25, 170], text: 'C0'},
					label3: {type: 'label', pos: [440, 65], text: 'S1'},
					label4: {type: 'label', pos: [445, 190], text: 'C1'},
					},
					wires: [[13, 19, {via: [[170, 115]]}], [13, 21, {via: [[170, 115]]}], [17, 18], [17, 22], [14, 16, {via: [[110, 95]]}], [14, 24, {via: [[110, 95]]}], [12, 25, {via: [[80, 40, 's'], [80, 200, 's']]}], [12, 15, {via: [[80, 40]]}], [20, 0], [23, 27], [26, 28], [29, 1]]
				}
				</script>
			</logic-editor>
		</div>
		
		Table de vérité :

		|E1| 	E2| 	C0| 	C1| 	S1|
		|:-:|:-:|:-:|:-:|:-:|
		|0| 	0| 	0 |	0 	|0|
		|0| 	0| 	1 |	0 	|1|
		|0| 	1| 	0 |	0 	|1|
		|0| 	1| 	1 |	1 	|0|
		|1| 	0| 	0| 	0 	|1|
		|1| 	0| 	1 	|1 	|0|
		|1| 	1| 	0 |	1 	|0|
		|1| 	1| 	1| 	1 	|1|

		!!! note "Remarque" 
			En combinant plusieurs fois le type de circuit décrit ci-dessus, on obtient des additionneurs capables d'additionner des nombres sur X bits.





!!! python "La logique booléene en Python"
	Les opérateurs `and`, `or` et `not` sont utilisables pour tester des conditions, et renvoient `False` ou `True`.
	```python
	>>> (n % 7 == 0) and (n % 0 == 0)
	False
	```

	```python
	>>> n = 20
	>>> (n % 10 == 0) or (n % 7 == 0)
	True
	>>> (n % 4 == 0) or (n % 5 == 0)
	True
	>>> (n % 7 == 0) or (n % 3 == 0)
	False
	```

	```python
	>>> n = 20
	>>> not(n % 10 == 0)
	False
	```

	Les opérateurs `&`, `|` et `^` sont utilisables directement avec des nombres en Python

	```python
	# calcul A
	>>> 12 & 7
	4
	```

	```python
	# calcul B
	>>> 12 | 7
	15
	```

	```python
	# calcul C
	>>> 12 ^ 5
	9
	```

	Pour comprendre ces résultats, il faut travailler en binaire :
	- Les nombre binaires sont précédés de `0b`.
	- La fonction bin(n) convertit un nombre entier en binaire.
	
	Voici les mêmes calculs, qui peuvent mieux s'annalyser en prenant les bits un à un :

	```python
	# calcul A
	>>> bin(0b1100 & 0b111)
		'0b100'
	```

	```python
	# calcul B
	>>> bin(0b1100 | 0b111)
	'0b1111'
	```

	```python
	# calcul C
	>>> bin(0b1100 ^ 0b111)
	'0b1011'

	```
	**A toi de jouer !**
	{{terminal()}}


!!! info "Du transistor aux circuits logiques complexes"
	A la base de l'informatique, nous avons le transistor, composant muni de 2 entrées et une sortie. Une combinaison de transistors (sous forme de circuit intégré) permet d'obtenir des circuits logiques, la combinaison de circuits logiques permet d'obtenir des circuits plus complexes (exemple : l'additionneur), et ainsi de suite...


{{exercice()}}	
    === "Énoncé"
        Effectuer les opérations suivantes.
        ```python
           1011011
        &  1010101
        ----------


           1011011
        |  1010101
        ----------


           1011011
        ^  1010101
        ----------

        ```
        
    === "Correction"
        ```python
         1011011
        &1010101
        ----------
         1010001

         1011011
        |1010101
        ----------
         1011111

         1011011
        ^1010101
        ----------
         0001110
        ```

