import React from 'react';
import { pageTemplateStyles } from './PageTemplate-styles';

const {
  styled: { ContentContainer },
} = pageTemplateStyles;

export interface PageTemplateProps
  extends React.ComponentProps<typeof ContentContainer> {
  children: React.ReactNode | React.ReactNode[];
}
