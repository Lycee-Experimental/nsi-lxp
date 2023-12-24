# Architecture réseau

|Notions|Compétences|Remarques|
|--|--|--|
Transmission de données dans un réseau.<br> Protocoles de communication.<br> Architecture d’un réseau. | Mettre en évidence l’intérêt du découpage des données en paquets et de leur encapsulation.<br> Dérouler le fonctionnement d’un protocole simple de récupération de perte de paquets (bit alterné).<br> Simuler ou mettre en œuvre un réseau. | Le protocole peut être expliqué et simulé en mode débranché.<br> Le lien est fait avec ce qui a été vu en classe de seconde sur le protocole TCP/IP.<br> Le rôle des différents constituants du réseau local de l’établissement est présenté.


- Les ordinateurs s'identifient sur les réseaux à l'aide d'une adresse IP (Internet Protocol).

- Suivant la norme IPv4, les adresses IP sont encodées sur 4 octets : on parle d'IPv4.

- Chaque octet pouvant varier de la valeur (décimale) 0 à 255, cela signifie que les adresses IP théoriquement possibles vont de 0.0.0.0 à 255.255.255.255. 

- Il y a donc $256^4 = 4294967296$ adresses possibles. On a longtemps cru que ce nombre serait suffisant. Ce n'est plus le cas, on est donc en train de passer sur des adresses à 6 octets (en hexadécimal) : voir la norme IPv6.


Notion de réseau et plage d'adresses IP

Carte réseau et adresses MAC

Adresse IP locales 

## Switch / Hub / Routeur (passerelle)
Imaginons que la machine 192.168.0.1 / 24 veuille communiquer avec la machine 172.16.52.3 / 24.
L'observation du masque de sous-réseau de la machine 192.168.0.1 / 24 nous apprend qu'elle ne peut communiquer qu'avec les adresses de la forme 192.168.0.X / 24, où X est un nombre entre 0 et 255.

Les 3 étapes du routage :

- Lorsque qu'une machine A veut envoyer un message à une machine B, elle va tout d'abord vérifier si cette machine appartient à son réseau local. si c'est le cas, le message est envoyé par l'intermédiaire du switch qui relie les deux machines.
- Si la machine B n'est pas trouvée sur le réseau local de la machine A, le message va être acheminé vers le routeur, par l'intermédiaire de son adresse de passerelle (qui est bien une adresse appartenant au sous-réseau de A).
- De là, le routeur va regarder si la machine B appartient au deuxième sous-réseau auquel il est connecté. Si c'est le cas, le message est distribué, sinon, le routeur va donner le message à un autre routeur auquel il est connecté et va le charger de distribuer ce message : c'est le procédé (complexe) de routage, qui sera vu en classe de Terminale.

Dans notre exemple, l'adresse 172.16.52.3 n'est pas dans le sous-réseau de 192.168.0.1. Le message va donc transiter par le routeur.


Ping

Masques sous réseau CDIR 255.255.255.0 vs 255.255.0.0



GNS3 : 
Server WEB
Take a simple Linux Appliance and use "python -m SimpleHTTPServer [port]"




=== "Plages de sous-réseau"
    Principe de détermination d'un masque sous-réseau...
    <label>
        <span class='label'>Début de la plage d'IP :</span> 
        <input class="md-search__input md-input" type='text' name='ip_calculate_range_start_ip' id='ip_calculate_range_start_ip' placeholder="ex. 192.168.1.15" />
    </label>
    <label>
        <span class='label'>Fin de la plage d'IP :</span>
        <input class="md-search__input md-input" type='text' name='ip_calculate_range_end_ip' id='ip_calculate_range_end_ip' placeholder="ex. 192.168.1.255" />
    </label>
    </form>
    <br>
    <a type='button' class="md-button" value="Calculate" id="ip_calculate_range_button">Calculer</a>
    <div class='result' id='ip_calculate_range_result' style='display: none;'></div>

=== "Préfixes CIDR"
    <form>
    <label>
    <span class='label'>Adresse IP :</span>
    <input class="md-search__input md-input" type='text' name='ip_calculate_cidr_mask_ip' id='ip_calculate_cidr_mask_ip' placeholder='ex. 192.168.1.0' />
    </label>
    <label>
    <span class='label'>Préfixe CIDR :</span>
    <select class="md-search__input md-input" name='ip_calculate_cidr_mask_mask' id='ip_calculate_cidr_mask_mask' placeholder='ex. 24'>
        <option value='' disabled selected>Sélectionner un masque de sous-réseau</option>
        <option value='24'>/24</option>
        <option value='16'>/16</option>
        <option value='8'>/8</option>
        <option value='' disabled>----------------------</option>
        <option value='0'>/0</option>
        <option value='1'>/1</option>
        <option value='2'>/2</option>
        <option value='3'>/3</option>
        <option value='4'>/4</option>
        <option value='5'>/5</option>
        <option value='6'>/6</option>
        <option value='7'>/7</option>
        <option value='8'>/8</option>
        <option value='9'>/9</option>
        <option value='10'>/10</option>
        <option value='11'>/11</option>
        <option value='12'>/12</option>
        <option value='13'>/13</option>
        <option value='14'>/14</option>
        <option value='15'>/15</option>
        <option value='16'>/16</option>
        <option value='17'>/17</option>
        <option value='18'>/18</option>
        <option value='19'>/19</option>
        <option value='20'>/20</option>
        <option value='21'>/21</option>
        <option value='22'>/22</option>
        <option value='23'>/23</option>
        <option value='24'>/24</option>
        <option value='25'>/25</option>
        <option value='26'>/26</option>
        <option value='27'>/27</option>
        <option value='28'>/28</option>
        <option value='29'>/29</option>
        <option value='30'>/30</option>
        <option value='31'>/31</option>
        <option value='32'>/32</option>
    </select>
    </label>
    <br><br>
    <a class="md-button" type='button' value='Calculate' id='ip_calculate_cidr_mask_button'>Calculer</a>
    <div class='result' id='ip_calculate_cidr_mask_result' style='display: none;'></div>
    </form>
=== "Masques sous-réseau"
    <form id='ip_calculate_mask' class='calculator'>
    <fieldset>
    <label for="ip_calculate_mask_ip">
    <span class='label'>Adresse IP :</span>
    <input class="md-search__input md-input" type='text' name='ip_calculate_mask_ip' id='ip_calculate_mask_ip' placeholder='ex. 192.168.0.1' /></label>
    <label>
    <span class='label'>Masque sous-réseau : </span>
    <input class="md-search__input md-input" type='text' name='ip_calculate_mask_mask' id='ip_calculate_mask_mask' placeholder='ex. 255.255.255.0' /></label>
    <br><br>
    <a class="md-button" type='button' value='Calculate' id='ip_calculate_mask_button'> Calculer</a>
    <div class='result' id='ip_calculate_mask_result' style='display: none;'></div>
    </fieldset>
    </form>

<style>
label {display: flex;}
span.label {width: 50%; text-align: right;}
</style>

<script src="/xtra/javascripts/subnet.js"></script>