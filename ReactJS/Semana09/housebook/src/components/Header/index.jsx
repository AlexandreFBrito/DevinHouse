import PropTypes from 'prop-types'

const Header = ({ logo }) =>{
    return(
        <header className="header">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="Housebook" />
                </div>
            </div>
        </header>

    );
}

Header.propTypes = {
    logo: PropTypes.string.isRequired
}

export default Header;