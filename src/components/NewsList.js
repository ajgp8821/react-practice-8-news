import React from 'react';
import PropTypes from 'prop-types';
import News from './News';

const NewsList = ({ news }) => {
    return (
        <div className="row">
            {news.map(neew => (
                // console.log(neew)
                <News
                    key={neew.url}
                    neew={neew}
                />
            ))}
        </div>
    );
}

NewsList.propTypes = {
    news: PropTypes.array.isRequired,
}
 
export default NewsList;
