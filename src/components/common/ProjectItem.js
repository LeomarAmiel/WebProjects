import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-left: 1rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    box-shadow: 0 1px 2px rgb(110, 110,110);
    height: 14rem;
    width: 9rem;
`;

const Image = styled.img`
    height: 4rem;
    object-fit: cover;
    object-position: center top;
`;

const ProjectTitle = styled.p`
    text-align: left;
    font-weight: 500;
    margin: 0;
    margin-bottom: .5rem;
`;
    
const ProjectTagList = styled.ul`

    margin: 0;
    margin-top: 1.5rem;
    list-style: none;
    padding: 0;
`;

const ProjectTag = styled.li`
    text-align: left;
    font-weight: 200;
    font-size: .75rem;
    margin: 0;
`;

const ProjectTagAnchor = styled.a`
    text-decoration: none;
    color: #1A0DAB;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 1.5rem .25rem 0 .25rem;
    border-bottom: 1px solid rgba(110, 110, 110, .4);
`;

const ProjectCreator = styled.a`
    text-align: left;
    text-decoration: none;
    color: #1A0DAB;
`;

const ButtonWrapper = styled.div`

`;

export const ProjectItem = () => (
    <Wrapper>
        <Image src="./assets/website1-small.png"/>
        <TextWrapper>
            <ProjectTitle>Project Request Website</ProjectTitle>
            <ProjectCreator>
                Leomar Alejar
            </ProjectCreator>
            <ProjectTagList> 
                <ProjectTag>
                    <ProjectTagAnchor href="#">
                        Commercial
                    </ProjectTagAnchor>
                </ProjectTag> 
            </ProjectTagList>
        </TextWrapper>
        <ButtonWrapper>

        </ButtonWrapper>
    </Wrapper>
)