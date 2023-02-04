<script setup lang="ts"></script>

<template>
  <t-menu theme="dark">
    <template #logo>
      <img
        height="28"
        src="https://tdesign.gtimg.com/site/baseLogo-dark.png"
        alt="logo"
      />
    </template>
    <t-menu-item value="item1"> 仪表盘 </t-menu-item>
    <t-menu-item value="item2"> 资源列表 </t-menu-item>
    <t-menu-item value="item3"> 根目录 </t-menu-item>
    <t-menu-item value="item4" :disabled="true"> 调度平台 </t-menu-item>
    <t-menu-item value="item5"> 精准监控 </t-menu-item>
    <t-menu-item value="item6"> 消息区 </t-menu-item>
    <t-menu-item value="item7"> 个人中心 </t-menu-item>
    <t-menu-item value="item8"> 视频区 </t-menu-item>
    <t-menu-item value="item9"> 资源编辑 </t-menu-item>
  </t-menu>
</template>

<style lang="less" scoped></style>
