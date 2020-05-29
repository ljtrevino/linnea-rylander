/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: "/linnea-rylander",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
  ],
  siteMetadata: {
    projects: [
      {
        text: `Linnear.info is a website that organizes comprehensive review guides, lecture notes, recitation notes, and crib sheets that I created for AP classNamees and classNamees during my time at MIT. In the sidebar on the left side of the screen, you can select from over 15 different subjects and view corresponding documents. When you click into a document, you can view it as a PDF, zoom in/out, and download the document. The website is fully responsive and features components that dynamically resize as necessary. All of the content on the site was created solely by me with an iPad and Apple Pencil. Linnear.info has been used by students in more than 40 countries and more than 20 states in the US alone.\n\nThis web application was developed using ReactJS, HTML, and CSS (Bootstrap)`,
        date: `Created Fall 2019`,
        title: `Linnear`,
        name: `linnear`,
        link: `https://linnear.info/`,
      },
      {
        text: `Wheel Deal provides a platform which arranges bike rentals between different users. Bike renters pay to rent a bike for specified amount of time and bike owners earn money by renting their unused bikes. Bike renters can search for bikes using filters such as bike type, price, availability date and time, and location. Before reserving a bike, users are required to create an account using a valid phone number and provide payment information. Bike owners can create bike listings and specify time availability, location, and price for each of their bikes. They also have the option to upload a photo and provide additional details if they so desire. In order to increase trust on the platform, both owners and renters have the ability to leave ratings and reviews regarding their experiences.\n\nWheel Deal was created using VueJS, Bootstrap, and an SQL Database`,
        date: `Created Fall 2019`,
        title: `Wheel Deal`,
        name: `wheel-deal`,
        link: `http://a-wheel-deal.herokuapp.com/`,
      },
      {
        text: `StreetSmarts is a series of smart street lights that can be used to map optimal routes emergency responders should through take though a city. When the lamp unit detects motion, it begins listening for voice commands and uses voice recognition to identify if there is an emergency and then contact the nearest fire department. At the fire station, a firefighter will accept the request and send a team of firefighters. After the server runs an algorithm to determine the quickest route to the emergency location, the street lamps along that route light up. This helps the firefighters know where to go, and alerts drivers along the way that an emergency vehicle will be coming soon. In record time, the firefighters can reach the emergency location and save lives.\n\nTo create this project, we used Python for our server code and C++ (Arduino) for our microcontroller. We integrated this with a color-changing light bulb using the LIFX API. Additionally, we laser engraved a mini map of Boston with LEDs that represent street lamps in order to demonstrate a working prototype of our system.`,
        date: `Created Spring 2018`,
        title: `Street Smarts`,
        name: `street-smarts`,
        link: `https://lrylander.github.io/StreetSmarts/`,
        video: `https://www.youtube.com/embed/yxqBb4jaiFQ?rel=0&amp;showinfo=0`,
      },
      {
        text: `Vulture is a free food web application designed to save MIT students money. The map on right side of the homescreen shows your current location (with automatic refreshing), and customized icons based on the food that is currently available at various locations around campus. The table on the left displays a summary of the current free food that is available. If you click on a listing, the card above will populate with more details, including an image of the food itself, and a "report gone" button. If 3+ people click the "report gone" button, the listing is deleted. Likewise, listings delete automatically after 1 hour so as not to clutter up the screen.\n\nTo post a listing, you must log in with Google authentication and fill out fields like MIT building, room number, etc. By requiring users to log in, we prevent spam and can easily block users that misuse the site. Other website features include an about page and a profile page. The site was built with NodeJS, ExpressJS, HTML, and CSS (Bootstrap).`,
        date: `Created January 2018`,
        title: `Vulture`,
        name: `vulture-mit`,
        link: `https://github.com/lrylander/vulture`,
      },
      {
        text: `As the Web Chair and later Vice President of Technology for MIT's SWE chapter, I made many modifications to the existing SWE website to make it was more user friendly. One such change was converting the homepage to employ a scrolling background and display information about SWE, SWE event recaps, a calendar of upcoming events, FAQ, and our latest MIT SWEtube videos. This made important information about SWE more easily accessible. Additionally, I redesigned the website and navbar to be responsive on all devices, enabling users to visit our website at home on their computer or on the go with their phone.\n\nThe website was created primarily with PHP, JS, HTML, and CSS (Bootstrap Framework).`,
        date: `Created January 2018`,
        title: `MIT SWE Website`,
        name: `swe-mit`,
        link: `https://swe.mit.edu/`,
      },
      {
        text: `Why is it so difficult to get started with 3D printing? Why does preparing a 3D print take so long? This research project explored ways to make 3D printing faster, easier, and more powerful. In MIT CSAIL's Human Computer Interaction Engineering (HCIE) lab, we created a real time slicing program to improve 3D model slice time within 3D printing software. It allows parts of a 3D model to be adjusted without requiring the whole model to be re-sliced and translated into gcode. Using this software tool tightens the feedback loop of creating 3D objects, thus improving the efficiency of model generation.\n\nThis project was implemented in modern web technology (HTML5/CSS3/JavaScript), 3D JavaScript Libraries (Three.js, Web-Cad), and Python and C# back-ends (Flask server, and custom C# code).`,
        date: `Created Spring 2019`,
        title: `Real Time Slicer`,
        name: `slicer`,
        link: `https://hcie.csail.mit.edu/`,
      },
      {
        text: `Play It By Gear is a level-based ear training puzzle game that requires players to select aspects like pitch, volume, instrument type, and tempo in order to match a goal song. To select these aspects, players drag and drop colored gears into a music box. Once they have placed a gear in each empty space, the user can play the song that their gears create by clicking on a central gear. They can also click a button to play the goal song. When the goal song and the gear-generated song match, the level is complete!\n\nThe game contains 13 levels in total. Levels 1-4 are easy levels, they contain 3 gears of each type (instrument, pitch, tempo, volume); levels 5-9 are medium levels, and contain 5 gears of each type; levels 10-13 are hard levels, they contain 6 gears of each type, 3 for the melody and 3 for the bass.\n\nPlay It By Gear was written in Python 3 and uses kivy to render the graphics.`,
        date: `Created Spring 2020`,
        title: `Play It By Gear`,
        name: `play-it-by-gear`,
        link: `https://github.com/lrylander/play-it-by-gear`,
        video: `https://www.youtube.com/embed/FjHYyH7d4Fw?rel=0&amp;showinfo=0`,
      },
      {
        text: `Fotofix is a multimodal photo-editing tool that combines gesture and speech recognition to help users make their photos the best they can be. The system offers a variety of features for image editing, including, but not limited to, changing brightness and contrast, cropping, grayscaling, pixelating, and applying stickers. After the user says the name of an edit mode, the system enters that mode, simultaneously giving vocal and visual feedback. Then, the user can use hand gestures or use their voice to control their edits.\n\nFotofix was built using the Leap Motion’s ability to track hand pose and motion in conjunction with Google Speech to Text and Text to Speech APIs for speech recognition and speech synthesis, respectively. The project was written entirely in Python 3, rendering the graphics with kivy, and processing the images with PIL.`,
        date: `Created Spring 2020`,
        title: `Fotofix`,
        name: `fotofix`,
        link: `https://github.com/lrylander/fotofix`,
        video: `https://www.youtube.com/embed/QwWX7u6ZztQ?rel=0&amp;showinfo=0`,
      },
      {
        text: `Code for Good is an MIT student group that connects students with local nonprofit organizations to make a direct, positive impact with computer science. Another MIT student and I consulted for Artists for Humanity (AFH), a Boston-based non-profit that employs teens to create art.\n\nWe worked with AFH to convert their paper-based timesheet system into a automated, digital version by creating a web application that allows students to sign in and out. The web application takes in a spreadsheet uploaded by an Artists for Humanity staff each week with a roster of student participants. As students sign in throughout the week, the site updates the spreadsheet with logs of hours and at the end of the week, produces a sheet with totaled hours for the staff to upload to Salesforce.\n\nTo develop this timesheet system we utilized HTML, CSS, JS, and Google Sheets API.`,
        date: `Created Spring 2018`,
        title: `Code For Good`,
        name: `code-for-good`,
        link: `https://github.com/lrylander/AFH-Timesheet-App`,
      },
      {
        text: `Filler Text`,
        date: `Created Spring 2020`,
        title: `Filler Title`,
        name: `slicer`,
        link: `http://google.com`,
      },
    ],
    socialIcons: [
      {
        type: "github",
        class: "icon",
        icon: "fa-github-square",
        link: "https://github.com/lrylander",
      },
      {
        type: "linkedin",
        class: "icon",
        icon: "fa-linkedin",
        link: "https://www.linkedin.com/in/linnearylander",
      },
      {
        type: "envelope",
        class: "icon",
        icon: "fa-envelope-square",
        link: "mailto:linnearylander@gmail.com",
      },
      {
        type: "resume",
        class: "icon-rect",
        icon: "fa-file-alt",
        link: "Linnea_Rylander_Resume.pdf",
      },
    ],
    cars: ["blue-car", "orange-car"],
  },
}
