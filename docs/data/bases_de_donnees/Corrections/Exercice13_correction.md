??? note "Correction"
    1) <br>
    **Médicament**

    |nomMedicament|descriptionCourte|descriptionLongue|quantite|
    |:--:|:--:|:--:|:--:|
    |Chourix|Médicament contre la chute des choux|Vivamus fermentum semper porta. Nunc diam velit, adipiscing ut tristique vitae, sagittis vel odio. Maecenas convallis ullamcorper ultricies. Curabitur ornare.|13|
    |Tropas|Médicament contre les dysfonctionnements intellectuels|Suspendisse lectus leo, consectetur in tempor sit amet, placerat quis neque. Etiam luctus porttitor lorem, sed suscipit est rutrum non|42|

    **ContreIndication** : 

    |idCi|nomMedicament|descriptionCI|
    |:--:|:--:|:--:|
    |CI1|Chourix|Ne jamais prendre après minuit|
    |CI2|Chourix|Ne jamais mettre en contact avec de l’eau|
    |CI3|Tropas|Garder à l’abri de la lumière du soleil|

    2)<br>
    **Medicament**(<u>nomMedicament</u>, descriptionCourte, descriptionLongue, quantite)

    **ContreIndication**(<u>idCI</u>, # nomMedicament, descriptionCI)


    - Domaine de valeur :
        - nomMedicament, descriptionsCI,descriptionCourte : chaine de caractère en français
        - descriptionLongue : chaine de caractère en latin
        - idCI , quantite : entier strictement positif
