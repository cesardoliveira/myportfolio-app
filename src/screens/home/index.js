import React, { Fragment } from "react";
import { Section, Container, Column } from "rbx";
import Header from "../../components/header";
import Profile from "../../components/home/profile";
import Intro from "../../components/home/intro";
import Experience from "../../components/home/experience";
import Education from "../../components/home/education";
import Footer from "../../components/footer";

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
          </Column>
        </Column.Group>
      </Container>
    </Section>
    <Footer />
  </Fragment>
);

export default HomeScreen;
