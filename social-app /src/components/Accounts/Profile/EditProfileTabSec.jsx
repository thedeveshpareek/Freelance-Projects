import React from "react";
import { Link } from "react-router-dom";
import { Image, Media } from "react-bootstrap";
import { translate, t } from "react-multi-lang";
import configuration from "react-global-configuration";

const EditProfileTabSec = (props) => {
  return (
    <ul className="nav nav-tabs edit-profile-tabs" role="tablist">
      <Media
        as="li"
        role="presentation"
        className={props.activeSec === "settings-card" ? "active" : ""}
      >
        <Link
          to={"/edit-profile"}
          className="bookmarkes-list"
          // aria-controls="profile"
          // role="tab"
          // data-toggle="tab"
          // onClick={() => props.setActiveSec("settings-card")}
        >
          <Image
            src={window.location.origin + "/assets/images/icons/back.svg"}
            className="svg-clone"
          />
          {t("settings")}
        </Link>
        <div className="tab-sec-head bt-style">Account Management</div>
      </Media>
      <Media
        as="li"
        role="presentation"
        className={props.activeSec === "profile-card" ? "active" : ""}
      >
        <Link
          to="#Section2"
          aria-controls="profile"
          role="tab"
          className="bookmarkes-list"
          data-toggle="tab"
          onClick={() => props.setActiveSec("profile-card")}
        >
          <Image src="assets/images/icons/profile.svg" className="svg-clone" />
          {t("profile")}
        </Link>
      </Media>
      <Media
        as="li"
        role="presentation"
        className={props.activeSec === "change-password-card" ? "active" : ""}
      >
        <Link
          to="#Section3"
          aria-controls="profile"
          role="tab"
          className="bookmarkes-list"
          data-toggle="tab"
          onClick={() => props.setActiveSec("change-password-card")}
        >
          <Image src="assets/images/icons/change-1.svg" className="svg-clone" />
          {t("change_password")}
        </Link>
      </Media>
      <Media
        as="li"
        role="presentation"
        className={
          props.activeSec === "session-management-card" ? "active" : ""
        }
      >
        <Link
          to="#session-management"
          aria-controls="profile"
          role="tab"
          className="bookmarkes-list d-flex"
          data-toggle="tab"
          onClick={() => props.setActiveSec("session-management-card")}
        >
          <Image
            src="assets/images/icons/session.png"
            className="svg-clone-1"
          />
          {t("session_management")}
        </Link>
      </Media>
      <Media
        as="li"
        role="presentation"
        className={props.activeSec === "delete-account-card" ? "active" : ""}
      >
        <Link
          to="#Section4"
          aria-controls="profile"
          role="tab"
          className="bookmarkes-list"
          data-toggle="tab"
          onClick={() => props.setActiveSec("delete-account-card")}
        >
          <Image src="assets/images/icons/delete.png" className="svg-clone" />
          {t("delete_account")}
        </Link>
      </Media>
      <div className="tab-sec-head bb-style">Security</div>

      <Media
        as="li"
        role="presentation"
        className={props.activeSec === "two_factor" ? "active" : ""}
      >
        <Link
          to="#two_factor"
          aria-controls="profile"
          role="tab"
          className="bookmarkes-list"
          data-toggle="tab"
          onClick={() => props.setActiveSec("two_factor")}
        >
          <i className="fas fa-lock svg-clone icon"></i>
          {t("two_step_authentication")}
        </Link>
      </Media>
      <Media
        as="li"
        role="presentation"
        className={props.activeSec === "availability_status" ? "active" : ""}
      >
        <Link
          to="#availabitiy"
          aria-controls="profile"
          role="tab"
          className="bookmarkes-list"
          data-toggle="tab"
          onClick={() => props.setActiveSec("availability_status")}
        >
          <Image src="assets/images/icons/settings.svg" className="svg-clone" />
          {t("availability_status")}
        </Link>
      </Media>
      {configuration.get("configData.is_one_to_one_call_enabled") == 1 ? (
        <>
          <Media
            as="li"
            role="presentation"
            className={props.activeSec === "video-calls-card" ? "active" : ""}
          >
            <Link
              to={"/video-calls-sent"}
              className="bookmarkes-list"
              onClick={() => props.setActiveSec("video-calls-card")}
            >
              <Image
                src={
                  window.location.origin + "/assets/images/icons/video-r.png"
                }
                className="svg-clone"
              />
              {t("video_call_request_sent")}
            </Link>
          </Media>
          <div className="tab-sec-head bb-style">Payments</div>

          <Media
            as="li"
            role="presentation"
            className={
              props.activeSec === "video-call-history-card" ? "active" : ""
            }
          >
            <Link
              to={"/video-calls-history"}
              className="bookmarkes-list"
              onClick={() => props.setActiveSec("video-call-history-card")}
            >
              <Image
                src={window.location.origin + "/assets/images/icons/video.svg"}
                className="svg-clone"
              />
              {t("video_call_history")}
            </Link>
          </Media>

          <Media
            as="li"
            role="presentation"
            className={
              props.activeSec === "video-calls-received-card" ? "active" : ""
            }
          >
            <Link
              to={"/video-calls-received"}
              className="bookmarkes-list"
              onClick={() => props.setActiveSec("video-calls-received-card")}
            >
              <Image
                src={
                  window.location.origin +
                  "/assets/images/icons/video-camera.png"
                }
                className="svg-clone"
              />
              {t("video_call_request_received")}
            </Link>
          </Media>
        </>
      ) : (
        ""
      )}
      <Media
        as="li"
        role="presentation"
        className={props.activeSec === "account-card" ? "active" : ""}
      >
        <Link
          to={{
            pathname: "/add-bank",
            state: {
              prevPath: props.location.pathname,
            },
          }}
          className="bookmarkes-list"
        >
          <Image src="assets/images/icons/account.svg" className="svg-clone" />
          {t("add_bank")}
        </Link>
      </Media>
      {configuration.get("configData.is_one_to_many_call_enabled") == 1 ? (
        <Media
          as="li"
          role="presentation"
          className={props.activeSec === "live-videos" ? "active" : ""}
        >
          <Link to={"/live-videos"} className="bookmarkes-list">
            <Image
              src={window.location.origin + "/assets/images/icons/live.svg"}
              className="svg-clone"
            />
            {t("live_videos")}
          </Link>
        </Media>
      ) : (
        ""
      )}
      <Media
        as="li"
        role="presentation"
        className={props.activeSec === "notifications-card" ? "active" : ""}
      >
        <Link to={"/payments"} className="bookmarkes-list">
          <Image
            src="assets/images/icons/paper-money.png"
            className="svg-clone"
          />
          {t("payments")}
        </Link>
      </Media>
      <Media
        as="li"
        role="presentation"
        className={props.activeSec === "security-card" ? "active" : ""}
      >
        <Link to={`/document-upload`} className="bookmarkes-list">
          <Image
            src="assets/images/icons/documents.png"
            className="svg-clone"
          />
          {t("documents")}
        </Link>
      </Media>
      <Media
        as="li"
        role="presentation"
        className={props.activeSec === "bank-accounts" ? "active" : ""}
      >
        <Link to={`/billing-accounts`} className="bookmarkes-list">
          <Image
            src="assets/images/icons/merchant-account.png"
            className="svg-clone"
          />
          {t("bank_accounts")}
        </Link>
      </Media>
    </ul>
  );
};

export default translate(EditProfileTabSec);
