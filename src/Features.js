import rider from "./images/features.gif"
import videobackground from "./images/video-background.mp4";
import spotifyIntegration from "./images/Spotify-Integration.png";
import gloveCompatibleUI from "./images/Glove-Compatible-UI.png";
import liveLocationSharing from "./images/Live-Location-Sharing.png"
import customizedRoutes from "./images/Customized-Routes.png"
import crashDetection from "./images/Crash-Detection.png"
const Features = ()=>{
  return(
    <div className="features">
       {/* <video className="video-background" autoPlay loop muted>
                <source src={videobackground} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video> */}
      <h2>Features You'll get </h2>
      {/* <img className="features-rider" src={rider}></img> */}
      <div className="features-cards">
        <div className="card">
            <div className="content">
                <div className="back">
                    <div className="back-content">
                       <img src={spotifyIntegration}></img>
                        <strong>Spotify</strong>
                    </div>
                </div>
                <div className="front">
                    <div className="front-content">
                        <div className="badge">
                        You can seamlessly connect Spotify with the RidingMoto application and enjoy your favorite music, playlists, or podcasts during your ride without needing to switch between apps.
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="content">
                <div className="back">
                    <div className="back-content">
                    <img src={crashDetection}></img>
                        <strong>Crash Detection</strong>
                    </div>
                </div>
                <div className="front">
                    <div className="front-content">
                        <div className="badge">
                        RidingMoto includes advanced crash detection technology, which automatically detects accidents and immediately notifies your emergency contacts; this provides an extra layer of safety for riders.
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="content">
                <div className="back">
                    <div className="back-content">
                    <img src={gloveCompatibleUI}></img>
                        <strong>Glove Compatible UI  </strong>
                    </div>
                </div>
                <div className="front">
                    <div className="front-content">
                        <div className="badge">
                        Designed with riders in mind, RidingMoto features a glove-friendly user-interface so riders can easily navigate the app's functions and other operations without taking off their gloves.
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="content">
                <div className="back">
                    <div className="back-content">
                    <img src={liveLocationSharing}></img>
                        <strong>Live-Location Sharing</strong>
                    </div>
                </div>
                <div className="front">
                    <div className="front-content">
                        <div className="badge">
                        RidingMoto offers a live location-sharing feature that allows you to share your real-time position with friends or family so they can monitor your journey and ensure you're safe during your ride.
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="content">
                <div className="back">
                    <div className="back-content">
                    <img src={customizedRoutes}></img>
                        <strong>Customized Routes</strong>
                    </div>
                </div>
                <div className="front">
                    <div className="front-content">
                        <div className="badge">
                        The RidingMoto app allows you to map out the most scenic and adventurous routes for your motorcycle trips. You can customize the route and select the desired points of interest for your ride.
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
      

    </div>
  )
}
export default Features;