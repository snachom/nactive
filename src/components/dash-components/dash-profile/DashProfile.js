import './dash-profile.css'

export const DashProfile = () => {
  return (
    <div className="profile block">
      <a className="dash-link add-button" href="https://twitter.com/nachoxtacks" target="_blank" rel="noreferrer">
        <span className="dash-span icon entypo-plus scnd-font-color"></span>
      </a>
      <div className="profile-picture big-profile-picture clear">
        <img width="150px" alt="Nacho" src="/assets/resources/nacho-yellow.jpg" />
      </div>
      <h1 className="heading1 user-name">@nachoxtacks</h1>
      <div className="profile-description">
        <p className="scnd-font-color">Front End Web Developer</p>
      </div>
      <ul className="unordered-list profile-options horizontal-list">
        <li>
          <a className="dash-link linkedin" href="https://www.linkedin.com/in/nachosalas/" target="_blank" rel="noreferrer">
            <p className="paragraph-text">
              <span className="dash-span icon entypo-linkedin scnd-font-color">
              </span>
            </p>
          </a>
        </li>
        <li>
          <a className="dash-link insta" href="https://www.instagram.com/mirlokimirli/" target="_blank" rel="noreferrer">
            <p className="paragraph-text">
              <span className="dash-span icon entypo-instagrem scnd-font-color">
              </span>
            </p>
          </a>
        </li>
        <li>
          <a className="dash-link github" href="https://github.com/snachom/nactive" target="_blank" rel="noreferrer">
            <p className="paragraph-text">
              <span className="dash-span icon entypo-github scnd-font-color">
              </span>
            </p>
          </a>
        </li>
      </ul>
    </div>
  )
}
