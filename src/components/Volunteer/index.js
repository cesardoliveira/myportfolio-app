import React from "react";
import { Card, Content, Column, Title } from "rbx";
import MYC_logo from "../../assets/images/myc-logo.png";

const Volunteer = () => (
  <Card>
    <Card.Header backgroundColor="white-bis">
      <Card.Header.Title>Volunteer</Card.Header.Title>
    </Card.Header>
    <Card.Content>
      <Content>
        <Column.Group>
          <Column size={3}>
            <figure class="image is-128x128">
              <a
                href="https://www.makeyourchange.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="Make_Your_Change-logo" src={MYC_logo} />
              </a>
            </figure>
          </Column>
          <Column size={9}>
            <Title className="experience-title" as="p" size={5}>
              Web Developer
              <span> </span>
              <span class="tag is-light">Make Your Change - Australia</span>
              <span> | </span>
              <span class="tag is-light">Jul 2020 – Set 2020</span>
              <span> | </span>
              <span class="tag is-info">Volunteer</span>
            </Title>
            <p>
              Developing functionality through custom PHP/JS development and
              extending/integrating other WordPress plugins. Improve environment
              management and ALM processes through GIT management, development
              standards and testing processes.
            </p>
          </Column>
        </Column.Group>
      </Content>
    </Card.Content>
  </Card>
);

export default Volunteer;
