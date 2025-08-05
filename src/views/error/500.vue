<template>
  <div>
    <body>
      <!-- This file lives in public/500.html -->
      <div class="dialog">
        <!-- <img src="/images/technical-difficulties.png" /> -->
        <h1>Well, this is embarrassing...</h1>
        <p>
          Sorry, this is not working properly. We now know about this mistake
          and are working to fix it. <br /><br />
          In the meantime, here is what you can do:
        </p>
        <ul>
          <li>
            <span class="glyphicon glyphicon-refresh"></span>
            <b>Refresh the page</b> (sometimes this helps).
          </li>

          <li>
            <span class="glyphicon glyphicon-time"></span>
            <b>Try again</b> in 30 minutes.
          </li>

          <li>
            <span class="glyphicon glyphicon-envelope"></span>
            <b>Email us</b> at
            <a href="mailto:support@whooosreading.org" target="_top"
              >support@whooosreading.org</a
            >
            and tell us what happened.
          </li>
        </ul>
        <p></p>
      </div>
    </body>
  </div>
</template>

<script setup></script>

<style  scoped>
html {
    font-size: 10px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
html {
    font-family: sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
}
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
html {
    display: block;
}
:after, :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
:after, :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
div.dialog {
    width: 50%;
    margin: 4em auto 0 auto;
    font-size: 18px;
}.glyphicon {
    margin-right: 5px;
}
.glyphicon {
    position: relative;
    top: 1px;
    display: inline-block;
    font-family: 'Glyphicons Halflings';
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
li {
    text-align: left;
    list-style: none;
    position: relative;
    right: 20px;
    padding-bottom: 5px;
}
</style>
