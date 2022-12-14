import React, { useState } from "react";
import EditProfileCard from "./EditProfileCard";
import DeleteAccountCard from "./DeleteAccountCard";
import ChangePasswordCard from "./ChangePasswordCard";
import EditProfileTabSec from "./EditProfileTabSec";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import AvailabitityStatusCard from "./AvailabitityStatusCard";
import TwoStepAuthentication from "./TwoStepAuthentication";
import SessionManagement from "./SessionManagement";

const EditProfile = (props) => {
  const [activeSec, setActiveSec] = useState("profile-card");

  return (
    <div className="edit-profile">
      <Container>
        <Row>
          <Col sm={12} md={4}>
            <div className="vertical-menu edit-p">
              <div className="tab" role="tabpanel">
                <EditProfileTabSec
                  activeSec={activeSec}
                  setActiveSec={setActiveSec}
                  location={props.location}
                />
              </div>
            </div>
          </Col>
          <Col md={8} sm={12}>
            <div className="tab-content tabs">
              <EditProfileCard
                activeSec={activeSec}
                setActiveSec={setActiveSec}
              />

              <ChangePasswordCard
                activeSec={activeSec}
                setActiveSec={setActiveSec}
              />

              <DeleteAccountCard
                activeSec={activeSec}
                setActiveSec={setActiveSec}
              />

              <AvailabitityStatusCard
                activeSec={activeSec}
                setActiveSec={setActiveSec}
              />

              <TwoStepAuthentication
                activeSec={activeSec}
                setActiveSec={setActiveSec}
              />

              <SessionManagement
                activeSec={activeSec}
                setActiveSec={setActiveSec}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToPros = (state) => ({
  userData: state.users,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(EditProfile);
