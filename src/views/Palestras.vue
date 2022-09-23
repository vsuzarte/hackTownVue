<template>
  <Cabecalho titulo="Palestras">
    <table class="table table-hover table-light">
      <thead>
        <tr>
          <th scope="col" class="first-t">#</th>
          <th scope="col">Palestra</th>
          <th scope="col">Descrição</th>
          <th scope="col">Palestrante</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in palestras" v-bind:item="item" v-bind:key="item.id" @click="abrirPalestra(item.id)">
          <td class="first-t">{{item.id}}</td>
          <td>{{item.nome}}</td>
          <td>{{item.descricao}}</td>
          <td>{{item.nomePalestrante}}</td>
        </tr>
      </tbody>
    </table>
  </Cabecalho>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import { computed } from '@vue/reactivity';

import Cabecalho from '../components/Cabecalho.vue';

export default defineComponent({
  name: "Palestras",
  components: { Cabecalho },
  setup() {
    const store = useStore(key);
    return {
      palestras: computed(() => store.state.palestras)
    }
  },
  methods: {
    abrirPalestra(palestraId: number) : void{
       this.$router.push({ path: `/palestra/${palestraId}` });
    }
  }
})
</script>

<style scoped>

  .first-t{
      border-right: 1px solid black;
      text-align: center;
  }

  table{
    border: 1px solid black;
    text-align: justify;
  }

  thead{
    border: 2px solid black;
    font-size: 1.4em;
  }
</style>