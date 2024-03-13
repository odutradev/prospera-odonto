import React from 'react';

import { Container, Box } from './styles';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import ProgressBar from '../../components/progressBar';


const Main = () => {

    return (
        <Container>
          <ProgressBar/>
            <Box>
                <p>home page</p>
            </Box>
        </Container>
    )
}

export default Main