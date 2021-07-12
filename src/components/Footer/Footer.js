import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:660-541-4317">660-541-4317</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:adedejisalim01@gmail.com">adedejisalim01@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan> Creating and Innovating </Slogan>
        </CompanyContainer>

        <SocialContainer>
        <SocialIcons href="https://github.com/adedejisalim">
        <AiFillGithub size="3rem"/>
        </SocialIcons>

        <SocialIcons href="https://www.linkedin.com/in/salim-adedeji-8b170017b/">
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>

        <SocialIcons href="https://www.instagram.com/salimadedeji/">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
