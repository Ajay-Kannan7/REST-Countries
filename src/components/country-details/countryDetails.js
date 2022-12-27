import {useParams} from 'react-router-dom'
import "./countryDetails.css"
function CountryDetails(props){
    let {name}=useParams();
    return(
        <div className="country-details-wrapper">
            {props.data.filter(elements=>elements.name.common===name).map(elements=>(
                <div className="country-details">
                    <div className="country-flag">
                        <img src={elements.flags.png} alt="country-img"></img>
                    </div>
                    <div className="country">
                        <h1>{name}</h1>
                        <h3>Capital: {elements.capital}</h3>
                        <h3>Continent: {elements.continents}</h3>
                        <h3>Population: {elements.population}</h3>
                        <h3>Timezone: {elements.timezones[0]}</h3>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CountryDetails;