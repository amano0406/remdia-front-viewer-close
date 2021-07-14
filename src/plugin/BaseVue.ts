import { Vue, Component, Watch, Prop } from "vue-property-decorator";
import VModal from "vue-js-modal";
Vue.use(VModal);

export default class extends Vue {
  public sleep(msec: number): Promise<void> {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve();
      }, msec);
    });
  }
  public hankaku2Zenkaku(text: string): string {
    return text.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
      return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
    });
  }
}
