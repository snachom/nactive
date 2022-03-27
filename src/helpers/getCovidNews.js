// import { useState } from "react";

export const getCovidNews = async() => {

  // const [state, setState] = useState([])

  const today = new Date();
  var twoDigitMonth=((today.getMonth()+1)>=10) ? (today.getMonth()+1) : '0' + (today.getMonth()+1);
  const date = today.getFullYear()+'-'+twoDigitMonth+'-'+today.getDate();
  const prevDate = today.getFullYear()+'-'+twoDigitMonth+'-'+(today.getDate()-3);

  const url = `https://api.covid19tracking.narrativa.com/api/${date}/country/spain/region/andalucia`
  const resp = await fetch( url )
  const data = await resp.json()
  const regio = data.dates[date].countries.Spain.regions ? data.dates[date].countries.Spain.regions : data.dates[prevDate].countries.Spain.regions

  // console.log(regio)

  const news = regio.map( cov => {
    return {
      date: cov.date,
      id: cov.id,
      name: cov.name,
      andalucia_confirmed: cov.today_new_open_cases ? cov.today_new_open_cases : 0,
      andalucia_recovered: cov.today_recovered ? cov.today_recovered : 0,
      subregion: cov.sub_regions.map( 
        subreg => { 
          return { 
            community: subreg.name,
            community_confirmed: subreg.today_confirmed ? subreg.today_confirmed : 0,
            community_recovered: subreg.today_new_recovered ? subreg.today_new_recovered : 0,
          } 
        }
      )
    }
  })
  return news;
}
