
# Ninja Profiles
<br/>

# Demo
<a href="https://ninja-profiles.herokuapp.com/">https://ninja-profiles.herokuapp.com/</a>

# Travis
[![Build Status](https://travis-ci.com/Qubaish/ninja-profiles.svg?branch=master)](https://travis-ci.com/Qubaish/ninja-profiles)

# Test Coverage
[![Test Coverage](https://api.codeclimate.com/v1/badges/9d23004ddfb7355c3efc/test_coverage)](https://codeclimate.com/github/Qubaish/ninja-profiles/test_coverage)

## Installation

```bash
npm i
npm start
```
* http://localhost:3000

## Test Cases

```bash
npm test
```

## Description

* Atomic Design pattern
* A single page application to show the profiles of employees.
* A fancy animations to make it more attractive for customers.
* Infinte scroll functionality for better performance and make it more user friendly.
* Filters to refine your search (By Name and offices)
* Lazy load image feature for better user experience
* Responsive Design
* Cross browser compatibilty

## Features

* Fancy Animations 
* Modern Design
* Infinite Scroll
* Responsive Design
* No UI framework is used
* By default showing profiles in sorted order (by name and offices)
* Either filter by name or offices
* Available on heroku
* Travis integration is implemented
* works in chrome,firefiox,edge
* Test cases covergae is reasonable and integrated with codeclimate

## Details and Thoughts

* I am using <a href="https://atomicdesign.bradfrost.com/chapter-2/" >Atomic design pattern</a> for better reusability of each small unit of component.
* For fancy animations i am using <a href="https://github.com/FormidableLabs/react-animations">react-animations </a> this package have lot of animations and very easy to implement and this package is using animate.css.
* To load cards on scroll i am using inifite scroller as recommended <a href="https://github.com/danbovey/react-infinite-scroller">Infite scroll</a>.
* I am good at playing with javascript arrays and functions so I have selected sorted and filter functions.
* I was confused about sorting so for now I am showing sorting by default but we can also provide this option for users.
* I am using react-test-library (<a href="https://testing-library.com/docs/react-testing-library/intro">Lib</a>) for unit test cases and integrated with <a href="https://codeclimate.com/">Codeclimate </a>
* The components are styled components and using react library. <a href="https://github.com/styled-components/styled-components">styled components</a>
* For responsives i have created one util for breakpoints which will handle all screens.






