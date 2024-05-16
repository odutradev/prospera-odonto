import React, { useEffect } from 'react';

import Loading from '../../components/loading';

const Logout = () => {

    useEffect(() => {
        setTimeout(() => {
            localStorage.clear();
            window.location.href = '/';
        }, 1000)
    },[])
    return (
       <Loading message='Deslogando usuario.'/>
    )
}

export default Logout