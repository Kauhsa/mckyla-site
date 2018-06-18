import styled from "react-emotion";

export default styled.div`
  font-size: 1.33rem;
  color: #240707;
  hyphens: auto;
  line-height: 2.3rem;

  a {
    color: #dd4200;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  h2,
  h3 {
    font-family: "Raleway";
    text-transform: uppercase;
    color: #dd4200;
    padding-bottom: 0.5rem;
    text-shadow: rgba(0, 0, 0, 0.1) 0.5px 0.5px 0.5px;

    &:not(:first-child) {
      margin-top: 4rem;
    }
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 900;
    margin-bottom: 2rem;
  }

  h3 {
    font-weight: 900;
    margin-bottom: 0.5rem;
  }

  ul {
    list-style-type: square;
    list-style-position: inside;
  }

  p + p {
    margin-top: 1rem;
  }

  strong {
    font-weight: 600;
  }

  em {
    font-style: italic;
  }

  address {
    font-style: normal;
    font-weight: 600;
  }
`;
