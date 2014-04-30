#### Include an inline screenshot of your codeschool's points from the profile page: https://www.dropbox.com/s/6szvt75fubs243g/Code%20School%20Points.png

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 
    --HTML editing can be done on the left side of the elements panel by right-clicking. CSS files appear and can be edited on the right, which can also be opened up under the source tab once the CSS file is selected.
  
  * Javascript Debugging
    --You can do a couple things: in devtools, you can open up the file from the source tab or pause the code during execution by using the pause on exceptions button under the source tab.

  * Performance Optimization 
    --The network tab can show you the performance of the page, size of files, speed of uploads, and the order of the way the files are loaded.  If you have multiple files send server requests, you can compile them into one.  If the size of a jpeg isn't neccessary for it's pixel size, you can convert it to a png.  You can also change the order the files are loaded, leaving the javascripts to be last to load.

* What's the quick key for your OS to spawn the Dev Tools inspector?
* ctrl-shift + i

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
    -- The background color of the page is #0b0f11.

  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
-- https://www.dropbox.com/s/m22ssi0sb5t2dvz/postmachina%20screenshot.png
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.
  -- I don't believe you can change the color of the text because it really isn't text.  If you notice, the element is an image file.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
   -- the largest image on the website is a picture of Times Square, 316KB
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.
    -- Search the Network Tab in Chrome DevTools and sort the size content column.  Then click on the name path and preview tab.
    --http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?
 -- The easiest and quickest task to optimizing the website would be to optimize the images.  By optimizing the images, ticketswizard.com can save 885.9KiB which is a 39% reduction.
