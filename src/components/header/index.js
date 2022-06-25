/**
 * Title: Form Header
 * Description: This module provide static header for the form
 * Author: Moidul Hasan Khan
 * Date: 21/06/2022
 */

// Dependencies
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="light" className='nav' fixed='top'>
                <Container>
                    <Navbar.Brand className='ms-auto me-auto'>Train Ticket Reservation System
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;