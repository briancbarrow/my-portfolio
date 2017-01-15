import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        name: "Basketball Battle App",
        link: "http://bball-battle.herokuapp.com/",
        tech: ["HTML", "JavaScript", "AJAX", "CSS", "React", "Node.js", "Mongoose", "Express"],
        image: "assets/images/bball-battle.PNG"
      },
      {
        name: "Meetup Finder",
        link: "https://briancbarrow.github.io/meetup-finder",
        tech: ["AJAX", "CSS", "JavaScript", "HTML"],
        image: "assets/images/meetupFinder1.png"
      },
      {
        name: "NBA Salary Per Minute",
        link: "https://fast-dusk-74105.herokuapp.com/",
        tech: ["D3.js", "AJAX", "CSS", "JavaScript", "HTML", "Node", "MongoDB"],
        image: "assets/images/bballdata.PNG"
      },
      {
        name: "D3 Bar Chart",
        link: "http://codepen.io/briancbarrow/full/VaOmNx",
        tech: ["D3.js", "AJAX", "CSS", "JavaScript", "HTML"],
        image: "assets/images/d3-chart.PNG"
      },
      {
        name: "Simon Game",
        link: "http://codepen.io/briancbarrow/full/dGBYyG",
        tech: ["JavaScript", "CSS", "HTML"],
        image: "assets/images/simon.PNG"
      },
      {
        name: "Wikipedia Viewer",
        link: "http://codepen.io/briancbarrow/full/bEazdj",
        tech: ["AJAX", "JavaScript", "CSS", "HTML"],
        image: "assets/images/WikipediaViewer.PNG"
      },
      {
        name: "Pomodoro Timer",
        link: "http://codepen.io/briancbarrow/full/rOKwJq",
        tech: ["JavaScript", "CSS", "HTML"],
        image: "assets/images/Pomodoro.PNG"
      },
      {
        name: "Weather App",
        link: "http://codepen.io/briancbarrow/full/xZOMGE",
        tech: ["AJAX", "JavaScript", "CSS", "HTML"],
        image: "assets/images/WeatherApp1.PNG"
      }

    ];
  }
});
