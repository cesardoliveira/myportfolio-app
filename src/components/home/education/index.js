import React from 'react';
import { Card, Content, Column, Title } from 'rbx';
import FUMEC_Logo from '../../../assets/images/fumec-logo.png';

const Education = () => (
    <Card>
        <Card.Header backgroundColor="white-bis">
            <Card.Header.Title>
                Education
            </Card.Header.Title>
        </Card.Header>
        <Card.Content>
            <Content>
                <Column.Group>
                    <Column size={2}>
                        <figure class="image is-48x48">
                            <a href="http://www.fumec.br/" target="_blank" rel="noopener noreferrer" >
                                <img
                                    alt="FUMEC-Logo"
                                    src={FUMEC_Logo}
                                />
                            </a>
                        </figure>
                    </Column>
                    <Column size={9}>
                        <Title className="experience-title" as="p" size={6}>
                            B.S. Computer Science
                            <span> </span>
                            <span class="tag is-light">FUMEC University</span>
                            <span> | </span>
                            <span class="tag is-light">Fev 2012 – Dez 2017</span>
                            <span> | </span>
                            <span class="tag is-info">Belo Horizonte - Brazil</span>
                        </Title>
                    </Column>
                </Column.Group>
            </Content>
        </Card.Content>
    </Card>
);

export default Education;