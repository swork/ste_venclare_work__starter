<script setup lang="ts">
  const router = useRouter()
  useHead({
    title: null
  })
  definePageMeta({
    layout:false,
  })
</script>

<template>
  <div>
    <NuxtRouteAnnouncer/>
    <NuxtLayout name="rootpage"> <!-- overrides app.vue NuxtLayout -->
      <ul>
        <li>
          <NuxtLink to="/pointroberts">
            Point Roberts
          </NuxtLink> info
        </li>
      </ul>
    </NuxtLayout>
  </div>
</template>
