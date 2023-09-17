??? note "Correction"

    ```
    % les faits :

    % de genre :
    homme(armand).
    homme(bernard).
    homme(robert).
    homme(patrick).
    homme(jean).
    homme(jacques).
    femme(gisele).
    femme(ginette).
    femme(josette).
    femme(monique).



    % de lien de parenté
    parent(armand,robert). % armand est un parent de robert
    parent(armand,patrick).
    parent(armand,josette).
    parent(gisele,robert).
    parent(gisele,patrick).
    parent(gisele,josette).
    parent(bernard,jean).
    parent(ginette,jean).
    parent(josette,jacques).
    parent(josette,monique).
    parent(jean,jacques).
    parent(jean,monique).


    % règles

    % notion de pere
    pere(X,Y) :- homme(X),parent(X,Y). % X est le père de Y

    % notion de mere
    mere(X,Y) :- femme(X),parent(X,Y). % X est la mère de Y

    % notion d'enfant
    enfant(X,Y) :- parent(Y,X). % X est l’enfant de Y

    % notion de fils
    fils(X,Y) :- homme(X),enfant(X,Y). % X est le fils de Y
            
    % notion de fille
    fille(X,Y) :- femme(X),enfant(X,Y). % X est la fille de Y

    % notion de grand-parent
    grandparent(X,Y) :- parent(P,Y),parent(X,P). %X est le grand parent de Y

    % notion de grand-pere
    grandpere(X,Y) :- homme(X),grandparent(X,Y). % X est le grand-père de Y

    % notion de grand-mere
    grandmere(X,Y) :- femme(X),grandparent(X,Y).  % X est la grand-mère de Y

    % notion de frere
    frere(X,Y) :- homme(X),pere(P,X),pere(P,Y),mere(M,X),mere(M,Y),X\==Y. % X est le frère de Y

    % notion de soeur
    soeur(X,Y) :- femme(X),pere(P,X),pere(P,Y),mere(M,X),mere(M,Y),X\==Y. % X est la sœur de Y

    % notion d'oncle
    oncle(X,Y) :- parent(P,Y),frere(X,P). % X est l’oncle de Y

    % notion de tante
    tante(X,Y) :- parent(P,Y),soeur(X,P). % X est la tante de Y
    ```