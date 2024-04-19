<template>
  <div class="negative-decision-alert">
    <p class="small terms-text">
      {{message}}
    </p>
  </div>
</template>

<script>
export default {
  name: "NegativeDecisionAlert.vue",
  props: {
    message: {}
  }
}
</script>

