import Weather from './Weather'

const Persons = ({search, button}) => {

    if (search.length > 10){
        return (
            <div>
                <p>Too many matches, specify another filter</p>
            </div>
    )}

    if (search.length === 1){
        return (
            <div>
                <h1>{search[0].name.common}</h1>
                <p>Capital {search[0].capital}</p>
                <p>Area {search[0].area}</p>
                <h2>Languages:</h2>
                <ul>
                    {Object.values(search[0].languages).map(language => 
                        <li key={language}> {language}</li>)}
                </ul>
                <img src={search[0].flags.png} alt="flag"/>
                <Weather capital = {search[0].capital}/>
            </div>
    )}

    else {
        return (
            <div>
                {search.map(country => 
                    <p key={country.name.common}> {country.name.common}
                    <button onClick={() => button(country.name.common)}>Show</button></p>)
                    }

            </div>
    )}
}

export default Persons