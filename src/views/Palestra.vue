<template>
    <RouterLink to="/palestras" id="voltarTabela"> <i class="fa-solid fa-house"></i> Voltar</RouterLink>
    <Cabecalho :titulo="item[0].nome">
        <div class="CV-details">
            <a :href="item[0].link" target="_blank">
                <div class="CV-detail-key" style="color: white;">
                    <i class="fa-brands fa-youtube"></i>
                    Video 1
                </div>
            </a>
            <a v-if="item[0].link2 != ''" :href="item[0].link2" target="_blank">
                <div class="CV-detail-key" style="color: white;">
                    <i class="fa-brands fa-youtube"></i>
                    Video 2
                </div>
            </a>
            <a v-if="item[0].link3 != ''" :href="item[0].link3" target="_blank">
                <div class="CV-detail-key" style="color: white;">
                    <i class="fa-brands fa-youtube"></i>
                    Video 2
                </div>
            </a>
        </div>
        <p class="CV-introBlurb">
            {{item[0].descricao}}
        </p>
    </Cabecalho>

    <Cabecalho :titulo="item[0].nomePalestrante">
        <div class="CV-details">
            <div>
                <a class="CV-detail CV-detail--linkedin" :href="item[0].linkedinURL" target="_blank">
                    <div class="CV-detail-key" style="color: white;">
                        LinkedIn
                    </div>
                    <div class="CV-detail-val" style="color: white;">
                        {{item[0].linkedinName}}
                    </div>
                </a>
            </div>
        </div>
        <p class="CV-introBlurb">
            {{item[0].bio}}
        </p>
        <hr />
    </Cabecalho>
</template>

<script lang="ts">
import IPalestra from '@/interfaces/IPalestra';
import { key } from '@/store';
import { computed } from '@vue/reactivity';
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import Cabecalho from '@/components/Cabecalho.vue';

export default defineComponent({
    name: "Palestra",
    beforeUpdate() {
        this.palestraId = parseInt(this.$route.params.id[0]);
    },
    data() {
        return {
            palestraId: 0,
            item: [] as IPalestra[]
        };
    },
    created() {
        this.palestraId = parseInt(this.$route.params.id.toString());
        console.log(this.palestraId)
        this.item[0] = this.palestras.find((e) => e.id == this.palestraId) as IPalestra;
    },
    setup() {
        const store = useStore(key);
        return {
            store,
            palestras: computed(() => store.state.palestras)
        };
    },
    components: { Cabecalho }
})

</script>

<style scoped>
    
#voltarTabela{
  color: white;
  font-size: 20px;
  margin-left: 20px;
}

.div-detail {
    background-color: white;
}

.CV-details {
    color: white;
    width: 60%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.CV-detail {
    position: relative;
    display: inline-block;
    width: 100%;
    padding: 0.5em 1.5em;
    border-radius: 1em;
    line-height: 1.2;
    font-size: 0.9em;
    text-decoration: none;
    color: white;
}

.CV-detail {
    padding-left: 56px;
}

.CV-detail:before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 14px;
    width: 34px;
    height: 34px;
    margin-top: -14px;
    background-size: 28px;
    background-repeat: no-repeat;
    background-position: 2px 2px;
    background-color: #FFF;
    border-radius: 50%;
    border: solid 1px #222;
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
}

.CV-detail--linkedin:before {
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/CV_icons_linkedin.svg');
}

.CV-detail-key {
    display: inline-block;
    color: #222;
    text-transform: uppercase;
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
    -webkit-font-smoothing: antialiased;
}

.CV-detail-val {
    display: inline-block;
    color: rgba(14, 118, 158, 0.7);
    text-decoration: none;
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
    -webkit-font-smoothing: antialiased;
}

.CV-detail:hover .CV-detail-key,
.CV-detail:focus .CV-detail-key,
.CV-detail:hover .CV-detail-val,
.CV-detail:focus .CV-detail-val {
    color: #00aef0;
    -webkit-transform: translateX(0.3em);
    transform: translateX(0.3em);
}

.CV-introBlurb {
    /*TEMP display:none; */
    padding: 5px;
    width: 80%;
    margin-top: 15px;
    text-align: center;
    font-size: 1.1em;
    background-color: white;
    color: black;
    border-width: 5px;
    border-color: black;
    border-style: ridge;
}

.CV-detail {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: nowrap;
    width: 100%;
}

.CV-detail a:hover {
    color: #00aef0;
    background-color: red;
}
</style>