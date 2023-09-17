??? note "Correction"

    |R1|R2|R3|R4|R5|R6|R7|
    |:--:|:--:|:--:|:--:|:--:|:--:|:--:|
    |0 - R1|||||||
    |0 - R1|0,1 - R1|1 - R1|||||
    |x|**0,1 - R1**|0,2 - R2|<mark>1,1 - R2</mark>||||
    |x|x|**0,2 - R2**||0,3 - R3|||
    |x|x|x||**0,3 - R3**|1,3 - R5|10,3 - R5|
    |x|x|x|<mark style="background: red"> 1,4 - R6</mark>||1,3 - R5|10,3 - R5|
    |x|x|x|**1,1 - R2**|x|1,2 - R4||
    |x|x|x|x|1,3 - R6|**1,2 - R4**|2,2 - R6|
    |x|x|x|x|x|x|**2,2 - R6**|
    
    On revient sur R4 avec un chemin plus long (<mark style="background: red"> 1,4 – R6 </mark>  > <mark> 1,1 - R2 </mark> ),  on reprend donc à partir de R4 mais avec le nouveau poids le plus petit.

    R1 ; R2 ; R4 ; R6 ; R7