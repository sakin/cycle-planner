<template>
  <ui-modal ref="editMembersModal" :title="title" @close="$emit('dismiss')">
    Hello World! What's happening?
  </ui-modal>
</template>

<script>
export default {
  name: "EditMembersModal",
  props: {
    activeProject: Object
  },
  components: {},
  computed: {
    title() {
      return `Add / Edit Members on ${this.activeProject.name}`;
    }
  },
  mounted() {
    this.$refs.editMembersModal.open();
  }
};
</script>

<style></style>
