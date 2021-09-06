import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 8.75rem;

  & > * {
    width: 50%;
  }

  &:last-child {
    border-radius: 4px;
  }
`;

export const GeneralImage = styled.img`
  max-height: 23.75rem;
  border-radius: 4px;
  object-fit: cover;
`;