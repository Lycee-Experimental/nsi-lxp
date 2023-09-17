from turtle import *
from math import *

class Vecteur:
    """ une classe pour définir un vecteur à partir de deux points"""

    def __init__(self,p1,p2):
        self.x=p2.x-p1.x
        self.y=p2.y-p1.y

    def multiplication(self,coeff):
        """ retourne le vecteur de l'instance multiplié par coeff """
        vect_multi_x=coeff*self.x
        vect_multi_y=coeff*self.y
        p1=Point(0,0)
        p2=Point(vect_multi_x,vect_multi_y)
        vect_multi=Vecteur(p1,p2)
        return vect_multi

    def vecteur_unitaire(self):
        """ retourne le vecteur unitaire ayant la même direction
        et le même sens que l'instance """
        norme = sqrt(self.x*self.x+self.y*self.y)
        vect_uni_x=self.x/norme
        vect_uni_y=self.y/norme
        p1=Point(0,0)
        p2=Point(vect_uni_x,vect_uni_y)
        vect_uni=Vecteur(p1,p2)
        return vect_uni

    def vecteur_perpendiculaire(self):
        """ retourne le vecteur perpendiculaire à l'instance par
        rotation de 90° dans le sens trigo """
        perpen_x=-self.y
        perpen_y=self.x
        p1=Point(0,0)
        p2=Point(perpen_x,perpen_y)
        vect_perpen=Vecteur(p1,p2)
        return vect_perpen

    def __str__(self):
        return("("+str(self.x)+";"+str(self.y)+")")

class Point:
    """ une classe pour définir un point avec ses coordonnées"""

    def __init__(self,x,y):
        self.x=x
        self.y=y

    def tracer(self,p):
        """ méthode pour tracer un trait entre l'instance et le paramètre"""
        up()
        goto(self.x,self.y)
        down()
        goto(p.x,p.y)
        up()

    def ajouter_vecteur(self,v):
        """ méthode qui retourne un objet de la classe Point qui se situe
        au bout du vecteur v appliqué sur l'instance"""
        x_nouv=self.x+v.x
        y_nouv=self.y+v.y
        point_nouv=Point(x_nouv,y_nouv)
        return point_nouv

    def __str__(self):
        return("("+str(self.x)+";"+str(self.y)+")")


#####################################################################
#                les fonctions
#######################################################################

""" fonction pour créer 16 objets de la classe Point ( qui pourront être
les positions des sommets dans le dessin """

def positions_sommets():
    """ permet de déterminer 16 positions pour des sommets de graphe"""
    from random import shuffle

    # création des 16 instances de la classe Point dans un carré dont le côté a une longueur 1
    # l'origine du repère est prise au centre du carré
    p1=Point(-0.40,0.40)
    p2=Point(-0.05,0.40)
    p3=Point(0.15,0.35)
    p4=Point(0.10,0.25)
    p5=Point(0.40,0.30)
    p6=Point(-0.25,0.15)
    p7=Point(0.32,0.08)
    p8=Point(-0.30,0)
    p9=Point(0.20,0)
    p10=Point(0.32,-0.08)
    p11=Point(-0.25,-0.20)
    p12=Point(0.08,-0.25)
    p13=Point(0.38,-0.25)
    p14=Point(0.15,-0.35)
    p15=Point(-0.40,-0.40)
    p16=Point(-0.05,-0.40)

    # liste des 16 instances de la classe Point
    coord=[p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16]

    # hauteur : hauteureur en pixel du rectangle dans lequel se fera le graphe
    # largeur : hauteureur en pixel du rectangle dans lequel se fera le graphe
    largeur = 950
    hauteur = 550

    # pour adapter les coordonnées au rectangle de la fenêtre turtle
    for element in coord :
        element.x=element.x*largeur
        element.y=element.y*hauteur
    shuffle(coord)
    return coord


def dessiner_graphe(g):
    """ le paramètre g est un objet de la classe graphe_matrice
    Cette fonction permet de dessiner le graphe g orienté à partir de sa matrice """
    assert g.taille()<=16,("il y a trop de sommets pour appliquer cette méthode")

    # pour définir la taille du rectangle dans lequel se fera le graphe
    setup(950,550)
    up()
    speed(0)

    # pour importer les différentes positions posibles des sommets
    coord=positions_sommets()

    # pour cacher la tortue
    hideturtle()

    # dessiner les arcs en premier
    for i in range(g.taille()):
        for j in range (g.taille()):
            if g.matrice[i][j] is not None :
                up()
                depart=coord[i] # instance de la classe Point
                arrivee=coord[j] # instance de la classe Point
                #print("type de depart : ",type(depart))
                goto(depart.x,depart.y)
                down()
                goto(arrivee.x,arrivee.y)
                up()

                """ dessiner la flèche au bout de l'arc """

                # vecteur sommet départ -> sommet arrivée
                vec=Vecteur(depart,arrivee)
                #print("coordonnées du vecteur : ", vec)


                vec_unitaire=vec.vecteur_unitaire()
                #print("coordonnées du vecteur unitaire : ", vec_unitaire)


                vec_unitaire_perpen=vec_unitaire.vecteur_perpendiculaire()

                # détermination du point A à l'intersection arc  / cercle
                vA=vec_unitaire.multiplication(-20)
                #arrivee.y=arrivee.y+20
                pA=arrivee.ajouter_vecteur(vA)

                # détermination du point B sur l'arc ( projeté du bout extérieur des flèches
                vB=vec_unitaire.multiplication(-50)
                pB=arrivee.ajouter_vecteur(vB)

                # détermination du point C ( bout extérieur de la flèche du haut )
                vC=vec_unitaire_perpen.multiplication(15)
                pC=pB.ajouter_vecteur(vC)

                # détermination du point D ( bout extérieur de la flèche du bas )
                vD=vec_unitaire_perpen.multiplication(-15)
                pD=pB.ajouter_vecteur(vD)

                # tracer la flèche du haut entre A et C
                pA.tracer(pC)

                # tracer la flèche du haut entre A et C
                pA.tracer(pD)

            else : pass

    # dessiner ensuite les sommets et les clés
    for i in range (g.taille()) :
        position =coord[i] # instance de la classe Point
        x,y=position.x,position.y
        goto(x,y-20)
        down()
        color("black","yellow")
        begin_fill()
        circle(20)
        end_fill()
        up()
        goto(x-5,y-10)
        down()
        write(i,font=("arial",16,"normal"))
        up()
    done()








