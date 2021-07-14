import { Vue, Component } from "vue-property-decorator";
import BaseVue from "@/plugin/BaseVue";
import { bool } from "aws-sdk/clients/signer";
import axios from "axios";
import RegistComplete from "@/components/RegistComplete/RegistComplete.vue";
import RegistErrorMailaddress from "@/components/RegistErrorMailaddress/RegistErrorMailaddress.vue";
import RegistErrorRegistered from "@/components/RegistErrorRegistered/RegistErrorRegistered.vue";

@Component({
  components: {
    RegistComplete,
    RegistErrorMailaddress,
    RegistErrorRegistered,
  },
})
export default class extends BaseVue {
  public date: string = "";
  public dateS: Date = new Date();
  public dateE: Date = new Date(2021, 8, 1);
  public exampleSelect: number = 1;
  public mailaddress: string = "";
  public mailaddressDisable: boolean = false;
  public async created() {
    document.title = 'RemDia - 新時代の動画販売プラットフォーム'
    setInterval(this.countDownFunc, 1000 / 60);
  }
  public async gotoScroll() {
    window.scrollTo(0, 860);
  }
  public async regist() {
    this.mailaddressDisable = true;
    let response: any;
    await axios
      .post(
        "https://api.dev-remdia.com/viewer_index-news_letter_regist",
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
        this.$modal.show("regist-complete");
      })
      .catch((error: any) => {
        const errors = error.response.data.errors;
        console.log(errors);
        for (let i = 0; i < errors.length; i++) {
          switch (errors[i].code) {
            case "001":
              this.$modal.show("regist-error-mailaddress");
              break;
            case "002":
              this.$modal.show("regist-error-registered");
              break;
          }
        }
      });
    this.mailaddressDisable = false;
  }
  public async gotoContact() {
    window.open("https://form.run/@amano--1608253467", "_blank");
  }
  public async exampleChange(select: number) {
    this.exampleSelect = select;
  }
  public async countDownFunc() {
    this.dateS = new Date();
    const diff = this.dateE.getTime() - this.dateS.getTime();
    this.date = "";
    this.date += Math.floor(diff / (1000 * 60 * 60 * 24));
    this.date += ":";
    this.date += ("00" + Math.floor((diff / (1000 * 60 * 60)) % 24)).slice(-2);
    this.date += ":";
    this.date += ("00" + Math.floor((diff / (1000 * 60)) % 60)).slice(-2);
    this.date += ":";
    this.date += ("00" + Math.floor((diff / 1000) % 60)).slice(-2);
    this.date += ":";
    this.date += ("00" + Math.floor(diff / 10)).slice(-2);
  }
}
