import React from 'react'

import favicon from './img/favicon.ico'

function Header() {
  return (
    <div>
    
    <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>Little Lemon</title>
    <meta name="description" content="A brief description" />
    <meta
      name="author"
      content="Based in Chicago, Illinois, Little Lemon is a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
    />

    {/* <!-- Load favicon --> */}
    <link
      rel="shortcut icon"
      type="image/png"
      href= {favicon} alt = "favicon" 
    />

    {/* <!-- Include your CSS files here --> */}
    <link
      rel="preload"
      as="style"
      href="{% static 'css/style.css' %}"
      onload="this.rel = 'stylesheet'"
    />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Karla&family=Markazi+Text:wght@500&display=swap"
      rel="stylesheet"
    />
  </head>


      
    </div>
  )
}

export default Header
