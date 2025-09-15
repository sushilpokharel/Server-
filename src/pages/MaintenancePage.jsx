import React, { useEffect, useState } from 'react'

function Loader(){
  return (
    <div className="loader-wrap">
      <div className="spinner" />
    </div>
  )
}

function formatNumber(n){
  return String(n).padStart(2,'0')
}

export default function MaintenancePage(){
  const [showLoader, setShowLoader] = useState(true)
  const [timeLeft, setTimeLeft] = useState({})

  useEffect(()=>{
    const t = setTimeout(()=> setShowLoader(false), 5000)
    return ()=>clearTimeout(t)
  },[])

  useEffect(()=>{
    // 5 years from now
    const now = new Date()
    const target = new Date(now.getFullYear()+5, now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds())

    function update(){
      const diff = Math.max(0, target - new Date())
      if(diff<=0){
        setTimeLeft(null)
        return
      }
      const seconds = Math.floor(diff/1000)
      const yrs = Math.floor(seconds / (3600*24*365))
      let rem = seconds - yrs*(3600*24*365)
      const days = Math.floor(rem / (3600*24))
      rem = rem - days*(3600*24)
      const hours = Math.floor(rem / 3600)
      rem = rem - hours*3600
      const minutes = Math.floor(rem / 60)
      const secs = rem - minutes*60

      setTimeLeft({yrs, days, hours, minutes, secs})
    }

    update()
    const id = setInterval(update, 1000)
    return ()=>clearInterval(id)
  },[])

  if(showLoader) return <Loader />

  return (
    <div className="page-wrap">
      <div className="center-card polished">
        <div className="meta-row">
          <div className="badge">🚧 Maintenance</div>
          <div className="small-note">Scheduled outage — thank you for your patience</div>
        </div>

        <h1 className="title">Site Under Maintenance</h1>
        <p className="subtitle">We're currently down for scheduled maintenance. We'll be back and better than ever — relaunching in 5 years.</p>

        {timeLeft === null ? (
          <div className="live-now">🎉 Site is Live Now!</div>
        ) : (
          <div className="countdown-grid polished-grid">
            <div className="count-box"><div className="num neon">{timeLeft.yrs}</div><div className="label">Years</div></div>
            <div className="count-box"><div className="num">{String(timeLeft.days).padStart(2,'0')}</div><div className="label">Days</div></div>
            <div className="count-box"><div className="num">{formatNumber(timeLeft.hours)}</div><div className="label">Hours</div></div>
            <div className="count-box"><div className="num">{formatNumber(timeLeft.minutes)}</div><div className="label">Minutes</div></div>
            <div className="count-box"><div className="num">{formatNumber(timeLeft.secs)}</div><div className="label">Seconds</div></div>
          </div>
        )}

        <p className="fineprint">Thanks for your patience. For urgent issues, contact support.</p>
      </div>
    </div>
  )
}
