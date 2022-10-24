import useInput from "../../hooks/useInput";
import { FormControl } from "../UI/Styles";
import { BtnCon, Form } from "./HeroFormElements";

const isNotEmpty = (value) => value.trim() !== "";
const isNotValidEmail = (value) => value.includes("@");

const HeroForm = () => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);
  const {
    value: companyEmailValue,
    isValid: companyEmailIsValid,
    hasError: companyEmailHasError,
    valueChangeHandler: companyEmailChangeHandler,
    inputBlurHandler: companyEmailBlurHandler,
    reset: resetCompanyEmail,
  } = useInput(isNotValidEmail);
  const {
    value: companyNameValue,
    isValid: companyNameIsValid,
    hasError: companyNameHasError,
    valueChangeHandler: companyNameChangeHandler,
    inputBlurHandler: companyNameBlurHandler,
    reset: resetCompanyName,
  } = useInput(isNotEmpty);
  const {
    value: websiteUrlValue,
    isValid: websiteUrlIsValid,
    hasError: websiteUrlHasError,
    valueChangeHandler: websiteUrlChangeHandler,
    inputBlurHandler: websiteUrlBlurHandler,
    reset: resetWebsiteUrl,
  } = useInput(isNotEmpty);
  const {
    value: companyListValue,
    isValid: companyListIsValid,
    hasError: companyListHasError,
    valueChangeHandler: companyListChangeHandler,
    inputBlurHandler: companyListBlurHandler,
    reset: resetCompanyList,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (
    firstNameIsValid &&
    lastNameIsValid &&
    companyEmailIsValid &&
    companyNameIsValid &&
    websiteUrlIsValid &&
    companyListIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    if (!formIsValid) {
      return;
    }

    resetFirstName();
    resetLastName();
    resetCompanyEmail();
    resetCompanyName();
    resetWebsiteUrl();
    resetCompanyList();
  };
  return (
    <Form onSubmit={submitHandler}>
      <h1>Complete the form to get your Free Guide.</h1>
      <FormControl>
        <label htmlFor="first_name">
          First Name <span>*</span>
        </label>
        <input
          type="text"
          name="first_name"
          value={firstNameValue}
          onChange={firstNameChangeHandler}
          onBlur={firstNameBlurHandler}
        />
        {firstNameHasError && <li>Please enter a first name</li>}
      </FormControl>
      <FormControl>
        <label htmlFor="last_name">
          Last Name <span>*</span>
        </label>
        <input
          type="text"
          name="last_name"
          value={lastNameValue}
          onChange={lastNameChangeHandler}
          onBlur={lastNameBlurHandler}
        />
        {lastNameHasError && <li>Please enter a last name</li>}
      </FormControl>
      <FormControl>
        <label htmlFor="company_email">
          Company Email <span>*</span>
        </label>
        <input
          type="email"
          name="company_email"
          value={companyEmailValue}
          onChange={companyEmailChangeHandler}
          onBlur={companyEmailBlurHandler}
        />
        {companyEmailHasError && <li>Please provide a valid email address</li>}
      </FormControl>
      <FormControl>
        <label htmlFor="company_name">
          Company Name <span>*</span>
        </label>
        <input
          type="text"
          name="company_name"
          value={companyNameValue}
          onChange={companyNameChangeHandler}
          onBlur={companyNameBlurHandler}
        />
        {companyNameHasError && <li>Please enter a company name</li>}
      </FormControl>
      <FormControl>
        <label htmlFor="web_url">
          Website Url <span>*</span>
        </label>
        <input
          type="text"
          name="web_url"
          value={websiteUrlValue}
          onChange={websiteUrlChangeHandler}
          onBlur={websiteUrlBlurHandler}
        />
        {websiteUrlHasError && <li>Please enter a website url</li>}
      </FormControl>

      <FormControl>
        <label>Company List</label>
        <select
          value={companyListValue}
          onChange={companyListChangeHandler}
          onBlur={companyListBlurHandler}
        >
          <option value="">Pleae select an Option</option>
          <option value="manufacturer">Manufacturer</option>
          <option value="distributor">Distributor</option>
          <option value="logistics">Logistics</option>
          <option value="industrial service">Industrial Service</option>
          <option value="agency">Agency</option>
          <option value="other">Other</option>
        </select>
        {companyListHasError && <li>Please select an option</li>}
      </FormControl>

      <BtnCon>
        <button disabled={!formIsValid}>Download Guide Here</button>
      </BtnCon>
    </Form>
  );
};

export default HeroForm;
