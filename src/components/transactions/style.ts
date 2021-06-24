import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--textbody);
      font-weight: 400px;
      text-align: left;
      line-height: 1.5rem;
    }
    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--textbody);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--textTitle);
      }
      &.deposit {
        color: var(--green);
      }
      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
