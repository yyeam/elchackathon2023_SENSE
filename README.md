PROJECT TITLE: SENSE

PROJECT DESCRIPTION: To answer the question of beauty accessibility, we've chosen to target the Anosmic community (individuals who have lost their sense of smell), since these individuals can't smell, we've chosen to use a 3D graphics/VR design tool that can help these individuals get a better sense of a scent/fragrance using audio-visual queues (not to mention the fact that all digital customers looking for fragrances are technically anosmic since none of us can smell virtually).

Our project consists of 2 simple webpages that are built using HTML, CSS & JS, what's new is our VR Garden, this implements a lightweight graphical web framework called A-Frame that helps us build 3D & VR experiences on the web. A few reasons as to why we chose A-Frame over an established graphical engine like Unity or Unreal Engine to build our Virtual Reality experience are as follows;

  1) It's based upon HTML which makes it compatible with any generic website, which means that it doesn't really matter what tools your vendor has used to build your respective brand's website (may it be Joe Malone, Tom Ford or even Le Labo), we can still intergrate this VR experience amongst all of them with no issues at all.
  
  2) It's lightweight which reduces one's hosting costs and is easily accessible by a wide variety of devices since A-Frame scenes don't require an absurd amount of graphical power to work.
  
  3) A-Frame is not just a 3D scene graph or a markup language; the core is a powerful entity-component framework that provides a declarative, extensible, and composable structure to Three.JS. Three.JS is maintainted by developers from Supermedium & Google which assures that there will be a great deal of support as well as further increments to both Three.JS & A-Frame in the future.
  
HOW TO RUN: For starters, you'd want to clone our Github Repo onto your local machine. Once that's done, you can use a liveserver plugin within your IDE to locally host our static website along with all it's respective dependencies. 

Note: You don't need any external installations to run A-Frame as we're remotely importing the JS library directly into our html file.

HOW TO USE: So our solution currently works the best with full fledged desktop browsers, though we feel that it can be made compatible with mobile devices provided more time and resources. 

Since this is only a POC and the main highlight is really the highlight, we didn't really replicate JM's webpage to work with different screen aspect ratio's or screen sizes, hence we recommend that your system maintains the same display standards as shown in the image below. 

![image](https://user-images.githubusercontent.com/122961328/225537010-fac69528-40d1-4847-929c-ece079c3518d.png)

Once your display settings are configured, Please maximize your browser window and WE CAN BEGIN! Here is the ideal user journey we've mapped out for our customers;

1) Land on Joe Malone's Home page by launching your live server or just clicking on Index.html within your file explorer (Make sure all assets are attached).
2) Scroll down to the "Perfect Presents" section, once you've scrolled down, you should see a pop-up on the bottom right of your display labelled "Scent Finder".
3) This is the first new techincal feature we're implementing on top of JM's current website. Click on the Scent Finder pop-up and take the quiz.
4) At the end of the quiz you should be presented with 4 scent options, for our MVP (Minimum Viable Product) we've built our VR garden only for Star Magnolia as it's part of Joe Malone's new Blossoms Collection. 
5) Proceed to click on the "Go To Scent" button, this will redirect you to Star Magnolia's Individual Product Page.
6) Continue by scrolling down to the "Experience The Scent" section of the webpage, this is where you will find our VR expereince, this is our second technical feature.
7) Firstly, click on the "VR" button available on the bottom right of the VR window display to full screen your VR window.

![image](https://user-images.githubusercontent.com/122961328/225568418-fff4dcf9-e167-435f-974f-4aefe734eb0d.png)

8) Once full-screened, you are shown some basic "How To Play" Instructions and you can also choose to toggle the sound on/off using the provided slider. 
9) Once this is all done, it's time to finally dive into our VR experience. Click "OK" and BEGIN! 
11) Fool around and have fun in our Virtual Garden :) 
12) Once you're done messing about in our virtual reality, it's time to add this product to your "Wishlist", which is our final feature.
13) The wishlist functionality is currently just a POC but if you hover over it, you can see the 3 options provided, namely;
    a) Request A Tester
    b) Connect To A Stylist
    c) Connect To A Community
These 3 options prompt immediate conversion within the user by providing them a more high-touch and personalized feel.
13) This concludes our User Journey, in which we've highlighted our 3 newly implemented technical features.

CONTRIBUTORS: Nikhil Chaturvedi (nichatur@estee.com)
              Yong Xuan (yyeam@estee.com)
          
REFERENCES: https://aframe.io/

         
