import { useEffect } from "react"

// services
import { getResults } from "../services/results";

function FilterResults() {
    useEffect(() => {
        getResults()
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.error(err);
            });
    });

    return (
        <div>
            <p>Results in here</p>
        </div>
    )
}

export default FilterResults