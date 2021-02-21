const quote = document.getElementById('quote');


const getQuote = () => {
    let random = Math.floor(Math.random() * (1000 - 900)) + 900; 
    randomNumber = "5cd96e05de30eff6ebcce" + random.toString();
    let url = "https://the-one-api.dev/v2/quote/";
    let urlRandom = url + randomNumber;
    fetch(urlRandom  , {method:'GET',
    headers: {'Authorization': 'Bearer '+ 'rQbJd3RkXyanIew_vasd'}
   })
    .then((res) => res.json())
    .then((data) => {
        quote.innerHTML = `<cite>"${data.docs[0].dialog}"</cite><span id="author"></span>`;
        const author = document.getElementById('author')
        let character = data.docs[0].character;
        console.log(typeof character);
        let urlCharacter = "https://the-one-api.dev/v2/character/" + character;
        console.log(urlCharacter);
        fetch(urlCharacter  , {method:'GET',
        headers: {'Authorization': 'Bearer '+ 'rQbJd3RkXyanIew_vasd'}
       })
        .then((res) => res.json())
        .then((data) => {
            console.log(data.docs[0].name);
            characterName = data.docs[0].name;
            author.innerHTML = characterName;
        });
    });  
}
getQuote();
quote.addEventListener('click', () => {
    getQuote();
});
