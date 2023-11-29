import styled from "styled-components";

export const DivFlex = styled.div<{$justify?:string, $align?:string}>`
  display: flex;
  justify-content: ${props => props.$justify};
  align-items: ${props => props.$align};
`

export const DivFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`
