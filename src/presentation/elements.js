import styled, { css } from 'styled-components'

export const Row = styled.div`
  display: flex;
  > * + * {
    margin-left: 30px;
  }
  ${props => props.justify && css`
    justify-content: ${props.justify};
  `}
  ${props => props.align && css`
    align-items: ${props.align};
  `}
  ${props => props.margin && css`
    margin: ${props.margin};
  `}
`

Row.defaultProps = {
  justify: 'center'
}
