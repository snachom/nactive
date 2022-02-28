// import { useState } from "react";

// export const useCovidNews = async() => {

//   const [state, setState] = useState([])

//   const today = new Date();
//   var twoDigitMonth=((today.getMonth()+1)>=10) ? (today.getMonth()+1) : '0' + (today.getMonth()+1);
//   const date = today.getFullYear()+'-'+twoDigitMonth+'-'+today.getDate();

//   const url = `https://api.covid19tracking.narrativa.com/api/${date}/country/spain/region/andalucia`
//   const resp = await fetch( url )
//   const data = await resp.json()
//   const regions = data.dates[date].countries.Spain.regions

//   const news = regions.map( cov => {
//     return {
//       date: cov.date,
//       id: cov.id,
//       name: cov.name,
//       andalucia_confirmed: cov.today_new_open_cases ? cov.today_new_open_cases : 0,
//       andalucia_recovered: cov.today_recovered ? cov.today_recovered : 0,
//       subregion: cov.sub_regions.map( 
//         subreg => { 
//           return { 
//             community: subreg.name,
//             community_confirmed: subreg.today_new_confirmed ? subreg.today_new_confirmed : 0,
//             community_recovered: subreg.today_new_recovered ? subreg.today_new_recovered : 0,
//           } 
//         }
//       )
//     }
//   })
//   return news 
// }
