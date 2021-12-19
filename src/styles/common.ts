import styled from 'styled-components';

export const FlexBox = styled.div.attrs({
  className: 'flex justify-center items-center flex-col',
})``;

export const WhiteBox = styled.div.attrs({
  className: 'border border-solid shadow-sm mb-4 px-10 py-5 text-sm',
})`
  background-color: ${(props) => props.theme.boxColor};
  border-color: ${(props) => props.theme.borderColor};
  width: 350px;
`;
