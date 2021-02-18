const quote = document.getElementById('quote');

const numberGenerator = () => {  
    let random = Math.floor(Math.random() * (1000 - 900)) + 900; 
    return randomNumber = "5cd96e05de30eff6ebcce" + random.toString();
};
numberGenerator();
let url = "https://the-one-api.dev/v2/quote/";
let urlRandom = url + randomNumber;

const getQuote = () => {
    fetch(urlRandom  , {method:'GET',
    headers: {'Authorization': 'Bearer '+ 'rQbJd3RkXyanIew_vasd'}
   })
    .then((res) => res.json())
    .then((data) => {
        quote.innerHTML = `<cite>"${data.docs[0].dialog}"</cite>`;
    });  
}; 
getQuote();
quote.addEventListener('click', () => {
    getQuote();
});
