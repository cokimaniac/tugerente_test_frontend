import { useState } from "react"
import FilterResults from "./FilterResults"

function FilterInput() {

    const [drop, setDrop] = useState(false)

    const toggleResults = (e) => {
        if (e.target.name === "filter-input") {
            setDrop(true)
        } else {
            setDrop(false)
        }
    }

    return (
        <div onClick={toggleResults}>
            <input type="text" name="filter-input" />
            {drop && <FilterResults />}
        </div>
    )
}

export default FilterInput