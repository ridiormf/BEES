import React, { ReactComponentElement } from 'react';
import { usePageTemplateControl } from './PageTemplate-control';

import { pageTemplateStyles } from './PageTemplate-styles';
import { PageTemplateProps } from './PageTemplate-types';

import backButtonSvg from '../../assets/svg/back.svg';
import Image from '../Image';

const {
  styled: { Container, Header, BackButton, HeaderTitles, ContentContainer },
} = pageTemplateStyles;

const PageTemplate: React.FC<PageTemplateProps> = ({ children }) => {
  const {
    state: { fullName },
    methods: { logout },
  } = usePageTemplateControl();
  return (
    <Container>
      <Header>
        <BackButton onClick={logout}>
          <Image src={backButtonSvg} />
          <HeaderTitles>Go Back</HeaderTitles>
        </BackButton>
        <HeaderTitles>{fullName}</HeaderTitles>
      </Header>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
};

export default PageTemplate;
