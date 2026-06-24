import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.jsx'

// const reactele = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     Children: 'Click Me to visit Google'
// }

//creating the react element in predefined format
const user = "Coffee"
const reactEle= React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'Click Me to visit Google',
  user
)



createRoot(document.getElementById('root')).render(
 reactEle
)
