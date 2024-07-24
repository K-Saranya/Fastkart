import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from '../Pages/HomePage/HomePage'

const Index = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
            
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Index
