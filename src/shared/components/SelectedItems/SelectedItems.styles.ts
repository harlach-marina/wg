import { css } from '@emotion/react';

import { Colors } from 'shared/constants/styles';

export const styles = {
  list: css`
    list-style-type: none;
    margin: 10px 0 0;
    padding: 0;
  `,
  item: css`
    background: ${Colors.primaryGray};
    display: inline-flex;
    padding: 6px 0;
    margin-right: 5px;
    color: ${Colors.backgroundWhite};
  `,
  title: css`
    padding: 0 10px;
    width: 90px;
  `,
  button: css`
    padding: 4px 8px;
    background: inherit;
    color: inherit;
    border: none;
    font-size: 10px;
    line-height: 12px;
    border-left: 1px solid ${Colors.backgroundWhite};
    width: 30px;
  `,
};
