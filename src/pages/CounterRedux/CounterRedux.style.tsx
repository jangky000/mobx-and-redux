import { css } from '@emotion/react';

export const baseCss = css`
  & {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
      background-color: #dddddd;
      width: 40vw;
      height: 40vw;
      font-size: 2rem;

      .wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .counter-value {
          width: 100%;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn-wrapper {
          width: 100%;
          height: 1.5em;

          button {
            width: 50%;
            height: 100%;
            font-size: 2rem;
          }
        }
      }
    }
  }
`;
