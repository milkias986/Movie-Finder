import React from "react";

function Movies() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fdaa58b5d5msha948cdd185c406cp1d6d10jsnb5f71780e582',
            'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
        }
    };
    
    fetch('https://ott-details.p.rapidapi.com/advancedsearch?page=1', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

export default Movies