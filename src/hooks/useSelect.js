import React, { useState } from 'react';

const useSelect = ( initialSelect, options ) => {

    const [ state, setState] = useState(initialSelect);
    
    const SelectNew = () => (
        <select
            value={state}
            onChange={ e => setState(e.target.value) }
            className="browser-default"
        >
            {options.map(option =>(
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}

        </select>
    );
    
    return [ state, SelectNew ];
}
 
export default useSelect;
