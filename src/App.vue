<template>
  <Navbar />
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar
  }
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mogra&display=swap');

body {
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,1) 7%, rgba(34,33,33,1) 36%, rgba(99,97,97,1) 77%);
}

#btn-palestras{
    color: white;
    text-decoration: none;
}

#btn-palestrantes{
    color: white;
    text-decoration: none;
}

.nav-buttons{
    width: 40%;
    display: flex;
    justify-content: space-around;
}

#coracaohack {
  height: 500px;
  position: absolute;
  top: 110px;
  left: 80px;
  z-index: -100;
}

#ecalchack{
  height: 150px;
  position: absolute;
  bottom: 80px;
  right: 50px; 
  z-index: -100;
}

#ideiahack {
  position: absolute;
  top: 100px;
  right: 100px;
  z-index: -100;
}

.rosa{
    color: #fa00a3
}

.verde{
   color: #00ff85;
}

.CV-introBlurb{
  width: 42%;
  text-align: justify;
  /*font-family: Arial, Helvetica, sans-serif;*/
  font-size: 1.2em;
}

.CV-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2em;
  color: #fff;
  font-size: 1em;
  /*font-family: 'Mogra', cursive;*/
  display: flex;
  align-items: center;
  flex-direction: column;
}

@media all and (max-width: 500px) {
  .CV-page {
    padding: 0 1em;
  }
}

.CV-page a {
  color: rgba(34, 34, 34, 0.15);
  text-decoration: underline;
}

.CV-page a span {
  color: rgba(14, 118, 158, 0.7);
  text-decoration: none;
  -webkit-transition: color 0.2s;
  transition: color 0.2s;
}

.CV-page a:hover span {
  color: #00aef0;
}

.CV-page a:active {
  display: inline-block;
  -webkit-transform: translate(0px, 1px);
  transform: translate(0px, 1px);
}

.CV-page abbr {
  border-color: rgba(34, 34, 34, 0.25);
}

.CV-page hr {
  width: 40%;
  height: 5px;
  background-image: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
  color: transparent;
  background-size: 500%;
  background-position: -100%;
  animation: animatedText 2s infinite alternate-reverse;
}

.CV-page  {
  width: 1100px;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
}

.CV-primaryHeading {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 0px
}

@keyframes animatedText{
    from{
        background-position: 0%;
    }to{
        background-position: 100%;
    }
}

.glow-on-hover {
    width: 180px;
    height: 40px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
}

.glow-on-hover:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.glow-on-hover:active {
    color: #000
}

.glow-on-hover:active:after {
    background: transparent;
}

.glow-on-hover:hover:before {
    opacity: 1;
}

.glow-on-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}

</style>
