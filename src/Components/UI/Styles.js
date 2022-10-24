import styles from "styled-components";

export const Wrapper = styles.div`
  width: 95vw;
  margin: 0 auto;


  @media (min-width: 878px){
    width: 80vw;
    display: flex;
    justify-content: space-between;
  }

`;

export const FormControl = styles.div`
    display: flex;
    flex-direction: column;

    & label {
        display: block;
        font-weight: bold;
        font-size: 0.87rem;
        color: black;
        margin-top: 1rem;
        text-transform: uppercase;

        & > span {
            color: red;
            font-weight: bold;
            font-size: 1.2rem;
        }
    }

    & input {
        width: 90%;
        display: block;
        // background: #f4f4f4;
        border-radius: 0.5rem;
        box-shadow: 1px 1px 1px rgba(0,0,0,0.1): 
        font-size: 1rem;
        padding: 0.8rem 1.5rem;
        outline: none;
        border:0.2px solid #ddd;
        margin-top: 0.3rem;
        
        &:focus {
           box-shadow: 1px 1px 1px -1px rgba(11, 9, 234, 0.9);
        }
    }

    & li {
        margin-left: 1rem;
        color: black;
        margin-top: 0.3rem;
        display: inline-block;

    }

    & > select {
        padding: 0.7rem 1.5rem;
        padding: 0.8rem 1.5rem;
        outline: none;
        border:0.2px solid #ddd;
        margin-top: 0.3rem;
        border-radius: 0.5rem;
        font-size: 1rem;

        &:focus {
            box-shadow: 1px 1px 1px -2px rgba(11, 9, 234, 0.9);
         }
    }
`;

export const FooterWrapper = styles.div`
    display: flex;
    background: #383838;
    justify-content: space-between;
    padding: 2rem 3rem 1rem;
    color: white;

    & div {
        padding: 1rem 0;

        & span {
            text-transform: uppercase;
            letter-spacing: 3px;
        }
    }

    @media (max-width: 898px){
        text-align: center;
        flex-direction: column;
        padding-top: 3rem 4rem 2rem;
        
    }
`;
