import React from 'react'
import { useAppSelector } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import TrackDetail from './TrackDetail';
const TopTrack = () => {
  const { topTrack } = useAppSelector((state : RootState) => state.track);
  return (
    <div className="card-group flex-column">
      {topTrack.map((item: any) => <TrackDetail key={item.id} track={item}/>)}
    </div>
  )
}

export default TopTrack
