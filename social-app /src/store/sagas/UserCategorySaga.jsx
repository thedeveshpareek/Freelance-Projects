import { call, select, put, takeLatest, all } from "redux-saga/effects";
import api from "../../Environment";

import {
  FETCH_USER_CATEGORY_LIST_START,
  FETCH_CONTENT_CREATOR_LIST_START
} from "../actions/ActionConstant";

import { createNotification } from "react-redux-notify";
import {
  getSuccessNotificationMessage,
  getErrorNotificationMessage,
} from "../../components/helper/NotificationMessage";

import {
  fetchUserCategoryListSuccess,
  fetchUserCategoryListFailure,
  fetchContentCreatorListSuccess,
  fetchContentCreatorListFailure
} from "../actions/UserCategoryAction";


function* fetchUserCategoryListAPI() {
  try {
    const response = yield api.postMethod("u_categories_list");

    if (response.data.success) {
      yield put(fetchUserCategoryListSuccess(response.data));
    } else {
      yield put(fetchUserCategoryListFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(fetchUserCategoryListFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

function* fetchContentCreatorListAPI(action) {
  try {
    const response = yield api.postMethod("content_creators_list" , action.data);

    if (response.data.success) {
      yield put(fetchContentCreatorListSuccess(response.data));
    } else {
      yield put(fetchContentCreatorListFailure(response.data.error));
      const notificationMessage = getErrorNotificationMessage(
        response.data.error
      );
      yield put(createNotification(notificationMessage));
    }
  } catch (error) {
    yield put(fetchContentCreatorListFailure(error));
    const notificationMessage = getErrorNotificationMessage(error.message);
    yield put(createNotification(notificationMessage));
  }
}

export default function* pageSaga() {
  yield all([yield takeLatest(FETCH_USER_CATEGORY_LIST_START, fetchUserCategoryListAPI)]);
  yield all([yield takeLatest(FETCH_CONTENT_CREATOR_LIST_START, fetchContentCreatorListAPI)]);
}
