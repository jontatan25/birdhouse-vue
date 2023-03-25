

<h1 align="center">
  <br>
 <img src="https://iili.io/HNYS7HB.md.jpg" alt="Shockbyte Birdhouses logo" width="200">
  <br>
  Shockbyte Birdhouses
  <br>
</h1>

<h4 align="center">Web app for viewing birdhouse and residency data. Made in <a href="https://vuejs.org/" target="_blank">Vue.js</a>.</h4>

<p align="center">
  <a href="#how-to-use">How To Use</a> •
  <a href="#thought-process">Thought process</a> •
  <a href="#credits">Credits</a> •
  <a href="#related">Related</a> •
  <a href="#license">License</a> 


</p>

![screenshot](https://iili.io/HNaUMoF.gif)

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/jontatan25/birdhouse-vue

# Go into the repository / server folder
$ cd birdhouse-vue

# Install dependencies
$ npm install

# Run the app
$ npm serve
```
> **Note**
> If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Thought process


1.  Setup the development environment: Install all the necessary tools and dependencies required for developing the project.
    
2.  Create the FrontEnd application using Vue.js + Typescript and Tailwind. Let's see what  Tailwind can offer and why people use it. learn how it works, how to confirgure it ... done!. 
3. Lets see if there is way to add custom properties that can be used globally... found it!. Set colors and fonts globally and installed intellisense to see the properties of the tailwind classes, amazing. I am starting to like this.
    
4.  Lets take another look at the Figma design .  Lets define how many views I will have and how the components will work with each other. Time to code the components and routes with using vue-router. 
    
5. Oh god, it's time. time to make our first API call  to OUR BEAUTIFUL SERVER!!! (cold sweating.)
6. It worked !! that Back-end programmer must be so good. 

7. So, the homepage will take me to a new view with a list of Birdhouses (HousesList), and from there when I click each of the houses it will take me to its details.
 
8. There is a NavBar on the side. it will be the whole time so lets nest our components and create a view where the nav is always there. 

9. It looks OK, but it feels super static, the only style provided was an Active state for the NavBar button. Time to shine! Lets make it cooler and add a hover effect to the nav buttons , donwload the icons as SVG and change their colors on hover. great!  add Hover styles to the Birdhouses Items  inside the List, nice it looks very entertaining (waste some minutes hovering the View that is full of House items)

10. When a birdhouse is clicked the interface will change again. the Header is static, and body below it will change, lest add the new route and use conditional rendering for the History and the Graph, Wait ... a CHART ???!!
11. The style of the Header inside the House details has 'Overview' and 'Graph' with styles that will change depending on what component is active > Style binding is the answer!
12. code  the interface of the new view  with mock data  and then display the components with the info from the API.
13. Pagination. there is 2 of them. one for the HousesList and other for the HouseHistory . and there is a style for the active page, yeah! we can also reuse the hover style from the nav .
14. THE CHART- The thing that I cannot avoid anymore. Time to make a research and find an option that works for this... found it! implemented. easy!
15. THE CHART PART II what is this ? renderChart,datasets, labels, maintainAspectRatio, scales,x,y,grid,plugin...(cries in Cartesian).
16. lets make sure that the components are reactive. and rerender when getting the new data. done. but wait I need a way to make the user know that he is waiting. lets implement a loading that can be reusable. nprogress will do the work.

17. favicon and title by default oh god no, lets find the shockbyte logo (hopefully they will not sue mw for this) also change the title.
18. Awesome, time to clean the code and remove comments.
19. time to make the docs. hmmm found a template for it. looks nice. I will use one template for both repositories. But wait! the shockbyte logo thing still  in my head. What if .... I make my own logo?

20. Take the reference of the logo that has the colors of the front end app. and USE AI to  Edit it , try,error,try,error, B oom! I got something really nice it even has the Birdhouse on it lol !! but the resolution is not that good and has some errors on it. Fixable. AI rules!!
21. Photoshop. remove the defects.  Upscale the image with AI and use it everywhere. also lets convert it to an icon that can be usable as favicon in the front end. lets also add the word "API" to the logo and use it on the Backend README. host it and use it.
22. Make a video > Video to PNG > use it on the README.
23. Done. Thank you for reading!! I really appreciate it. It was really cool to work on this project while improving my coding skills.


## Credits

This software uses the following open source packages:
- [Vue.js](https://vuejs.org/)
- [axios](https://axios-http.com/)
- [Chart.js](https://www.chartjs.org/)
- [cors](https://github.com/expressjs/cors#readme/)
- [Tailwind](https://tailwindcss.com/)
- [nprogress](https://github.com/rstacruz/nprogress/)
- [amitmerchant1990](https://github.com/winstonjs/winston) README template 

## Related

[Shockbyte](https://shockbyte.com/) - The best game server provider.

## License

MIT

---

> GitHub [@jontatan25](https://github.com/jontatan25) &nbsp;&middot;&nbsp;


