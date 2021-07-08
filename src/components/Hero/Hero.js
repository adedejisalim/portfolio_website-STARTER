import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Salim Adedeji <br />
        Personal Portfolio
      </SectionTitle>

      <SectionText>
      An undergraduate student in Northwest Missouri State University. Pursuing a Bachelor of science degree in computer science. Dependable, hard worker ready to learn and provide adequate service in both Frontend and Backend projects.
      </SectionText>

      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;