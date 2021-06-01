import React from "react";
import { Card, Content, Column, Title } from "rbx";
import AEC_Logo from "../../assets/images/aec-logo.png";
import GECKO_logo from "../../assets/images/gecko-logo.png";
import DS_logo from "../../assets/images/devsquad-logo.png";

const Experience = () => (
  <Card>
    <Card.Header backgroundColor="white-bis">
      <Card.Header.Title>Experience</Card.Header.Title>
    </Card.Header>
    <Card.Content>
      <Content>
        <Column.Group>
          <Column size={3}>
            <figure class="image is-128x128">
              <a
                href="https://www.devsquad.site/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="DevSquad-logo" src={DS_logo} />
              </a>
            </figure>
          </Column>
          <Column size={9}>
            <Title className="experience-title" as="p" size={5}>
              Full Stack Developer
              <span> </span>
              <span class="tag is-light">DevSquad</span>
              <span> | </span>
              <span class="tag is-light">March 2021 – Currently</span>
            </Title>
            <p>Front-end: React, HTML5, CSS and Material-UI.</p>
            <p>Back-end: Node.js + Express, MongoDB, AWS DynamoDB, AWS S3 CloudFront, web API .NET Core, SQL Server.</p>
          </Column>
        </Column.Group>
        <hr />
        <Column.Group>
          <Column size={3}>
            <figure class="image is-128x128">
              <a
                href="https://www.geckoonline.com.au/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="Gecko-logo" src={GECKO_logo} />
              </a>
            </figure>
          </Column>
          <Column size={9}>
            <Title className="experience-title" as="p" size={5}>
              JavaScript Developer (React / Node)
              <span> </span>
              <span class="tag is-light">Gecko - Australia</span>
              <span> | </span>
              <span class="tag is-light">Oct 2020 – Fev 2021</span>
            </Title>
            <p>Front-end: React.js, HTML5, CSS and Grommet.</p>
            <p>Back-end: Node.js, MongoDB</p>
            <p>
              Improving both web and mobile platform usability and
              functionality. Planning future improvements/expansions of a
              platform and beta testing new additions.
            </p>
          </Column>
        </Column.Group>
        <hr />
        <Column.Group>
          <Column size={3}>
            <figure class="image is-128x128">
              <a
                href="https://www.aec.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="AEC-logo" src={AEC_Logo} />
              </a>
            </figure>
          </Column>
          <Column size={9}>
            <Title className="experience-title" as="p" size={5}>
              Software Architect
              <span> </span>
              <span class="tag is-light">AeC Contact Center</span>
              <span> | </span>
              <span class="tag is-light">Mar 2019 – Jul 2019</span>
            </Title>
            <p>
              Design, develop and execute software solutions to address business
              issues. Provide architectural blueprints and technical leadership
              to our IT team. Troubleshoot code level problems quickly and
              efficiently. Researching, consulting, analysing and evaluating
              system program needs.
            </p>
          </Column>
        </Column.Group>
        <hr />
        <Column.Group>
          <Column size={3}>
            <figure class="image is-128x128">
              <a
                href="https://www.aec.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="AEC-logo" src={AEC_Logo} />
              </a>
            </figure>
          </Column>
          <Column size={9}>
            <Title className="experience-title" as="p" size={5}>
              Full Stack .NET Developer
              <span> </span>
              <span class="tag is-light">AeC Contact Center</span>
              <span> | </span>
              <span class="tag is-light">Aug 2014 – Jul 2019</span>
            </Title>
            <p>
              Developing web systems using C# in ASP. NET MVC architectures with
              DDD pattern and NHibernate or Dapper ORMs. Creating API REST
              integrations. Maintaining and developing WPF applications on .NET
              framework 4.5 with SQL Server database.
            </p>
          </Column>
        </Column.Group>
      </Content>
    </Card.Content>
  </Card>
);

export default Experience;
