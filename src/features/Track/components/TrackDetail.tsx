

interface Props {
  track: any;
}
const TrackDetail = ({ track } : Props) => {
  return (
    <div className="card mb-3 w-100">
        <div className="row no-gutters align-items-center">
          <div className="col-md-3">
            <div className="container-img">
              <img
                src={track.album.images[0].url}
                alt="..."
              />
            </div>
          </div>
          <div className="col-md-9">
            <div className="card-body mx-3">
              <h5 className="card-title ">{track.name}</h5>
              <p className="card-text ">Type: {track.type}</p>
                {track.preview_url ? 
                  <div className="my-4">
                    <audio controls className="audio">
                      <source src={track.preview_url}/>
                    </audio>
                  </div> : <p className="">"No Preview URL"</p> }
              <p className="card-text">
                <small className="text-muted ">Release date: {track.album.release_date}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default TrackDetail
