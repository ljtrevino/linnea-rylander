import React from "react"
import { Helmet } from "react-helmet"

import "../styles/main.css"
import "../styles/slider.css"
import "../styles/stars.css"

import Building from "../components/building"
import Ground from "../components/ground"

export default function Home() {
  return (
    <>
      <Helmet>
        {/* Required meta tags */}
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/* Font Awesome */}
        <link href="./font-awesome/css/all.css" rel="stylesheet" />

        {/* Bootstrap CSS */}
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />

        {/* Favicon */}
        <link rel="shortcut icon" href="images/favicon.png" />

        {/* CSS */}
        <link rel="stylesheet" type="text/css" href="css/main.css" />
        <link rel="stylesheet" type="text/css" href="css/stars.css" />
        <link rel="stylesheet" type="text/css" href="css/slider.css" />

        <title>Linnea Rylander</title>
      </Helmet>

      <Building />
      <Ground />
    </>
  )
}
