/* Début style */

const divStyle = {
  paddingLeft:'0 !important',
  paddingRight:'0 !important'
};
const choix_statut = {
  marginLeft:'137px'
};
const btn = {
  backgroundColor:' #FF9100',
  color:'white'
};
const btn_save = {
  marginLeft:'471px',
  backgroundColor:' #FF9100',
  color:'white'
};

/* Fin style */

class Lien extends React.Component { 
render() {
return (
    <a href={this.props.type_lien} onClick={this.props.cl} className={this.props.type_class}>{this.props.label} </a>
)
}
}
class Input extends React.Component { 
  render() {
    return (
        <div className="col-md-6">
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">{this.props.label} </label>
            <div className="col-sm-9">
              <input type={this.props.type} data-id={this.props.id_member} onChange={this.props.change} onInput={this.props.inp} onClick={this.props.oncl} disabled={this.props.disabled} className={this.props.clas} style={this.props.styl} value={this.props.value} name={this.props.name} class="form-control"/>
            </div>
          </div>
        </div>
    )
  }
}
class Option extends React.Component {
  render() {
    return <option value={this.props.value}>{this.props.option}</option>
  }
}
class Checkbox extends React.Component {
render() {
return (
    <div className="col-md-2" style={choix_statut}>
          <div className="form-check">
            <input className="form-check-input" value={this.props.value} checked={this.props.ch} onClick ={this.props.cl} onChange={this.props.change} name={this.props.name} type={this.props.check} id={this.props.id_for} />
            <label className="form-check-label" for={this.props.id_for}>{this.props.lbl}</label>
          </div>
    </div>
    )
}
}
class Select_sex extends React.Component {
  render() {
    return (
      <div className="col-md-6">
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Sexe </label>
            <div className="col-sm-9">
              <select name="sexe" value={this.props.val} onChange={this.props.change} class="form-control">
                   <Option value="M" option="M" />
                   <Option value="F" option="F" />
              </select>
            </div>
          </div>
      </div>
    )
  }
}
class Credit_type extends React.Component {
  render() {
    return (
      <div className="col-md-6">
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Type Crédit </label>
            <div className="col-sm-9">
              <select name="Credit_typ" value={this.props.val} onChange={this.props.change} class="form-control">
                   <Option value="GROUP" option="GROUP" />
                   <Option value="INDUVIDUEL" option="INDUVIDUEL" />
                   <Option value="ORGANISATION" option="ORGANISATION" />
              </select>
            </div>
          </div>
      </div>
    )
  }
}
class Currency extends React.Component {
  render() {
    return (
      <div className="col-md-6">
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Devise </label>
            <div className="col-sm-9">
              <select name="currency" value={this.props.val} onChange={this.props.change} class="form-control">
                   <Option value="USD" option="USD" />
                   <Option value="CDF" option="CDF" />
              </select>
            </div>
          </div>
      </div>
    )
  }
}
class Select_nationality extends React.Component {
  render() {
    return (
      <div className="col-md-6">
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Nationalité </label>
            <div className="col-sm-9">
              <select name="Nationality" onChange={this.props.change} class="form-control">
                  <Option value="AFG" option="Afghane (Afghanistan)" />
                  <Option value="ALB" option="Albanaise (Albanie)" />
                  <Option value="DZA" option="Algérienne (Algérie)" />
                  <Option value="DEU" option="Allemande (Allemagne)" />
                  <Option value="USA" option="Americaine (États-Unis)" />
                  <Option value="AND" option="Andorrane (Andorre)" />
                  <Option value="AGO" option="Angolaise (Angola)" />
                  <Option value="ATG" option="Antiguaise-et-Barbudienne (Antigua-et-Barbuda)" />
                  <Option value="ARG" option="Argentine (Argentine)" />
                  <Option value="ARM" option="Armenienne (Arménie)" />
                  <Option value="AUS" option="Australienne (Australie)" />
                  <Option value="AUT" option="Autrichienne (Autriche)" />
                  <Option value="AZE" option="Azerbaïdjanaise (Azerbaïdjan)"/>
                  <Option value="BHS" option="Bahamienne (Bahamas)" />
                  <Option value="BHR" option="Bahreinienne (Bahreïn)" />
                  <Option value="BGD" option="Bangladaise (Bangladesh)" />
                  <Option value="BRB" option="Barbadienne (Barbade)" />
                  <Option value="BEL" option="Belge (Belgique)" />
                  <Option value="BLZ" option="Belizienne (Belize)" />
                  <Option value="BEN" option="Béninoise (Bénin)" />
                  <Option value="BTN" option="Bhoutanaise (Bhoutan)" />
                  <Option value="BLR" option="Biélorusse (Biélorussie)" />
                  <Option value="MMR" option="Birmane (Birmanie)" />
                  <Option value="GNB" option="Bissau-Guinéenne (Guinée-Bissau)" />
                  <Option value="BOL" option="Bolivienne (Bolivie)" />
                  <Option value="BIH" option="Bosnienne (Bosnie-Herzégovine)" />
                  <Option value="BWA" option="Botswanaise (Botswana)" />
                  <Option value="BRA" option="Brésilienne (Brésil)" />
                  <Option value="GBR" option="Britannique (Royaume-Uni)" />
                  <Option value="BRN" option="Brunéienne (Brunéi)" />
                  <Option value="BGR" option="Bulgare (Bulgarie)" />
                  <Option value="BFA" option="Burkinabée (Burkina)" />
                  <Option value="BDI" option="Burundaise (Burundi)" />
                  <Option value="KHM" option="Cambodgienne (Cambodge)" />
                  <Option value="CMR" option="Camerounaise (Cameroun)" />
                  <Option value="CAN" option="Canadienne (Canada)" />
                  <Option value="CPV" option="Cap-verdienne (Cap-Vert)" />
                  <Option value="CAF" option="Centrafricaine (Centrafrique)" />
                  <Option value="CHL" option="Chilienne (Chili)" />
                  <Option value="CHN" option="Chinoise (Chine)" />
                  <Option value="CYP" option="Chypriote (Chypre)" />
                  <Option value="COL" option="Colombienne (Colombie)" />
                  <Option value="COM" option="Comorienne (Comores)" />
                  <Option value="COG" option="Congolaise (Congo-Brazzaville)" />
                  <Option value="COD" option="Congolaise (Congo-Kinshasa)" />
                  <Option value="COK" option="Cookienne (Îles Cook)" />
                  <Option value="CRI" option="Costaricaine (Costa Rica)" />
                  <Option value="HRV" option="Croate (Croatie)" />
                  <Option value="CUB" option="Cubaine (Cuba)" />
                  <Option value="DNK" option="Danoise (Danemark)" />
                  <Option value="DJI" option="Djiboutienne (Djibouti)" />
                  <Option value="DOM" option="Dominicaine (République dominicaine)" />
                  <Option value="DMA" option="Dominiquaise (Dominique)" />
                  <Option value="EGY" option="Égyptienne (Égypte)" />
                  <Option value="ARE" option="Émirienne (Émirats arabes unis)" />
                  <Option value="GNQ" option="Équato-guineenne (Guinée équatoriale)" />
                  <Option value="ECU" option="Équatorienne (Équateur)" />
                  <Option value="ERI" option="Érythréenne (Érythrée)" />
                  <Option value="ESP" option="Espagnole (Espagne)" />
                  <Option value="TLS" option="Est-timoraise (Timor-Leste)" />
                  <Option value="EST" option="Estonienne (Estonie)" />
                  <Option value="ETH" option="Éthiopienne (Éthiopie)" />
                  <Option value="FJI" option="Fidjienne (Fidji)" />
                  <Option value="FIN" option="Finlandaise (Finlande)" />
                  <Option value="FRA" option="Française (France)" />
                  <Option value="GAB" option="Gabonaise (Gabon)" />
                  <Option value="GMB" option="Gambienne (Gambie)" />
                  <Option value="GEO" option="Georgienne (Géorgie)" />
                  <Option value="GHA" option="Ghanéenne (Ghana)" />
                  <Option value="GRD" option="Grenadienne (Grenade)" />
                  <Option value="GTM" option="Guatémaltèque (Guatemala)" />
                  <Option value="GIN" option="Guinéenne (Guinée)" />
                  <Option value="GUY" option="Guyanienne (Guyana)" />
                  <Option value="HTI" option="Haïtienne (Haïti)" />
                  <Option value="GRC" option="Hellénique (Grèce)" />
                  <Option value="HND" option="Hondurienne (Honduras)" />
                  <Option value="HUN" option="Hongroise (Hongrie)" />
                  <Option value="IND" option="Indienne (Inde)" />
                  <Option value="IDN" option="Indonésienne (Indonésie)" />
                  <Option value="IRQ" option="Irakienne (Iraq)" />
                  <Option value="IRN" option="Iranienne (Iran)" />
                  <Option value="IRL" option="Irlandaise (Irlande)" />
                  <Option value="ISL" option="Islandaise (Islande)" />
                  <Option value="ISR" option="Israélienne (Israël)" />
                  <Option value="ITA" option="Italienne (Italie)" />
                  <Option value="CIV" option="Ivoirienne (Côte d'Ivoire)" />
                  <Option value="JAM" option="Jamaïcaine (Jamaïque)" />
                  <Option value="JPN" option="Japonaise (Japon)" />
                  <Option value="JOR" option="Jordanienne (Jordanie)" />
                  <Option value="KAZ" option="Kazakhstanaise (Kazakhstan)" />
                  <Option value="KEN" option="Kenyane (Kenya)" />
                  <Option value="KGZ" option="Kirghize (Kirghizistan)" />
                  <Option value="KIR" option="Kiribatienne (Kiribati)" />
                  <Option value="KNA" option="Kittitienne et Névicienne (Saint-Christophe-et-Niévès)" />
                  <Option value="KWT" option="Koweïtienne (Koweït)" />
                  <Option value="LAO" option="Laotienne (Laos)" />
                  <Option value="LSO" option="Lesothane (Lesotho)" />
                  <Option value="LVA" option="Lettone (Lettonie)" />
                  <Option value="LBN" option="Libanaise (Liban)" />
                  <Option value="LBR" option="Libérienne (Libéria)" />
                  <Option value="LBY" option="Libyenne (Libye)" />
                  <Option value="LIE" option="Liechtensteinoise (Liechtenstein)" />
                  <Option value="LTU" option="Lituanienne (Lituanie)" />
                  <Option value="LUX" option="Luxembourgeoise (Luxembourg)" />
                  <Option value="MKD" option="Macédonienne (Macédoine)" />
                  <Option value="MYS" option="Malaisienne (Malaisie)" />
                  <Option value="MWI" option="Malawienne (Malawi)" />
                  <Option value="MDV" option="Maldivienne (Maldives)" />
                  <Option value="MDG" option="Malgache (Madagascar)" />
                  <Option value="MLI" option="Maliennes (Mali)" />
                  <Option value="MLT" option="Maltaise (Malte)" />
                  <Option value="MAR" option="Marocaine (Maroc)" />
                  <Option value="MHL" option="Marshallaise (Îles Marshall)" />
                  <Option value="MUS" option="Mauricienne (Maurice)" />
                  <Option value="MRT" option="Mauritanienne (Mauritanie)" />
                  <Option value="MEX" option="Mexicaine (Mexique)" />
                  <Option value="FSM" option="Micronésienne (Micronésie)" />
                  <Option value="MDA" option="Moldave (Moldovie)" />
                  <Option value="MCO" option="Monegasque (Monaco)" />
                  <Option value="MNG" option="Mongole (Mongolie)" />
                  <Option value="MNE" option="Monténégrine (Monténégro)" />
                  <Option value="MOZ" option="Mozambicaine (Mozambique)" />
                  <Option value="NAM" option="Namibienne (Namibie)" />
                  <Option value="NRU" option="Nauruane (Nauru)" />
                  <Option value="NLD" option="Néerlandaise (Pays-Bas)" />
                  <Option value="NZL" option="Néo-Zélandaise (Nouvelle-Zélande)" />
                  <Option value="NPL" option="Népalaise (Népal)" />
                  <Option value="NIC" option="Nicaraguayenne (Nicaragua)" />
                  <Option value="NGA" option="Nigériane (Nigéria)" />
                  <Option value="NER" option="Nigérienne (Niger)" />
                  <Option value="NIU" option="Niuéenne (Niue)" />
                  <Option value="PRK" option="Nord-coréenne (Corée du Nord)" />
                  <Option value="NOR" option="Norvégienne (Norvège)" />
                  <Option value="OMN" option="Omanaise (Oman)" />
                  <Option value="UGA" option="Ougandaise (Ouganda)" />
                  <Option value="UZB" option="Ouzbéke (Ouzbékistan)" />
                  <Option value="PAK" option="Pakistanaise (Pakistan)" />
                  <Option value="PLW" option="Palaosienne (Palaos)" />
                  <Option value="PSE" option="Palestinienne (Palestine)" />
                  <Option value="PAN" option="Panaméenne (Panama)" />
                  <Option value="PNG" option="Papouane-Néo-Guinéenne (Papouasie-Nouvelle-Guinée)" />
                  <Option value="PRY" option="Paraguayenne (Paraguay)" />
                  <Option value="PER" option="Péruvienne (Pérou)" />
                  <Option value="PHL" option="Philippine (Philippines)" />
                  <Option value="POL" option="Polonaise (Pologne)" />
                  <Option value="PRT" option="Portugaise (Portugal)" />
                  <Option value="QAT" option="Qatarienne (Qatar)" />
                  <Option value="ROU" option="Roumaine (Roumanie)" />
                  <Option value="RUS" option="Russe (Russie)" />
                  <Option value="RWA" option="Rwandaise (Rwanda)" />
                  <Option value="LCA" option="Saint-Lucienne (Sainte-Lucie)" />
                  <Option value="SMR" option="Saint-Marinaise (Saint-Marin)" />
                  <Option value="VCT" option="Saint-Vincentaise et Grenadine (Saint-Vincent-et-les Grenadines)" />
                  <Option value="SLB" option="Salomonaise (Îles Salomon)" />
                  <Option value="SLV" option="Salvadorienne (Salvador)" />
                  <Option value="WSM" option="Samoane (Samoa)" />
                  <Option value="STP" option="Santoméenne (Sao Tomé-et-Principe)" />
                  <Option value="SAU" option="Saoudienne (Arabie saoudite)" />
                  <Option value="SEN" option="Sénégalaise (Sénégal)" />
                  <Option value="SRB" option="Serbe (Serbie)" />
                  <Option value="SYC" option="Seychelloise (Seychelles)" />
                  <Option value="SLE" option="Sierra-Léonaise (Sierra Leone)" />
                  <Option value="SGP" option="Singapourienne (Singapour)" />
                  <Option value="SVK" optoin="Slovaque (Slovaquie)" />
                  <Option value="SVN" option="Slovène (Slovénie)" />
                  <Option value="SOM" option="Somalienne (Somalie)" />
                  <Option value="SDN" option="Soudanaise (Soudan)" />
                  <Option value="LKA" option="Sri-Lankaise (Sri Lanka)" />
                  <Option value="ZAF" option="Sud-Africaine (Afrique du Sud)" />
                  <Option value="KOR" option="Sud-Coréenne (Corée du Sud)" />
                  <Option value="SSD" option="Sud-Soudanaise (Soudan du Sud)" />
                  <Option value="SWE" option="Suédoise (Suède)" />
                  <Option value="CHE" option="Suisse (Suisse)" />
                  <Option value="SUR" option="Surinamaise (Suriname)" />
                  <Option value="SWZ" option="Swazie (Swaziland)" />
                  <Option value="SYR" option="Syrienne (Syrie)" />
                  <Option value="TJK" option="Tadjike (Tadjikistan)" />
                  <Option value="TZA" option="Tanzanienne (Tanzanie)" />
                  <Option value="TCD" option="Tchadienne (Tchad)" />
                  <Option value="CZE" option="Tchèque (Tchéquie)" />
                  <Option value="THA" option="Thaïlandaise (Thaïlande)" />
                  <Option value="TGO" option="Togolaise (Togo)" />
                  <Option value="TON" option="Tonguienne (Tonga)" />
                  <Option value="TTO" option="Trinidadienne (Trinité-et-Tobago)" />
                  <Option value="TUN" option="Tunisienne (Tunisie)" />
                  <Option value="TKM" option="Turkmène (Turkménistan)" />
                  <Option value="TUR" option="Turque (Turquie)" />
                  <Option value="TUV" option="Tuvaluane (Tuvalu)" />
                  <Option value="UKR" option="Ukrainienne (Ukraine)" />
                  <Option value="URY" option="Uruguayenne (Uruguay)" />
                  <Option value="VUT" option="Vanuatuane (Vanuatu)" />
                  <Option value="VAT" option="Vaticane (Vatican)" />
                  <Option value="VEN" option="Vénézuélienne (Venezuela)" />
                  <Option value="VNM" option="Vietnamienne (Viêt Nam)" />
                  <Option value="YEM" option="Yéménite (Yémen)" />
                  <Option value="ZMB" option="Zambienne (Zambie)" />
                  <Option value="ZWE" option="Zimbabwéenne (Zimbabwe)" />
              </select>
            </div>
          </div>
      </div>
    )
  }
}
class Marital_status extends React.Component {
  render() {
    return (
      <div className="col-md-6">
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Etat-civil </label>
            <div className="col-sm-9">
              <select name="marital_status" onChange={this.props.change} class="form-control">
                  <Option value="1" option="Célibataire" />
                  <Option value="2" option="Marié·e" />
                  <Option value="3" option="Divorcé·e" />
                  <Option value="4" option="Veuf·ve" />
              </select>
            </div>
          </div>
      </div>
    )
  }
}
class Select_work extends React.Component {
  render() {
    return (
      <div className="col-md-6">
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Profession </label>
            <div className="col-sm-9">
              <select name="marital_status" onChange={this.props.change} class="form-control">
                  <Option value="1" option="Acheteur" />
                  <Option value="2" option="Administrateur de base de données" />
                  <Option value="3" option="Agent de sûreté aéroportuaire" />
                  <Option value="4" option="Agent de transit" />
                  <Option value="5" option="Agent d'entretien" />
                  <Option value="6" option="Agent funéraire" />
                  <Option value="7" option="Agent immobilier" />
                  <Option value="8" option="Agent de police" />
                  <Option value="9" option="Agent de presse" />
                  <Option value="10" option="Agent de sécurité" />
                  <Option value="11" option="Agent de surveillance de la voie publique (ASVP)" />
                  <Option value="12" option="Agronome" />
                  <Option value="13" option="Ambulancier" />
                  <Option value="14" option="Analyste financier" />
                  <Option value="15" option="Analyste programmeur" />
                  <Option value="16" option="Analyste Web" />
                  <Option value="17" option="Architecte" />
                  <Option value="18" option="Architecte paysagiste" />
                  <Option value="19" option="Architecte en système d'information" />
                  <Option value="20" option="Archiviste" />
                  <Option value="21" option="Assistant administratif et financier" />
                  <Option value="22" option="Assistant bibliothécaire" />
                  <Option value="23" option="Assistant d'éducation" />
                  <Option value="24" option="Assistant dentaire" />
                  <Option value="25" option="Assistant marketing" />
                  <Option value="26" option="Assistant paie et administration" />
                  <Option value="27" option="Assistant RH" />
                  <Option value="28" option="Assureur" />
                  <Option value="29" option="Audioprothésiste" />
                  <Option value="30" option="Auditeur financier" />
                  <Option value="31" option="Auxiliaire de puériculture" />
                  <Option value="32" option="Auxiliaire de vie sociale" />
                  <Option value="33" option="Avocat" />
                  <Option value="34" option="Bibliothécaire" />
                  <Option value="35" option="Bibliothécaire" />
                  <Option value="36" option="Chargé de communication" />
                  <Option value="37" option="Chargé de recrutement" />
                  <Option value="38" option="Charpentier" />
                  <Option value="39" option="Chauffeur de taxi" />
                  <Option value="40" option="Chefs de chantier" />
                  <Option value="41" option="Chef de projet" />
                  <Option value="42" option="Chef de projet marketing" />
                  <Option value="43" option="Chef d'établissement" />
                  <Option value="44" option="Chiropracteur" />
                  <Option value="45" option="Chirurgien orthopédiste" />
                  <Option value="46" option="Coiffeur" />
                  <Option value="47" option="Commis de cuisine" />
                  <Option value="48" option="Comptable" />
                  <Option value="49" option="Concepteur de jeux vidéos" />
                  <Option value="50" option="Concepteur-rédacteur" />
                  <Option value="51" option="Conducteur de grue" />
                  <Option value="52" option="Conducteur de train" />
                  <Option value="53" option="Conseiller" />
                  <Option value="54" option="Conseiller d'orientation" />
                  <Option value="55" option="Conseiller en insertion professionnelle" />
                  <Option value="56" option="Consultant bien-être" />
                  <Option value="57" option="Consultant en informatique" />
                  <Option value="58" option="Contrôleur (trains)" />
                  <Option value="59" option="Contrôleur aérien" />
                  <Option value="60" option="Contrôleur de gestion" />
                  <Option value="61" option="Contrôleur financier" />
                  <Option value="62" option="Courtier en assurance" />
                  <Option value="63" option="Cuisinier" />
                  <Option value="64" option="Décorateur d'intérieur" />
                  <Option value="65" option="Dentiste" />
                  <Option value="66" option="Designer industriel" />
                  <Option value="67" option="Développeur informatique" />
                  <Option value="68" option="Diacre" />
                  <Option value="69" option="Diététicien" />
                  <Option value="70" option="Directeur artistique" />
                  <Option value="71" option="Directeur des ventes" />
                  <Option value="72" option="Directeur financier" />
                  <Option value="73" option="Directeur RH" />
                  <Option value="74" option="Économiste" />
                  <Option value="75" option="Éducateur de jeunes" />
                  <Option value="76" option="Éleveur" />
                  <Option value="77" option="Employé de banque" />
                  <Option value="78" option="Enseignant" />
                  <Option value="79" option="Ergothérapeute" />
                  <Option value="80" option="Esthéticienne" />
                  <Option value="81" option="Fleuriste" />
                  <Option value="82" option="Gardien" />
                  <Option value="83" option="Géomètre" />
                  <Option value="84" option="Gestionnaire immobilier" />
                  <Option value="85" option="Hôtesse de l'air" />
                  <Option value="86" option="Huissier" />
                  <Option value="87" option="Illustrateur" />
                  <Option value="88" option="Infirmière" />
                  <Option value="89" option="Ingénieur civil" />
                  <Option value="90" option="Ingénieur électronicien" />
                  <Option value="91" option="Ingénieur du BTP" />
                  <Option value="92" option="Inspecteur de l'action sanitaire et sociale" />
                  <Option value="93" option="Jardinier" />
                  <Option value="94" option="Jardinier paysagiste" />
                  <Option value="95" option="Journaliste" />
                  <Option value="96" option="Juge" />
                  <Option value="97" option="Kinésithérapeute" />
                  <Option value="98" option="Linguiste" />
                  <Option value="99" option="Machiniste" />
                  <Option value="100" option="Magasinier" />
                  <Option value="101" option="Maître d'hôtel" />
                  <Option value="102" option="Manipulateur radio" />
                  <Option value="103" option="Masseur" />
                  <Option value="104" option="Mécanicien aéronautique" />
                  <Option value="105" option="Médecin" />
                  <Option value="106" option="Moniteur d'auto-école" />
                  <Option value="107" option="Monteur électricien" />
                  <Option value="108" option="Nutritionniste" />
                  <Option value="109" option="Officier" />
                  <Option value="110" option="Opérateur de production" />
                  <Option value="111" option="Opérateur d'usinage sur commande numérique (UCN)" />
                  <Option value="112" option="Opticien" />
                  <Option value="113" option="Orthophoniste" />
                  <Option value="114" option="Personal Trainer" />
                  <Option value="115" option="Pharmacien" />
                  <Option value="116" option="Photographe" />
                  <Option value="117" option="Physicien" />
                  <Option value="118" option="Physicien médical" />
                  <Option value="119" option="Pilote" />
                  <Option value="120" option="Politicien" />
                  <Option value="121" option="Pompier" />
                  <Option value="122" option="Poseur de sol (solier)" />
                  <Option value="123" option="Prêtre" />
                  <Option value="124" option="Procureur" />
                  <Option value="125" option="Professeur des écoles" />
                  <Option value="126" option="Professeur d'éducation physique (EPS)" />
                  <Option value="127" option="Professeur de français" />
                  <Option value="128" option="Professeur des universités" />
                  <Option value="129" option="Psychologue" />
                  <Option value="130" option="Réceptionniste" />
                  <Option value="131" option="Réceptionniste d'hôtel" />
                  <Option value="132" option="Responsable communication" />
                  <Option value="133" option="Responsable grands comptes" />
                  <Option value="134" option="Responsable service clientèle" />
                  <Option value="135" option="Sages-femmes" />
                  <Option value="136" option="Secrétaire médicale" />
                  <Option value="137" option="Serveur" />
                  <Option value="138" option="Skipper" />
                  <Option value="139" option="Soldat" />
                  <Option value="140" option="Soudeur" />
                  <Option value="141" option="Statisticien" />
                  <Option value="142" option="Surveillant pénitentiaire" />
                  <Option value="143" option="Technicien alarme intrusion" />
                  <Option value="144" option="Technicien d'analyses biomédicales" />
                  <Option value="145" option="Technicien de maintenance informatique" />
                  <Option value="146" option="Technicien d'exploitation" />
                  <Option value="147" option="Téléconseiller" />
                  <Option value="148" option="Test manager" />
                  <Option value="149" option="Travailleur social" />
                  <Option value="150" option="Vendeur" />
                  <Option value="151" option="Vétérinaire" />
                  <Option value="152" option="Webmaster" />
              </select>
            </div>
          </div>
      </div>
    )
  }
}
class Type_piece extends React.Component {
  render() {
    return (
      <div className="col-md-6">
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Type de pièce d'identité </label>
            <div className="col-sm-9">
              <select name="marital_status" onChange={this.props.change} class="form-control">
                  <Option value="1" option="Carte d'électeur" />
                  <Option value="2" option="Passeport" />
                  <Option value="3" option="Permis de conduire" />
              </select>
            </div>
          </div>
      </div>
    )
  }
}
class Cellule_tableau extends React.Component {
  render() {
    return (
      <td>{this.props.label}</td>
    )
  }
}
class Cellule_cors_tableau extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.montant}</td>
        <td>{this.props.devise}</td>
        <td>{this.props.pourcentage}</td>
        <td>{this.props.id_membre}</td>
        <td>{this.props.penalite}</td>
        <td>{this.props.dat}</td>
      </tr>
    )
  }
}
class Renseignement_generaux extends React.Component {
    render() {
      return (
        <div className="row">
          <Input label="Prénom" disabled="true" value={this.props.prenom} type="text" name="prenom"/>
          <Input label="Nom" disabled="true" value={this.props.nom} type="text" name="nom"/>
          <Input label="Postnom" disabled="true" value={this.props.postnom} type="text" name="postnom"/>
          <Input label="lieu de naissance" disabled="true" value={this.props.lieu_naissance} type="text" name="lieunaiss"/>
          <Input label="Date naissance" disabled="true" value={this.props.date_naissance} type="date" name="datenaiss"/>
          <Input label="N° Pièce d'identité" disabled="true" id_member={this.props.id_member} value={this.props.numero_piece} type="text" name="piece_ident"/>
        </div>
      )
    }
}
class Relation extends React.Component {
render() {
    return (
      <div className="col-md-6">
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Lien relationnel</label>
            <div className="col-sm-9">
              <select name="relation" onChange={this.props.change} class="form-control">
                  <Option value="1" option="Famille" />
                  <Option value="2" option="Amis" />
                  <Option value="3" option="Parent" />
                  <Option value="4" option="Bailleur" />
                  <Option value="5" option="Chef d'entreprise" />
                  <Option value="6" option="Chef d'équipe" />
              </select>
            </div>
          </div>
      </div>
    )
    }
}
class Credit extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          checked : true,
          search_value : '',
          disabled_witness : true,
          value_name :'',
          value_prenom :'',
          value_postnom:'',
          value_lieunaiss:'',
          value_date_naiss:'',
          value_num_piece:'',
          value_nationalite:'',
          value_telephone:'',
          value_etat_civil:'',
          value_adresse:'',
          value_sexe:'',
          value_penalite:0,
          
          server_response:'',
          
          disabled_name_witness :false,
          disabled_post_name_witness :false,
          disabled_first_name_witness :false,
          disabled_address_witness :false,
          disabled_place_of_birth_witness :false,
          disabled_date_of_birth_witness :false,
          disabled_sex_witness :false,
          disabled_nationality_witness :false,
          disabled_telephone_witness :false,
          disabled_id_piece_witness :false,
          disabled_marital_status_witness :false,
          disabled_work_witness :false,
          
          value_id_witness :'',
          value_name_witness :'',
          value_post_name_witness :'',
          value_first_name_witness :'',
          value_address_witness :'',
          value_place_of_birth_witness :'',
          value_date_of_birth_witness :'',
          value_sex_witness :'M',
          value_nationality_witness :'1',
          value_telephone_number_witness :'',  
          value_id_piece_witness :'',
          value_marital_status_witness :'1',
          value_work_witness :'1',
          value_type_piece_witness :'1',
          value_rising_witness :0.00,
          value_currency_witness :'USD',
          value_percentage_witness :20.00,
          value_credit_type_witness :'GROUP',
          value_relation :'1',
          
          // State repertoire
          
          interface_repertoire_credit:false,
          interface_nouveau_credit:true,
          tableau_credit:[],
          
          error: null,
          isLoaded: false,
          items: []
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChangeSearch = this.handleChangeSearch.bind(this);
      this.change_state = this.change_state.bind(this);
      this.save_credit = this.save_credit.bind(this);
      this.change_type_piece_temoin = this.change_type_piece_temoin.bind(this);
      this.change_work_temoin = this.change_work_temoin.bind(this);
      this.change_marital_status_temoin = this.change_marital_status_temoin.bind(this);
      this.change_id_piece_temoin = this.change_id_piece_temoin.bind(this);
      this.change_telephone_number_temoin = this.change_telephone_number_temoin.bind(this);
      this.change_nationality_temoin = this.change_nationality_temoin.bind(this);
      this.change_sexe_temoin = this.change_sexe_temoin.bind(this);
      this.change_date_of_birth_birth_temoin = this.change_date_of_birth_birth_temoin.bind(this);
      this.change_place_of_birth_temoin = this.change_place_of_birth_temoin.bind(this);
      this.change_address_temoin = this.change_address_temoin.bind(this);
      this.change_post_name_temoin = this.change_post_name_temoin.bind(this);
      this.change_name_temoin = this.change_name_temoin.bind(this);
      this.change_first_name_temoin = this.change_first_name_temoin.bind(this);
      this.request = this.request.bind(this);
      this.change_value_rising_witness = this.change_value_rising_witness.bind(this);
      this.change_value_currency_witness = this.change_value_currency_witness.bind(this);
      this.change_value_percentage_witness = this.change_value_percentage_witness.bind(this);
      this.change_value_credit_type_witness = this.change_value_credit_type_witness.bind(this);
      this.relation = this.relation.bind(this);
      this.handleSaveWitness = this.handleSaveWitness.bind(this);
      this.handleInputWitness = this.handleInputWitness.bind(this);
      this.handleSaveMember = this.handleSaveMember.bind(this);
      this.rep_credit = this.rep_credit.bind(this);
      this.nouveau_credit = this.nouveau_credit.bind(this);
    }
    handleChangeSearch(event) {
      this.setState({search_value: event.target.value});
      this.setState({items: []});
    }
    handleInputWitness(event) {
      this.setState({value_id_witness: event.target.value});
      this.setState({value_name_witness : ''});
      this.setState({value_post_name_witness : ''});
      this.setState({value_first_name_witness : ''});
      this.setState({value_address_witness : ''});
      this.setState({value_place_of_birth_witness : ''});
      this.setState({value_date_of_birth_witness : ''});
    }
    relation(event) {
      this.setState({value_relation: event.target.value});
    }
    async handleSaveWitness() {
      let data = {
          id_witness : this.state.value_id_witness
      }
      let response = await this.request("/temoin/get_witness","POST",data),
          id_tem='',
          nom = '',
          prenom='',
          postnom='',
          adresse='',
          date_naiss='',
          lieu_naiss='',
          telephone='',
          id_piece=''
      
      jQuery.each(response.response_witness, function( i, val ) {
          id_tem= val.id
          nom = val.nom
          prenom= val.prenom
          postnom= val.postnom
          adresse= val.adresse
          date_naiss= val.date_naissance
          lieu_naiss= val.lieu_naissance
          telephone= val.telephone
          id_piece= val.numero_piece
      })
      if(id_tem !=''){
          this.setState({value_id_witness : id_tem});
          this.setState({value_name_witness : nom});
          this.setState({value_post_name_witness : postnom});
          this.setState({value_first_name_witness : prenom});
          this.setState({value_address_witness : adresse});
          this.setState({value_place_of_birth_witness : lieu_naiss});
          this.setState({value_date_of_birth_witness : date_naiss});
      }else{
          this.setState({value_id_witness : ''});
          this.setState({value_name_witness : ''});
          this.setState({value_post_name_witness : ''});
          this.setState({value_first_name_witness : ''});
          this.setState({value_address_witness : ''});
          this.setState({value_place_of_birth_witness : ''});
          this.setState({value_date_of_birth_witness : ''});
      }
    } 
    async save_credit() { 
      let data = {
          name: this.state.value_name_witness,
          post_name: this.state.value_post_name_witness,
          first_name: this.state.value_first_name_witness,
          address: this.state.value_address_witness,
          place_of_birth: this.state.value_place_of_birth_witness,
          date_of_birth: this.state.value_date_of_birth_witness,
          sex: this.state.value_sex_witness,
          nationality: this.state.value_nationality_witness,
          telephone_number: this.state.value_telephone_number_witness,
          marital_status: this.state.value_marital_status_witness,
          work: this.state.value_work_witness,
          id_piece: this.state.value_id_piece_witness,
          type_piece: this.state.value_type_piece_witness,
          value_rising_witness: this.state.value_rising_witness,
          currency_witness: this.state.value_currency_witness,
          percentage_witness: this.state.value_percentage_witness,
          credit_type_witness: this.state.value_credit_type_witness,
          id_member: this.state.search_value,
          relation: this.state.value_relation,
          type_witness : this.state.disabled_witness,
          id_witness : this.state.value_id_witness
      },
          donnee = {
              id_membre : this.state.search_value
          },
          response = await this.request("/temoin/save_credit","POST",data),
          reponse_membre = await this.request("/membre/list_member","POST",donnee)
      
      if(response.response_save_credit == 'r'){
          /*
          this.setState({
              value_name : '',
              value_prenom :'',
              value_postnom:'',
              value_lieunaiss:'',
              value_date_naiss:'',
              value_num_piece:'',
              search_value : '',
              value_id_witness :'',
              value_name_witness :'',
              value_post_name_witness :'',
              value_first_name_witness :'',
              value_address_witness :'',
              value_place_of_birth_witness :'',
              value_date_of_birth_witness :'',
              value_sex_witness :'M',
              value_nationality_witness :'1',
              value_telephone_number_witness :'',  
              value_id_piece_witness :'',
              value_marital_status_witness :'1',
              value_work_witness :'1',
              value_type_piece_witness :'1',
              value_rising_witness :0.00,
              value_currency_witness :'USD',
              value_percentage_witness :20.00,
              value_credit_type_witness :'GROUP',
              value_relation :'1'
          });
          */
          let nom = '',
              postnom = '',
              prenom='',
              adresse='',
              sexe='',
              nationalite='',
              telephone='',
              lieu_naissance = '',
              piece='',
              date_naissance='',
              etat_civil='',
              res = reponse_membre.items,
              penalite = 0

          res.map(item => (
              nom = item.nom,
              postnom = item.postnom,
              prenom = item.prenom,
              lieu_naissance = item.lieu_naissance,
              adresse = 'Rue '+ item.avenue+', Quartier '+ item.quartier+ ', Commune de '+item.commune_id,
              telephone = item.telephone,
              piece = item.numero_piece,
              date_naissance = item.date_naissance,
              sexe = item.sexe_id,
              etat_civil = item.etat_civil,
              nationalite = item.nationalite_id
          ))
          
          this.setState({value_name : nom});
          this.setState({value_prenom : prenom});
          this.setState({value_postnom : postnom});
          this.setState({value_lieunaiss : lieu_naissance});
          this.setState({value_adresse : adresse});
          this.setState({value_date_naiss : date_naissance});
          this.setState({value_num_piece : piece});
          this.setState({value_nationalite : (nationalite == '1') ? nationalite = 'Congolaise' : nationalite = 'Etrangère'});
          this.setState({value_telephone : telephone});
          this.setState({value_etat_civil : (etat_civil == '1') ? etat_civil = 'Célibataire' : (etat_civil == '2') ? etat_civil = 'Marié·e' : (etat_civil == '3') ? etat_civil = 'Veuf·ve' : etat_civil = 'Divorcé·e'});
          this.setState({value_sexe : (sexe == '1') ? sexe = 'Masculin' : sexe = 'Féminin' });
          this.setState({server_response : 'r'});
          penalite = (parseFloat((this.state.value_rising_witness * this.state.value_percentage_witness) / 100) + parseFloat(this.state.value_rising_witness))
          penalite /= 30
          this.setState({value_penalite : penalite});
      } 
      alert(response.response_save_credit)
    }
    async request(url,method,data) {
      try {
          const response = await fetch(url, {
              method: method, 
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(data)
          });
          const resultat = await response.json();
          return resultat
      }catch (erreur) {
          console.log("Erreur :", erreur);
      }
    }
    handleSubmit(e) {
      e.preventDefault();
    }
    handleSaveMember() {
          let data = {
              id_membre: this.state.search_value
          }
          let request = new Request("/membre/list_member", {
              method: 'POST',
              body: JSON.stringify(data),
              headers: {
                  'Content-Type': 'application/json'
              }
          }); 
         fetch(request)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
    change_first_name_temoin(event) {
      this.setState({value_first_name_witness : event.target.value});
    }
    async rep_credit(event) {
      this.setState({interface_repertoire_credit : true});
      this.setState({interface_nouveau_credit : false});
      let response = await this.request("/membre/get_credit","POST",{})
      this.setState({tableau_credit : response.result});
      
    }
    nouveau_credit(event) {
      this.setState({interface_repertoire_credit : false});
      this.setState({interface_nouveau_credit : true});
    }
    change_type_piece_temoin(event) {
      this.setState({value_type_piece_witness : event.target.value});
    }
    change_work_temoin(event) {
      this.setState({value_work_witness : event.target.value});
    }
    change_marital_status_temoin(event) {
      this.setState({value_marital_status_witness : event.target.value});
    }
    change_id_piece_temoin(event) {
      this.setState({value_id_piece_witness : event.target.value});
    }
    change_telephone_number_temoin(event) {
      this.setState({value_telephone_number_witness : event.target.value});
    }
    change_nationality_temoin(event) {
      this.setState({value_nationality_witness : event.target.value});
    }
    change_sexe_temoin(event) {
      this.setState({value_sex_witness : event.target.value});
    }
    change_date_of_birth_birth_temoin(event) {
      this.setState({value_date_of_birth_witness : event.target.value});
    }
    change_place_of_birth_temoin(event) {
      this.setState({value_place_of_birth_witness : event.target.value});
    }
    change_address_temoin(event) {
      this.setState({value_address_witness : event.target.value});
    }
    change_name_temoin(event) {
      this.setState({value_name_witness : event.target.value});
    }
    change_post_name_temoin(event) {
      this.setState({value_post_name_witness : event.target.value});
    }
    change_value_rising_witness(event) {
      this.setState({value_rising_witness : event.target.value});
    }
    change_value_currency_witness(event) {
      this.setState({value_currency_witness : event.target.value});
    }
    change_value_percentage_witness(event) {
      this.setState({value_percentage_witness : event.target.value});
    }
    change_value_credit_type_witness(event) {
      this.setState({value_credit_type_witness : event.target.value});
    }
    change_state() {
        if(this.state.disabled_witness == true){
          this.setState({disabled_witness : false});
          this.setState({disabled_name_witness : true});
          this.setState({disabled_address_witness : true});
          this.setState({disabled_post_name_witness : true});
          this.setState({disabled_first_name_witness : true});
          this.setState({disabled_place_of_birth_witness : true});
          this.setState({disabled_date_of_birth_witness : true});
          this.setState({disabled_sex_witness : true});
          this.setState({disabled_nationality_witness : true});
          this.setState({disabled_telephone_witness : true});
          this.setState({disabled_id_piece_witness : true});
          this.setState({disabled_marital_status_witness : true});
          this.setState({disabled_work_witness : true});
        }
        else{
          this.setState({disabled_witness : true});
          this.setState({disabled_name_witness : false});
          this.setState({disabled_address_witness : false});
          this.setState({disabled_post_name_witness : false});
          this.setState({disabled_first_name_witness : false});
          this.setState({disabled_place_of_birth_witness : false});
          this.setState({disabled_date_of_birth_witness : false});
          this.setState({disabled_sex_witness : false});
          this.setState({disabled_nationality_witness : false});
          this.setState({disabled_telephone_witness : false});
          this.setState({disabled_id_piece_witness : false});
          this.setState({disabled_marital_status_witness : false});
          this.setState({disabled_work_witness : false});
        }
        this.setState({value_id_witness : ''});
    }
    render() { 
        let nom_membre = '',
            nation = ''
        if(this.state.value_nationality_witness == 'COD') nation = 'Congolaise'
        const { error, isLoaded, items,value_name,tableau_credit } = this.state;
        const listItems = items.map(item => (
            <Renseignement_generaux id_member={item.id} prenom={item.prenom} nom={item.nom} postnom={item.postnom} lieu_naissance={item.lieu_naissance} date_naissance={item.date_naissance} numero_piece={item.numero_piece} />
        ))
        const listCredit = tableau_credit.map(item => (
            <Cellule_cors_tableau id={item.id} montant={item.montant} devise={item.devise} dat={item.createdAt} pourcentage={item.pourcentage} id_membre={item.id_membre} />
        ))
        if(this.state.server_response =='r'){
            var docDefinition = {
                /*
                header: [
                    {
                        canvas: [
                            {
                                type: 'rect',
                                x: 0,
                                y: 0,
                                w: 850, // landscape
                                h: 120,
                                color: '#0067B9'
                            }
                        ]
                    },
                    {
                        image: "logoloanme.png",
                        width: 100,
                        margin: [0, -120, 0, 0] // -120 is your rect height
                    },    
                ],
                */
                watermark: { text: 'LoanMe', color: 'orange', opacity: 0.3, bold: true, italics: false },
                footer: {
                    columns: [
                      { text: 'Fiche de demande de crédit', alignment: 'right' }
                    ]
                },
                content: [ 
                    { text: 'REPUBLIQUE DEMOCRATIQUE DU CONGO', bold: true,alignment: 'center',fontSize: 16 },
                    { text: 'LOANME/UNIR ',bold: true ,alignment: 'center',fontSize: 16,margin: [ 0, 2, 0, 0 ] },
                    { text: 'FICHE DE DEMANDE DE CREDIT',bold: true,fontSize: 16 ,alignment: 'center',margin: [ 0, 2, 0, 10 ],decoration: 'underline' },
                    { text: 'RENSEIGNEMENTS GENERAUX',bold: true,fontSize: 14,backgroundColor : 'black' ,alignment: 'left',margin: [ 0, 15, 0, 8 ],decoration: 'underline' },
                    { 
                        table: {
                            // headers are automatically repeated if the table spans over multiple pages
                            // you can declare how many rows should be treated as headers
                            headerRows: 1,
                            widths: [ '*', 'auto', 100, '*' ],
                            
                            body: [
                                [ 'Nom :',this.state.value_name,'Sexe :',this.state.value_sexe ],
                                [ 'Prénom :',this.state.value_prenom,'Nationalité :',this.state.value_nationalite ],
                                [ 'Postnom :',this.state.value_postnom,'N° Téléphone :',this.state.value_telephone ],
                                [ 'Adresse actuelle :',this.state.value_adresse,'N° de pièce d’identité :',this.state.value_num_piece ],
                                [ 'Lieu & date de naissance :','A '+this.state.value_lieunaiss+' le '+this.state.value_date_naiss,'Etat civil :',this.state.value_etat_civil ]
                            ]
                        } 
                    }, 
                    { text: 'TEMOIN',bold: true,fontSize: 14 ,alignment: 'left',margin: [ 0, 10, 0, 8 ],decoration: 'underline' },
                    { 
                        table: {
                            // headers are automatically repeated if the table spans over multiple pages
                            // you can declare how many rows should be treated as headers
                            headerRows: 1,
                            widths: [ '*', 'auto', 100, '*' ],
                            body: [
                                [ 'Nom :',this.state.value_name_witness,'Sexe :',this.state.value_sex_witness ],
                                [ 'Prénom :',this.state.value_first_name_witness,'Nationalité :',nation ],
                                [ 'Postnom :',this.state.value_post_name_witness,'N° Téléphone :',this.state.value_telephone_number_witness ],
                                [ 'Adresse actuelle :',this.state.value_address_witness,'N° de pièce d’identité :',this.state.value_num_piece ],
                                [ 'Lieu & date de naissance :',this.state.value_place_of_birth_witness +' '+this.state.value_date_of_birth_witness,'Etat civil :',this.state.value_etat_civil ],
                                [ 'Lien relationel :',this.state.value_lieunaiss,'Profession :',this.state.value_work_witness ]
                            ]
                        }
                    },
                    { text: 'BESOIN DE CREDIT',bold: true,fontSize: 14, alignment: 'left',margin: [ 0, 10, 0, 8 ],decoration: 'underline' },
                    { 
                        table: {
                            // headers are automatically repeated if the table spans over multiple pages
                            // you can declare how many rows should be treated as headers
                            headerRows: 1,
                            widths: [ '*', 'auto', 100, '*' ],
                            
                            body: [
                                [ 'Montant (en '+this.state.value_currency_witness+') :',this.state.value_rising_witness, 'Frais de pénalité :',parseFloat(this.state.value_penalite).toFixed(2)+' '+this.state.value_currency_witness ],
                                [ 'Pourcentage :',this.state.value_percentage_witness,'Type de crédit :',this.state.value_credit_type_witness ]
                            ]
                        }
                    },
                    {
                      // for numbered lists set the ol key
                      ol: [
                        'En cas de dépassement de limite le pourcentage augmente.',
                        'Dès que je signe, c. à. d je reconnais avoir reçu le montant signé.',
                        'Le témoin est tenu responsable de payement de la dette en cas de fuite du créancier.'
                      ]
                    }
                ]
            };
    
            pdfMake.createPdf(docDefinition).download(response.message)
            pdfMake.createPdf(docDefinition).print({}, window);
        }
        if(this.state.interface_nouveau_credit == true) {
          return (
            <div className="col-12" style={divStyle}>
              <div className="col-md-12" id="barre_menu">
                <Lien type_class="btn navig-btn" type_lien="#" cl={this.nouveau_credit} label="Nouveau Crédit"/>&nbsp;&nbsp;
                <Lien type_class="btn navig-btn navig-active" cl={this.rep_credit} type_lien="#" label="Répertoire des Crédits"/>
              </div>
              <div className="card form-card">
                <div className="card-body">
                  <h4 className="card-title"></h4>
                  <form className="form-sample" onSubmit={this.handleSubmit}>
                    <h5>Renseignement Généraux</h5>
                    <br/>
                    <div className="row">
                        <Input label="Id Membre" value={this.state.search_value} inp={this.handleChangeSearch} type="number" name="id"/>
                        <Input value="Rechercher Membre" oncl={this.handleSaveMember} styl={btn} type="submit" />
                    </div><br/>
                    {listItems}
                    <hr/>
                    <h5>Témoin</h5>
                    <br/>
                    <div className="row">
                        <Checkbox lbl="Ancien" id_for="Ancien" change={this.change_state} check="checkbox" name="relationship" /><br/>
                    </div><br/>
                    <div className="row">
                        <Input label="N° pièce d'identité" value={this.state.value_id_witness} disabled={this.state.disabled_witness} inp={this.handleInputWitness} type="number" name="id"/>
                        <Input value="Rechercher Témoin" disabled={this.state.disabled_witness} oncl={this.handleSaveWitness} styl={btn} type="submit" />
                    </div><br/>
                    <br/>
                    <div className="row">
                        { (this.state.disabled_witness == true) ? <Relation val={this.state.value_relation} change={this.relation} /> : '' }
                        <Input label="Prénom" disabled={this.state.disabled_first_name_witness} value={this.state.value_first_name_witness} inp={this.change_first_name_temoin} type="text" name="prenom"/>
                        <Input label="Nom" disabled={this.state.disabled_name_witness} value={this.state.value_name_witness} inp={this.change_name_temoin} type="text" name="nom"/>
                        <Input label="Postnom" disabled={this.state.disabled_post_name_witness} value={this.state.value_post_name_witness} inp={this.change_post_name_temoin} type="text" name="postnom"/>
                        <Input label="Adresse Actuelle" disabled={this.state.disabled_address_witness} value={this.state.value_address_witness} inp={this.change_address_temoin} type="text" name="adresse"/>
                        <Input label="lieu de naissance" disabled={this.state.disabled_place_of_birth_witness} value={this.state.value_place_of_birth_witness} inp={this.change_place_of_birth_temoin} type="text" name="lieunaiss"/>
                        <Input label="Date naissance" disabled={this.state.disabled_date_of_birth_witness} value={this.state.value_date_of_birth_witness} inp={this.change_date_of_birth_birth_temoin} type="date" name="datenaiss"/>
                        { (this.state.disabled_witness == true) ? <Select_sex val={this.state.value_sex_witness} value={this.state.value_name_witness} change={this.change_sexe_temoin} /> : '' }
                        { (this.state.disabled_witness == true) ? <Select_nationality val={this.state.value_nationality_witness} change={this.change_nationality_temoin} /> : '' }
                        { (this.state.disabled_witness == true) ? <Type_piece val={this.state.value_type_piece_witness} change={this.change_type_piece_temoin} /> : '' }
                        { (this.state.disabled_witness == true) ? <Marital_status val={this.state.value_marital_status_witness} change={this.change_marital_status_temoin} /> : '' }
                        { (this.state.disabled_witness == true) ? <Select_work val={this.state.value_work_witness} change={this.change_work_temoin} />  : '' }
                        { (this.state.disabled_witness == true) ? <Input label="Téléphone" disabled={this.state.disabled_telephone_witness} value={this.state.value_telephone_number_witness} inp={this.change_telephone_number_temoin} type="tel" />  : '' }
                        { (this.state.disabled_witness == true) ? <Input label="Numéro pièce d'identité" disabled={this.state.disabled_id_piece_witness} value={this.state.value_id_piece_witness} inp={this.change_id_piece_temoin} type="text" name="text"/>  : '' }
                    </div><hr/>
                    <h5>Besoin de crédit</h5>  
                    <br/>
                    <div className="row"> 
                        <Input label="Montant" type="number" value={this.state.value_rising_witness} inp={this.change_value_rising_witness} name="rising"/>
                        <Currency val={this.state.value_currency_witness} change={this.change_value_currency_witness} />
                        <Input label="Pourcentage (%)" type="number" value={this.state.value_percentage_witness} inp={this.change_value_percentage_witness} name="percentage"/>
                        <Credit_type val={this.state.value_credit_type_witness} change={this.change_value_credit_type_witness} />
                    </div><hr/>
                    <div className="button">
                        <Input value="Enregistrer Crédit" oncl={this.save_credit} styl={btn_save} clas="btn btn-primary" type="submit" />
                    </div><br/>
                  </form>
                </div>
              </div>
            </div>
          )
        }else{
            return (
                <div className="col-12" style={divStyle}>
                        <div className="col-md-12" id="barre_menu">
                            <Lien type_class="btn navig-btn" cl={this.nouveau_credit} type_lien="#" label="Nouveau Crédit"/>&nbsp;&nbsp;
                            <Lien type_class="btn navig-btn navig-active" cl={this.rep_credit} type_lien="#" label="Répertoire des Crédits"/>
                        </div>
                        <div className="col-12">
                            <div className="card form-card">
                                <div className="card-body" >
                                  <h4 className="card-title">Crédits</h4>
                                  <table className="table table-striped">
                                      <thead>
                                          <Cellule_tableau label="N°" />
                                          <Cellule_tableau label="Montant" />
                                          <Cellule_tableau label="Devise" />
                                          <Cellule_tableau label="Poucentage" />
                                          <Cellule_tableau label="Id Membre" />
                                          <Cellule_tableau label="Frais de pénalité" />
                                          <Cellule_tableau label="Date d'enregistrement" />
                                      </thead>
                                      <tbody>
                                          {listCredit}
                                      </tbody>
                                      <tfoot>
                                      </tfoot>
                                  </table>
                                </div>
                            </div>
                        </div>
                </div>
          )
        }
    }
}


$('#credit').on('click',(e)=>{
e.preventDefault()
let contenaire = $('.bloc_corps')
contenaire.empty()

const root = ReactDOM.createRoot(document.querySelector('.bloc_corps'));
root.render(<Credit />);
})






