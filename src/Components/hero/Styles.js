import styles from "styled-components";

export const ImgWrapper = styles.div`
  width: 45%;



  & img {
    width: 100%;
    object-fit: cover;
    display: block;
    margin-top: -11rem;

    @media (max-width: 1009px){
      width: 100%;
      margin-top: -13rem;

    }
  }

  @media (max-width: 1009px){
    width: 100%;
  }

`;

export const CenterText = styles.div`
  text-align: center;
  padding: 2rem;
  width: 45rem;
  margin: 0 auto;

  & p {
   
    text-transform: uppercase;
    font-size: 1.5rem;

    @media (max-width: 898px){
      font-size: 1.1rem;
      
    }
  }

  @media (max-width: 898px){
    width: 100%;
    padding: 0;
    margin: 3rem 0;
  }
`;
