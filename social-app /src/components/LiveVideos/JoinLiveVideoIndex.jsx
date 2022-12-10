import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { Form, Button, Container, Row, Col,Table } from "react-bootstrap";
import "./LiveIndex.css";
import {
    fetchSingleLiveVideoStart
} from "../../store/actions/LiveVideoAction";
import { translate, t } from "react-multi-lang";
import PaymentModal from "./PaymentModal";
import { Link } from "react-router-dom";
import AgoraLive from "../Sample/AgoraLive";

const JoinLiveVideosIndex = (props) => {

    const [username, setUsername] = useState("");
    const [paymentModal, setPaymentModal] = useState(false);

    const closePaymentModal = () => {
        setPaymentModal(false);
    };

    useEffect(() => {
        if (localStorage.getItem("username") != null) {
            setUsername(localStorage.getItem("username"));
        }
        props.dispatch(
            fetchSingleLiveVideoStart({
                live_video_unique_id: props.match.params.live_video_unique_id,
            })
        );
    }, []);

    const openPaymentModal = (event) => {
        event.preventDefault();
        setPaymentModal(true);
    };


    return (
        <div className="card-list-sec">
            <Container>
            <h4 className="head-title">{t("live_video")}</h4>

                <Row>
                    <Col sm={12} md={12}>
                        {props.liveVideo.loading ? (
                            "Loading..."
                        ) : props.liveVideo.data ? (
                            <AgoraLive 
                                liveVideoDetails={props.liveVideo.data}
                                isOwner={props.liveVideo.data.is_owner}
                            />
                        ) : (
                            ""
                        )}
                    </Col>

                </Row>
                        
            </Container>
        </div>
    );
};

const mapStateToPros = (state) => ({
    liveVideo: state.liveVideo.singleLiveVideo,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(translate(JoinLiveVideosIndex));
