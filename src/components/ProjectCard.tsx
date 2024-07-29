// src/components/ProjectCard.tsx
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    background-color: #f0f0f0;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
    width: 200px;
    flex-grow: 0;
    flex-shrink: 0;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
`;

const Icon = styled.div`
    font-size: 48px;
    margin-bottom: 10px;
    color: #333;
`;

const Title = styled.h3`
    margin: 0;
    color: #333;
`;

interface ProjectCardProps {
    icon: React.ReactNode;
    title: string;
    link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ icon, title, link }) => {
    return (
        <Card onClick={() => window.open(link, '_blank')}>
            <Icon>{icon}</Icon>
            <Title>{title}</Title>
        </Card>
    );
};

export default ProjectCard;