import './dash-social-block.css'

export const DashSocialBlock = () => {
  return (
    <ul className="fblock unordered-list social horizontal-social-list block">
      <li className="facebook">
        <p className="icon"><span className="dash-span zocial-facebook"></span></p>
        <p className="number">248k</p>
      </li>
      <li className="twitter">
        <p className="icon"><span className="dash-span zocial-twitter"></span></p>
        <p className="number">30k</p></li>
      <li className="googleplus">
        <p className="icon"><span className="dash-span zocial-googleplus"></span></p>
        <p className="number">124k</p></li>
      <li className="mailbox">
        <p className="icon"><span className="dash-span fontawesome-envelope"></span></p>
        <p className="number">89k</p>
      </li>
    </ul>
  )
}
