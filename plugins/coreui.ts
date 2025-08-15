import CoreUI from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from '@/assets/icons'
export default defineNuxtPlugin(nuxtApp => {
  // auto-import coreui components
  nuxtApp.vueApp.use(CoreUI)
  nuxtApp.vueApp.provide('icons', icons)
  nuxtApp.vueApp.component('CIcon', CIcon)
});
