<template>
  <div class="positive-decision-alert">
    <p class="small terms-text">
      {{ message }}
    </p>
  </div>
</template>


<script>
export default {
  name: "PositiveDecisionAlert.vue",
  props: {
    message: {}
  }
}
</script>
