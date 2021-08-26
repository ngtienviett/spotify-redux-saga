import React from 'react'
import { useAppSelector } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import ArtistDetail from './ArtistDetail';

const ArtistList = () => {
  const {artistList, isLoading} = useAppSelector((state: RootState) => state.artist);
  
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
      {isLoading ? <h3>Loading...</h3> : artistList.items.map((item: Artist) => <ArtistDetail key={item.id} artist={item}/>)}
    </div>
  )
}

export default ArtistList
