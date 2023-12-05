import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import { GEO_API_URL, geoApiOptions } from "../../api/api";



export default function Search({ onSearchChange }) {

    const [search, setSearch] = useState(null);

    const loadCities = async (inputValue) => {
      try {
        const response = await fetch(`${GEO_API_URL}/cities?minPopulation=500&namePrefix=${inputValue}`, geoApiOptions);
        const result = await response.json();
        return {
            options: result.data.map((city) => {
                return{
                  label: `${city.name}, ${city.countryCode}`,
                  value:  `${city.latitude} ${city.longitude}`,
                }
            })
        }
      } catch (error) {
        console.error(error);
      }
    };
 
    const handleOnChange = (searchData) => {
        setSearch(searchData)
        onSearchChange(searchData)
    }

    return (
      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadCities}
      />
    );
}