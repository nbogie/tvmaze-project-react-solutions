# What's this?

This is Neill's set of solutions _in React_ to the various levels of the [tv-show-dom-project](https://github.com/CodeYourFuture/syllabus/tree/master/js-core-3/tv-show-dom-project) challenge.

Each level is in its own **branch** in this repo, but is also deployed separately to netlify. (Right now, you're probably looking at the master branch.)

- [level-100 source](https://github.com/nbogie/tvmaze-project-react-solutions/tree/level-100) and [level-100 deployed](https://cyf-tv-level-100-react-solution.netlify.app/)
- [level-101 source](https://github.com/nbogie/tvmaze-project-react-solutions/tree/level-101) and [level-101 deployed](https://cyf-tv-level-101-react-solution.netlify.app/)
- [level-200 source](https://github.com/nbogie/tvmaze-project-react-solutions/tree/level-200) and [level-200 deployed](https://cyf-tv-level-200-react-solution.netlify.app/)
- [level-300 source](https://github.com/nbogie/tvmaze-project-react-solutions/tree/level-300) and [level-300 deployed](https://cyf-tv-level-300-react-solution.netlify.app/)
- [level-350 source](https://github.com/nbogie/tvmaze-project-react-solutions/tree/level-350) and [level-350 deployed](https://cyf-tv-level-350-react-solution.netlify.app/)
- [level-400 source](https://github.com/nbogie/tvmaze-project-react-solutions/tree/level-400) and [level-400 deployed](https://cyf-tv-level-400-react-solution.netlify.app/)
- [level-500 source](https://github.com/nbogie/tvmaze-project-react-solutions/tree/level-500) and [level-500 deployed](https://cyf-tv-level-500-react-solution.netlify.app/)

Bonus oddities:

- [p5js-loader source](https://github.com/nbogie/tvmaze-project-react-solutions/tree/p5js-loader) and [p5js-loader deployed](https://cyf-tv-p5js-loader-react-solution.netlify.app/) (Don't do animations this way.)


## Other solutions:

You can find [Ahmad's alternative solution here](https://github.com/ahmad-ali14/tv-shows-react-hooks).

## General Notes

### No React idioms in early levels:

Earlier levels are intentionally written _without_ the use of common React idioms.

This is in order that they look as familiar as possible for CYF students meeting React for the first time.

Just because you see something done one way here doesn't mean that's the best or most common way to do it.

Examples:

- no destructuring of objects (e.g. to extract from props)
- no file-per-component breakdown - see the (invented) level-101 solution for this refactoring.

### Minimal viable solution, always:

Also, at each level, the bare minimum has been done to meet the requirements. There is no finessing.

This is to limit the amount of code students have to read through to grasp what's going on.

### The CSS is bad:

The CSS is bad.

Also, there's no attempt here at responsive design, only for desktop.

# How to run
You don't need to!


With the links above you don't need to run this locally, unless you really want to experiment with the code.

Instead, just view a level on netlify, and read its code on github, following the links above.

If you *really* want to run it locally, note that it was made with [Create React App](https://github.com/facebook/create-react-app), so:

* clone this project
* check out the branch you're interested in
* open a terminal and navigate to the project directory
* `npm install`
* make a cup of tea while you wait...
* `npm start`
* open the code visual studio code to make edits, etc...
