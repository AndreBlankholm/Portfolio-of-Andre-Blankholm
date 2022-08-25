import React from 'react'
import About from '../Nav/About'
import Contact from '../Nav/Contact'
import Portfolio from '../Nav/Portfolio'
import Resume from '../Nav/Resume'




const Page = ({currentPage}) => {
    const renderPage = () => {
        switch (currentPage.name) {
            
            case "About": 
            return <About/>
            case "Contact":
            return <Contact/>
            case "Portfolio":
            return <Portfolio/>
            case "Resume":
            return <Resume/>
        }
    }
  return (
    <div>{renderPage()}</div>
  )
}

export default Page