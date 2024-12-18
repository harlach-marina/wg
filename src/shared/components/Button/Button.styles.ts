import { css } from '@emotion/react';

import { Colors } from 'shared/constants/styles';

import { ButtonColor } from './buttonType';

export const styles = {
  container: (color: ButtonColor = 'inherit') => css`
    background-color: ${color};
    color: ${Colors.backgroundWhite};
    padding: 9px 27px;
    border: 0;
    cursor: pointer;
  `,
};
