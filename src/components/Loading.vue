<template>
<div class="flex justify-center items-center">
    <div class="fade-loading"></div>
</div>
</template>

<script>
export default{
    props: {
    showEditModal: Boolean,
  },
}
</script>

<style scoped>
.fade-loading {
  width: 40px;
  height: 40px;
  background-color: #f5ec6c;
  border-radius: 100rem;
  margin: 10px auto;
  position: relative;
}

.fade-loading:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background-color: inherit;
  animation: fade 1s forwards infinite linear;
}

@keyframes fade {
  to {
    transform: scale(2);
    opacity: 0;
  }
}
</style>