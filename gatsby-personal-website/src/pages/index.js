import React from "react"
import { Helmet } from "react-helmet"

import "../styles/main.css"
import "../styles/slider.css"
import "../styles/stars.css"

export default function Home() {
  return (
    <>
    <Helmet>
      {/* Required meta tags */}
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

      {/* Font Awesome */}
      <link href="./font-awesome/css/all.css" rel="stylesheet"/>

      {/* Bootstrap CSS */}
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>

      {/* Favicon */}
      <link rel="shortcut icon" href="images/favicon.png" />

      {/* CSS */}
      <link rel="stylesheet" type="text/css" href="css/main.css" />
      <link rel="stylesheet" type="text/css" href="css/stars.css" />
      <link rel="stylesheet" type="text/css" href="css/slider.css" />

      <title>Linnea Rylander</title>
    </Helmet>


    <div id="intro" class="day-intro position-relative overflow-hidden text-center" onmouseover="onHoverOutRoom(this)">

      <div id="wrap" class="switcher-wrap">
        <div id="sunMoon" class="sun-moon"> </div>
      </div>

      <div id="intro-header" class="col-md-12 pb-lg-5 mx-auto my-5">
        <h1 class="title display-4 font-weight-normal">Linnea Rylander</h1>
        <h2 class="subtitle lead font-weight-normal">DEVELOPER • DESIGNER • ENGINEER</h2>

        <a id="github-icon" class="intro-btn intro-btn-light" href="https://github.com/lrylander"><i class="icon fab fa-github-square"></i></a>
        <a id="linkedin-icon" class="intro-btn intro-btn-light" href="https://www.linkedin.com/in/linnearylander"><i class="icon fab fa-linkedin"></i></a>
        <a id="envelope-icon" class="intro-btn intro-btn-light" href="mailto:linnearylander@gmail.com"><i class="icon fas fa-envelope-square"></i></a>
        <a id="resume-icon" class="intro-btn intro-btn-light" href="Linnea_Rylander_Resume.pdf"><i class="icon-rect fas fa-file-alt"></i></a>

      </div>
    </div>


    <div class="cloud1">
      <div class="cl1">
      </div>
      <div class="cl2">
      </div>
      <div class="cl3">
      </div>
      <div class="cl4">
      </div>
    </div>
    <div class="cloud2">
      <div class="cl1">
      </div>
      <div class="cl2">
      </div>
      <div class="cl3">
      </div>
      <div class="cl4">
      </div>
    </div>
    <div class="cloud3">
      <div class="cl1">
      </div>
      <div class="cl2">
      </div>
      <div class="cl3">
      </div>
      <div class="cl4">
      </div>
    </div>


    <div id="outer-sky" class="">
      <div id="sky" class="day-sky">
        <a id="arealeft" class="area" onmouseover="onHoverOutRoom(this)"></a>
        <a id="arearight" class="area" onmouseover="onHoverOutRoom(this)"></a>
        <a id="area1" class="area" onmouseover="onHoverRoom(this)"></a>
        <a id="area2" class="area" onmouseover="onHoverRoom(this)"></a>
        <a id="area3" class="area" onmouseover="onHoverRoom(this)"></a>
        <a id="area4" class="area" onmouseover="onHoverRoom(this)"></a>
        <a id="area5" class="area" onmouseover="onHoverRoom(this)"></a>
        <img id="building" src="images/building/building-day.png" />
        <div id="stars-container" class="areastars-off">
          <div class="stars small"></div>
          <div class="stars medium"></div>
          <div class="stars large"></div>
        </div>
      </div>
    </div>

      <div id="road" class="road-light" onmouseover="onHoverOutRoom(this)">
        <img id="blue-car" class="car" src="images/blue-car.PNG"/>
      </div>
      <div id="road2" class="road-light" onmouseover="onHoverOutRoom(this)">
        <img id="orange-car" class="car" src="images/orange-car.PNG"/>
      </div>

      <div id="grass" class="grass-light"></div>

      <div id="dirt" class="dirt-light">
        <h1 class="subsubtitle display-4 font-weight-normal">Side Projects</h1>
        <div class="project-icon-container row">
          <div class="col">
            <img class="project-icon" src="images/linnear-icon.PNG" onclick="toggleCard('linnear-card')"/>
          </div>
          <div class="col">
            <img class="project-icon" src="images/wheel-deal-icon.PNG" onclick="toggleCard('wheel-deal-card')"/>
          </div>
          <div class="col">
            <img class="project-icon" src="images/street-smarts-icon.PNG" onclick="toggleCard('street-smarts-card')"/>
          </div>
          <div class="col">
            <img class="project-icon" src="images/vulture-mit-icon.PNG" onclick="toggleCard('vulture-mit-card')"/>
          </div>
          <div class="col">
            <img class="project-icon" src="images/swe-mit-icon.PNG" onclick="toggleCard('swe-mit-card')"/>
          </div>
        </div>


        {/* Linnear Card */}
        <div id='linnear-card' class="project-card">
          <div id="linnear-arrow" class="arrow-up"></div>
          <div class="card linnear-color">
            <div class="card-row row no-gutters">
              <div class="col">
                <div class="card-body">
                  <h1 class="card-title">Linnear &nbsp;<a href="https://linnear.info/"><i
                        class="card-icon fas fa-external-link-alt"></i></a></h1>
                  <p class="card-text">
                    Linnear.info is a website that organizes comprehensive review guides, lecture notes, recitation notes, and crib sheets that I created for AP classes and classes during my time at MIT. In the sidebar on the left side of the screen,
                    you can select from over 15 different subjects and view corresponding documents. When you click into a document, you can view it as a PDF, zoom in/out, and download the document. The website is fully responsive and features
                    components that dynamically resize as necessary. All of the content on the site was created solely by me with an iPad and Apple Pencil. Linnear.info has been used by students in more than 40 countries and more than 20 states in the
                    US alone.
                  </p>
                  <p class="card-text">
                    This web application was developed using ReactJS, HTML, and CSS (Bootstrap)
                  </p>
                  <p class="card-text text-muted">Created Fall 2019</p>
                </div>
              </div>
              <div class="col">
                <img class="card-image-border" src="../images/linnear-screenshot.PNG"/>
              </div>
            </div>
          </div>
        </div>


        {/* Wheel Deal Card */}
        <div id='wheel-deal-card' class="project-card">
          <div id="wheel-deal-arrow" class="arrow-up"></div>
          <div class="card wheel-deal-color">
            <div class="card-row row no-gutters">
              <div class="col">
                <div class="card-body">
                  <h1 class="card-title">Wheel Deal &nbsp;<a href="http://a-wheel-deal.herokuapp.com/"><i
                        class="card-icon fas fa-external-link-alt"></i></a></h1>
                  <p class="card-text">
                    Wheel Deal provides a platform which arranges bike rentals between different users. Bike renters pay to rent a bike for specified amount of time and bike owners earn money by renting their unused bikes. Bike renters can search for
                    bikes using filters such as bike type, price, availability date and time, and location. Before reserving a bike, users are required to create an account using a valid phone number and provide payment information. Bike owners can
                    create bike listings and specify time availability, location, and price for each of their bikes. They also have the option to upload a photo and provide additional details if they so desire. In order to increase trust on the
                    platform, both owners and renters have the ability to leave ratings and reviews regarding their experiences.
                  </p>
                  <p class="card-text">
                    Wheel Deal was created using VueJS, Bootstrap, and an SQL Database
                  </p>
                  <p class="card-text text-muted">Created Fall 2019</p>
                </div>
              </div>
              <div class="col">
                <img class="card-image-border" src="../images/wheel-deal-screenshot.PNG" />
              </div>
            </div>
          </div>
        </div>

        {/* Street Smarts Card */}
        <div id='street-smarts-card' class="project-card">
          <div id="street-smarts-arrow" class="arrow-up"></div>
          <div class="card street-smarts-color">
            <div class="card-row row no-gutters">
              <div class="col-6">
                <div class="card-body">
                  <h1 class="card-title">Street Smarts &nbsp;<a href="https://lrylander.github.io/StreetSmarts/"><i
                        class="card-icon fas fa-external-link-alt"></i></a></h1>
                  <p class="card-text">
                    StreetSmarts is a series of smart street lights that can be used to map optimal routes emergency responders should through take though a city. When the lamp unit detects motion, it begins listening for voice commands and uses voice
                    recognition to identify if there is an emergency and then contact the nearest fire department. At the fire station, a firefighter will accept the request and send a team of firefighters. After the server runs an algorithm to
                    determine the quickest route to the emergency location, the street lamps along that route light up. This helps the firefighters know where to go, and alerts drivers along the way that an emergency vehicle will be coming soon. In
                    record time, the firefighters can reach the emergency location and save lives.
                  </p>
                  <p class="card-text">
                    To create this project, we used Python for our server code and C++ (Arduino) for our microcontroller. We integrated this with a color-changing light bulb using the LIFX API. Additionally, we laser engraved a mini map of Boston with
                    LEDs that represent street lamps in order to demonstrate a working prototype of our system.
                  </p>
                  <p class="card-text text-muted">Created Spring 2018</p>
                </div>
              </div>
              <div class="col-6">
                <iframe class="card-iframe" src="https://www.youtube.com/embed/yxqBb4jaiFQ?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Vulture MIT Card */}
        <div id='vulture-mit-card' class="project-card">
          <div id="vulture-mit-arrow" class="arrow-up"></div>
          <div class="card vulture-mit-color">
            <div class="card-row row no-gutters">
              <div class="col">
                <div class="card-body">
                  <h1 class="card-title">Vulture &nbsp;<a href="https://github.com/lrylander/vulture"><i
                        class="card-icon fas fa-external-link-alt"></i></a></h1>
                  <p class="card-text">
                    Vulture is a free food web application designed to save MIT students money. The map on right side of the homescreen shows your current location (with automatic refreshing), and customized icons based on the food that is currently
                    available at various locations around campus. The table on the left displays a summary of the current free food that is available. If you click on a listing, the card above will populate with more details, including an image of the
                    food itself, and a "report gone" button. If 3+ people click the "report gone" button, the listing is deleted. Likewise, listings delete automatically after 1 hour so as not to clutter up the screen.
                  </p>
                  <p class="card-text">
                    To post a listing, you must log in with Google authentication and fill out fields like MIT building, room number, etc. By requiring users to log in, we prevent spam and can easily block users that misuse the site. Other website
                    features include an about page and a profile page. The site was built with NodeJS, ExpressJS, HTML, and CSS (Bootstrap).
                  </p>
                  <p class="card-text text-muted">Created January 2018</p>
                </div>
              </div>
              <div class="col">
                <img class="card-image-border" src="../images/vulture-screenshot.PNG"/>
              </div>
            </div>
          </div>
        </div>

        {/* SWE MIT Card */}
        <div id='swe-mit-card' class="project-card">
          <div id="swe-mit-arrow" class="arrow-up"></div>
          <div class="card swe-mit-color">
            <div class="card-row row no-gutters">
              <div class="col-6">
                <div class="card-body">
                  <h1 class="card-title">MIT SWE Website &nbsp;<a href="https://swe.mit.edu/"><i
                        class="card-icon fas fa-external-link-alt"></i></a></h1>
                  <p class="card-text">
                    As the Web Chair and later Vice President of Technology for MIT's SWE chapter, I made many modifications to the existing SWE website to make it was more user friendly. One such change was converting the homepage to employ a
                    scrolling background and display information about SWE, SWE event recaps, a calendar of upcoming events, FAQ, and our latest MIT SWEtube videos. This made important information about SWE more easily accessible. Additionally, I
                    redesigned the website and navbar to be responsive on all devices, enabling users to visit our website at home on their computer or on the go with their phone.
                  </p>
                  <p class="card-text">
                    The website was created primarily with PHP, JS, HTML, and CSS (Bootstrap Framework).
                  </p>
                  <p class="card-text text-muted">Created January 2018</p>
                </div>
              </div>
              <div class="col-6">
                <img class="card-image-border" src="../images/swe-screenshot.PNG"/>
              </div>
            </div>
          </div>
        </div>

        {/* Slicer Card */}
        <div id='3d-slicer-card' class="project-card">
          <div class="card slicer-color">
            <div class="card-row row no-gutters">
              <div class="col">
                <div class="card-body">
                  <h1 class="card-title"> Real Time Slicer &nbsp;<a href="https://hcie.csail.mit.edu/"><i
                        class="card-icon fas fa-external-link-alt"></i></a></h1>
                  <p class="card-text">
                    Why is it so difficult to get started with 3D printing? Why does preparing a 3D print take so long? This research project explored ways to make 3D printing faster, easier, and more powerful. In MIT CSAIL's Human Computer Interaction
                    Engineering (HCIE) lab, we created a real time slicing program to improve 3D model slice time within 3D printing software. It allows parts of a 3D model to be adjusted without requiring the whole model to be re-sliced and translated
                    into gcode. Using this software tool tightens the feedback loop of creating 3D objects, thus improving the efficiency of model generation.
                  </p>
                  <p class="card-text">
                    This project was implemented in modern web technology (HTML5/CSS3/JavaScript), 3D JavaScript Libraries (Three.js, Web-Cad), and Python and C# back-ends (Flask server, and custom C# code).
                  </p>
                  <p class="card-text text-muted">Created Spring 2019</p>
                </div>
              </div>
              <div class="col">
                <img class="card-image" src="../images/rt-slicer-photo.PNG" />
              </div>
            </div>
          </div>
          <div id="slicer-arrow" class="arrow-down"></div>
        </div>

        {/* Play it by Gear Card */}
        <div id='play-it-by-gear-card' class="project-card">
          <div class="card play-it-by-gear-color">
            <div class="card-row row no-gutters">
              <div class="col-6">
                <div class="card-body">
                  <h1 class="card-title"> Play It By Gear &nbsp;<a href="https://github.com/lrylander/play-it-by-gear"><i
                        class="card-icon fas fa-external-link-alt"></i></a></h1>
                  <p class="card-text">
                    Play It By Gear is a level-based ear training puzzle game that requires players to select aspects like pitch, volume, instrument type, and tempo in order to match a goal song. To select these aspects, players drag and drop colored
                    gears into a music box. Once they have placed a gear in each empty space, the user can play the song that their gears create by clicking on a central gear. They can also click a button to play the goal song. When the goal song and
                    the gear-generated song match, the level is complete!
                  </p>
                  <p class="card-text">
                    The game contains 13 levels in total. Levels 1-4 are easy levels, they contain 3 gears of each type (instrument, pitch, tempo, volume); levels 5-9 are medium levels, and contain 5 gears of each type; levels 10-13 are hard levels,
                    they contain 6 gears of each type, 3 for the melody and 3 for the bass.
                  </p>
                  <p class="card-text">
                    Play It By Gear was written in Python 3 and uses kivy to render the graphics.
                  </p>
                  <p class="card-text text-muted">Created Spring 2020</p>
                </div>
              </div>
              <div class="col-6">
                <iframe class="card-iframe" src="https://www.youtube.com/embed/FjHYyH7d4Fw?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
              </div>
            </div>
          </div>
          <div id="play-it-by-gear-arrow" class="arrow-down"></div>
        </div>

        {/* Fotofix Card */}
        <div id='fotofix-card' class="project-card">
          <div class="card fotofix-color">
            <div class="card-row row no-gutters">
              <div class="col-6">
                <div class="card-body">
                  <h1 class="card-title"> Fotofix &nbsp;<a href="https://github.com/lrylander/fotofix"><i
                        class="card-icon fas fa-external-link-alt"></i></a></h1>
                  <p class="card-text">
                    Fotofix is a multimodal photo-editing tool that combines gesture and speech recognition to help users make their photos the best they can be. The system offers a variety of features for image editing, including, but not limited to,
                    changing brightness and contrast, cropping, grayscaling, pixelating, and applying stickers. After the user says the name of an edit mode, the system enters that mode, simultaneously giving vocal and visual feedback. Then, the user
                    can use hand gestures or use their voice to control their edits.
                  </p>
                  <p class="card-text">
                    Fotofix was built using the Leap Motion’s ability to track hand pose and motion in conjunction with Google Speech to Text and Text to Speech APIs for speech recognition and speech synthesis, respectively. The project was written
                    entirely in Python 3, rendering the graphics with kivy, and processing the images with PIL.
                  </p>
                  <p class="card-text text-muted">Created Spring 2020</p>
                </div>
              </div>
              <div class="col-6">
                <iframe class="card-iframe" src="https://www.youtube.com/embed/QwWX7u6ZztQ?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
              </div>
            </div>
          </div>
          <div id="fotofix-arrow" class="arrow-down"></div>
        </div>

        {/* Code for Good Card */}
        <div id='code-for-good-card' class="project-card">
          <div class="card code-for-good-color">
            <div class="card-row row no-gutters">
              <div class="col-6">
                <div class="card-body">
                  <h1 class="card-title"> Code For Good &nbsp;<a href="https://github.com/lrylander/AFH-Timesheet-App"><i
                        class="card-icon fas fa-external-link-alt"></i></a></h1>
                  <p class="card-text">
                    Code for Good is an MIT student group that connects students with local nonprofit organizations to make a direct, positive impact with computer science. Another MIT student and I consulted for Artists for Humanity (AFH), a
                    Boston-based non-profit that employs teens to create art.
                  </p>
                  <p class="card-text">
                    We worked with AFH to convert their paper-based timesheet system into a automated, digital version by creating a web application that allows students to sign in and out. The web application takes in a spreadsheet uploaded by an
                    Artists for Humanity staff each week with a roster of student participants. As students sign in throughout the week, the site updates the spreadsheet with logs of hours and at the end of the week, produces a sheet with totaled hours
                    for the staff to upload to Salesforce.
                  </p>
                  <p class="card-text">
                    To develop this timesheet system we utilized HTML, CSS, JS, and Google Sheets API.
                  </p>
                  <p class="card-text text-muted">Created Spring 2018</p>
                </div>
              </div>
              <div class="col-6">
                <img class="card-image-border" src="../images/afh-screenshot.PNG"/>
              </div>
            </div>
          </div>
          <div id="code-for-good-arrow" class="arrow-down"></div>
        </div>


        <div class="project-icon-container row">
          <div class="col">
            <img src="images/CSAIL.png" class="project-icon" onclick="toggleCard('3d-slicer-card')"/>
          </div>
          <div class="col">
            <img src="images/play-it-by-gear-icon-edit.PNG" class="project-icon" onclick="toggleCard('play-it-by-gear-card')"/>
          </div>
          <div class="col">
            <img src="images/fotofix.JPG" class="project-icon" onclick="toggleCard('fotofix-card')"/>
          </div>
          <div class="col">
            <img src="images/code-for-good-logo.png" class="project-icon" onclick="toggleCard('code-for-good-card')"/>
          </div>
          <div class="col">
            <img src="images/wheel-deal-icon.PNG" class="project-icon"/>
          </div>
        </div>
      </div>
      </>
  );
}
