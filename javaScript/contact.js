function verif() { 
    var nom = document.getElementById("nom").value; 
    var email = document.getElementById("email").value;
    var objet = document.getElementById("objet").value;
    var message = document.getElementById("message").value;
    if(nom=="") {
        alert('Ajouter un nom !');
        document.contactForm.nom.focus(); 
        return false;

    } 

    if(email=="") {
        alert('Ajouter un email !\n');
        document.contactForm.email.focus(); 
        return false;

    } 
    if(objet=="") {
        alert('Ajouter un objet !\n');
        document.contactForm.objet.focus(); 
        return false;
    }
    if(message=="") {
        alert('Ajouter un message !\n');
        document.contactForm.message.focus(); 
        return false;
   
    } 
    alert("Message envoyé avec succès !");
    return false;
    
}