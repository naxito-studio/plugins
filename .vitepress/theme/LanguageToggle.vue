<script setup>
import { useData, useRoute } from 'vitepress'
import { computed } from 'vue'

const { site } = useData()
const route = useRoute()

const isSpanish = computed(() => {
  const base = site.value.base || '/'
  return route.path.startsWith(`${base}es/`) || route.path.startsWith('/es/')
})

const targetPath = computed(() => {
  const path = route.path
  const base = site.value.base || '/'
  if (isSpanish.value) {
    return path.replace('/es/', '/').replace(/\/es$/, '/')
  }
  // Insert /es after the base
  if (path.startsWith(base)) {
    return base + 'es/' + path.slice(base.length)
  }
  return '/es' + path
})

const label = computed(() => (isSpanish.value ? 'English' : 'Español'))
</script>

<template>
  <a :href="targetPath" class="lang-toggle" :title="label">
    <span aria-hidden="true">⊕</span>
    <span class="lang-toggle-label">{{ label }}</span>
  </a>
</template>

<style scoped>
.lang-toggle {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0 10px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  opacity: 0.75;
  transition: opacity 0.2s, border-color 0.2s;
}
.lang-toggle:hover {
  opacity: 1;
  border-color: var(--vp-c-text-2);
  color: var(--vp-c-text-1);
}
.lang-toggle span[aria-hidden] {
  font-size: 14px;
  line-height: 1;
}
@media (max-width: 960px) {
  .lang-toggle-label {
    display: none;
  }
}
</style>
