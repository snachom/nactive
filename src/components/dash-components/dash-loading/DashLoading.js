import './dash-loading.css'

export const DashLoading = () => {
  return (
    <div className="fblock loading block"> 
      <div className="progress-bar downloading"></div>
      <p className="paragraph-text">
        <span className="dash-span icon fontawesome-cloud-download scnd-font-color"></span>Downloading...
      </p>
      <p className="percentage">81<sup>%</sup></p>
      <div className="progress-bar uploading"></div>
      <p className="paragraph-text">
        <span className="dash-span icon fontawesome-cloud-upload scnd-font-color"></span>Uploading...
      </p>
      <p className="percentage">43<sup>%</sup></p>
    </div>
  )
}
