const convertButton=document.querySelector('.convert-button');
const currencySelect=document.querySelector('.currency-select');

function convertValues(){
        const inputCurrency=document.querySelector('.input-currency').value;

        const dolarToday=5.2;

        const euroToday=6.2;

        const libraToday=7.2;

        const bitcoinToday=300000.00;
        
        const currencyValueToConvert=document.querySelector('.currency-value-to-convert');//valor em real
        const currencyValueConverted=document.querySelector('.currency-value');//outras moedas
        console.log (currencySelect.value)

        if(currencySelect.value=='dolar'){
            currencyValueConverted.innerHTML=new Intl.NumberFormat('en-US',{
                style:'currency',
                currency:'USD'
            }).format(inputCurrency/dolarToday);
        }
        if(currencySelect.value=='euro'){
            currencyValueConverted.innerHTML=new Intl.NumberFormat('de-DE',{
                style:'currency',
                currency:'EUR'
            }).format(inputCurrency/euroToday);
        }
        if(currencySelect.value=='libra'){
            currencyValueConverted.innerHTML=new Intl.NumberFormat('en-GB',{
                style:'currency',
                currency:'GBP'
            }).format(inputCurrency/libraToday);
        }
        if(currencySelect.value=='bitcoin'){
            currencyValueConverted.innerHTML=new Intl.NumberFormat('en-US',{
                style:'currency',
                currency:'BTC'
            }).format(inputCurrency/bitcoinToday);
        }

        currencyValueToConvert.innerHTML=new Intl.NumberFormat('pt-BR',{
            style:'currency',
            currency:'BRL'
        }).format(inputCurrency);
    }

    function changeCurrency(){
        const currencyName=document.getElementById('currency-name');
        const currencyImg=document.querySelector('.currency-img');

        if(currencySelect.value=='dolar'){
            currencyName.innerHTML='Dolar americano';
                currencyImg.src='./assets/Dólar.png';
        }
        if(currencySelect.value=='euro'){
            currencyName.innerHTML='Euro';
                currencyImg.src='./assets/Euro.png';
        }
        if(currencySelect.value=='libra'){
            currencyName.innerHTML='Libra';
                currencyImg.src='./assets/Libra.png';
        }
        if(currencySelect.value=='bitcoin'){
            currencyName.innerHTML='Bitcoin';
                currencyImg.src='./assets/Bitcoin.png';
        }
            convertValues();
    }

    currencySelect.addEventListener('change', changeCurrency);



        











convertButton.addEventListener('click',convertValues)
