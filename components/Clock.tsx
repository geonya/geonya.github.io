import moment from 'moment'
import { useEffect, useState } from 'react'

export default function Clock() {
  const [time, setTime] = useState('')
  useEffect(() => {
    setInterval(() => {
      let time = moment().format('ddd MMM D HH:mm')
      setTime(time)
    }, 1000)
  }, [])
  return <span>{time}</span>
}
