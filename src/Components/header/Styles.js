import styles from "styled-components";

export const HeaderWrapper = styles.div`
    width: 100%;
    height: 75vh;
    background: #222;
    color: white;
    margin: 0;

`;

export const InnerWrapper = styles.div`
    width: 95vw;
    margin: 0 auto;
    padding: 1rem;

    @media (min-width: 887px){
      width: 80vw;

    }
`;

export const Title = styles.h4`
    font-weight: bold;
    color: #f1f3f3;
    font-size: 1.2rem;
`;

export const MainHeader = styles.h1`
    font-weight: bolder;
    color: #f3f3f3;
    margin-top: 1rem;
    font-size: 2.5rem;
    margin-bottom: 0;

    @media (min-width: 887px){
        font-size: 3.5rem;
    }
`;

export const SubHeader = styles.h3`
    margin-top: 0.5rem;
    font-size: 1rem;

    @media (min-width: 888px){
        font-size: 1.2rem
    }
`;
