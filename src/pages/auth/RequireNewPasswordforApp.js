import { RequireNewPassword } from 'aws-amplify-react'
import {
  IonPage,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonRow,
  IonGrid,
} from '@ionic/react'
import './RequireNewPasswordforApp.scss'
import Typography from '../../components/typo/Typography'
import ButtonConmponent from '../../components/button/Button'
import { withTranslation } from 'react-i18next'

class RequireNewPasswordforApp extends RequireNewPassword {
  state = {
    errorMessage: null,
  }

  error(err) {
    this.setState({ errorMessage: err.message })
  }

  clickChange = (e) => {
    this.setState({ errorMessage: null })
    this.change(e)
  }

  showComponent(theme) {
    return (
      <IonPage id="login-page">
        <IonContent>
          <div className="content">
            <IonGrid>
              <IonRow>
                <Typography
                  variant="title1"
                  color="white96"
                  className="greetMsg"
                >
                  {this.props.t('auth-niceToMeetYou')}
                </Typography>
              </IonRow>
              <IonRow className="errorRowNewPwd" text-center>
                <Typography variant="body1" color="white64" className="subText">
                  {this.props.t('auth-moreSecure')} <br />{' '}
                  {this.props.t('auth-setNewPassword')}
                </Typography>
              </IonRow>
              <IonRow className="passwordRow">
                <IonItem className="ionItem">
                  <IonLabel position="stacked">
                    <Typography variant="body2" color="white64">
                      {this.props.t('auth-NewPassword')}
                    </Typography>
                  </IonLabel>
                  <IonInput
                    key="password"
                    type="password"
                    name="password"
                    placeholder={this.props.t('auth-enterNewPassword')}
                    onIonChange={this.handleInputChange}
                    className="ionInput"
                  ></IonInput>
                </IonItem>
              </IonRow>
              {this.state.errorMessage ? (
                <IonRow className="error-for-newpassword">
                  <Typography
                    variant="caption1"
                    color="critical"
                    className="error-for-newpassword-typo"
                  >
                    {this.state.errorMessage}
                  </Typography>
                </IonRow>
              ) : null}
              <IonRow className="submitRow">
                <ButtonConmponent
                  className="buttonSubmit"
                  onClick={this.clickChange}
                >
                  {this.props.t('continue')}
                </ButtonConmponent>
              </IonRow>
            </IonGrid>
          </div>
        </IonContent>
      </IonPage>
    )
  }
}

export default withTranslation()(RequireNewPasswordforApp)
