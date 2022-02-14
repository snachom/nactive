import { useState } from 'react'

export const useDate = () => {

  const myDate = {
    currentDigitDate: new Date().toLocaleString("en-US", { day : '2-digit'}),
    currentStringDate: new Date().toLocaleDateString("en-US", { weekday : 'long'})
  }

  let {currentDigitDate,currentStringDate } = myDate

  const [digitDate, setDigitDate] = useState(currentDigitDate)
  const [stringDate, setStringDate] = useState(currentStringDate)

  const currentDate = new Date()
  
  const handleToday = () => {
    setDigitDate(currentDate.getDate())
    setStringDate(currentDate.toLocaleDateString("en-US", { weekday : 'long'}))
  }
  
  const handleDayAfter = () => {
    currentDigitDate = currentDate.getDate()
    setDigitDate(currentDigitDate+1)    
    currentDate.setDate(currentDate.getDate() + 1);
    setStringDate(currentDate.toLocaleDateString("en-US", { weekday: "long" }))
  }

  const handleDayBefore = () => {
    currentDigitDate = currentDate.getDate()
    setDigitDate(currentDigitDate-1)
    currentDate.setDate(currentDate.getDate() - 1);
    setStringDate(currentDate.toLocaleDateString("en-US", { weekday: "long" }))
  }

  return [
    handleToday,
    handleDayAfter, 
    handleDayBefore,
    digitDate,
    stringDate
  ]
}

