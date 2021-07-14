import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import BaseVue from "@/plugin/BaseVue";

@Component({
  components: {},
})
export default class extends BaseVue {
  public close() {
    this.$router.push({ name: "Index" });
  }
}
