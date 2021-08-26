import React, { FormEvent } from 'react';
import { useAppDispatch } from '../app/hooks';
import { getArtistList } from "../features/Artist/artistSlice";
import { resetTopTrack } from '../features/Track/trackSlice';

const Header = () => {
  const dispatch = useAppDispatch();

  const handleSearch = (e: FormEvent<HTMLInputElement>) => {
    const term = e.currentTarget.value;
    if (term.trim() !== "") {
      dispatch({type: resetTopTrack.type});
      dispatch({ type: getArtistList.type, payload: term });
    }
  };
  return (
    <div className="row my-5">
      <div className="col">
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Type to search for an artist"
            onChange={handleSearch}
          />
        </div>
      </div>
    </div>
  )
}

export default Header
