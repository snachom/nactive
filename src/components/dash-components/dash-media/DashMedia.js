import YoutubeEmbed from "./YoutubeMedia";
import './dash-media.css'

export const DashMedia = () => {
  return (
    <div className="fblock media block">
      <h2 className="dash-media-title">LAST YT VIDEO</h2>
      <YoutubeEmbed embedId="ovBYamkcgww" />
    </div>
  )
}

