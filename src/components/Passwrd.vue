<template>
  <Password :feedback="option" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
    <template #header>
      <h6>Pick a password</h6>
    </template>
    <template #footer>
      <Divider />
      <p class="p-mt-2">Suggestions</p>
      <ul class="p-pl-2 p-ml-2 p-mt-0" style="line-height: 1.5">
        <li>At least one lowercase</li>
        <li>At least one uppercase</li>
        <li>At least one numeric</li>
        <li>Minimum 8 characters</li>
      </ul>
    </template>
  </Password>
</template>

<script>
export default {
  props: {
    option: Boolean,
    modelValue: String,
  },
};
</script>

<style>

</style>
