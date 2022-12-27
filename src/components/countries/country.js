import {Link} from 'react-router-dom'
import "./country.css"
function Country(props){

    let searchCountry=(event)=>{
        let inputValue=event.target.value.toLowerCase();
        let countries=document.querySelectorAll("#countryCard")  
        Array.from(countries).forEach(country=>{
            let countryName=country.children[0].children[1].textContent;
            if(countryName.toLowerCase().indexOf(inputValue)!=-1){
                country.style.display="block"
            }
            else{
                country.style.display="none"
            }
        })
    }
    
    return(
        <div className="main-wrapper">
            <input onChange={searchCountry} placeholder='Search for a country' className="search-field"></input>
            <div className="country-list">
                {props.data.map(ele=>(
                    <Link to={`/${ele.name.common}`}  id="countryCard" className="country-card">
                        <div className="card">
                            <div className="img-container">
                                <img src={ele.flags.png}></img>
                            </div>
                                <h1 className="header">{ele.name.common}</h1>
                        </div>
                    </Link>  
                ))}
            </div>
        </div>
    )
}

export default Country