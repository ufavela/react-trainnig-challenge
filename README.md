# React Challenge - Pokemon Album

## Introduction

The purpose od this project is for you to learn and improve your React skills. You will work on building and deliver a full React application on your own from scratch. The project is divided into different deliverables, in which you will apply the concepts learned in each mentorship session.

Each deliverable has its own information on what and how we expect you to deliver throughout the mentorship.

## The Project

Create a Pokemon Album, where you can review pokemon cards listed and store your favorite ones on different albums. It should have the following sections:

- Home Page
- Pokemon Lists Page
- Pokemon Details Page
- Search Results Page
- Albums Page
- My albums Page
- Album Details Page

You can use either, a css library or styled components. Design decisions are up to you :)

## Deliverables

- [Deliverable 1](#deliverable-1)
- [Deliverable 2](#deliverable-2)
- [Deliverable 3](#deliverable-3)
- [Deliverable 4](#deliverable-4)
- [Deliverable 5](#deliverable-5)

### Deliverable 1

**Related Topics:** React fundamentals & CSS styles in React

In this section, you will create the initial version of your Pokemon Album. It should contain the following

* Homepage (Prototype)
* Pokemon Lists Page (Prototype)

#### Requirements

* Create the UI layout for your app, it should contain the following elements:
- Header
- Content View
- Footer

* Create the List page including the following elements
- Pokemon List (Should include 20 Pokemons per page)
- Pokemon Card (Only includes: Pokemon name, Pokemon Image)
- Paginator

### Deliverable 2

**Related Topics:** React lifecycle & Hooks

In this section, you will continue working on your Pokemon Album. It should contain the following:

* Pokemon Detail Page (Includes: Pokemon name, Pokemon Image, Pokemon Types, Pokemon Description)
* Search Results Page

#### Requirements

* Add a search component in the Pokemon List Page
* Enable filtering for pokemons that matches the name from the search component
* When a pokemon card is clicked, you should display the Pokemon Details Page within the same, page. Ie: If you search for Pikachu, the search result should Only include Pikachu, and when you click on the card, it should display more information about the selected pokemon.

### Deliverable 3

**Related Topics:** Fetching a Real API, React Router, Global State Management

In this section you will continue working on your Pokemon Album. It should contain the following:

* Home Page
* Pokemon List Page (with API Integration)
* Search component (with API Integration)
* Search results Page (with API Integration)
* Pokemon Details Page (In its own page, with API Integration)

**Notes:** React context, useReducer, Loading Indicator, Proptypes

#### Requirements

* Refactor your App to use **React Router** to navigate accross your pages. You should remove all the conditional rendering logic and update your `onClick` event handlers that you previously implemented so you can navigate through your pages using React Router - Link Component.
* My Albums Page
* Add Pokemon to any Album
* Navigate to different albums

### Deliverable 4

**Related Topics:** React Router, Global State Management, Design Patterns, Best Practices & Performance Optimization

In this section you will continue working on your Pokemon Album. It should contain the following:

#### Requirements

* Refactor your app to use a shared global state, each piece of the App, should be separated in its own context.
* Move the logic you use to store pokemon information, albums information in local state to use new global state.

**Notes:** PropTypes, Error boundaries, useMemo, useCallback

### Deliverable 5

**Related Topics:** Static Analysis Code, Jest and React Testing Library

In this section you will continue working on your Pokemon Album. It should contain the following:

## Requirements

* Please make sure, ESLint rules are applied to your code without errors or warnings
* Add automated tests with minimum coverage for each section

