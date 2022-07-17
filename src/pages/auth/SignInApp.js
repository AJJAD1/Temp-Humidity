import { SignIn } from 'aws-amplify-react'
import {
  IonPage,
  IonContent,
  IonItem,
  IonInput,
  IonLabel,
  IonRow,
  IonGrid,
} from '@ionic/react'
import './SignInApp.scss'
import Typography from '../../components/typo/Typography'
import ButtonConmponent from '../../components/button/Button'
import { withTranslation } from 'react-i18next'
// import HeaderComponent from "../../components/header/Header";

/**
 * Note that we used .js instead of .tsx because of the flexibility to extend from amplify.
 * Otherwise we would have trouble with the properties and state
 */
class SignInApp extends SignIn {
  state = {
    errorMessage: null,
  }

  error(err) {
    this.setState({ errorMessage: err.message })
  }

  clickSignIn = (e) => {
    this.setState({ errorMessage: null })

    // This manual check is required due to a bug in amplify, compare:
    // https://github.com/aws-amplify/amplify-js/issues/5623

    if (!this.inputs.password) {
      this.setState({ errorMessage: 'Password cannot be empty' })
    } else {
      this.signIn(e)
    }
  }

  showComponent(theme) {
    return (
      <IonPage id="login-page">
        {/* <HeaderComponent
          headerLable="common.header"
          showBackButton={false}
          showLogo={true}
        /> */}
        <IonContent>
          <div className="content">
            <IonGrid>
              <IonRow>
                <Typography variant="title1" color="red">
                  Login
                </Typography>
              </IonRow>
              <IonRow className="emailRow">
                <IonItem className="ionItem">
                  <IonLabel position="stacked" className="email-label">
                    Email
                  </IonLabel>
                  <IonInput
                    inputMode="email"
                    type="email"
                    key="username"
                    name="username"
                    placeholder={this.props.t('email')}
                    onIonChange={this.handleInputChange}
                    className="ionInput emailInput"
                  ></IonInput>
                </IonItem>
              </IonRow>
              {this.state.errorMessage &&
              this.state.errorMessage.includes('exist') ? (
                <IonRow>
                  <Typography
                    variant="caption1"
                    color="critical"
                    className="loginAccountError"
                  >
                    {this.props.t('login-account-does-not-exist')}
                  </Typography>
                </IonRow>
              ) : this.state.errorMessage &&
                this.state.errorMessage.includes('Email cannot be empty') ? (
                <IonRow>
                  <Typography
                    variant="caption1"
                    color="critical"
                    className="loginEmptyError"
                  >
                    {this.state.errorMessage}
                  </Typography>
                </IonRow>
              ) : null}
              <IonRow>
                <IonItem className="ionItem">
                  <IonLabel position="stacked" className="pass-label">
                    {this.props.t('Password')}
                  </IonLabel>
                  <IonInput
                    key="password"
                    type="password"
                    name="password"
                    placeholder={this.props.t('password')}
                    // placeholder="Enter your password"
                    onIonChange={this.handleInputChange}
                    className="ionInput pwdInput"
                  ></IonInput>
                </IonItem>
              </IonRow>
              {this.state.errorMessage &&
              this.state.errorMessage.includes('Password cannot be empty') ? (
                <IonRow>
                  <Typography
                    variant="caption1"
                    color="critical"
                    className="passwordEmptyError"
                  >
                    {this.state.errorMessage}
                  </Typography>
                </IonRow>
              ) : this.state.errorMessage &&
                !this.state.errorMessage.includes('exist') &&
                !this.state.errorMessage.includes('Email cannot be empty') &&
                !this.state.errorMessage.includes(
                  'Password cannot be empty',
                ) ? (
                <IonRow>
                  <Typography
                    variant="caption1"
                    color="critical"
                    className="errorRow"
                  >
                    {this.state.errorMessage}
                    {/* {this.props.t("login-error")} */}
                  </Typography>
                </IonRow>
              ) : null}

              <IonRow className="submitRow">
                <ButtonConmponent
                  className="buttonSubmit"
                  color="#ee7203"
                  clickHandler={this.clickSignIn}
                  buttonLabel="login"
                />
              </IonRow>
              <IonRow>
                <ButtonConmponent
                  className="buttonForgotPassword"
                  color="transparent"
                  variant="primary"
                  clickHandler={() => this.changeState('forgotPassword')}
                  buttonLabel="Forgot Password ?"
                />
              </IonRow>
            </IonGrid>
          </div>
        </IonContent>
      </IonPage>
    )
  }
}

export default withTranslation()(SignInApp)
