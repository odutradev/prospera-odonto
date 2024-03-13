import React from 'react';

import { Container, Box } from './styles';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import ProgressBar from '../../components/progressBar';

const Error = () => {

    return (
        <Container>
          <ProgressBar/>
            <Box>
                <p>error page</p>
            </Box>
        </Container>
    )
}

export default Error