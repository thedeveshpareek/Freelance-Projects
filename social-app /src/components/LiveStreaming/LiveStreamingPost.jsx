import React from "react";
import { Row, Col, Image, Container, Media } from "react-bootstrap";
import "./LiveStreaming.css";
import { Link } from "react-router-dom";

const LiveStreamingPost = () => {
    return (
        <>
            <div className="live-streaming-post-sec">
                <Container>
                    <Row>
                        <Col sm="12" md="12">
                            <div className="live-streaming-post-box">
                                <div className="live-streaming-post-card">
                                    <div className="live-streaming-post-img-sec">
                                        <Image
                                            src={
                                                window.location.origin +
                                                "/assets/images/live-stream-post/live-stream-post-1.jpg"
                                            }
                                            alt=""
                                            className="live-streaming-post-img"
                                        />
                                    </div>
                                    <div className="live-streaming-post-info">
                                        <div className="live-streaming-post-user-info">
                                            <div className="live-streaming-post-user-img-sec">
                                                <Image
                                                    src={
                                                        window.location.origin +
                                                        "/assets/images/user.png"
                                                    }
                                                    alt=""
                                                    className="live-streaming-post-user-img"
                                                />
                                            </div>
                                            <div className="live-streaming-post-user-details">
                                                <Link to="#"><h4>axelbelujoin</h4></Link>
                                                <p>3 hrs ago</p>
                                            </div>
                                        </div>
                                        <div className="live-streaming-post-action-sec">
                                            <ul className="list-unstyled live-streaming-post-action-icons">
                                                <Media as="li">231 likes</Media>
                                                <Media as="li"><i className="far fa-heart"></i></Media>
                                                <Media as="li"><i className="fas fa-ellipsis-h"></i></Media>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="live-streaming-post-card">
                                    <div className="live-streaming-post-img-sec">
                                        <Image
                                            src={
                                                window.location.origin +
                                                "/assets/images/live-stream-post/live-stream-post-2.jpg"
                                            }
                                            alt=""
                                            className="live-streaming-post-img"
                                        />
                                    </div>
                                    <div className="live-streaming-post-info">
                                        <div className="live-streaming-post-user-info">
                                            <div className="live-streaming-post-user-img-sec">
                                                <Image
                                                    src={
                                                        window.location.origin +
                                                        "/assets/images/user.png"
                                                    }
                                                    alt=""
                                                    className="live-streaming-post-user-img"
                                                />
                                            </div>
                                            <div className="live-streaming-post-user-details">
                                                <Link to="#"><h4>axelbelujoin</h4></Link>
                                                <p>3 hrs ago</p>
                                            </div>
                                        </div>
                                        <div className="live-streaming-post-action-sec">
                                            <ul className="list-unstyled live-streaming-post-action-icons">
                                                <Media as="li">231 likes</Media>
                                                <Media as="li"><i className="far fa-heart"></i></Media>
                                                <Media as="li"><i className="fas fa-ellipsis-h"></i></Media>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="live-streaming-post-card">
                                    <div className="live-streaming-post-img-sec">
                                        <Image
                                            src={
                                                window.location.origin +
                                                "/assets/images/live-stream-post/live-stream-post-3.jpg"
                                            }
                                            alt=""
                                            className="live-streaming-post-img"
                                        />
                                    </div>
                                    <div className="live-streaming-post-info">
                                        <div className="live-streaming-post-user-info">
                                            <div className="live-streaming-post-user-img-sec">
                                                <Image
                                                    src={
                                                        window.location.origin +
                                                        "/assets/images/user.png"
                                                    }
                                                    alt=""
                                                    className="live-streaming-post-user-img"
                                                />
                                            </div>
                                            <div className="live-streaming-post-user-details">
                                                <Link to="#"><h4>axelbelujoin</h4></Link>
                                                <p>3 hrs ago</p>
                                            </div>
                                        </div>
                                        <div className="live-streaming-post-action-sec">
                                            <ul className="list-unstyled live-streaming-post-action-icons">
                                                <Media as="li">231 likes</Media>
                                                <Media as="li"><i className="far fa-heart"></i></Media>
                                                <Media as="li"><i className="fas fa-ellipsis-h"></i></Media>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="live-streaming-post-card">
                                    <div className="live-streaming-post-img-sec">
                                        <Image
                                            src={
                                                window.location.origin +
                                                "/assets/images/live-stream-post/live-stream-post-4.jpg"
                                            }
                                            alt=""
                                            className="live-streaming-post-img"
                                        />
                                    </div>
                                    <div className="live-streaming-post-info">
                                        <div className="live-streaming-post-user-info">
                                            <div className="live-streaming-post-user-img-sec">
                                                <Image
                                                    src={
                                                        window.location.origin +
                                                        "/assets/images/user.png"
                                                    }
                                                    alt=""
                                                    className="live-streaming-post-user-img"
                                                />
                                            </div>
                                            <div className="live-streaming-post-user-details">
                                                <Link to="#"><h4>axelbelujoin</h4></Link>
                                                <p>3 hrs ago</p>
                                            </div>
                                        </div>
                                        <div className="live-streaming-post-action-sec">
                                            <ul className="list-unstyled live-streaming-post-action-icons">
                                                <Media as="li">231 likes</Media>
                                                <Media as="li"><i className="far fa-heart"></i></Media>
                                                <Media as="li"><i className="fas fa-ellipsis-h"></i></Media>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="live-streaming-post-card">
                                    <div className="live-streaming-post-img-sec">
                                        <Image
                                            src={
                                                window.location.origin +
                                                "/assets/images/live-stream-post/live-stream-post-5.jpg"
                                            }
                                            alt=""
                                            className="live-streaming-post-img"
                                        />
                                    </div>
                                    <div className="live-streaming-post-info">
                                        <div className="live-streaming-post-user-info">
                                            <div className="live-streaming-post-user-img-sec">
                                                <Image
                                                    src={
                                                        window.location.origin +
                                                        "/assets/images/user.png"
                                                    }
                                                    alt=""
                                                    className="live-streaming-post-user-img"
                                                />
                                            </div>
                                            <div className="live-streaming-post-user-details">
                                                <Link to="#"><h4>axelbelujoin</h4></Link>
                                                <p>3 hrs ago</p>
                                            </div>
                                        </div>
                                        <div className="live-streaming-post-action-sec">
                                            <ul className="list-unstyled live-streaming-post-action-icons">
                                                <Media as="li">231 likes</Media>
                                                <Media as="li"><i className="far fa-heart"></i></Media>
                                                <Media as="li"><i className="fas fa-ellipsis-h"></i></Media>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="live-streaming-post-card">
                                    <div className="live-streaming-post-img-sec">
                                        <Image
                                            src={
                                                window.location.origin +
                                                "/assets/images/live-stream-post/live-stream-post-3.jpg"
                                            }
                                            alt=""
                                            className="live-streaming-post-img"
                                        />
                                    </div>
                                    <div className="live-streaming-post-info">
                                        <div className="live-streaming-post-user-info">
                                            <div className="live-streaming-post-user-img-sec">
                                                <Image
                                                    src={
                                                        window.location.origin +
                                                        "/assets/images/user.png"
                                                    }
                                                    alt=""
                                                    className="live-streaming-post-user-img"
                                                />
                                            </div>
                                            <div className="live-streaming-post-user-details">
                                                <Link to="#"><h4>axelbelujoin</h4></Link>
                                                <p>3 hrs ago</p>
                                            </div>
                                        </div>
                                        <div className="live-streaming-post-action-sec">
                                            <ul className="list-unstyled live-streaming-post-action-icons">
                                                <Media as="li">231 likes</Media>
                                                <Media as="li"><i className="far fa-heart"></i></Media>
                                                <Media as="li"><i className="fas fa-ellipsis-h"></i></Media>
                                            </ul>
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default LiveStreamingPost;