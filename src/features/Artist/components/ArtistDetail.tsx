import { useAppDispatch } from "../../../app/hooks"
import { getTopTrack } from "../../Track/trackSlice";
interface Props {
  artist: Artist
}
const ArtistDetail = ({ artist } : Props) => {
  const dispatch = useAppDispatch();
  const handleClick = (id: string) => {
    dispatch({ type: getTopTrack.type, payload: id });
  }
  return (
    <div className="col mb-4" onClick={() => handleClick(artist.id)} >
      <div className="card h-100">
        <div className="container-img">
          <img
            src={artist.images[0]?.url || "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/folder_920_201707260845-1.png"}
            className="card-img-top"
            alt="..."
          />
        </div>
        
        <div className="card-body">
          <h5 className="card-title">{artist.name}</h5>
          <p className="card-text">
            Genres: {artist.genres.map((item : any) => item).join()}
          </p>
        </div>
        <div className="card-footer">
          Popularity: {artist.popularity}
        </div>
      </div>
    </div>
  )
}

export default ArtistDetail
