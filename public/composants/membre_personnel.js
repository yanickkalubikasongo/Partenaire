/* Début style */

const personexist = {
   fontSize:'20px',
   color:'blue'
};
const spinner = {
    fontSize:'30px',
    color: '#ff6600'
};
const styleimg = {
    width:'100px',
    height:"100px"
};
const styleentete = {
   backgroundColor:'#000e38',
   color:'white'
};
const stylebtnactVisibility = {
  display:''
}
const divStyle = {
  marginTop:'10px'
};
const stylefrom = {
  borderTop: '3px solid #000e38'
};
const seachStyle = {
  marginLeft:'55px'
};
const seachStylebloc = {
  marginTop:'20px'
};
const stylebtnact = {
  backgroundColor:'#FFA500',
  borderColor:'#FFA500',
  color:'white'
};
const size_button = {
  with:'18px',
  height:'38px'
};
const choix_statut = {
   marginLeft:'137px'
};
const btn = {
  backgroundColor:' #FF9100',
  color:'white'
};
const btn_save = {
  borderRadius:'6px',
  backgroundColor:'#77B5FE',
  color:'white'
};
const msg = {
  backgroundColor:' #FF7F7F',
  color:'white'
};
const style_act_profil = {
  backgroundColor:'#70726E',
  borderColor:'#70726E',
  color:'white'
};
const style_titre_mis_a_jour = {
   color:'#FF6600',
   fontWeight:'bolder'
};
const style_act_modifier = {
   backgroundColor:'#FF6600',
   borderColor:'#FF6600',
   color:'white'
};
const blockbtn = {
   backgroundColor:'#FF6600',
   color:'white'
};
const style_lien = {
   color:'#FF6600'
};
const style_email = {
   color:'blue'
};
  
  /* Fin style */
  
async function request_global(url,method,data) {
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
        return erreur
    }
}
class Option extends React.Component {
    render() {
        return <option selected={this.props.selected} value={this.props.value}>{this.props.option}</option>
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
                <select name="sexe" value={this.props.val} disabled={this.props.disabled} onChange={this.props.change} class="form-control">
                    <Option value="" option="Choisir" />
                    <Option value="M" option="M" />
                    <Option value="F" option="F" />
                </select>
                </div>
            </div>
        </div>
        )
    }
}
class Devise extends React.Component {
    render() {
        return (
        <div className="col-md-6">
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">Devise </label>
                <div className={this.props.tail}>
                    <select name="devise" value={this.props.val} disabled={this.props.disabled} onChange={this.props.change} class="form-control">
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
class Input extends React.Component { 
    render() {
        return (
            <div className="col-md-6">
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">{this.props.label} </label>
                    <div className="col-sm-9">
                        <input type={this.props.type} title={this.props.titre} max={this.props.max} min={this.props.min} placeholder={this.props.plc} required={this.props.required} data-id={this.props.id_member} onChange={this.props.change} onInput={this.props.inp} onClick={this.props.oncl} disabled={this.props.disabled} maxlength={this.props.taille} className={this.props.clas} style={this.props.styl} value={this.props.value} name={this.props.name} />
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
class Commune_update extends React.Component {
    render() {
        return (
            <div className="row">
                <label className="col-sm-3 col-form-label">Commune</label>
                <div className="col-sm-9">
                    <select name="comm" onChange={this.props.onChange} className="form-control commune">
                        <Option value="Bandalungwa" option="Bandalungwa" />
                        <Option value="Barumbu" option="Barumbu" />
                        <Option value="Bumbu" option="Bumbu" />
                        <Option value="Gombe" option="Gombe" />
                        <Option value="Kalamu" option="Kalamu" />
                        <Option value="Kasa-Vubu" option="Kasa-Vubu" />
                        <Option value="Kimbanseke" option="Kimbanseke" />
                        <Option value="Kinshasa" option="Kinshasa" />
                        <Option value="Kintambo" option="Kintambo" />
                        <Option value="Kisenso" option="Kisenso" />
                        <Option value="Lemba" option="Lemba" />
                        <Option value="Limete" option="Limete" />
                        <Option value="Lingwala" option="Lingwala" />
                        <Option value="Makala" option="Makala" />
                        <Option value="Maluku" option="Maluku" />
                        <Option value="Masina" option="Masina" />
                        <Option value="Matete" option="Matete" />
                        <Option value="Mont-Ngafula" option="Mont-Ngafula" />
                        <Option value="Ndjili" option="Ndjili" />
                        <Option value="Ngaba" option="Ngaba" />
                        <Option value="Ngaliema" option="Ngaliema" />
                        <Option value="Ngiri-Ngiri" option="Ngiri-Ngiri" />
                        <Option value="Nsele" option="Nsele" />
                        <Option value="Selembao" option="Selembao" />
                    </select>
                </div>
            </div>
        )
    }
}
class Commune extends React.Component {
    render() {
        return (
        <div className="col-md-6">
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">Commune</label>
                <div className="col-sm-9">
                    <select name="comm" onChange={this.props.change} class="form-control commune">
                        <Option value="Bandalungwa" option="Bandalungwa" />
                        <Option value="Barumbu" option="Barumbu" />
                        <Option value="Bumbu" option="Bumbu" />
                        <Option value="Gombe" option="Gombe" />
                        <Option value="Kalamu" option="Kalamu" />
                        <Option value="Kasa-Vubu" option="Kasa-Vubu" />
                        <Option value="Kimbanseke" option="Kimbanseke" />
                        <Option value="Kinshasa" option="Kinshasa" />
                        <Option value="Kintambo" option="Kintambo" />
                        <Option value="Kisenso" option="Kisenso" />
                        <Option value="Lemba" option="Lemba" />
                        <Option value="Limete" option="Limete" />
                        <Option value="Lingwala" option="Lingwala" />
                        <Option value="Makala" option="Makala" />
                        <Option value="Maluku" option="Maluku" />
                        <Option value="Masina" option="Masina" />
                        <Option value="Matete" option="Matete" />
                        <Option value="Mont-Ngafula" option="Mont-Ngafula" />
                        <Option value="Ndjili" option="Ndjili" />
                        <Option value="Ngaba" option="Ngaba" />
                        <Option value="Ngaliema" option="Ngaliema" />
                        <Option value="Ngiri-Ngiri" option="Ngiri-Ngiri" />
                        <Option value="Nsele" option="Nsele" />
                        <Option value="Selembao" option="Selembao" />
                    </select>
                </div>
            </div>
        </div>
        )
    }
}
class Type_membre extends React.Component {
    render() {
        return (
        <div className="col-md-6">
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">Type de membre</label>
                <div className="col-sm-9">
                    <select name="marital_status" onChange={this.props.change} class="form-control">
                        <Option value="1" option="Personnel" />
                        <Option value="2" option="Préposé" />
                        <Option value="3" option="Agent terrain" />
                        <Option value="4" option="Gestionnaire des crédits" />
                    </select>
                </div>
            </div>
        </div>
        )
    }
}
class Province extends React.Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Province</label>
                    <div className="col-sm-9">
                    <select name="marital_status" onChange={this.props.change} class="form-control">
                        <Option value="Bas-Uele" option="Bas-Uele" />
                        <Option value="Equateur" option="Equateur" />
                        <Option value="Haut-Katanga" option="Haut-Katanga" />
                        <Option value="Haut-Lomami" option="Haut-Lomami" />
                        <Option value="Haut-Uele" option="Haut-Uele" />
                        <Option value="Ituri" option="Ituri" />
                        <Option value="Kasaï" option="Kasaï" />
                        <Option value="Kasaï-Central" option="Kasaï-Central" />
                        <Option value="Kasaï-Oriental" option="Kasaï-Oriental" />
                        <Option value="Kinshsa" option="Kinshsa" />
                        <Option value="Kongo-Central" option="Kongo-Central" />
                        <Option value="Kwango" option="Kwango" />
                        <Option value="Kwilu" option="Kwilu" />
                        <Option value="Lomani" option="Lomani" />
                        <Option value="Lualaba" option="Lualaba" />
                        <Option value="Mai-Ndombe" option="Mai-Ndombe" />
                        <Option value="Maniema" option="Maniema" />
                        <Option value="Mongala " option="Mongala" />
                        <Option value="Nord-Kivu" option="Nord Kivu" />
                        <Option value="Nord-Ubangui" option="Nord-Ubangui" />
                        <Option value="Sankuru" option="Sankuru" />
                        <Option value="Sud-Kivu" option="Sud Kivu" />
                        <Option value="Sud-Ubangi" option="Sud-Ubangi" />
                        <Option value="Tanganyika" option="Tanganyika" />
                        <Option value="Tshopo" option="Tshopo" />
                        <Option value="Tshuapa" option="Tshuapa" />
                        <Option value="Autre" option="Autre" />
                    </select>
                    </div>
                </div>
            </div>
        )
    }
}
class Msg extends React.Component {
    render() {
        return (
            <div className="col-sm-12">
                {this.props.bol}
            </div>
        )
    }
}
class Cellule_corps_tableau extends React.Component {
    render() {
      return (
        <tr>
            <td>{this.props.cell1}</td>
            <td>{this.props.cell2}</td>
            <td>{this.props.cell3}</td>
            <td>{this.props.cell4}</td>
            <td>{this.props.cell5}</td>
            <td>{this.props.cell6}</td>
        </tr>
      )
    }
}

let m = <div class="alert alert-success alert-dismissible fade show" role="alert">
            <span class="badge badge-pill badge-success">Succès</span> Enregistrement effectué avec succès.
        </div>
let r

class Nouvelle_agence extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                commune:'',
                telephone:'',
                avenue:'',
                quartier:'',
                denomination:'',
                reference:'',
                msg:''
        };
        this.change_commune = this.change_commune.bind(this);
        this.change_denomination = this.change_denomination.bind(this);
        this.change_num_parcelle = this.change_num_parcelle.bind(this);
        this.change_telephone = this.change_telephone.bind(this);
        this.change_avenue = this.change_avenue.bind(this);
        this.change_commune = this.change_commune.bind(this);
        this.change_quartier = this.change_quartier.bind(this);
        this.send_agence = this.send_agence.bind(this);
    }
    change_commune(event) {
        this.setState({commune: event.target.value});
    }
    change_denomination(event) {
        this.setState({denomination: event.target.value});
    }
    change_num_parcelle(event) {
        this.setState({reference: event.target.value});
    }
    change_telephone(event) {
        this.setState({telephone: event.target.value});
    }
    change_avenue(event) {
        this.setState({avenue: event.target.value});
    }
    change_quartier(event) {
        this.setState({quartier: event.target.value});
    }
    async send_agence() {
        let dataAgence = {
            denomination:this.state.denomination,
            ref_parcelle:this.state.reference,
            commune:this.state.commune,
            telephone:this.state.telephone,
            avenue:this.state.avenue,
            quartier:this.state.quartier
        },
        send_agence = await request_global("/agence/create","POST",dataAgence)
        if(send_agence.result =='deconnexion'){
            window.location.replace("https://finuseco.com/")
        }else{
            if(typeof send_agence.result !=='undefined'){
                this.setState({msg: m});
            }
        }
    }
    render() { 
        return (
            <div className="col-12" style={divStyle}>
                <div className="card form-card">
                    <hr/><br/>
                    <Msg bol={this.state.msg} />
                    <div className="card-body">
                        <Input label="Dénomin." clas="form-control" inp={this.change_denomination} value={this.state.denomination} type="text" />
                        <Input label="Téléphone" clas="form-control" inp={this.change_telephone} value={this.state.telephone} type="text" />
                        <Input label="Réf. Parcelle" clas="form-control" inp={this.change_num_parcelle} value={this.state.reference} type="text" />
                        <Input label="Avenue" clas="form-control" inp={this.change_avenue} value={this.state.avenue} type="text" />
                        <Commune change={this.change_commune} clas="form-control" value={this.state.commune} type="text" />
                        <Input label="Quartier" inp={this.change_quartier} clas="form-control" value={this.state.quartier} type="text" />
                    </div>
                    <hr/>
                    <Input value="Créer Agence" oncl={this.send_agence} clas="btn btn-primary" type="submit" />
                </div>
            </div>
        )
    }
}
class Cellule_tableau extends React.Component {
    render() {
      return (
        <th>{this.props.label}</th>
      )
    }
}
class Rep_type_membre extends React.Component {
    render() {
        return (
        <div className="row">
            <div className="col-md-6">
                <input type="text" className="form-control" onInput={this.props.im} placeholder="Entrer IM : XXXX-XXXXXX" />&nbsp;&nbsp;
            </div>
            <div className="col-md-4">
                <button style={blockbtn} className="btn" onClick={this.props.clc}><i className="fas fa-fw fa-search"></i>&nbsp;Rechercher Membre</button>
            </div>
            <div className="col-md-2">&nbsp;&nbsp;</div>
        </div>
        )
    }
}
class Cellule_cors_membre extends React.Component {
    render() {
      return (
        <tr>
          <td>{this.props.id}</td>
          <td>{this.props.prenom}</td>
          <td>{this.props.nom}</td>
          <td>{this.props.postnom}</td>
          <td>{this.props.sexe}</td>
          <td>{this.props.action}</td>
        </tr>
      )
    }
}
class Repertoire_membre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prenom          :'',
            nom             :'',
            postnom         :'',
            date_naissance  :'',
            lieu_naissance  :'',
            email           :'',
            telephone       :'',
            adresse_physique:'',
            id_membre       :'',
            state_msg       :'',
            id              :'',
            etat            :'',
            im              :'',
            nationalite     :'',
            tableau_membre  :[],
            numero_piece    :0
        };
        this.prenom           = this.prenom.bind(this);
        this.nom              = this.nom.bind(this);
        this.postnom          = this.postnom.bind(this);
        this.date_naissance   = this.date_naissance.bind(this);
        this.lieu_naissance   = this.lieu_naissance.bind(this);
        this.email            = this.email.bind(this);
        this.telephone        = this.telephone.bind(this);
        this.adresse_physique = this.adresse_physique.bind(this);
        this.numero_piece     = this.numero_piece.bind(this);
        this.modifier         = this.modifier.bind(this);
        this.update           = this.update.bind(this);
        this.bannir           = this.bannir.bind(this);
        this.imprimer         = this.imprimer.bind(this);
        this.search_im        = this.search_im.bind(this);
        this.change_im        = this.change_im.bind(this);
    }
    prenom(event) {
        event.preventDefault()
        this.setState({prenom: event.target.value});
    }
    nom(event) {
        event.preventDefault()
        this.setState({nom: event.target.value});
    }
    telephone(event) {
        event.preventDefault()
        this.setState({telephone: event.target.value});
    }
    adresse_physique(event) {
        event.preventDefault()
        this.setState({adresse_physique: event.target.value});
    }
    numero_piece(event) {
        event.preventDefault()
        this.setState({numero_piece: event.target.value});
    }
    postnom(event) {
        event.preventDefault()
        this.setState({postnom: event.target.value});
    }
    date_naissance(event) {
        event.preventDefault()
        this.setState({date_naissance: event.target.value});
    }
    lieu_naissance(event) {
        event.preventDefault()
        this.setState({lieu_naissance: event.target.value});
    }
    email(event) {
        event.preventDefault()
        this.setState({email: event.target.value});
    }
    change_im(event) {
        event.preventDefault()
        this.setState({im:event.target.value});
    }
    async search_im(event) {
        event.preventDefault()
        this.setState({ state_msg:'attente' })
        let data ={
            im          :this.state.im,
            partail_part:true
        },
        find_membre = await request_global("/membre/find_membre","POST",data)
        
        if(find_membre.result =='deconnexion'){
            window.location.replace("https://finuseco.com/")
        }

        let response = find_membre.response
        response.map(item => (
            this.setState({
                id :item.id_memb,
                etat:item.etat,
                state_msg:''
            })
        )) 
        this.setState({tableau_membre: find_membre.response,state_msg:''});
    }
    async imprimer(event) {
        event.preventDefault()

        let data = {
                id : event.target.getAttribute('data-id')
            },
            send = await request_global("/membre/on_membre","POST",data),
            res = send.result,
            code_partenaire='',
            nom,
            postnom,
            prenom,
            code_membre=''
        
        if(send.result =='deconnexion'){
            window.location.replace("https://finuseco.com/")
        }
        else{
            res.map(item => (
                prenom          =item.prenom,
                nom             =item.nom,
                postnom         =item.post_nom,
                code_partenaire += item.id_org,
                code_membre     += item.id
            )) 
            
            while (code_partenaire.length < 4) {
                code_partenaire = '0'+code_partenaire
            } 
            while (code_membre.length < 6) {
                code_membre = '0'+code_membre
            }

            var docDefinition = {
                content: [
                    { text:'REPUBLIQUE DEMOCRATIQUE DU CONGO',alignment: 'center', fontSize: 14 },
                    { text:'CARTE DE MEMBRE ADHERENT',alignment: 'center', fontSize: 14 },
                    { text:'Strictement personnelle',alignment: 'center', fontSize: 14 },
                    { text:'                                                                                                                                                                        ',alignment: 'center', fontSize: 14,decoration: 'underline' },
                    
                    { text:'NOM            : '+ nom, fontSize: 12 },
                    { text:'POST-NOM : '+ postnom, fontSize: 12 },
                    { text:'PRENOM    :'+ prenom, fontSize: 12 },
                    { text:'N° PART.     :'+ code_partenaire, fontSize: 12 },
                    { text:'N°IM            :'+ code_partenaire+'-'+code_membre, fontSize: 12 }
                ]
            };
            pdfMake.createPdf(docDefinition).print({}, window);
        }
    }
    async modifier(event) {
        //event.preventDefault()
        $('#exampleModal1').modal('hide');
        this.setState({ state_msg:'' })

        let data = {
            id : event.target.getAttribute('data-id')
        },
        send = await request_global("/membre/on_membre","POST",data)

        if(send.result =='deconnexion'){
            window.location.replace("https://finuseco.com/")
        }

        let res        = send.result,
        code_partenaire='',
        code_membre    =''
        res.map(item => (
            this.setState({
                prenom          :item.prenom,
                nom             :item.nom,
                postnom         :item.post_nom,
                date_naissance  :item.date_naissance,
                lieu_naissance  :item.lieu_naissance,
                email           :item.email,
                telephone       :item.telephone,
                adresse_physique:item.adresse_physique,
                numero_piece    :item.numero_piece,
                id_membre       :item.id,
                nationalite     :item.nat
            }),
           // document.querySelector('.commune').value = item.commune
           
           code_partenaire += item.id_org,
           code_membre += item.id
        )) 
        while (code_partenaire.length < 4) {
            code_partenaire = '0'+code_partenaire
        } 
        while (code_membre.length < 6) {
            code_membre = '0'+code_membre
        } 
        this.setState({im:code_partenaire+'-'+code_membre})
        if(send.result !='') $('#exampleModal1').modal('show');
    }
    async update(event) {
        event.preventDefault()
        let data = {
            prenom          :this.state.prenom,
            nom             :this.state.nom,
            postnom         :this.state.postnom,
            date_naissance  :this.state.date_naissance,
            lieu_naissance  :this.state.lieu_naissance,
            email           :this.state.email,
            telephone       :this.state.telephone,
            state_msg       :'',
            adresse_physique:this.state.adresse_physique,
            numero_piece    :this.state.numero_piece,
            id              :this.state.id_membre
        },
        send = await request_global("/membre/update","POST",data)
        if(send.result =='deconnexion'){
            window.location.replace("https://finuseco.com/")
        }
        if(send.result =='r'){
            this.setState({ state_msg:'r' })
            $('#exampleModal1').modal('hide');
        }else{
            if(send.result =='null'){
                this.setState({
                    state_msg:'e',
                    erreur:"Aucune mise à jour n\'est effectuée"
                })
            }else{
                let err = send.result,
                    erreurs=[]
                for (let i = 0; i < err.length; i++) {
                    erreurs.push(err[i])
                }
                this.setState({
                    state_msg:'e',
                    erreur:erreurs
                })
            }
        }
    }
    async bannir(event) {
        event.preventDefault()
        let valeur = event.target.textContent,
            data = {
                id  :this.state.id,
                etat:(valeur.trim() == 'Activer') ? 1 : 0
            },
            res_membre = await request_global("/membre/bannir","POST",data)
        if(res_membre.result =='deconnexion'){
            window.location.replace("https://finuseco.com/")
        }

       let res = res_membre.result
       res.map(item => (
            event.target.innerHTML = (item.etat == 1) ? 'Bannir' : 'Activer'
       )) 
       let dataa ={
            im          :this.state.im,
            partail_part:true
        },
        find_membre = await request_global("/membre/find_membre","POST",dataa)

        if(find_membre.result =='deconnexion'){
            window.location.replace("https://finuseco.com/")
        }

        let response = find_membre.response
        this.setState({tableau_membre: find_membre.response});
    }
    render() {
        const { tableau_membre } = this.state,
            oneMembre = tableau_membre.map(item => (
                <Cellule_cors_membre 
                    id     ={item.id_user} 
                    prenom ={item.prenom} 
                    nom    ={item.nom} 
                    postnom={item.post_nom} 
                    sexe   ={item.sexe} 
                    action ={
                        <Lien 
                            clc_modifier    ={this.modifier} 
                            data_id_modifier={item.id_user} 
                            style_modifier  ={style_lien} 
                            lien_modifier   ="Modifier"

                            clc_bannir    ={this.bannir}
                            data_id_bannir={item.id_user} 
                            style_bannir  ={style_lien}
                            lien_bannir   = {(item.etat==1) ? 'Bannir' : 'Activer'}
                            
                            lien_fiche ="Imprimer Fiche d'Adhesion"
                            clc_fiche  ={this.imprimer}
                            data_fiche ={item.id_user} 
                            style_fiche={style_lien}/>
                        }/>
            ))
        return (
            <div className="col-12" style={divStyle}>
                <div className="card form-card">
                    <div className="card-body" >
                        <Rep_type_membre im={this.change_im} clc={this.search_im} />
                        {(this.state.state_msg == 'attente') ? <i id="sp" className="fas fa-spinner fa-pulse" style={spinner}></i> : '' }
                        <table className="table table-striped" id="example">
                            <thead style={styleentete}>
                                <Cellule_tableau label="N°" />
                                <Cellule_tableau label="Prénom" />
                                <Cellule_tableau label="Nom" />
                                <Cellule_tableau label="Postnom" />
                                <Cellule_tableau label="Sexe" />
                                <Cellule_tableau label="Action" />
                            </thead>
                            <tbody>
                                {(oneMembre == '') ? 'Aucun membre n\'est trouvé' : oneMembre}
                            </tbody>
                            <tfoot>
                            </tfoot>
                        </table>
                        <Mise_a_jour_membre 
                            msg_err = {<Msg bol={ (this.state.state_msg=='r') ? <Msg_reussite msg_reu="Mise effectuée avec succès" /> : (this.state.state_msg=='e') ? <Msg_erreur msg_err={this.state.erreur}/> : ''} />}
                            prenom={this.prenom} prenom_v={this.state.prenom} 
                            nom={this.nom} nom_v={this.state.nom} 
                            postnom={this.postnom} postnom_v={this.state.postnom} 
                            naissance={this.date_naissance} naissance_v={this.state.date_naissance} 
                            lieu_naissance={this.lieu_naissance} lieu_naissance_v={this.state.lieu_naissance}
                            email={this.email} email_v={this.state.email}
                            telephone={this.telephone} telephone_v={this.state.telephone}
                            physique={this.adresse_physique} physique_v={this.state.adresse_physique}
                           // num_piece={this.numero_piece} num_piece_v={this.state.numero_piece}
                            update={this.update}
                        />
                        <Voir_plus_membre 
                            date_naissance={this.state.date_naissance}
                            im={this.state.im}
                            lieu_naissance={this.state.lieu_naissance}
                            email={this.state.email}
                            telephone={this.state.telephone}
                            adresse_physique={this.state.adresse_physique}
                            numero_piece={this.state.numero_piece}
                            nationalite={this.state.nationalite}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
class Mise_a_jour_membre extends React.Component {
    render() { 
        return (
            <div className="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h6 style={style_titre_mis_a_jour} className="modal-title" id="exampleModalLabel">MISE A JOUR DU MEMBRE</h6>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body" id="modal_user">
                            <div className="row msg_err">
                                {this.props.msg_err}
                            </div>
                            <div className="row">
                                <label className="col-sm-3 col-form-label">Prénom</label>
                                <div className="col-sm-9">
                                    <input type="text" maxlength="15" onInput={this.props.prenom} value={this.props.prenom_v} className="form-control prenom" />
                                </div>
                            </div><br/>
                            <div className="row">
                                <label className="col-sm-3 col-form-label">Nom</label>
                                <div className="col-sm-9">
                                    <input type="text" maxlength="15" onInput={this.props.nom} value={this.props.nom_v} className="form-control" />
                                </div>
                            </div><br/>
                            <div className="row">
                                <label className="col-sm-3 col-form-label">Postnom</label>
                                <div className="col-sm-9">
                                    <input type="text" maxlength="15" onInput={this.props.postnom} value={this.props.postnom_v} className="form-control" />
                                </div>
                            </div><br/>
                            <div className="row">
                                <label className="col-sm-3 col-form-label">Date de naissance</label>
                                <div className="col-sm-9">
                                    <input type="text" onInput={this.props.naissance} value={this.props.naissance_v} className="form-control naissance" />
                                </div>
                            </div><br/>
                            <div className="row">
                                <label className="col-sm-3 col-form-label">Lieu de naissance</label>
                                <div className="col-sm-9">
                                    <input type="text" maxlength="30" onInput={this.props.lieu_naissance} value={this.props.lieu_naissance_v} className="form-control naissance" />
                                </div>
                            </div><br/>
                            <div className="row">
                                <label className="col-sm-3 col-form-label">Email</label>
                                <div className="col-sm-9">
                                    <input type="text" onInput={this.props.email} value={this.props.email_v} className="form-control email" />
                                </div>
                            </div><br/>
                            <div className="row">
                                <label className="col-sm-3 col-form-label">Téléphone</label>
                                <div className="col-sm-9">
                                    <input type="text" maxlength="15" disabled="true" onInput={this.props.telephone} value={this.props.telephone_v} className="form-control telephone" />
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <label className="col-sm-3 col-form-label">Adresse Physique</label>
                                <div className="col-sm-9">
                                    <input onInput={this.props.physique} maxlength="30" value={this.props.physique_v} className="form-control physique" />
                                </div>
                            </div><br/>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-default" onClick={this.props.update} style={{background:"#ff6600", color:"#fff", "border-radius":"10px ! important"}}><i className="fas fa-edit"></i>&nbsp;Modifier</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class Voir_plus_membre extends React.Component {
    render() { 
        return (
            <div className="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 style={style_titre_mis_a_jour} className="modal-title" id="exampleModalLabel">PROFIL DU MEMBRE</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body" id="modal_user">
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">IM</p>
                                </div>
                                <div className="col-sm-9">
                                    <span id="im">{this.props.im}</span>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Date de naissance</p>
                                </div>
                                <div className="col-sm-9">
                                    <span id="date_naissance">{this.props.date_naissance}</span>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Lieu de naissance</p>
                                </div>
                                <div className="col-sm-9">
                                    <span id="lieu_naissance">{this.props.lieu_naissance}</span>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Email</p>
                                </div>
                                <div className="col-sm-9">
                                    <span id="email"><a style={style_email}  href={"mailto:"+this.props.email}>{this.props.email}</a></span>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Téléphone</p>
                                </div>
                                <div className="col-sm-9">
                                    <span id="telephone">{this.props.telephone}</span>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Adresse Physique</p>
                                </div>
                                <div className="col-sm-9">
                                    <span id="adresse_physique">{this.props.adresse_physique}</span>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Numéro Pièce</p>
                                </div>
                                <div className="col-sm-9">
                                    <span id="numero_piece">{this.props.numero_piece}</span>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Province</p>
                                </div>
                                <div className="col-sm-9">
                                    <span id="nationalite">{this.props.nationalite}</span>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                        
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class Liste extends React.Component {
    render() {
        return (
        <div className="col-md-6">
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">{this.props.libelle_list}</label>
                <div className="col-sm-9">
                <select name={this.props.name} onChange={this.props.change} value={this.props.value} className="form-control">
                    <option value="">Choisir</option>
                    {this.props.option}
                </select>
                </div>
            </div>
        </div>
        )
    }
}
class Msg_reussite extends React.Component {
    render() {
        return (
            <div class="alert alert-success alert-dismissible fade show" id="alert" role="alert">
                <span class="badge badge-pill badge-success">Succès</span> {this.props.msg_reu}
            </div>
        )
    }
}
class Msg_erreur extends React.Component {
    render() {
        return (
            <div class="alert alert-danger alert-dismissible fade show" id="alert" role="alert">
                <span class="badge badge-pill badge-danger">Erreur(s)</span> {this.props.msg_err}
            </div>
        )
    }
}
class Nouvelle_membre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prenom              : '',
            nom                 : '',
            postnom             : '',
            date_naissance      :'',
            lieu_naissance      :'',
            telephone           :'',
            chefferie           :'',
            territoire          :'',
            etat_civil          :'',
            sexe                :'',
            province            :'',
            type_piece          :'',
            adresse             :'',
            membre              :'',
            agence              :1,
            telephone           :'',
            adresse_electronique:'',
            type_membre         :2,
            numero_piece        :'',
            state_msg           :'',
            erreur              :[],
            photo               :'',
            bol                 :''
        };
        this.change_prenom               = this.change_prenom.bind(this);
        this.change_chefferie            = this.change_chefferie.bind(this);
        this.change_nom                  = this.change_nom.bind(this);
        this.change_province             = this.change_province.bind(this);
        this.change_territoire           = this.change_territoire.bind(this);
        this.change_postname             = this.change_postname.bind(this);
        this.change_sexe                 = this.change_sexe.bind(this);
        this.change_adresse              = this.change_adresse.bind(this);
        this.change_telephone            = this.change_telephone.bind(this);
        this.change_lieu_naiss           = this.change_lieu_naiss.bind(this);
        this.change_adresse_electronique = this.change_adresse_electronique.bind(this);
        this.change_numero_piece         = this.change_numero_piece.bind(this);
        this.change_type_piece           = this.change_type_piece.bind(this);
        this.change_membre               = this.change_membre.bind(this);
        this.annuler                     = this.annuler.bind(this);
        this.change_date_naiss           = this.change_date_naiss.bind(this);
        this.change_etat_civil           = this.change_etat_civil.bind(this);
        this.photo                       = this.photo.bind(this);
        this.handleSubmit                = this.handleSubmit.bind(this);
    }
    annuler() {
        this.setState({
            prenom              : '',
            nom                 : '',
            postnom             : '',
            date_naissance      :'',
            lieu_naissance      :'',
            telephone           :'',
            chefferie           :'',
            territoire          :'',
            province            :'',
            sexe                :'',
            adresse             :'',
            membre              :'',
            telephone           :'',
            adresse_electronique:'',
            type_membre         :'',
            type_piece          :'',
            numero_piece        :'',
            photo               :'',
            erreur              :''
        });
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
            console.error("Erreur :", erreur);
        }
    }
    change_prenom(event) {
        this.setState({prenom: event.target.value});
    }
    change_chefferie(event) {
        this.setState({chefferie: event.target.value});
    }
    change_nom(event) {
        this.setState({nom: event.target.value});
    }
    change_territoire(event) {
        this.setState({territoire: event.target.value});
    } 
    change_postname(event) {
        this.setState({postnom: event.target.value});
    }
    change_province(event) {
        this.setState({province: event.target.value});
    }
    change_sexe(event) {
        this.setState({sexe: event.target.value});
    }
    change_adresse(event) {
        this.setState({adresse: event.target.value});
    }
    change_telephone(event) {
        this.setState({telephone: event.target.value});
    }
    change_adresse_electronique(event) {
        this.setState({adresse_electronique: event.target.value});
    }
    change_lieu_naiss(event) {
        this.setState({lieu_naissance: event.target.value});
    }
    change_date_naiss(event) {
        this.setState({date_naissance: event.target.value});
    }
    change_membre(event) {
        this.setState({type_membre: event.target.value});
    }
    change_type_piece(event) {
        this.setState({type_piece: event.target.value});
    }
    change_etat_civil(event) {
        this.setState({etat_civil: event.target.value});
    }
    change_numero_piece(event) {
        this.setState({numero_piece: event.target.value});
    }
    photo(event) {
        this.setState({photo: event.target.value});
    }
    handleSubmit(event){
        event.preventDefault()
        this.setState({
            state_msg:'',
            erreur   :[]
        })
        var data = new FormData($('#my_member')[0]);

        let fichier = this.state.photo,
            extension = fichier.substring(fichier.length - 4, fichier.length)
        if(extension != '.jpg' && extension != '.png') {
            alert("Veuillez rentrer un fichier .JPG ou .PNG dans le champ 'Photo'")
        }else{
            $.ajax({
                url        : '/personnel/enreg_personnel',
                type       : 'POST',
                contentType: false,
                processData: false,
                cache      : false,
                data       : data
            })
            .done((response)=>{
                if(response.result =='deconnexion'){
                    window.location.replace("https://finuseco.com/")
                }else{
                    if(response.reponse=='r'){
                        this.setState({
                            prenom              : '',
                            nom                 : '',
                            postnom             : '',
                            date_naissance      :'',
                            lieu_naissance      :'',
                            telephone           :'',
                            chefferie           :'',
                            territoire          :'',
                            etat_civil          :'',
                            sexe                :'',
                            province            :'',
                            type_piece          :'',
                            adresse             :'',
                            membre              :'',
                            agence              :'',
                            telephone           :'',
                            adresse_electronique:'',
                            numero_piece        :'',
                            state_msg           :'r',
                            erreur              :[],
                            photo               :'',
                            bol                 :''
                        })
                        swal({
                            title: "Succès",
                            text: "Membre enregistré avec succès.",
                            icon: "success",
                            button: false,
                        });
                    }
                    else{
                        let err = response.reponse,
                            erreurs=[]
                        for (let i = 0; i < err.length; i++) {
                            erreurs.push(err[i])
                        }
                        this.setState({
                            state_msg:'e',
                            erreur   :erreurs
                        })
                        swal({
                            title: "Erreur",
                            text: ''+erreurs,
                            icon: "error",
                            button:false
                        });
                    }
                }
            })
            .fail(function(error){
                this.setState({
                    textMsg     :"",
                    classMsg    :"",
                    typeMsg     :'',
                    showAlertMsg:'',
                    alertMsg    :'',
                    closeMsg    :'',
                    type_btn    :'',
                    bol         :''
                }) 
            })
        }
        return false
    }
    render() { 
        let res = this.props.province,
            listProvince = res.map(item => (
                <Option value={item.id} option={item.libelle} />
            )),
            res_piece = this.props.type_piece,
            listPiece = res_piece.map(item => (
                <Option value={item.id} option={item.libelle} />
            )),
            res_etat_civil = this.props.etat_civil,
            listEtatCivil = res_etat_civil.map(item => (
                <Option value={item.id} option={item.libelle} />
            ))
        return (
            <div className="col-12" style={divStyle}>
                <div className="card form-card" style={stylefrom}>
                    <hr/>  
                    <div className="card-body">
                        <form method="post" onSubmit={this.handleSubmit} enctype="multipart/form-data" accept-charset="UTF-8" id="my_member">
                            <div class="row">
                                <Input label="Prénom" type="text" clas="form-control" taille="15" name="prenom" value={this.state.prenom} inp={this.change_prenom} />
                                <Input label="Nom" type="text" clas="form-control" taille="15" name="nom" value={this.state.nom} inp={this.change_nom} />
                                <Input label="Postnom" type="text" clas="form-control" taille="15" name="postnom" value={this.state.postnom} inp={this.change_postname} />
                                <Liste libelle_list="Province" value={this.state.province} name="province" option={listProvince} change={this.change_province} />
                                <Select_sex label="Sexe" type="text" clas="form-control" taille="1" val={this.state.sexe} change={this.change_sexe} />
                                <Input label="Adresse" type="text" clas="form-control" taille="30" name="adresse" value={this.state.adresse} inp={this.change_adresse} />
                                <Input label="Date de naissance" type="date" clas="form-control" taille="15" name="date_naissance" value={this.state.date_naissance} change={this.change_date_naiss} />
                            
                                <Input label="Téléphone" plc="+243XXXXXXXXX" type="tel" clas="form-control" taille="13" name="telephone" value={this.state.telephone} inp={this.change_telephone} />
                                <Input label="Email" type="email" clas="form-control" taille="255" name="email" value={this.state.adresse_electronique} inp={this.change_adresse_electronique} />
                                <Input label="Lieu de naissance" type="text" clas="form-control" taille="15" name="lieu_naissance" value={this.state.lieu_naissance} inp={this.change_lieu_naiss} />
                                <Input label="Photo" type="file" accept=".jpg,.png,.gif" clas="form-control" value={this.state.photo} inp={this.photo} name="photo" />
                                <Liste libelle_list="Type de pièce d'identité" value={this.state.type_piece} name="piece" option={listPiece} change={this.change_type_piece} />
                                <Liste libelle_list="Etat-civil" option={listEtatCivil} value={this.state.etat_civil} name="etat_civil" change={this.change_etat_civil} />
                                <Input label="Numéro pièce d'identité" type="text" clas="form-control" taille="15" name="numero_piece" value={this.state.numero_piece} inp={this.change_numero_piece} />
                            </div><hr/>  
                            <div className="form-group m-b-0 text-right">
                                <button className="btn" style={blockbtn}><i class="fas fa-save"></i>&nbsp;Enregistrer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
class Lien extends React.Component {
    render() { 
        return (
            <div>
                <a href="#" style={this.props.style_modifier} onClick={this.props.clc_modifier} data-id={this.props.data_id_modifier} data-target="#exampleModal1"><i className="fas fa-edit"></i>{this.props.lien_modifier}</a>&nbsp;&nbsp;
                <a href="#" style={this.props.style_fiche} onClick={this.props.clc_fiche} data-id={this.props.data_fiche} ><i className="fas fa-print"></i>&nbsp;{this.props.lien_fiche}</a>&nbsp;&nbsp;
                <a href="#" style={this.props.style_bannir} className="bannir" onClick={this.props.clc_bannir} data-id={this.props.data_id_bannir} ><i class="fas fa-user"></i>&nbsp;{this.props.lien_bannir}</a>
            </div>
        )
    }
}

class Update_structure extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            denomination    : '',
            id_national     : '',
            rccm_f          : '',
            telephone       : '',
            email           : '',
            autorisation    : '',
            adresse_physique: '',
            nouveau_document: '',
            erreur          :[],
            bol             :''
        };
        this.denomination    = this.denomination.bind(this);
        this.id_national     = this.id_national.bind(this);
        this.rccm_f          = this.rccm_f.bind(this);
        this.telephone       = this.telephone.bind(this);
        this.email           = this.email.bind(this);
        this.autorisation    = this.autorisation.bind(this);
        this.adresse_physique= this.adresse_physique.bind(this);
        this.nouveau_document= this.nouveau_document.bind(this);
        this.handleSubmit    = this.handleSubmit.bind(this);
    }
    nouveau_document(event) {
        this.setState({nouveau_document: event.target.value});
    }
    denomination(event) {
        this.setState({denomination: event.target.value});
    }
    id_national(event) {
        this.setState({id_national: event.target.value});
    }
    rccm_f(event) {
        this.setState({rccm_f: event.target.value});
    }
    telephone(event) {
        this.setState({telephone: event.target.value});
    }
    email(event) {
        this.setState({email: event.target.value});
    }
    adresse_physique(event) {
        this.setState({adresse_physique: event.target.value});
    }
    autorisation(event) {
        this.setState({autorisation: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault()
        
        this.setState({
            state_msg:'attente',
            erreur   :[]
        });

        let data = new FormData($('#my_partner')[0])

        
        let fichier = this.state.nouveau_document,
            extension = fichier.substring(fichier.length - 4, fichier.length)
        if(this.state.nouveau_document !='' && extension != '.pdf') {
            alert("Veuillez rentrer un fichier .PDF")
            this.setState({ state_msg:'' });
        }
        else{
            $.ajax({
                url        : '/partenaire/update_partner',
                type       : 'POST', 
                contentType: false,
                processData: false,
                cache      : false,
                data       : data
            })
            .done((response)=>{
                if(response.result =='deconnexion'){    
                    window.location.replace("https://finuseco.com/")
                }
                if(response.result =='r'){    
                    this.setState({
                        state_msg :'r',
                        erreur    :[],
                        bol       :''
                    });
                }else{
                    let err    = response.result,
                        erreurs=[]
        
                    for (let i = 0; i < err.length; i++) {
                        erreurs.push(err[i])
                    }
                    this.setState({
                        state_msg:'e',
                        erreur   :erreurs
                    })
                }
            })
            .fail(function(error){
                alert('Erreur Inconnu 1')
            })
        }
    }
    render() { 
        let res = this.props.struct,
            denomination = '',
            id_national = '',
            rccm = '',
            telephone = '',
            email = '',
            autorisation = '',
            adresse_physique = ''

            res.map(item => (
                denomination = item.denomination,
                id_national = item.id_national,
                rccm = item.rccm_f,
                telephone = item.telephone,
                email = item.email,
                autorisation = item.autorisation,
                adresse_physique = item.adresse_physique
            ))
        return (
            <div className="col-12" style={divStyle}>
                <div className="card form-card" style={stylefrom}>
                    <hr/>  
                    <div className="card-body">
                        <Msg bol={ (this.state.state_msg=='r') ? <Msg_reussite msg_reu="Structure mise à jour avec succès." /> : (this.state.state_msg=='e') ? <Msg_erreur msg_err={this.state.erreur}/> : ''} />
                        
                        <form method="post" onSubmit={this.handleSubmit} enctype="multipart/form-data" accept-charset="UTF-8" id="my_partner">
                            <div class="row">
                                <Input label="Denomination" required="true" type="text" clas="form-control" taille="30" name="denomination" value={(this.state.denomination != '') ? this.state.denomination : denomination} inp={this.denomination} />
                                <Input label="ID National" required="true" type="text" clas="form-control" taille="25" name="id_national" value={(this.state.id_national != '') ? this.state.id_national : id_national} inp={this.id_national} />
                                <Input label="RCCM" required="true" type="text" clas="form-control" taille="25" name="rccm" value={(this.state.rccm_f != '') ? this.state.rccm_f : rccm} inp={this.rccm_f} />
                                <Input label="Téléphone" required="true" type="tel" clas="form-control" taille="15" name="telephone" value={(this.state.telephone != '') ? this.state.telephone : telephone} inp={this.telephone} />
                                <Input label="Email" required="true" type="email" clas="form-control" taille="255" name="email" value={(this.state.email != '') ? this.state.email : email} change={this.email} />
                                <Input label="Adresse physique" required="true" type="text" clas="form-control" taille="50" name="adresse_physique" value={(this.state.adresse_physique != '') ? this.state.adresse_physique : adresse_physique} inp={this.adresse_physique} />
                                <Input label="Nouveau document" titre="seul le fichier .PDF est autorisé" type="file" accept="application/pdf" clas="form-control" taille="50" name="document" value={this.state.nouveau_document} inp={this.nouveau_document} />
                                <a className="col-md-2" href={'https://admin.loanmesfn.com/'+autorisation} target="_blank">Voir le document ?</a>
                            </div><hr/>  
                            {(this.state.state_msg == 'attente') ? <i id="sp" className="fas fa-spinner fa-pulse" style={spinner}></i> : '' } 
                            <div className="form-group m-b-0 text-right">
                                <button className="btn" style={blockbtn}><i class="fas fa-edit"></i>&nbsp;Modifier</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

/* DEBUT TABLEAU DE BORD */

(async function tableau_de_bord(){
    let solde_cdf             = document.querySelector('#solde_cdf'),
        solde_usd             = document.querySelector('.solde_usd'),
        wallet_forfait_im_cdf = document.querySelector('.wallet_forfait_cdf'),
        solde_euro            = document.querySelector('.solde_euro'),
    
        response = await request_global("/partenaire/tableau_bord","POST",{})
    if(response.result =='deconnexion'){
        window.location.replace("https://finuseco.com/")
    }
    solde_cdf.textContent             = (isNaN(parseFloat(response.result3).toFixed(2)) ? "0.00" : parseFloat(response.result3).toFixed(2)) + ' CDF',
    solde_usd.textContent             = (isNaN(parseFloat(response.result4).toFixed(2)) ? "0.00" : parseFloat(response.result4).toFixed(2)) + ' USD'
    solde_euro.textContent            = (isNaN(parseFloat(response.result8).toFixed(2)) ? "0.00" : parseFloat(response.result8).toFixed(2)) + ' EUR'
    wallet_forfait_im_cdf.textContent = (isNaN(Math.floor(response.result6)) ? 0 : Math.floor(response.result6)) + ' | '+  (isNaN(Math.floor(response.result5)) ? 0 : Math.floor(response.result5)) + ' | '+ (isNaN(Math.floor(response.result7)) ? 0 : Math.floor(response.result7))

    // Set new default font family and font color to mimic Bootstrap's default styling
    Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
    Chart.defaults.global.defaultFontColor = '#858796';

    // Pie Chart Example
    var ctx = document.getElementById("myPieChart");
    var myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Actif", "Inactif"],
            datasets: [{
            data: [response.result1, response.result2],
            backgroundColor: ['#000e38', '#ff6600'],
            hoverBackgroundColor: ['#2e59d9', '#2c9faf'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
            }],
        },
        options: {
            maintainAspectRatio: false,
            tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            },
            legend: {
            display: false
            },
            cutoutPercentage: 80,
        },
    });

    // Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Janv-Mars", "Avr-Juin", "Juill-Sept", "Oct-Déc"],
    datasets: [{
      label: "Membre.s",
      lineTension: 0.3,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "#ff6600",
      pointRadius: 3,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: "#000e38",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [response.adhesion_janvier_mars, response.adhesion_avril_juin, response.adhesion_juillet_septembre, response.adhesion_octobre_decembre],
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return value;
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return tooltipItem.yLabel+ ' ' + datasetLabel;
        }
      }
    }
  }
});
})()

/* FIN TABLEAU DE BORD */

let nouveau_membre = document.querySelector('.nouveau_adherent'),
    update = document.querySelector('.update'),
    contenaire = document.querySelector('.corps'),
    repertoire_membre = document.querySelector('.rep_adherent'),
    modifier_profil   = document.querySelector('#modifier_profil'),
    msg_err           = document.querySelector('.msg_err')

update.addEventListener('click',async (e)=>{
    e.preventDefault()
    contenaire.innerHTML = '<div class="row"><i class="fas fa-spinner fa-pulse" style="color:#ff6600;font-size:100px;margin-top:170px;margin-left:490px;"></i></div>'
    document.querySelector('.libelle_titre').textContent = 'MISE A JOUR DE LA STRUCTURE'
    let on_part = await request_global("/membre/all_part","POST",{})

    if(on_part.result =='deconnexion'){
        window.location.replace("https://finuseco.com/")
    }

    let res = on_part.result,
        root = ReactDOM.createRoot(document.querySelector('.corps'));
    root.render(<Update_structure struct={res} />);
},false) 

modifier_profil.addEventListener('click',async (e)=>{
    e.preventDefault()
    msg_err.textContent=''
    let data_profil = {
        adresse_electronique:document.querySelector('#adresse_electronique').value,
        adresse_physique    :document.querySelector('.adresse_physique').value,
        telephone           :document.querySelector('#telephone').value
    },
    profil_user = await request_global("/personnel/profil_user","POST",data_profil),
    res_profil = profil_user.result
    if(res_profil == 'r') $('#profilModal').modal('hide');
    msg_err.textContent = (res_profil[0] !='r') ? res_profil[0] : ''

},false) 
  
/* DEBUT NOUVEAU MEMBRE */

nouveau_membre.addEventListener('click',async (e)=>{
    e.preventDefault()
    
    contenaire.innerHTML = '<div class="row"><i class="fas fa-spinner fa-pulse" style="color:#ff6600;font-size:100px;margin-top:170px;margin-left:490px;"></i></div>'
    document.querySelector('.libelle_titre').textContent = 'NOUVEAU MEMBRE'
    let response_rep_agence = await request_global("/agence/repertoire","POST",{}),
        res = response_rep_agence.result,
        listAgence = res.map(item => (
            <Option value={item.id} option={item.denomination}/>
        ))

    if(response_rep_agence.result =='deconnexion'){
        window.location.replace("https://finuseco.com/")
    }

    let res_membre              = await request_global("/agence/rep_province","POST",{}),
        res_m                   = res_membre.result,
        res_type_piece_identite = await request_global("/agence/rep_type_piece","POST",{}),
        res_type_piece          = res_type_piece_identite.result,
        res_type_membre         = await request_global("/agence/rep_type_membre","POST",{}),
        res_                    = res_type_membre.result,
        res_etat_civil          = await request_global("/agence/rep_etat_civil","POST",{}),
        res_etat                = res_etat_civil.result

    const root = ReactDOM.createRoot(document.querySelector('.corps'));
    root.render(<Nouvelle_membre etat_civil={res_etat} agence={listAgence} type_piece={res_type_piece} province={res_m} type_membre={res_} />);
},false)   

/* FIN NOUVEAU MEMBRE */  

/* DEBUT REPERTOIRE MEMBRE */

repertoire_membre.addEventListener('click',async (e)=>{
    e.preventDefault()
    contenaire.innerHTML = ''
    document.querySelector('.libelle_titre').textContent = 'RECHERCHER UN MEMBRE'
    let rep_membre = await request_global("/membre/rep_membre","POST",{})

    if(rep_membre.result =='deconnexion'){
        window.location.replace("https://finuseco.com/")
    }

    let res = rep_membre.result,
        root = ReactDOM.createRoot(document.querySelector('.corps'));
    root.render(<Repertoire_membre rep_membre={res} />);
},false)   


function changerstatut(s){
 s.setAttribute('data-statut','c')
}
async function check_statut(){
    let stat = document.getElementById('statut_user')
    if(stat.getAttribute('data-statut') == 'c') stat.setAttribute('data-statut','d')
    else{
        await request_global("/deconnexion","POST",{})
        window.location.replace("https://finuseco.com/")
    }
}
setInterval(check_statut,300000) // 5 min
/* FIN REPERTOIRE MEMBRE */
