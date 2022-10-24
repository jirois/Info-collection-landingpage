import styles from "styled-components";

export const Section = styles.section`
    width: 95vw;
    margin: 3rem auto;
    padding: 1rem;


    & > div{
        text-align: center;
        display: flex;
        align-items: center;
        flex-direction: column;

        & img {
            display: block;
        }
    }

    @media (min-width : 898px){
        width: 80vw;
        display: flex;
        gap: 1rem;
        justify-content: center;
        
    }

`;
