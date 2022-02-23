document.getElementById('load-data').addEventListener('click',function(){
    fetch('https://restcountries.com/v3.1/all')
    .then(response=>response.json())
    .then(data=>allCounrty(data))
    
    
    
    function allCounrty(countries){
        const slice=countries.slice(0,10);
        slice.map(country=>{
            const container=document.getElementById('country');
            //const name=document.createElement('h1');
            //name.innerText=country.name.common;
            const div=document.createElement('div');
            div.className='country'
            div.innerHTML=`<h1>Country name:${country.name.common}</h1>
                <h2>Capital: ${country.capital} </h2>
                <h2 id='h2'>Population:${country.population}</h2>
                <img src=${country.flags.png}>
            `
            container.appendChild(div)
        })
    }
})

