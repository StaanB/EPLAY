import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Image = styled.div`
  position: relative;
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
    z-index: 1;

    padding-top: 340px;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;

    top: 0;
    left: 0;

    content: '';
    opacity: 0.56;
  }
`

export const Title = styled.h2`
  font-size: 36px;
  max-width: 450px;
`

export const Prices = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`
