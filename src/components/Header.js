import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <div className="bg-black text-white text-right px-3 py-1">
            <a href="mailto:info@bytequests.com"><FontAwesomeIcon icon={faEnvelope}/> info@bytequests.com</a>
            <a className="ml-6" href="tel:+919711999770"><FontAwesomeIcon icon={faPhone}/>+91 9711999770
            </a>
        </div>
    )
}

export default Header
