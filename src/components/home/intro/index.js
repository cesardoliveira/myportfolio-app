import React from 'react';
import { Card, Content } from 'rbx';

const Intro = () => (
    <Card>
        <Card.Header backgroundColor="white-bis">
            <Card.Header.Title>
                About me
            </Card.Header.Title>
        </Card.Header>
        <Card.Content>
            <Content>
                B.S. in Computer Science at FUMEC University.5 years as software developer using C# language in ASP. NET MVC framework, DDD and SOLID architectures patterns, NHibernate and Dapper data access. Also has wide Front-end experience with HTML5, JavaScript, JQuery, CSS3, Riot.js.
                <br /><br />
                Productive, communicative, sociable, open-minded and creative programer (Full Stack Developer), current focus on React, Node.js and Ruby on Rails.
            </Content>
        </Card.Content>
    </Card>
);

export default Intro;