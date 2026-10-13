function acquista() {

    //variabili
    let eta;

    //input
    eta = prompt("inserisci età cliente");

    //output
    if(eta != ""){
        if(eta != null){
            if(eta<=5){
                alert ("costo biglietto: free");
                console.log ("costo biglietto: free");
            }else{
                if(eta<18){
                    alert ("costo biglietto: 8€");
                    console.log ("costo biglietto: 8€");
                }else{
                    if(eta<=25){
                        alert ("costo biglietto: 3.5€");
                        console.log ("costo biglietto: 3.5€");
                    }else{
                        if(eta<50){
                            alert ("costo biglietto: 8€");
                            console.log ("costo biglietto: 8€");
                        }else{
                            if(eta<=55){
                                alert ("costo biglietto: 5€");
                                console.log ("costo biglietto: 5€"); 
                            }else{
                                if(eta>55){
                                    alert ("costo biglietto: 8€");
                                    console.log ("costo biglietto: 8€");
                                }
                            }
                        }
                    }
                }
            }
        }else{
            alert ("eta nulla");
            console.log ("eta nulla");
        }
    }else{
        alert ("eta non inserita");
        console.log ("eta non inserita");
    }
    

}