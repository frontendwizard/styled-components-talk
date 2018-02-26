import styled from 'styled-components'

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  cursor: pointer;

  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`

Button.defaultProps = {
  theme: {
    main: 'darkorange'
  }
}

export default Button