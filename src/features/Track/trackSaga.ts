import { PayloadAction } from "@reduxjs/toolkit";
import { SagaIterator } from "redux-saga";
import { call, put } from "redux-saga/effects";
import trackApi from "../../api/trackApi";
import { topTrackFromSaga } from "./trackSlice";

export function* getTopTrackSaga(
  action: PayloadAction<string>
): SagaIterator<void> {
  try {
    const id = action.payload;
    const res = yield call(trackApi.getTopTrack, id);
    yield put({
      type: topTrackFromSaga.type,
      payload: res,
    });
  } catch (error) {
    console.error(error);
  }
}