<script setup lang="ts">
import LayoutSideNav from "./components/side-nav/index.vue";
import LayoutHeader from "./components/header/index.vue";
import LayoutContent from "./components/header/index.vue";
</script>

<template>
  <t-layout class="pinata-container">
    <t-aside><LayoutSideNav /></t-aside>
    <t-layout>
      <t-header><LayoutHeader /></t-header>
      <t-content><LayoutContent /></t-content>
    </t-layout>
  </t-layout>
</template>

<style lang="less" scoped>
.pinata-container {
  width: 100vw;
  height: 100vh;
}
</style>
