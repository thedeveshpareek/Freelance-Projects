import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Row,
  Col,
  Image,
  Form,
  Media,
} from "react-bootstrap";
import { connect } from "react-redux";
import {
  postFileUploadStart,
  savePostStart,
  postFileRemoveStart,
  fetchPostCategoriesStart,
} from "../../../store/actions/PostAction";

import { searchUserStart } from "../../../store/actions/HomeAction";

import { createNotification } from "react-redux-notify/lib/modules/Notifications";
import { getErrorNotificationMessage } from "../../helper/NotificationMessage";
import { translate, t } from "react-multi-lang";
// import ContentEditable from 'react-contenteditable'
// import { set } from "date-fns/esm";
import PostEditor from "../postMentions/PostEditor";
import { stateToHTML } from "draft-js-export-html";
import { Multiselect } from "multiselect-react-dropdown";
import ContentCreatorSteps from "./ContentCreatorSteps";

const CreatePostIndex = (props) => {
  const [inputData, setInputData] = useState({});

  const [image, setImage] = useState({ previewImage: "" });
  const [paidPost, setPaidPost] = useState(false);
  const [videoTitle, setVideoTitle] = useState("");

  const [fileUploadStatus, setFileUploadStatus] = useState(false);

  const [videoThumbnail, setVideoThumbnail] = useState(false);

  const mentionsRef = useRef();

  const [editorContentState, setEditorContentstate] = useState("");

  const [editorHtmlContent, setEditorHtmlContent] = useState("");

  const [disableImage, setDisableImage] = useState(false);

  const [disableVideo, setDisableVideo] = useState(false);

  const [videoPreview, setVideoPreview] = useState({ videoPreviewImage: "" });

  const [videoPreviewUrl, setVideoPreviewUrl] = useState("");

  const [imageFiles, setImageFiles] = useState([]);

  const [audioTitle, setAudioTitle] = useState("");

  const [audioThumbnail, setAudioThumbnail] = useState(false);

  const [disableAudio, setDisableAudio] = useState(false);

  const [audioPreviewUrl, setAudioPreviewUrl] = useState("");

  useEffect(() => {
    props.dispatch(fetchPostCategoriesStart());
  }, []);

  const getFileArray = async (event) => {
    let ImagesFilesArray = await Object.entries(event.target.files).map(
      (e) => e[1]
    );
    return ImagesFilesArray;
  };

  const toBase64 = async (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async () => await resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  // const handleChangeImage = (event, fileType) => {
  //   if (event.currentTarget.type === "file") {
  //     setFileUploadStatus(true);

  //     // for preview image
  //     let ImagesArray = Object.entries(event.target.files).map((e) => {

  //       console.log(e[1]);
  //       return URL.createObjectURL(e[1]);
  //       }
  //     );

  //     //file type image array
  //     // let result = getFileArray(event).then(result => {
  //     //   console.log(result)
  //     //   props.dispatch(
  //     //     postFileUploadStart({
  //     //       file:  result,
  //     //       file_type: fileType,
  //     //     })
  //     //   );
  //     // });

  //     //base64encoded

  //     let ImagesFilesArray = Object.entries(event.target.files).map((e) => {
  //       toBase64(e[1]).then(result => {
  //         props.dispatch(
  //           postFileUploadStart({
  //             file:  result,
  //             file_type: fileType,
  //           })
  //         );
  //        })

  //       //single file goes diffent

  //       // props.dispatch(
  //       //   postFileUploadStart({
  //       //     file:  e[1],
  //       //     file_type: fileType,
  //       //   })
  //       // );
  //       }
  //     );

  //     setImage([...image, ...ImagesArray ]);

  //     // console.log(result)

  //     // props.dispatch(
  //     //   postFileUploadStart({
  //     //     file:  getBinary(event).then(result => result),
  //     //     file_type: fileType,
  //     //   })
  //     // );
  //     setPaidPost(true);
  //     setDisableVideo(true);
  //     setDisableAudio(true);
  //   }
  // };

  // old code

  const handleChangeImage = (event, fileType) => {
    if (event.currentTarget.type === "file") {
      setFileUploadStatus(true);
      let reader = new FileReader();
      let file = event.currentTarget.files[0];
      reader.onloadend = () => {
        setImage({ ...image, previewImage: reader.result });
      };

      if (file) {
        reader.readAsDataURL(file);
      }
      props.dispatch(
        postFileUploadStart({
          file: event.currentTarget.files[0],
          file_type: fileType,
        })
      );
      setPaidPost(true);
      setDisableVideo(true);
      setDisableAudio(true);
    }
  };

  const handleChangeVideo = (event, fileType) => {
    setVideoTitle(event.currentTarget.files[0].name);
    if (event.currentTarget.type === "file") {
      setFileUploadStatus(true);
      let reader = new FileReader();
      let file = event.currentTarget.files[0];

      reader.onloadend = () => {
        setVideoPreviewUrl(reader.result);
      };

      if (file) {
        reader.readAsDataURL(file);
      }
      props.dispatch(
        postFileUploadStart({
          file: event.currentTarget.files[0],
          file_type: fileType,
        })
      );
      setPaidPost(true);
      setVideoThumbnail(true);
      setDisableImage(true);
      setDisableAudio(true);
    }
  };

  const handleChangeAudio = (event, fileType) => {
    setAudioTitle(event.currentTarget.files[0].name);
    if (event.currentTarget.type === "file") {
      setFileUploadStatus(true);
      let reader = new FileReader();
      let file = event.currentTarget.files[0];

      reader.onloadend = () => {
        setAudioPreviewUrl(reader.result);
      };

      if (file) {
        reader.readAsDataURL(file);
      }
      props.dispatch(
        postFileUploadStart({
          file: event.currentTarget.files[0],
          file_type: fileType,
        })
      );
      setPaidPost(true);
      setAudioThumbnail(true);
      setDisableImage(true);
      setDisableVideo(true);
    }
  };

  const imageClose = (event) => {
    event.preventDefault();
    if (props.fileUpload.loadingButtonContent !== null) {
      const notificationMessage = getErrorNotificationMessage(
        "File is being uploaded.. Please wait"
      );
      props.dispatch(createNotification(notificationMessage));
    } else {
      props.dispatch(
        postFileRemoveStart({
          file: props.fileUpload.data.file,
          file_type: props.fileUpload.data.post_file.file_type,
          blur_file: props.fileUpload.data.post_file.blur_file,
          post_file_id: props.fileUpload.data.post_file.post_file_id,
        })
      );
      setImage({ previewImage: "" });
      setFileUploadStatus(false);
      setDisableVideo(false);
      setDisableAudio(false);
      setPaidPost(false);
    }
  };

  const videoClose = (event) => {
    event.preventDefault();
    if (props.fileUpload.loadingButtonContent !== null) {
      const notificationMessage = getErrorNotificationMessage(
        "File is being uploaded.. Please wait"
      );
      props.dispatch(createNotification(notificationMessage));
    } else {
      props.dispatch(
        postFileRemoveStart({
          file: props.fileUpload.data.file ? props.fileUpload.data.file : "",
          file_type: props.fileUpload.data.post_file
            ? props.fileUpload.data.post_file.file_type
            : "",
          preview_file: props.fileUpload.data.post_file
            ? props.fileUpload.data.post_file.preview_file
            : "",
          post_file_id: props.fileUpload.data.post_file
            ? props.fileUpload.data.post_file.post_file_id
            : "",
        })
      );
      setFileUploadStatus(false);
      setVideoTitle("");
      setVideoThumbnail(false);
      setDisableImage(false);
      setDisableAudio(false);
      setPaidPost(false);
      setVideoPreviewUrl("");
    }
  };

  const audioClose = (event) => {
    event.preventDefault();
    if (props.fileUpload.loadingButtonContent !== null) {
      const notificationMessage = getErrorNotificationMessage(
        "File is being uploaded.. Please wait"
      );
      props.dispatch(createNotification(notificationMessage));
    } else {
      props.dispatch(
        postFileRemoveStart({
          file: props.fileUpload.data.file ? props.fileUpload.data.file : "",
          file_type: props.fileUpload.data.post_file
            ? props.fileUpload.data.post_file.file_type
            : "",
          preview_file: props.fileUpload.data.post_file
            ? props.fileUpload.data.post_file.preview_file
            : "",
          post_file_id: props.fileUpload.data.post_file
            ? props.fileUpload.data.post_file.post_file_id
            : "",
        })
      );
      setFileUploadStatus(false);
      setAudioTitle("");
      setAudioThumbnail(false);
      setDisableImage(false);
      setDisableVideo(false);
      setPaidPost(false);
      setAudioPreviewUrl("");
    }
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (fileUploadStatus) {
  //     props.dispatch(
  //       savePostStart({
  //         content: inputData.content ? inputData.content : "",
  //         amount: inputData.amount ? inputData.amount : "",
  //         post_files: props.fileUpload.data.post_file.post_file_id,
  //         preview_file: inputData.preview_file ? inputData.preview_file : "",
  //       })
  //     );
  //   } else {
  //     props.dispatch(
  //       savePostStart({
  //         content: inputData.content ? inputData.content : "",
  //         amount: inputData.amount ? inputData.amount : "",
  //       })
  //     );
  //   }
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (fileUploadStatus) {
      props.dispatch(
        savePostStart({
          content: editorHtmlContent,
          amount: inputData.amount ? inputData.amount : "",
          post_file_id: props.fileUpload.data.post_file.post_file_id,
          preview_file: inputData.preview_file ? inputData.preview_file : "",
          post_category_ids: inputData.post_category_ids
            ? inputData.post_category_ids
            : [],
        })
      );
    } else {
      props.dispatch(
        savePostStart({
          content: editorHtmlContent,
          amount: inputData.amount ? inputData.amount : "",
          post_category_ids: inputData.post_category_ids
            ? inputData.post_category_ids
            : [],
        })
      );
    }
  };

  const setValues = (inputValue) => {
    let user_id_arr = [];
    inputValue.map((value, i) => {
      user_id_arr.push(value.post_category_id);
    });
    setInputData({
      ...inputData,
      post_category_ids: user_id_arr,
    });
  };

  const handleVideopreviewImage = (event) => {
    if (event.currentTarget.type === "file") {
      setFileUploadStatus(true);
      let reader = new FileReader();
      let file = event.currentTarget.files[0];
      reader.onloadend = () => {
        setVideoPreview({ ...videoPreview, videoPreviewImage: reader.result });
      };

      if (file) {
        reader.readAsDataURL(file);
      }

      setInputData({
        ...inputData,
        preview_file: file,
      });
    }
  };

  return (
    <div className="notification-page create-post" id="tabs">
      <Container>
        {localStorage.getItem("is_content_creator") == 2 ? (
          <div className="create-post-box">
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col sm={12} md={12}>
                  <div className="post-create-header">
                    <div className="pull-left">
                      <Link
                        className="bookmarkes-list notify-title"
                        to={"/home"}
                      >
                        <Image
                          src={
                            window.location.origin +
                            "/assets/images/icons/back.svg"
                          }
                          className="svg-clone"
                        />
                        {t("new_post")}
                      </Link>
                    </div>
                    <div className="pull-right">
                      {localStorage.getItem("is_content_creator") == 2 ? (
                        <Button
                          type="submit"
                          className="btn gradient-btn postBtn gradientcolor text-uppercase mt-0 mt-md-3"
                          onClick={handleSubmit}
                          disabled={
                            props.fileUpload.buttonDisable ||
                            props.savePost.buttonDisable
                          }
                        >
                          {props.fileUpload.loadingButtonContent !== null
                            ? props.fileUpload.loadingButtonContent
                            : props.savePost.loadingButtonContent !== null
                            ? props.savePost.loadingButtonContent
                            : t("post")}
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          className="btn gradient-btn postBtn gradientcolor text-uppercase mt-0 mt-md-3"
                          disabled="true"
                        >
                          {t("post")}
                        </Button>
                      )}
                    </div>
                  </div>
                </Col>
                <Col sm={12} md={12}>
                  {/* <div className="create-post-textarea">
                <Form.Group>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder={t("new_post_placeholder")}
                    name="content"
                    style={{ width: "100%", maxWidth: "100%" }}
                    value={inputData.content ? inputData.content : null}
                    onChange={(event) =>
                      setInputData({
                        ...inputData,
                        content: event.currentTarget.value,
                      })
                    }
                  />
                </Form.Group>
              </div> */}
                  <div className="searchMentions">
                    <div className="PostEditor">
                      <PostEditor
                        className="PostEditor__input"
                        placeholder={t("new_post_placeholder")}
                        ref={mentionsRef}
                        getEditorRawContent={setEditorContentstate}
                        getEditorHtmlContent={setEditorHtmlContent}
                        dispatch={props.dispatch}
                        // searchUser={props.searchUser}
                      />
                    </div>
                  </div>
                </Col>

                <Col sm={12} md={6} className="mt-3 mt-lg-4">
                  {props.postCategories.data.post_categories &&
                  props.postCategories.data.post_categories.length > 0 ? (
                    <>
                      <Form.Group className="mb-0">
                        <Form.Label className="edit-input-label mb-3 mb-lg-3">
                          {t("category")} ({t("optional")})
                        </Form.Label>
                        {props.postCategories.data.post_categories ? (
                          <Multiselect
                            name="post_category_ids"
                            options={props.postCategories.data.post_categories}
                            displayValue="name"
                            avoidHighlightFirstOption="true"
                            placeholder={t("choose_category")}
                            onSelect={(values) => setValues(values)}
                          />
                        ) : null}
                      </Form.Group>
                    </>
                  ) : (
                    ""
                  )}

                  {paidPost == true ? (
                    <Form.Group className="md-mrg-btm mt-3 mt-lg-4">
                      <label className="text-muted m-1 mb-3 mb-lg-3">
                        {t("price")} ({t("optional")})
                      </label>
                      <Form.Control
                        type="number"
                        placeholder={t("price_placeholder")}
                        name="amount"
                        pattern="[0-9]*"
                        min="1"
                        inputmode="numeric"
                        value={inputData.amount}
                        width="50%"
                        onChange={(event) =>
                          setInputData({
                            ...inputData,
                            amount: event.currentTarget.value,
                          })
                        }
                      />
                    </Form.Group>
                  ) : (
                    ""
                  )}
                  {videoThumbnail === true ? (
                    <>
                      <Form.Group className="md-mrg-btm mb-3 mb-lg-3">
                        <label className="text-muted m-1 mt-3 f-12 text-uppercase mb-3 mb-lg-3">
                          {t("upload_video_thumbnail")}:({t("optional")})
                        </label>
                        <Form.Control
                          style={{ display: "block" }}
                          type="file"
                          placeholder={t("upload_video_thumbnail_placeholder")}
                          name="preview_file"
                          width="50%"
                          className="form-control"
                          accept=".gif,.jpg,.jpeg,.gif,.png,.jpg,.jpeg,.png"
                          onChange={(event) => handleVideopreviewImage(event)}
                        />
                      </Form.Group>
                      {videoPreview.videoPreviewImage !== "" ? (
                        <Row>
                          <Col sm={12} md={6} className="mb-3 mb-lg-4">
                            <div className="post-img-preview-sec m-0">
                              <Image
                                alt="#"
                                src={videoPreview.videoPreviewImage}
                                className="post-video-preview"
                              />
                            </div>
                          </Col>
                        </Row>
                      ) : null}
                    </>
                  ) : (
                    ""
                  )}
                </Col>

                <Col sm={12} md={6} className="mt-3 mt-lg-4">
                  {localStorage.getItem("is_content_creator") == 2 ? (
                    <div className="left-half post-write">
                      <Button>
                        <Form.Group className="mb-0">
                          <Form.Control
                            id="fileupload_photo"
                            type="file"
                            multiple="multiple"
                            disabled={disableImage ? true : false}
                            accept=".gif,.jpg,.jpeg,.gif,.png,.jpg,.jpeg,.png"
                            onChange={(event) =>
                              handleChangeImage(event, "image")
                            }
                            name="post_files"
                          />
                          <Form.Label
                            id="attach_file_photo"
                            for="fileupload_photo"
                            className="chat-attach_file"
                            data-original-title="null"
                          >
                            {/* <Image
                          src="assets/images/icons/gallery.svg"
                          className="svg-clone"
                        /> */}
                            <Image
                              src="assets/images/post/post-image-upload.svg"
                              className="svg-clone"
                            />
                          </Form.Label>
                        </Form.Group>
                      </Button>
                      <Button>
                        <Form.Group
                          className="mb-0"
                          controlId="formFileDisabled"
                        >
                          <Form.Control
                            id="fileupload_video"
                            type="file"
                            multiple="multiple"
                            disabled={disableVideo ? true : false}
                            accept="video/mp4,video/x-m4v,video/*"
                            onChange={(event) =>
                              handleChangeVideo(event, "video")
                            }
                            name="post_files"
                          />
                          <Form.Label
                            id="attach_file_video"
                            for="fileupload_video"
                            className="chat-attach_file"
                            data-original-title="null"
                          >
                            {/* <Image
                          src="assets/images/icons/video.svg"
                          className="svg-clone"
                        /> */}
                            <Image
                              src="assets/images/post/post-video-upload.svg"
                              className="svg-clone video-add-icon"
                            />
                          </Form.Label>
                        </Form.Group>
                      </Button>
                      {videoTitle !== "" ? (
                        <div className="post-title-content create-post-video-title">
                          <h4>{videoTitle}</h4>
                        </div>
                      ) : null}
                      <Button>
                        <Form.Group
                          className="mb-0"
                          controlId="formFileDisabled"
                        >
                          <Form.Control
                            id="fileupload_audio"
                            type="file"
                            multiple="multiple"
                            disabled={disableAudio ? true : false}
                            accept="audio/mp3,audio/*"
                            onChange={(event) =>
                              handleChangeAudio(event, "audio")
                            }
                            name="post_files"
                          />
                          <Form.Label
                            id="attach_file_audio"
                            for="fileupload_audio"
                            className="chat-attach_file"
                            data-original-title="null"
                          >
                            {/* <Image
                          src="assets/images/icons/audio.svg"
                          className="svg-clone"
                        /> */}
                            <Image
                              src="assets/images/post/post-audio-upload.svg"
                              className="svg-clone"
                            />
                          </Form.Label>
                        </Form.Group>
                      </Button>
                      {audioTitle !== "" ? (
                        <div className="post-title-content create-post-video-title">
                          <h4>{audioTitle}</h4>
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    ""
                  )}
                  {image.previewImage !== "" ? (
                    <Row>
                      <Col sm={12} md={6}>
                        <div className="post-img-preview-sec">
                          <Link to="#" onClick={imageClose}>
                            <i className="far fa-times-circle"></i>
                          </Link>
                          <Image
                            alt="#"
                            src={image.previewImage}
                            className="post-video-preview"
                          />
                        </div>
                      </Col>
                    </Row>
                  ) : null}
                  {videoPreviewUrl !== "" ? (
                    <Row>
                      <Col sm={12} md={12}>
                        <div className="post-img-preview-sec my-3 my-lg-4">
                          <video
                            autoplay
                            controls
                            id="myVideo"
                            className="user-profile1 create-post-video"
                          >
                            <source src={videoPreviewUrl} type="video/mp4" />
                          </video>
                          <Link to="#" onClick={videoClose} className="close-video">
                            <i className="far fa-window-close"></i>
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  ) : null}
                  {audioPreviewUrl !== "" ? (
                    <Row>
                      <Col sm={12} md={12}>
                        <div className="post-img-preview-sec">
                          <audio
                            controls
                            id="myVideo"
                            className="user-profile1"
                          >
                            <source src={audioPreviewUrl} type="audio/mp3" />
                          </audio>
                          <Link to="#" onClick={audioClose} className="close-audio">
                            <i className="far fa-window-close"></i>
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  ) : null}
                </Col>
              </Row>
            </Form>
          </div>
        ) : (
          ""
        )}{" "}
      </Container>
      {localStorage.getItem("is_content_creator") != 2 && (
        <ContentCreatorSteps />
      )}
    </div>
  );
};

const mapStateToPros = (state) => ({
  savePost: state.post.savePost,
  fileUpload: state.post.fileUpload,
  searchUser: state.home.searchUser,
  postCategories: state.post.postCategories,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(
  mapStateToPros,
  mapDispatchToProps
)(translate(CreatePostIndex));
