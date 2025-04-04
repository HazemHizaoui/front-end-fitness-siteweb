function alpha(ch)
{	if(ch=="")return false;
	ch=ch.toUpperCase();
	for(i=0;i<ch.length;i++)
	{
		c=ch.charAt(i);
		if(!(c>="A"&&c<="Z"))
		{
			return false;
		}
	}
	return true;
}
function Nume(ch)
{	if(ch=="")return false;
	ch=ch.toUpperCase();
	for(i=0;i<ch.length;i++)
	{
		c=ch.charAt(i);
		if(!((c>="0"&&c<="9")))
		{
			return false;
		}
	}
	return true;
}

function verifMail(email)
{   
	
	p1=email.indexOf("@");
	ch1=email.substr(0,p1);
	email=email.substr(p1+1,email.length);
	p2=email.indexOf(".");
	ch2=email.substr(0,p2);
	ch3=email.substr(p2+1,email.length);


	
	if(!alphaNum(ch1))
	{
		alert("Ch1 doit etre alphanumerique");
		return false;
	}
	
	if(!alpha(ch2))
	{
		alert("Ch2 doit etre Alphabetique");
		return false;
	}
	
	if(!(ch3.length>=2 && ch3.length<=3 ))
	{
		alert("Ch3 doit etre de taille 2 ou 3");
		return false;
	} 
	
	if(!alpha(ch3))
	{
		alert("Ch3 doit etre alphabetique");
		return false;
	}
	return true
}

function verif(){

    nom=document.getElementById("nom").value;
    prenom=document.getElementById("prenom").value;
    email=document.getElementById("email").value;	
    tel=document.getElementById("tel").value;	
    h=document.getElementById("g1").checked;
    f=document.getElementById("g2").checked;
    nation=document.getElementById("nationalite").value;
    if (!alpha(nom)) 
        {
            alert("nom invalide doit etre alphabetique");
            return false;
        }
    if (nom.length < 3) {
            alert("nom longuer > 3!!!");
            return false;
        }
    if (!alpha(prenom)) 
            {
                alert("prenom invalide doit etre alphabetiques");
                return false;
            }
    if (prenom.length < 3) {
                alert("prenom long > 3 ");
                return false;
            }    
    if (!h && !f) {
                alert("Choisir un genre");
                return false;
            }
    
    if(!alpha(nation)){
        alert("nationalité invalid");
    }         
   
    if(!verifMail(email))
    {     
        return false;
    }            

    if (!Nume(tel)) 
                {
            alert("tel invalide doit etre numeriques");
            return false;
                }
        if (tel.length !=8) {
            alert("tel doit etre de logneur 8");
            return false;
    }

}