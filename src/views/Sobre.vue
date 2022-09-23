<template>
 <img src="../assets/Artehacktown222.webp" alt="Girl in a jacket" id="coracaohack" />
  <img src="../assets/ideia.webp" alt="Girl in a jacket" id="ideiahack" />
  <img src="../assets/ecalc_logo_inv.png" alt="Girl in a jacket" id="ecalchack" />
  <div class="CV-page">
    <h1 class="CV-primaryHeading">
      <router-link to="/"><span class="CV-primaryHeading-name">Ecalc HackTown </span></router-link>
      <small class="CV-primaryHeading-position">
        2022
      </small>
    </h1>
    <hr />
    <p class="CV-introBlurb">
      HackTown é um festival feito para impactar <span class="rosa">positivamente</span> 
      a <span class="verde">vida</span> das <span class="rosa">pessoas</span>, de forma 
      <span class="verde">transformadora</span> e <span class="rosa">definitiva</span>, 
      através do <span class="verde">compartilhamento</span> <span class="rosa">experiências</span> 
      e <span class="verde">informações</span>.
      Nessa premissa criei essa SPA com algumas palestras que vimos no evento. Os vídeos não são necessiariamente do evento
      mas possuem o mesmo conteúdo ou similar. Além disso deixei informações sobre palestras e palestrantes desse incrível festival.
    </p>
    <hr class="linear-wipe" />
    <div class="nav-buttons">
        <router-link to="/palestras" id="btn-palestras" class="glow-on-hover btn">
            <i class="fa-solid fa-play"></i>
            Palestras
        </router-link >
    </div>
  </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Sobre'
    })
</script>

<style>
  
</style>