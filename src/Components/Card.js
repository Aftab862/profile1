import { ref, equalTo, get, orderByChild, query } from 'firebase/database';

import React, { useEffect, useState } from 'react'
import { db } from '../Utils/Database';
import { AiOutlineMail } from 'react-icons/ai'
import { GiSmartphone, } from 'react-icons/gi'
import { FiPhone } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'
import Sociallinks from './Sociallinks';
const Card = () => {

  const [data, setdata] = useState([])
  const [fd, setfd] = useState()
  const [links, setlinks] = useState()

  useEffect(() => {
    const fetchdata = async () => {
      fetch("http://localhost:8000/data").then((result) => {
        result.json().then((res) => {
          console.log(res)
          setdata(res)
        })
      })
      fetchdata()
    }
    },  [setdata])


  useEffect(() => {
    data.forEach(e => {
      setfd(e)
    });

    if (fd) {
      setlinks(fd.links)
    }
  }, [fd, data])



  return (
    <div className='card'>
      <div className="header">
        <div >
          <img className="backimg" src="image.png" alt="" />
        </div>
        <div >
          <img className="profile" src="p1.png" alt="" />
        </div>
      </div>



      <div className="container">

        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <span>Richard</span>

          <div style={{ display: "flex", flexDirection: "column", lineHeight: "8px", margin: "3px" }}>

            <h2 style={{
              color: "#EDB047"
            }}>
              DAWSON
            </h2>
            <p>REAL ESTATE AGENT</p>
          </div>
        </div>

        <hr className='bookends-dots' />
        <div className="contacts">

          <div>
            <AiOutlineMail style={{
              width: "20px",
              height: "20px",
              color: "darkolivegreen"

            }} />
          </div>
          <div style={{
            textAlign: "start"
          }}>
            <h5>{fd && fd.email}</h5>
          </div>
          <div>
            <GiSmartphone style={{
              width: "20px",
              height: "20px",
              color: "darkolivegreen"

            }} />
          </div>

          <div style={{ textAlign: "start" }}>
            <h5>(555) 123 456789</h5>
          </div>
          <div>
            <FiPhone style={{
              width: "20px",
              height: "20px",
              color: "darkolivegreen"

            }} />
          </div>
          <div style={{ textAlign: 'start' }}>
            <h5>(555) 123456789
            </h5>
          </div>

          <div>
            <GoLocation style={{
              width: "20px",
              height: "20px",
              color: "darkolivegreen"

            }} />
          </div>
          <div style={{ textAlign: "start" }}>
            <h5>{fd && fd.city}</h5>
          </div>
        </div>
      </div>
      <hr className='bookends-dots' />

      <div className="footer">
        <div style={{
          marginTop: "30px"
        }}>
          <p>SOCIAL@RICHARDRELATOR</p>
        </div>

        <div className="social">
          {
            links && links.map((e) => {
              return <Sociallinks key={e.value} link={e} />
            })
          }
        </div>

        <div className="button">
          WWW.RICHARDREALESTATE.COM
        </div>
      </div>
    </div>
  )
}

export default Card










     //   const que = query(ref(db, "Users"), orderByChild("id"), equalTo("-MwbkfgMp5Oevfn_Lx3p"));
      //   await get(que)
      //     .then((snapshot) => {
      //       const records = []
      //       snapshot.forEach(childsnapshot => {
      //         records.push(childsnapshot.val())
      //       });
      //       setdata(records)
      //     })
      // }