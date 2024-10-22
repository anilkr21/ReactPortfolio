
import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education, experiences } from '../../data/constants';
import EducationCard from '../cards/EducationCard';



const Container = styled.div`
    display: flex;
    widht:100%
    flex-direction: column;
    justify-content: center;
    position: relative;
    max-width: 100%; 
    overflow: hidden;
    align-items: center;
    padding: 0 20px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 40px 0px 0px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 700;
margin-top: 20px;
  color: var(--color);
  font-size: 3rem;
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
     margin: 0 auto; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    @media (max-width: 660px) {
        align-items: center;
    }
`;



const Education = () => {
  return (
    <Container id="education">
    <Wrapper>
        <Title>Education</Title>
        <Desc>
            My education has been a journey of self-discovery and growth. My educational details are as follows.
        </Desc>
        <TimelineSection>
            <Timeline position="alternate">
                {education.map((education,index) => (
                    <TimelineItem key={index} >
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" color="secondary" /> {/* This is the circle on the timeline */}
                            {index !== education.length - 1 && (
                            <TimelineConnector style={{ backgroundColor: '#854CE6',  width: '2px' }} /> 
                            )}
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <EducationCard education={education}/>
                        </TimelineContent >
                    </TimelineItem>
                ))}
            </Timeline>

        </TimelineSection>
    </Wrapper>
</Container>
  )
}

export default Education;
