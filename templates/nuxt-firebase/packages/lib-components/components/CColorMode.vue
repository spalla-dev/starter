<script setup lang="ts">
const colorMode = useColorMode();

const options = ['system', 'clight', 'cdark'];
const selected = ref(options.indexOf(colorMode.preference));

function changeSelected() {
  if (selected.value === 2) {
    selected.value = 0;
    return;
  }
  selected.value += 1;
}

function change() {
  changeSelected();
  colorMode.preference = options[selected.value];
}
</script>
<template>
  <CButton class="btn-ghost btn-circle" @click="change">
    <Transition name="rotate" mode="out-in">
      <template v-if="colorMode.preference === 'system'">
        <CIcon name="material-symbols:monitor-outline-rounded" size="24" />
      </template>
      <template v-else-if="colorMode.preference === 'cdark'">
        <CIcon name="material-symbols:nightlight-rounded" size="24" />
      </template>
      <template v-else>
        <CIcon name="material-symbols:clear-day-rounded" size="24" />
      </template>
    </Transition>
  </CButton>
</template>
<style scoped>
button > * {
  transition: transform linear 0.2s, opacity linear 0.2s;
}
.rotate-enter-from {
  transform: rotate(-90deg);
  opacity: 0;
}
.rotate-leave-to {
  transform: rotate(90deg);
  opacity: 0;
}
</style>
