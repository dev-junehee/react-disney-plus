import Nav from './components/Nav';
import styled from 'styled-components'

export default function App() {
  return (
    <Container>
      <Nav />
    </Container>
  );
}

const Container = styled.main /* css */ `
  position: relative;
  min-height: calc(100ch - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &::after {
    /* background: url("/images/home-background.png") center center / cover no-repeat fixed; */
    background-image: url("/images/home-background.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    content: "";
    position: absolute;
    inset: 0;
    opacity: 1;
    z-index: -1;
  }
`