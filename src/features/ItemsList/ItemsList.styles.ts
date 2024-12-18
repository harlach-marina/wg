import { css } from '@emotion/react';

import { Colors, MediaQueries } from 'shared/constants/styles';

export const styles = {
  container: css`
    background-color: ${Colors.secondaryGray};
    color: ${Colors.backgroundWhite};
    padding: 20px;
  `,
  header: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-width: 400;

    & button {
      padding: 0;
      font-size: 12px;
    }
  `,
  filter: css`
    margin: 20px 0;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: none;
    column-gap: 0px;
    row-gap: 10px;

    @media only screen and (min-width: ${MediaQueries.SMALL}) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: none;
      column-gap: 20px;
      row-gap: 0;
    }
  `,
  listContainer: css`
    background-color: ${Colors.primaryGray};
    max-height: 240px;
    min-height: 240px;
    overflow-y: scroll;
    margin-bottom: 15px;
  `,
  list: css`
    background-color: inherit;
    list-style-type: none;
    margin: 0;
    padding: 10px;
  `,
  buttonsContainer: css`
    margin-top: 15px;
    display: flex;
    gap: 12px;
  `,
  empty: css`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: inherit;
  `,
};
