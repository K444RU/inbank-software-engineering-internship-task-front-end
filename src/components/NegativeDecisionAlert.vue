<template>
  <div class="negative-decision-alert">
    <p class="small terms-text">
      {{ formattedMessage }}
    </p>
  </div>
</template>

<script>
export default {
  name: "NegativeDecisionAlert",
  props: {
    message: Array
  },
  computed: {
    formattedMessage() {
      return this.message.join(', ');
    }
  }
}
</script>
<style>
.negative-decision-alert{
  color: #EB5757 !important;
}
</style>

