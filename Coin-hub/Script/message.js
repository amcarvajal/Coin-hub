


function ocultar(){
    document.getElementById('message-box').style.display = 'none';
    document.getElementById('boton-dejar-id').style.display = 'block';
}
function ocultarDos(){
    document.getElementById('message-box').style.display = 'block';
    document.getElementById('boton-dejar-id').style.display = 'none';
}




function traductor(tipo) {
    let enText = "A cryptocurrency or cryptoactive is a digital medium of exchange that uses strong cryptography to secure transactions, control the creation of additional units and verify asset transfer using ledger technologies distributed. Cryptocurrencies are a type of alternative currency or digital currency.";
    let esText = "Una criptomoneda, criptodivisa  o criptoactivo es un medio digital de intercambio que utiliza criptografía fuerte para asegurar las transacciones, controlar la creación de unidades adicionales y verificar la transferencia de activos usando tecnologías de registro distribuido. Las criptomonedas son un tipo de divisa alternativa o moneda digital.";
    let enText1 = "The Cryptocoins";
    let esText1 = "Las criptomonedas";
    let enText3 ="The first cryptocurrency was designed in 2008 and first entered circulation in 2009, that first cryptocurrency is Bitcoin.";
    let esText3 = "La primera criptomoneda fue diseñada en 2008 y entró por primera vez en circulación en 2009, esa primera criptomoneda es Bitcoin.";
    
    let esText4 = "Todo sobre el Bit-coin, Arbitraje y Trading.";
    let enText4 = "Everything about the Bit-coin, Arbitrage and Trading.";
    let esText5 = "Arbitraje.";
    let enText5 = "Arbitrage.";
    let viewMore = "View more";
    let verMas = "Ver más";
    let start = "Start";
    let inicio = "Inicio"; 
    let company = "Companies";
    let empresas = "Empresas";
    let wallet = "Wallets";
    let billeteras = "Billeteras";
    let about = "About-us";
    let sobreNosotros = "Nuestro trabajo";
    let contact = "contact";
    let contacto = "Contacto";
    let access = "login";
    let acceso = "Acceso";
    let esAside = "<h1>Donde invertir</h1><p>Si has llegado hasta aquí probablemente no sabrás que empresa/mercado es el idoneo para desarrollar tus inversiones en criptoactivos.</p><p>Actualmente existen muchas empresas donde desarrollarlo, nosotros te explicamos y ayudaremos a hacerlo en las mejores del mercado actual, lo encontrarás en nuestra sección de <i>Empresas</i>, en el Menú principal de la web.</p><br><h3>¿Cómo hacerlo?</h3><p>Para empezar deberás de tener una <i>Wallet/ Billetera</i>  de criptomonedas.</p><p>Como COINBASE, BINANCE, KRAKEN, BITWALLET...</p><p>Dentro de estas billeteras podrás comprar e intercambiar los diferentes tipos de criptoactivos y dinero Fiat.</p><p>Como BTC, USD, EUR, ETH, LTC...</p><p>A partir de este punto, podrás realizar diferentes tipos de operaciones como Trading, Arbitraje o simplemente enviar criptomonedas a otra persona.</p><br><h3>¿Es seguro?</h3><p>Existen varias formas diferentes de almacenar tus criptomonedas, atendiendo distintos requisitos y variando en términosde protección y seguridad, conveniencia, accesibilidad y así sucesivamente.</p>";
    let enAside = "<h1>Where to invest</h1><p>If you have come this far, you probably will not know which company / market is the ideal one to develop your investments in crypto assets.</p><p>Currently there are many companies where to develop it, we will explain and help you to do it in the best of the current market, you will find it in our section of <i>Companies</i>, in the main menu of the web.</p><br><h3>How to do it?</h3><p>To start you must have a <i>Wallet</i> of cryptocoins.</p><p>As COINBASE, BINANCE, KRAKEN, BITWALLET...</p><p>Within these wallets you can buy and exchange the different types of crypto assets and Fiat money.</p><p>As BTC, USD, EUR, ETH, LTC...</p><p>From this point, you will be able to carry out different types of operations such as Trading, Arbitrage or simply send cryptocurrencies to another person.</p><br><h3>Its safe?</h3><p>There are several different ways to store your cryptocurrencies, meeting different requirements and varying in terms of protection and security, convenience, accessibility, and so on, we can say yes it is!</p>";
    



    if(tipo === 'EN'){
        document.getElementById('uk2').textContent = enText;
        document.getElementById('uk1').textContent = enText1;
        document.getElementById('uk3').textContent = enText3;
        document.getElementById('uk4').textContent = enText4;
        document.getElementById('uk5').textContent = enText5;
        let a = document.getElementsByClassName("bt-viewmore");
        for(let i=0 ; i< a.length; i++){
            a[i].textContent = viewMore;
        }
        document.getElementById('start').textContent = start;
        document.getElementById('company').textContent = company;
        document.getElementById('wallet').textContent = wallet;
        document.getElementById('about').textContent = about;
        document.getElementById('contact').textContent = contact;
        document.getElementById('bt-acceso-index').textContent = access;
        document.getElementById("aside").innerHTML = enAside;
        //document.getElementsByClassName('uk-flag').style.display = 'none';
        //document.getElementsByClassName('es-flag').style.display = 'block';
    }else{
        document.getElementById('uk2').textContent = esText;
        document.getElementById('uk1').textContent = esText1;
        document.getElementById('uk3').textContent = esText3;
        document.getElementById('uk4').textContent = esText4;
        document.getElementById('uk5').textContent = esText5;
        let a = document.getElementsByClassName("bt-viewmore");
        for(let i=0 ; i< a.length; i++){
            a[i].textContent = verMas;
        }
        document.getElementById('start').textContent = inicio;
        document.getElementById('company').textContent = empresas;
        document.getElementById('wallet').textContent = billeteras;
        document.getElementById('about').textContent = sobreNosotros;
        document.getElementById('contact').textContent = contacto;
        document.getElementById("bt-acceso-index").textContent = acceso;
        document.getElementById("aside").innerHTML = esAside;

        

    }
}


















