import { IonApp, IonIcon, IonImg, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react'
import { Link, Redirect, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.scss'
import './app.scss'
import { withTranslation, WithTranslation } from 'react-i18next'
import ServiceWorkerWrapper from './components/notifications/ServiceWorkerWrapper'
import ObjectsComponent from './components/ObjectsComponent/ObjectsComponent';


type Props = WithTranslation

const App: React.FC<Props> = () => {
  return (
    <IonApp >
      <ServiceWorkerWrapper />
                <ObjectsComponent />
    </IonApp>
  )
}

export default withTranslation()(App)
