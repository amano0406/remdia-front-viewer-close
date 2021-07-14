import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    sp: 959,
    pc: 960
  },
  defaultBreakpoint: 'sp'
})