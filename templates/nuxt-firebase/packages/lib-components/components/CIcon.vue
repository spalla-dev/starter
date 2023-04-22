<script setup lang="ts">
type IconProps = {
  name: string;
};

defineProps<IconProps>();
</script>
<template>
  <Icon :name="name" />
</template>
