import './dash-donut.css'

export const DashDonut = () => {
  return (
    <div className="donut-chart-block block">
      <h2 className="heading2 titular">OS AUDIENCE STATS</h2>
      <div className="donut-chart">

        <div id="porcion1" className="recorte"><div className="quesito ios" data-rel="21"></div></div>
        <div id="porcion2" className="recorte"><div className="quesito mac" data-rel="39"></div></div>
        <div id="porcion3" className="recorte"><div className="quesito win" data-rel="31"></div></div>
        <div id="porcionFin" className="recorte"><div className="quesito linux" data-rel="9"></div></div>

        <p className="center-date">JUNE<br/><span className="dash-span scnd-font-color">2013</span></p> 
      </div>
      <ul className="unordered-list os-percentages horizontal-list">
        <li>
          <p className="ios os scnd-font-color">iOS</p>
          <p className="os-percentage">21<sup>%</sup></p>
        </li>
        <li>
          <p className="mac os scnd-font-color">Mac</p>
          <p className="os-percentage">48<sup>%</sup></p>
        </li>
        <li>
          <p className="linux os scnd-font-color">Linux</p>
          <p className="os-percentage">9<sup>%</sup></p>
        </li>
        <li>
          <p className="win os scnd-font-color">Win</p>
          <p className="os-percentage">32<sup>%</sup></p>
        </li>
      </ul>
    </div>
  )
}
