import produce from 'immer';

export const baseReducer = {
  isFetching: null,
  data: null,
  error: null,
};

export const createReducer = (type, initialState, fields = null) => ({
  [`${type}_started`]: (state = initialState, {payload}) => {
    if (fields) {
      return produce(state, (draftState) => {
        for (let i = 0; i < fields.length; i++) {
          draftState = draftState[fields[i]];
        }
        draftState.isFetching = true;
      });
    } else {
      return {
        ...state,
        error: null,
        isFetching: true,
      };
    }
  },
  [`${type}_failed`]: (state = initialState, {payload}) => {
    if (fields) {
      return produce(state, (draftState) => {
        for (let i = 0; i < fields.length; i++) {
          draftState = draftState[fields[i]];
        }
        draftState.isFetching = false;
        draftState.error = payload;
      });
    } else {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    }
  },
  [`${type}_success`]: (state = initialState, {payload}) => {
    if (fields) {
      return produce(state, (draftState) => {
        for (let i = 0; i < fields.length; i++) {
          draftState = draftState[fields[i]];
        }
        draftState.isFetching = false;
        draftState.data = payload;
      });
    } else {
      return {
        ...state,
        isFetching: false,
        data: payload,
        error: null,
      };
    }
  },
});
