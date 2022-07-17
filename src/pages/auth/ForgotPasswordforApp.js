import { ForgotPassword } from 'aws-amplify-react'
import {
  IonPage,
  IonContent,
  IonItem,
  IonInput,
  IonLabel,
  IonRow,
  IonGrid,
  IonCol,
  IonIcon,
} from '@ionic/react'
import './ForgotPasswordforApp.scss'
import Typography from '../../components/typo/Typography'
import { withTranslation } from 'react-i18next'
import { checkmarkOutline } from 'ionicons/icons'
import ButtonConmponent from '../../components/button/Button'
class ForgotPasswordforApp extends ForgotPassword {
  //To reset the errorMessage to blank, if not, after sendView()
  componentDidUpdate(prevProps, prevState) {
    if (prevState.errorMessage) {
      this.setState({
        errorMessage: null,
      })
    }
  }

  state = {
    errorMessage: null,
  }

  error(err) {
    this.setState({ errorMessage: err.message })
  }

  sendView() {
    return (
      <div className="forgotPwd">
        <IonRow>
          <Typography variant="title1" color="white96" className="title-row">
            {this.props.t('forgot-password-title')}
          </Typography>
        </IonRow>
        <IonRow>
          <Typography variant="title1" color="white96" className="subtitle1">
            {this.props.t('forgot-password-subtitle')}
          </Typography>
        </IonRow>
        <IonRow className="forgotEmailRow">
          <IonItem className="ionItem emailRowItem">
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput
              autofocus="true"
              inputMode="email"
              type="email"
              id="username"
              key="username"
              name="username"
              placeholder={this.props.t('email')}
              onIonChange={this.handleInputChange}
              className="ionInput emailInput"
            ></IonInput>
          </IonItem>
        </IonRow>
      </div>
    )
  }

  submitView() {
    return (
      <div className="forgotPwd2">
        <IonRow>
          <IonRow className="message-title-row">
            <IonCol size="1" className="checkmark">
              <IonIcon icon={checkmarkOutline} />
            </IonCol>
            <IonCol>
              <Typography variant="body2" className="message-title">
                {this.props.t('forgot-password-message-title')}
              </Typography>
            </IonCol>
          </IonRow>
        </IonRow>
        <IonRow>
          <Typography variant="title1" color="white96" className="title-row">
            {this.props.t('change-password-title')}
          </Typography>
        </IonRow>
        <IonRow>
          <Typography variant="body1" color="white64" className="subtitle1">
            {this.props.t('change-password-subtitle')}
          </Typography>
        </IonRow>
        <IonRow className="codeRow">
          <IonItem className="ionItem codeRowItem">
            <IonLabel position="stacked">
              {this.props.t('forgot-password-code')}
            </IonLabel>
            <IonInput
              autofocus="true"
              inputMode="numeric"
              id="code"
              key="code"
              name="code"
              type="number"
              placeholder={this.props.t('forgot-password-enter-code')}
              autocomplete="off"
              onIonChange={this.handleInputChange}
              className="ionInput"
            ></IonInput>
          </IonItem>
        </IonRow>
        <IonRow className="newPasswordRow">
          <IonItem className="ionItem passwordRowItem">
            <IonLabel position="stacked">{this.props.t('password')}</IonLabel>
            <IonInput
              inputMode="text"
              key="password"
              id="password"
              type="password"
              name="password"
              placeholder={this.props.t('auth-setNewPassword')}
              autocomplete="new-password"
              onIonChange={this.handleInputChange}
              className="ionInput"
            ></IonInput>
          </IonItem>
        </IonRow>
      </div>
    )
  }

  showComponent(theme) {
    const { authData = {} } = this.props
    return (
      <IonPage id="forgot-password-page">
       
        <IonContent>
          <div className="content">
            <IonGrid>
              {this.state.delivery || authData.username
                ? this.submitView()
                : this.sendView()}
              {this.state.errorMessage &&
              this.state.errorMessage.includes('Confirmation') ? (
                <IonRow className="forgotPasswordErrorRow1">
                  <Typography variant="caption1" color="critical">
                    {this.state.errorMessage}
                  </Typography>
                </IonRow>
              ) : this.state.errorMessage &&
                this.state.errorMessage.includes('empty') ? (
                <IonRow className="forgotPasswordErrorRow">
                  <Typography variant="caption1" color="critical">
                    {this.state.errorMessage}
                  </Typography>
                </IonRow>
              ) : this.state.errorMessage &&
                this.state.errorMessage.includes('Username/client') ? (
                <IonRow className="forgotPasswordErrorRow2">
                  <Typography variant="caption1" color="critical">
                    {this.props.t('forgot-password-username-error')}
                  </Typography>
                </IonRow>
              ) : this.state.errorMessage &&
                this.state.errorMessage.includes('verification') ? (
                <IonRow className="forgotPasswordErrorRow3">
                  <Typography variant="caption1" color="critical">
                    {this.props.t('forgot-password-invalid-code')}
                  </Typography>
                </IonRow>
              ) : null}
              <IonRow className="submitRow">
                {this.state.delivery || authData.username ? (
                  <ButtonConmponent
                    className="pwdButtonSubmit"
                    color="#04ace2"
                    buttonLabel="Submit"
                    onClick={this.submit}
                  />
                ) : (
                  <ButtonConmponent
                    className="buttonContinue"
                    color="#04ace2"
                    buttonLabel="Continue"
                    onClick={this.send}
                  />
                )}
              </IonRow>
            </IonGrid>
          </div>
        </IonContent>
      </IonPage>
    )
  }
}

export default withTranslation()(ForgotPasswordforApp)
