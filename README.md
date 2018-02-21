# Pixelated Image filter

Description: This filter wil turn the video feed from a computer's camera and 'pixelate' the image so it is comprised of many small circles with radii based on the darkness of the pixels of the original image. Using the sliders, you can cange the color of the pixels, you can invert the darkness, and change the # of circles (ie. resolution).

Boundray Cases: This filter breaks down if the number of circles is too high, or too low. WHen the # of circles is too high, the copmuter simply cannot process the information from the original video and relay it in pixels fast enough (i.e. it lags and freezes). When there are too few circles, the problem from one with the computer, to one with the user. When there are too few circles, it is very difficult to distiguish any detail, and instead, the filter simply looks like circles of varying sizes.

Sources: Code used P5 libraries ans was based on the examples in P5 such as: 
https://p5js.org/examples/dom-video-capture.html
https://p5js.org/examples/dom-video-pixels.html
