import React from 'react'
import PropTypes from 'prop-types';
function Header({title}) {
    return (
        <header style={{backgroundColor:"blue",color:'red'}}>
            <div className='container'>
                <h2>{title}</h2>
            </div>
        </header>
    )
    
}

Header.defaultProps={
    title:"Title",
};
Header.propTypes={
    title:PropTypes.string
};
export default Header;

