import React, { ReactElement } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { baseCss } from './TemplateName.style';

export interface TemplateNameProps {}
export const TemplateName = (): ReactElement => {
  return <div className="TemplateName" css={[baseCss]}></div>;
};
