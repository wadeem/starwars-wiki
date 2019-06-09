import React from 'react';
import {StarshipList} from '../sw-components';

const StarshipsPage = () => {
    return (
        <StarshipList onItemSelected={() => console.log("clicked starship page")}/>

    );
};
export default StarshipsPage;
