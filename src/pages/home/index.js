import React, { Fragment } from "react";
import { Section, Container, Column } from "rbx";

import { 
  Header,
  Profile,
  Intro,
  Experience,
  Education,
  Volunteer,
  Footer
} from "../../components";

const HomeScreen = () => (
  <Fragment>
    <Header />
    <Section size="medium">
      <Container>
        <Column.Group>
          <Column size={3}>
            <Profile />
          </Column>
          <Column size={9}>
            <Intro />
            <br />
            <Experience />
            <br />
            <Education />
            <br />
            <Volunteer />
          </Column>
        </Column.Group>
      </Container>
    </Section>
    <Footer />
  </Fragment>
);

export default HomeScreen;
