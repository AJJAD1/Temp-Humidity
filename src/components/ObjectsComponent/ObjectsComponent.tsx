import { IonButton, IonCard, IonContent, IonGrid, IonPage, IonRow } from "@ionic/react";
import React from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { connect } from "react-redux";
import "./ObjectsComponent.scss";
import { getObjectAndName } from "../../data/manageObject/objectAction";
import LineChart from "../Chart/LineChart";
import ChartForHumidity from "../Chart/ChartForHumidity";

const mapStateToProps = (state: any) => ({
  objectItemList: state
});

const mapDispatchToProps = (dispatch: any) => ({
  getObjectAndNameDispatch: () => dispatch(getObjectAndName()),

});

type Props = WithTranslation &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

const ObjectsComponent: React.FC<Props> = ({ objectItemList, getObjectAndNameDispatch }) => {

  //const posts = [{ "objectName": "OB1", "planeForObjectName": "Plane1" }, { "objectName": "OB2", "planeForObjectName": "Plane2" },];

  let objectListData = objectItemList.objectItem.objectItemList

  const btnClicked = () => {
    console.log(objectListData,"123")
    getObjectAndNameDispatch()
  }

  return (
    <>
      <IonPage className="ion-objectlist-component">
        <h1 className="text">Temperature °C & Humidity %</h1>
        <IonCard className="ion-card-temp">
<LineChart/>
        </IonCard>
        <IonCard className="ion-card-humidity">

<ChartForHumidity/>
        </IonCard>
        <IonButton className="ion-scan-button" onClick={btnClicked}>Scan</IonButton>
      </IonPage>
    </>
  );
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(ObjectsComponent)
);
