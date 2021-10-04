import { useState } from "react";

// assets data
import data from '../assets/data/thematics.json';

const useLoadThematic = slug => {

    const thematics = data;
    const [thematic, setThematic] = useState([]);

    thematics.map((item) => {
        if(item.slug === slug) setThematic(item);
    });

    return thematic;

}

export default useLoadThematic;