<template>
  <div>
    <NuxtLink to="/">home</NuxtLink>
    <h1>Point Roberts</h1>
    
    Where I live.
    
    <ul>
      <li>
        <NuxtLink to="http://tinyurl.com/prtaxpayers">Taxpayers documents</NuxtLink>
      </li>
      <li>
        Weather:
          <NuxtLink to="https://marine.weather.gov/MapClick.php?lon=-122.978&lat=48.897">
            Marine
          </NuxtLink>
      </li>
    </ul>

    <p>I want to include tides
       (text/image on this page, plus links to past and present years' tables),
       what else?
    </p>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Point Roberts"
})
</script>
