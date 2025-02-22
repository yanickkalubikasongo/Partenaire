module.exports = {
    taille:(donnee,taille)=>{
        let retour = false
        if(donnee.lenght>taille){
            retour=true
        }
        return retour
    },
    presence:(donnee)=>{
        let retour = false
        if(donnee==''){
            retour=true
        }
        return retour
    },
    content_letter:function(data){
       let errors = false
       if (!/[a-z]|[A-Z]/.test(data)) {  
         errors = true
       }
       return errors
    },
    letter_beginning:function(data){
       let errors = false
       if (!/^[a-z]|[A-Z]/.test(data)) {  
         errors = true
       }
       return errors
    },
    chaine:(donnee)=>{
        let retour = false
        if(isNaN(parseInt(donnee))){
            retour=true
        }
        return retour
    },
    email:(data)=>{
        let errors = false
        if (!/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(data)) {  
            errors = true
        }
        return errors
    },
    valid_telephone:(data)=>{
        let errors = false
        if (!/^\+243(81|82|83|89|84|80|98|85|99|97|90)[0-9]{7}$/.test(data)) {  
            errors = true
        }
        return errors
    },
    date_valid(data){
        let retour = false,
            annee = new Date().getFullYear() - new Date(data).getFullYear()
   
        if (annee < 18 ) {
            retour=true
        }
        return retour
    }
 }