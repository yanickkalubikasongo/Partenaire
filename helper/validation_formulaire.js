module.exports = {
    no_empty:function(data){
       let errors = false
       if(data='') {
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
    valid_email:function(data){
       let errors = false
       if (!/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(data)) {  
         errors = true
       }
       return errors
    }
 }