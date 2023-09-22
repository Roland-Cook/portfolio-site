import React from 'react'
import "./footer.scss"
import { useInView } from "react-intersection-observer"



const Footer = () => {
  const { ref: myRef, inView: Visible } = useInView()

  return (
    <footer className={` footer ${Visible ? "footerShow" : "footerHidden"} `} ref={myRef}>
        Copyright &#169; 2023 Roland Cook. All rights reserved
    </footer>
  )
}

export default Footer
