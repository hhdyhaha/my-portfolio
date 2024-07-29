// src/components/ProjectGrid.tsx
import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    width: 100%;
    max-width: 1200px;
`;

interface Project {
    icon: React.ReactNode;
    title: string;
    link: string;
}

interface ProjectGridProps {
    projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
    return (
        <Grid>
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </Grid>
    );
};

export default ProjectGrid;