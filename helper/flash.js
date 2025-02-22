module.exports = {
    flashSuccessMessage:(req,message)=>{
        req.session.message = message;
    },
    showFlashSuccessMessage:(req)=>{
        
        if(typeof req.session == 'undefined'){
            return;
        }
        
        if(typeof req.session.message !='undefined' 
        ){
            const text= "<div class='alert alert-success' style='display:visible !important;'>"+
            req.session.message+"<a href='#' class='pull-right' style='float:right;color:red !important;' onClick='masquer(this);'>X</a>"+
            "</div>";
            delete req.session.message;
            return text;
        }
    }
 }