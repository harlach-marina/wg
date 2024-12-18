import { css } from '@emotion/react';

import { Colors } from 'shared/constants/styles';

export const styles = {
  container: css`
    background: ${Colors.backgroundWhite};
    padding: 40px 20px 10px;
    min-height: 100vh;
    font-size: 14px;
  `,
  header: css`
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 20px;
  `,
};
