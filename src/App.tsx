// src/App.tsx
import React from 'react';
import styled from 'styled-components';
import { FaReact, FaNodeJs, FaPython, FaJava } from 'react-icons/fa';
import ProjectGrid from './components/ProjectGrid';

const AppContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
`;

const Title = styled.h1`
    text-align: center;
    margin-bottom: 40px;
    color: #333;
`;

const projects = [
    { icon: <FaReact />, title: 'React Project', link: 'https://your-react-project.com' },
    { icon: <FaNodeJs />, title: 'Node.js API', link: 'https://your-nodejs-api.com' },
    { icon: <FaPython />, title: 'Python App', link: 'https://your-python-app.com' },
    { icon: <FaJava />, title: 'Java Application', link: 'https://your-java-app.com' },
];

const App: React.FC = () => {
    return (
        <AppContainer>
            <Title>My Projects</Title>
            <ProjectGrid projects={projects} />
        </AppContainer>
    );
}

export default App;