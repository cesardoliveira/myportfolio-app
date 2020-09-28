import React from 'react';
import { Card, Image, Media, Title, Content, Column, Icon } from 'rbx';
import PortfolioPhoto from '../../../assets/images/portfolio-photo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faMailBulk, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bulma-social/bin/bulma-social.min.css';

const Profile = () => (
    <Card>
        <Card.Image>
            <Image.Container size="1by1">
                <Image src={PortfolioPhoto} />
            </Image.Container>
        </Card.Image>
        <Card.Content>
            <Media>
                <Media.Item>
                    <Title as="p" size={4}>
                        Cesar Oliveira
                    </Title>
                    <span class="tag is-primary is-medium">Full Stack Developer</span>
                </Media.Item>
            </Media>
            <Content>
                <Title as="p" subtitle size={6}>
                    <Icon>
                        <FontAwesomeIcon icon={faMobile} color="is-dark" />
                    </Icon>
                    <span>(+61) 420 460 31</span>
                </Title>
                <Title as="p" subtitle size={6} >
                    <Icon>
                        <FontAwesomeIcon icon={faMailBulk} color="is-dark" />
                    </Icon>
                    <span><a href="mailto:cesarsdoliveira@gmail.com">cesarsdoliveira@gmail.com</a></span>
                </Title>
                <Title as="p" subtitle size={6} >
                    <Icon>
                        <FontAwesomeIcon icon={faMapMarkerAlt} color="is-dark" />
                    </Icon>
                    <span>Sydney, Australia</span>
                </Title>
                <hr />
                <Column.Group>
                    <Column size={3} offset={3}>
                        <a href="https://www.linkedin.com/in/cesardoliveira/" target="_blank" rel="noopener noreferrer" className="button is-small is-linkedin">
                            <span class="icon">
                                <i class="fab fa-linkedin fa-lg"></i>
                            </span>
                        </a>
                    </Column>
                    <Column>
                        <a href="https://github.com/cesardoliveira" target="_blank" rel="noopener noreferrer" className="button is-small is-github">
                            <span class="icon">
                                <i class="fab fa-github"></i>
                            </span>
                        </a>
                    </Column>
                </Column.Group>
            </Content>
        </Card.Content>
    </Card>
);

export default Profile;