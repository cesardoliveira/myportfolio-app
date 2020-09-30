import React from 'react';
import { Navbar, Container, Column, Button, Icon } from 'rbx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import '../../styles/header.scss';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bulma-social/bin/bulma-social.min.css';

const Header = () => {

    const onResumeClick = () => {
        window.open('https://drive.google.com/file/d/1g0HIKjaXWGrMa3ycoKulwZ5pCvHvotVW/view?usp=sharing');
    }

    return (
        < Navbar backgroundColor="white-bis" >
            <Container>
                <Navbar.Menu>
                    <Navbar.Segment as="div" className="navbar-item navbar-end" align="right">
                        <Column.Group>
                            <Column>
                                <Button className="button is-small" color="link" onClick={() => onResumeClick()}>
                                    <Icon>
                                        <FontAwesomeIcon icon={faDownload}/>
                                    </Icon>
                                    <span>Resume</span>
                                </Button>
                            </Column>
                            <Column>
                                <a href="https://www.linkedin.com/in/cesardoliveira/" target="_blank" rel="noopener noreferrer" className="button is-small is-linkedin">
                                    <span class="icon">
                                        <i class="fab fa-linkedin"></i>
                                    </span>
                                    <span>LinkedIn</span>
                                </a>
                            </Column>
                            <Column>
                                <a href="https://github.com/cesardoliveira" target="_blank" rel="noopener noreferrer" className="button is-small is-github">
                                    <span class="icon">
                                        <i class="fab fa-github"></i>
                                    </span>
                                    <span>GitHub</span>
                                </a>
                            </Column>
                        </Column.Group>
                    </Navbar.Segment>
                </Navbar.Menu>
            </Container>
        </Navbar >
    );
}

export default Header;