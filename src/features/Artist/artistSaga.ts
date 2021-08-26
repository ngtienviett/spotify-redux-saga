import { PayloadAction } from "@reduxjs/toolkit";
import { SagaIterator } from "redux-saga";
import { call, put } from "redux-saga/effects";
import artistApi from "../../api/artistApi";
import { artistListFromSaga } from "./artistSlice";


export function* getArtistListSaga(
  action: PayloadAction<string>
): SagaIterator<void> {
  try {
    const query = action.payload;
    const res = yield call(artistApi.getArtistList, query);
    yield put({
      type: artistListFromSaga.type,
      payload: res,
    });
  } catch (error) {
    console.error(error);
  }
}

