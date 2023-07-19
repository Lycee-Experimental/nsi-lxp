!!! warning "En construction"
    Cette section de **cours de spécialité Numérique et Sciences de l'Informatique (NSI)** est en construction.

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

<script src="/info/outils/subnet.js"></script>