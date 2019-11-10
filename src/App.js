import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Icon from "./components/icons";

const ViewWrapper = styled.div`
  background: black;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Blink = keyframes`
  0% { opacity: 1.0; }
  50% { opacity: 0.0; }
  100% { opacity: 1.0; }
`;

const Container = styled.div`
  height: ${props => (props.isDone ? "100vh" : "26px")};
  width: ${props => (props.isDone ? "100vw" : "14px")};
  padding: ${props => (props.isDone ? "22px" : "0px")};
  transition: all ease 0.5s;
  animation: ${Blink} ${props => props.interval}s step-end infinite;
  background: white;
  ${props => props.isDone && `animation: none`}
`;

const Card = styled.div`
  box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 12px;
  margin: 12px;
`;

const Header = styled.h1`
  font-weight: 700;
  font-size: 32px;
`;

const Title = styled.p`
  font-weight: 300;
  font-size: 22px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 24px;

  @media (max-width: 1280px) {
    flex-direction: ${props => (props.smallIgnore ? "row" : "column")};
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  width: 30%;

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

const SocialLink = styled.a`
  color: black;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in;

  &:hover {
    color: red;
    transition: all 0.2s ease-out;
    transform: translateY(-2px);
  }
`;

const CardLink = styled.a`
  box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 12px;
  margin: 12px;
  cursor: pointer;
  color: black;
  text-decoration: none;
  transition: all 0.2s ease-in;

  &:hover {
    transition: all 0.2s ease-out;
    transform: translateY(-2px);
  }
`;

const ExperienceCard = props => {
  return (
    <Card>
      <Header style={{ fontSize: "18px" }}>{props.company.name}</Header>
      <Title style={{ fontSize: "16px" }}>{props.company.dates}</Title>
      <Info>
        <Header style={{ fontSize: "16px" }}>{props.company.title}</Header>
        <Title style={{ fontSize: "14px" }}>{props.company.description}</Title>
      </Info>
    </Card>
  );
};

const ProjectCard = props => {
  return (
    <CardLink href={props.project.link} target="_blank">
      <Header style={{ fontSize: "18px" }}>{props.project.name}</Header>
      <Title style={{ fontSize: "16px" }}>{props.project.description}</Title>
    </CardLink>
  );
};

const hardCodedJobs = [
  {
    name: "Trueshot",
    title: "Software Developer",
    dates: "Dec 17 - Jun 18",
    description:
      "Helped develop new software solutions along with building and maintaining a microservice infrastructure."
  },
  {
    name: "NICKL",
    title: "Software Engineer",
    dates: "Feb 18 - Apr 19",
    description:
      "Played a crucial role in the designer to production chain. Brought mockups to life. Built and maintained a extension / plugin for client websites. Lead development efforts on crucial features."
  },
  {
    name: "White Label Labs",
    title: "Lead Software Engineer",
    dates: "Jul 19 - Present",
    description: "Leading the charge for clients MVPs."
  }
];

const hardCodedProjects = [
  {
    name: "My Portfolio Site",
    description: "This site built using React",
    link: "https://github.com/sdkayy/portfolio"
  },
  {
    name: "Authed.io",
    description: "The legacy version of Authed built using Laravel",
    link: "https://github.com/sdkayy/auio"
  },
  {
    name: "beta.authed.io",
    description:
      "The new version (closed source for now) version of Authed built using React, Typescript, GraphQL, Hasura and Postgres. (https://docs.authed.io for more info)",
    link: "https://beta.authed.io"
  },
  {
    name: "My goto boiler plate",
    description:
      "This is just a very simple boiler I use when I am not making a Next.JS project. TODO a next boiler.",
    link: "https://github.com/sdkayy/react-boiler-ts"
  }
];

export default props => {
  const [interval, setInt] = useState(0.5);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (interval <= 0.05) {
        setIsDone(true);
      } else {
        console.log(interval);
        setInt(interval - 0.01);
      }
    }, interval * 500);
  }, [interval]);

  return (
    <ViewWrapper>
      <Container interval={interval} isDone={isDone}>
        {isDone && (
          <>
            <Header>Austin Quinn</Header>
            <Title>Lead Software Engineer @ White Label Labs</Title>
            <Row>
              <Column>
                <Header>Me on Myself</Header>
                <p style={{ marginTop: "8px" }}>
                  Hi! I am Austin, I am a software engineer with ~3 years of
                  professional experience. I have experience with many different
                  technologies but I mainly focus on React, Typescript, Next and
                  GraphQL. I am always open to chat, I love learning and
                  expanding my skillset. Feel free to reach me by any of the
                  means below.
                </p>
                <Row smallIgnore={true}>
                  <Column>
                    <SocialLink href="mailto:sdkay@sdkay.pw" target="_blank">
                      <Icon icon={"mail"} size={"32px"} />
                    </SocialLink>
                  </Column>
                  <Column>
                    <SocialLink
                      href="https://linkedin.co/in/sdkayy"
                      target="_blank"
                    >
                      <Icon icon={"linkedin"} size={"32px"} />
                    </SocialLink>
                  </Column>
                  <Column>
                    <SocialLink
                      href="https://angel.co/austin-quinn"
                      target="_blank"
                    >
                      <Icon icon={"angelco"} size={"32px"} />
                    </SocialLink>
                  </Column>
                </Row>
              </Column>
              <Column>
                <Header>Work Experience</Header>
                {hardCodedJobs.reverse().map(j => (
                  <ExperienceCard company={j} />
                ))}
              </Column>
              <Column>
                <Header>Some Cool Projects</Header>
                {hardCodedProjects.map(p => (
                  <ProjectCard project={p} />
                ))}
              </Column>
            </Row>
          </>
        )}
      </Container>
    </ViewWrapper>
  );
};
 