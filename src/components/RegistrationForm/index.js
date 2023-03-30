// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isSubmittedForm: false,
    isFirstNameError: false,
    isLastNameError: false,
  }

  validateLastName = () => {
    const {lastName} = this.state

    return lastName !== ''
  }

  onBlurSecondName = () => {
    const isValidLastName = this.validateLastName()

    this.setState({isLastNameError: !isValidLastName})
  }

  lastNameValue = event => {
    this.setState({lastName: event.target.value})
  }

  lastNameInput = () => {
    const {isLastNameError, lastName} = this.state
    const className = isLastNameError
      ? 'first-name-inputEl error-message'
      : 'first-name-inputEl'

    return (
      <div className="first-name-container">
        <label htmlFor="lastName" className="first-name">
          LAST NAME
        </label>
        <input
          value={lastName}
          placeholder="Last name"
          id="lastName"
          className={`${className}`}
          onChange={this.lastNameValue}
          onBlur={this.onBlurSecondName}
          type="text"
        />
      </div>
    )
  }

  validateFirstName = () => {
    const {firstName} = this.state

    return firstName !== ''
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()

    this.setState({isFirstNameError: !isValidFirstName})
  }

  firstNameValue = event => {
    this.setState({firstName: event.target.value})
  }

  firstNameInput = () => {
    const {isFirstNameError, firstName} = this.state
    const className = isFirstNameError
      ? 'first-name-inputEl error-message'
      : 'first-name-inputEl'

    return (
      <div className="first-name-container">
        <label htmlFor="firstName" className="first-name">
          FIRST NAME
        </label>
        <input
          value={firstName}
          placeholder="First name"
          id="firstName"
          className={`${className}`}
          onChange={this.firstNameValue}
          onBlur={this.onBlurFirstName}
          type="text"
        />
      </div>
    )
  }

  onSubmitForm = event => {
    event.preventDefault()

    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({isSubmittedForm: true})
    } else {
      this.setState({
        isLastNameError: !isValidLastName,
        isFirstNameError: !isValidFirstName,
        isSubmittedForm: false,
      })
    }
  }

  registrationFrom = () => {
    const {isFirstNameError, isLastNameError} = this.state

    return (
      <form onSubmit={this.onSubmitForm} className="form-inner-container">
        {this.firstNameInput()}
        {isFirstNameError && <p className="error-field">Required</p>}

        {this.lastNameInput()}
        {isLastNameError && <p className="error-field">Required</p>}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  submitAnotherResponse = () => {
    this.setState(prevState => ({
      firstName: '',
      lastName: '',
      isSubmittedForm: !prevState.isSubmittedForm,
    }))
  }

  SubmittedSuccessful = () => (
    <>
      <img
        className="success-image"
        alt="success"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <p className="success-text">Submitted Successfully</p>
      <button
        onClick={this.submitAnotherResponse}
        className="button"
        type="button"
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {isSubmittedForm} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Registration</h1>
        <div className="form-container">
          {isSubmittedForm
            ? this.SubmittedSuccessful()
            : this.registrationFrom()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
