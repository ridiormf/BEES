import React, { ReactComponentElement } from 'react';
import { usePageTemplateControl } from './PageTemplate-control';

import { pageTemplateStyles } from './PageTemplate-styles';
import { PageTemplateProps } from './PageTemplate-types';

import backButtonSvg from '../../assets/svg/arrow-circle-left.svg';
import Image from '../Image';

const {
  styled: { Container, Header, BackButton, HeaderTitles, ContentContainer },
  css,
} = pageTemplateStyles;

const PageTemplate: React.FC<PageTemplateProps> = ({ children, ...rest }) => {
  const {
    state: { fullName },
    methods: { onGoBackClick },
  } = usePageTemplateControl();
  return (
    <Container>
      <Header>
        <BackButton onClick={onGoBackClick}>
          <Image src={backButtonSvg} css={css.backImage} alt="go back icon" />
          <HeaderTitles>Go Back</HeaderTitles>
        </BackButton>
        <HeaderTitles>{fullName}</HeaderTitles>
      </Header>
      <ContentContainer {...rest}>{children}</ContentContainer>
    </Container>
  );
};

export default PageTemplate;
