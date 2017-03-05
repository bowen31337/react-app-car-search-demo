import React from 'react'

const App = props => {
  const { header, main,pageName  } = props

 
  return (
    <div className="widget" data-page={pageName} >
  	   {header}
       {main}
    </div>
  )

}

export default App
