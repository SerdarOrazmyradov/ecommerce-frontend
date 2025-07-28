<template>
  <div></div>
</template>

<script setup>
var links = document.getElementsByTagName("a"),
  i = 0,
  l = links.length,
  body = document.body;

for (; i < l; i++) {
  links[i].addEventListener(
    "click",
    function () {
      body.className = "page-loading";
      setTimeout(function () {
        body.className = "";
      }, 3000);
    },
    false
  );
}

window.addEventListener(
  "beforeunload",
  function (e) {
    document.body.className = "page-loading";
  },
  false
);
</script>

<style scoped>
@keyframes page-load {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
.page-loading::before {
  content: " ";
  display: block;
  position: fixed;
  z-index: 10;
  height: 2px;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #06d;
  animation: page-load ease-out 2s;
}

@keyframes page-load {
  from {
    background-color: #ffc422;
  }
  to {
    background-color: #c0392b;
  }
}
</style>
