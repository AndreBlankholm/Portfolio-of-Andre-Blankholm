import React from 'react';
import Project from './Projects';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Portfolio = () => { // farm this out
    const projects = [
        { name: "good-choice-portfolio", image: "Images/good-choice-portfolio.png", link: "https://andreblankholm.github.io/good-choice-portfolio/" },
        { name: "Swappers-meet", image: "Images/swappers-meet.png", link: "https://swappers-meet.herokuapp.com/dashboard/" },
        { name: "Flight Consultant", image: "Images/trip.png", link: "https://emmazart.github.io/bootcamp-project-1/" },
        { name: "A-Dish-A-Day", image: "Images/A-Dish-A-Day.png", link: "https://agile-ocean-35043.herokuapp.com/" },
        { name: "Password Generator", image: "Images/passwordgen.png", link: "https://andreblankholm.github.io/password-generator/" }


    ]

    return (
        <Container fluid>
            <Row>
                {projects.map((project, index) => (
                    <Col key={index}>
                        <Project project={project} />
                    </Col>
                )
                )}
            </Row>
        </Container>

    )
}


export default Portfolio;