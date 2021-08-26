import { debounce, takeEvery } from "redux-saga/effects";
import { getArtistList } from "../features/Artist/artistSlice";
import { getTopTrack } from "../features/Track/trackSlice";
import { getArtistListSaga } from "../features/Artist/artistSaga";
import { getTopTrackSaga } from "../features/Track/trackSaga";

export function* rootSaga(){
  yield debounce(3000, getArtistList().type, getArtistListSaga);
  yield takeEvery(getTopTrack().type, getTopTrackSaga);
}