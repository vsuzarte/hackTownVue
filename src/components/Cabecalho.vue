<template>
    <img src="../assets/Artehacktown222.webp" alt="Girl in a jacket" id="coracaohack" />
    <img src="../assets/ideia.webp" alt="Girl in a jacket" id="ideiahack" />
    <img src="../assets/ecalc_logo_inv.png" alt="Girl in a jacket" id="ecalchack" />
    <div class="CV-page">
        <h1 class="CV-primaryHeading">
            <span class="CV-primaryHeading-name">{{titulo}}</span>
        </h1>
        <hr />
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Cabecalho',
    props: {
        titulo: {
            type: String,
            required: true
        }
    }
})

</script>

<style>

</style>