import { Vue, Component } from "vue-property-decorator";
import BaseVue from "@/plugin/BaseVue";
import { bool } from "aws-sdk/clients/signer";
import axios from "axios";
import CancelComplete from "@/components/CancelComplete/CancelComplete.vue";

@Component({
  components: {
    CancelComplete,
  },
})
export default class extends BaseVue {
  public mailaddress: string = "";
  public mailaddressDisable: boolean = false;
  public async created() {
    document.title = 'ニュースレターの配信停止 - RemDia'
  }
  public async mounted() {
    if (this.$route.query.mail != undefined) {
      this.mailaddress = this.$route.query.mail.toString();
    }
  }
  public async regist() {
    this.mailaddressDisable = true;
    let response: any;
    await axios
      .post(
        "https://api.dev-remdia.com/viewer_index-news_letter_cancel",
        {
          mailAddress: this.mailaddress,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res: any) => {
        response = res.data.body;
        this.$modal.show("cancel-complete");
      })
      .catch((error: any) => {
        const errors = error.response.data.errors;
        console.log(errors);
      });
    this.mailaddressDisable = false;
  }
}
