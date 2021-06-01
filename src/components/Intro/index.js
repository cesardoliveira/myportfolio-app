import React from "react";
import { Card, Content } from "rbx";

const Intro = () => (
  <Card>
    <Card.Header backgroundColor="white-bis">
      <Card.Header.Title>About me</Card.Header.Title>
    </Card.Header>
    <Card.Content>
      <Content>
        Productive, communicative, open-minded and creative programmer. B.S. in
        Computer Science.
        <br />
        <br />
        Full Stack Developer with 5 years of experience using C# language in
        ASP. NET MVC framework, DDD and SOLID architectures patterns, TDD
        development process, Entity Framework, and Dapper ORM. Also has wide
        Front-End knowledge with HTML5, jQuery and React, and Back-End knowledge
        with Node.js + Express, Mongo DB and AWS S3 CloudFront.
        <br />
        <br />
        More details about my professional background on my
        <a
          href="https://drive.google.com/file/d/1g0HIKjaXWGrMa3ycoKulwZ5pCvHvotVW/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Resume
        </a>
        .
      </Content>
    </Card.Content>
  </Card>
);

export default Intro;
