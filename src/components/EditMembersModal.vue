<template>
  <Transition name="fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 w-full h-screen flex items-center justify-center bg-smoke-800 z-10"
      @click.self="close"
    >
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      <div class="relative max-h-screen w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 flex">
        <button
          aria-label="close"
          class="absolute top-0 right-0 text-xl text-gray-500 my-2 mx-4"
          @click.prevent="close"
        >
          ×
        </button>
        <div class="overflow-auto max-h-screen w-full">
          <slot />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "EditMembersModal",
  props: {
    isOpen: Boolean,
    onDismiss: Function
  },
  watch: {
    isOpen(value) {
      if (value) {
        return document.querySelector("body").classList.add("overflow-hidden");
      }

      return document.querySelector("body").classList.remove("overflow-hidden");
    }
  },
  methods: {
    close() {
      this.$emit("close");
    }
  },
  mounted() {
    document.addEventListener("keydown", e => {
      if (e.keyCode == 27) {
        this.close();
      }
    });
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.6s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
