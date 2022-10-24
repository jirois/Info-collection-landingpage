import styles from "styled-components";

export const Form = styles.form`
    width: 70%;
    margin: 0 auto;
    background: white;
    padding: 1rem;
    margin-left: 7rem;
    margin-top: -22rem;


    & h1 {
        color: #782322;
        text-align: center;
        padding: 1.5rem 0.8rem 0;
        font-size: 1.4rem;
    }

    & div {


        
    }


    @media (max-width: 897px){
        width: 90%;
        margin: 0 auto;
        margin-top: 1rem;
        margin-left: 0;
        padding: 1rem;
        m
       box-shadow: 3px 5px 9px rgba(0,0,0,0.3);


      }
`;

export const BtnCon = styles.div`
      text-align: center;

      & button {
        padding: 1rem 2rem;
        display: inline-block;
        background: #f94319;
        border: none;
        text-transform: uppercase;
        color: white;
        font-size: 0.8rem;
        cursor: pointer;
        font-size: 1.1rem;
         margin-top: 1.5rem;
         text-align: center;

         &:disabled,
         &:disabled:hover,
         &:disabled:active {
            background: #ccc;
            color: #484848;
            border-color: #ccc;
            cursor: not-allowed;
         }
        
    }
`;
