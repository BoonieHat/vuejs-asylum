<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
@import "../assets/styles/main.css";
@import "../assets/styles/button.css";

:root {
  --media-xbl: #107c10;
  --media-steam: #5d8329;
  --media-psn: #003791;
  --media-origin: #f1590b;
  --media-battlenet: #0090d6;
  --media-epic: #474546;
  --media-uplay: #0070ff;
  --media-discord: #7289da;
  --media-teamspeak: #2580C3;
  --media-twitch: #6440a5;
  --media-mixer: #1fbaed;
  --media-twitter: #1da1f2;
  --media-youtube: red;
  --media-riot: #d53435;
  --media-bungie: #00a1dd;
  --media-instagram: #c74274;
  --media-stadia: #de3334;

  --media-forum: #f1590b;
}
a {
  color: var(--color-accent);
  text-decoration: none;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}
a:hover {
  text-decoration: underline;
  color: var(--color-accent-light);
}
/* clears the 'X' from Internet Explorer */
input[type='search']::-ms-clear {
  display: none;
  width: 0;
  height: 0;
}
input[type='search']::-ms-reveal {
  display: none;
  width: 0;
  height: 0;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
/* clears the 'X' from Chrome */
input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-results-button,
input[type='search']::-webkit-search-results-decoration {
  display: none;
}
::selection,
::-moz-selection {
  color: var(--color-text);
  background: var(--color-accent);
}
::-webkit-scrollbar {
  background: var(--background-front) !important;
}
::-webkit-scrollbar-thumb {
  background: var(--background-light) !important;
}
body {
  margin: 0px;
  font-family: 'Inter', sans-serif;
}
body {
  background: black;
}
h1, h2, h3, h4, h5 {
  font-weight: 900;
  color: var(--color-text);
}
dl {
  margin: 0;
}
p {
  color: var(--color-text);
}

body {
  margin: 0px;
}

h1, h2, h3, h4, h5 {
  margin: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
