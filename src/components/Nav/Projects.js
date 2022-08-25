

import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Project = ({ project }) => {
    return (
        <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src={project.image} />
            <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Button href={project.link} variant="primary">Check it out!</Button>
            </Card.Body>
        </Card>
    );
}




export default Project;