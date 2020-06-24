import React from 'react';
import PropTypes from 'prop-types';
import useSelect from '../hooks/useSelect';

import styles from './Form.module.css';

const Form = ({ setCategory, setCountries }) => {
    
    const OPTIONS = [
        { value: 'general', label: 'General'},
        { value: 'business', label: 'Negocios'},
        { value: 'entertainment', label: 'Entretenimiento'},
        { value: 'health', label: 'Salud'},
        { value: 'science', label: 'Ciencia'},
        { value: 'sports', label: 'Deportes'},
        { value: 'technology', label: 'Tecnología'},
    ];

    const OPTION_COUNTRIES = [
        { value: 'ar', label: 'Argentina'},
        { value: 'br', label: 'Brasil'},
        { value: 'co', label: 'Colombia'},
        { value: 'cu', label: 'Cuba'},
        { value: 'mx', label: 'Mexico'},
        { value: 'gb', label: 'Reuno Unido'},
        { value: 'us', label: 'USA'},
        { value: 've', label: 'Venezuela'},
    ]

    // Utilizar custom hook
    const [ category, SelectNews ] = useSelect('general', OPTIONS);
    const [ county, SelectCountry ] = useSelect('ve', OPTION_COUNTRIES);

    // Submit al form, pasar categoria a App.js
    const searchNews = e => {
        e.preventDefault();

        setCategory(category);
        setCountries(county);
    }

    return (
        <div className={`row ${styles.search}`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={searchNews}
                >
                    <h2 className={styles.heading}>Encuentra noticias por categoría</h2>

                    <SelectNews />
                    <SelectCountry />

                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`btn-large darken-2 ${styles['btn-block']}`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

Form.propTypes = {
    setCategory: PropTypes.func.isRequired,
    setCountries: PropTypes.func.isRequired,
}
 
export default Form;
