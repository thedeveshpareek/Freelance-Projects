import {
  FETCH_USER_CATEGORY_LIST_START,
  FETCH_USER_CATEGORY_LIST_SUCCESS,
  FETCH_USER_CATEGORY_LIST_FAILURE,
  FETCH_CONTENT_CREATOR_LIST_START,
  FETCH_CONTENT_CREATOR_LIST_SUCCESS,
  FETCH_CONTENT_CREATOR_LIST_FAILURE,
} from "../actions/ActionConstant";

const initialState = {
  categoryList: {
    data: {},
    loading: true,
    error: false,
  },
  contentCreatorList: {
    data: {},
    loading: true,
    error: false,
  },
  buttonDisable: false,
  loadingButtonContent: null,
};

const UserCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_CATEGORY_LIST_START:
      return {
        ...state,
        categoryList: {
          data: {},
          loading: true,
          error: false,
        },
      };

    case FETCH_USER_CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        categoryList: {
          data: action.data.data,
          loading: false,
          error: false,
        },
      };

    case FETCH_USER_CATEGORY_LIST_FAILURE:
      return {
        ...state,
        categoryList: {
          data: {},
          loading: false,
          error: action.error,
        },
      };

    case FETCH_CONTENT_CREATOR_LIST_START:
      return {
        ...state,
        contentCreatorList: {
          data: {},
          loading: true,
          error: false,
        },
      };

    case FETCH_CONTENT_CREATOR_LIST_SUCCESS:
      return {
        ...state,
        contentCreatorList: {
          data: action.data.data,
          loading: false,
          error: false,
        },
      };

    case FETCH_CONTENT_CREATOR_LIST_FAILURE:
      return {
        ...state,
        contentCreatorList: {
          data: {},
          loading: false,
          error: action.error,
        },
      };

    default:
      return state;
  }
};

export default UserCategoryReducer;
