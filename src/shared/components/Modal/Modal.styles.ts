import { css } from '@emotion/react';

import { MediaQueries } from 'shared/constants/styles';

export const styles = {
  container: css`
    background: #303233b5;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 320px;
  `,
  content: css`
    min-width: 280px;
    max-width: calc(100% - 20px);

    @media only screen and (min-width: ${MediaQueries.SMALL}) {
      min-width: 400px;
    }
  `,
};
