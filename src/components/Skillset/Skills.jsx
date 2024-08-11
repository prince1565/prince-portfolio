import React from 'react';
import { ProgressBar, Container, Row, Col } from 'react-bootstrap';

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 75 },
  { name: 'JavaScript', level: 50 },
  { name: 'React', level: 70 },
  { name: 'MySQL', level: 70 },
  { name: 'Node.js', level: 50 },
  { name: 'Express.js', level: 50 },
  { name: 'Git', level: 80 },
];

const SkillsProgress = () => {
  return (
    <Container>
      <Row>
        {skills.map((skill, index) => (
          <Col xs={12} md={6} className="mb-4" key={index}>
            <h5>{skill.name}</h5>
            <ProgressBar 
              now={skill.level} 
              label={`${skill.level}%`} 
              striped 
              variant="primary" 
              style={{ height: '25px' }} 
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SkillsProgress;

