<template>
    <nav class="navbar navbar-expand-lg" style="font-family: 'Mogra', cursive;">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand logo mr-3" href="">
                <img src="../assets/e-ecalc.png" alt="Logo" width="60" height="60"
                    class="d-inline-block align-text-top">
                <span class="ml-5">Ecalc HackTown</span>
            </router-link>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Navbar'
})

</script>

<style scoped>
.logo {
    display: flex;
    align-items: center;
}

.logo img {
    margin-right: 10px;
}

.navbar a {
    font-size: 1.2em;
    color: #fff;
}

.navbar-nav .nav-link:hover {
    color: #fa00a3;
}

.navbar-nav .nav-link.active {
    color: #00ff85;
    border-bottom: 3px solid white;
}

.navbar-nav .nav-link.active:hover {
    color: #00ff85;
}

.navbar-brand:focus,
.navbar-brand:hover {
    color: #fa00a3
}
</style>