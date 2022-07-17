import { IonPage } from "@ionic/react";
import React from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { connect } from "react-redux";
import "./Home.scss";

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({});

type Props = WithTranslation &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const Home: React.FC<Props> = ({ }) => {

  return (
    <>
      <IonPage className="ion-page">

      </IonPage>
    </>
  );
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(Home)
);
