import styled from 'styled-components'

export const Button = styled.div`
  background-color: rgba(90, 60, 95, 1.0);
  height: ${props => props.height || '34px'};
  width: ${props => props.width || '128px'};
  border-radius: 17px;
`
