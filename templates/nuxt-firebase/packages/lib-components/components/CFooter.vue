<script setup lang="ts">
/* eslint-disable max-len */
</script>
<template>
  <footer class="footer footer-center p-10">
    <div>
      <CGlobeLogo />
      <p class="font-bold">
        Webapp <br /> firebase
      </p>
      <p>© {{ new Date().getFullYear() }} - Todos os direitos reservados</p>
    </div>
    <div>
      <div class="grid grid-flow-col gap-4">
        <a target="_blank"
          ><CIcon size="26" name="mdi:instagram"
        /></a>
        <a target="_blank"><CIcon size="26" name="mdi:youtube"
        /></a>
        <a target="_blank"
          ><CIcon size="26" name="mdi:spotify"
        /></a>
        <a target="_blank"
          ><CIcon size="26" name="mdi:facebook"
        /></a>
        <a target="_blank">
          <CIcon size="26" name="mdi:whatsapp" />
        </a>
      </div>
    </div>
    <div>
      <CColorMode />
    </div>
  </footer>
</template>
