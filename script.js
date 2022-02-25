
    //find single country


const country=()=>{
    const input=document.getElementById('inpt').value;

    if(input.length>0){
       const url=`https://restcountries.com/v3.1/name/${input}` 
       fetch(url)
       .then(response=>response.json())
       .then(data=>displayAll(data[0]))
    }
    
}

const displayAll=(country)=>{
const container=document.getElementById('country');
container.innerHTML=`
                        <h1>Country name: ${country.name.common}</h1> 
                        <h1>Capital: ${country.capital}</h1>
                        <h1>Population: ${country.population}</h1>
                        <h1>Flag</h1>
                        <img src=${country.flags.png}>
                        <div id='hide'>
                            <h1>Official name:${country.name.official}</h1>
                            <h1>Independent status:${country.independent}</h1>
                            <h1>Languages:${country.languages[1]}</h1>
                        </div>

                        <button onclick="hide()"> Show more details <button>
`
}


function hide(){
    document.getElementById('hide').style.display='block'
}

