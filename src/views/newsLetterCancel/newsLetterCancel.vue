<template>
  <div class="page">
    <div class="news-letter-top">
      <div class="center">
        <span class="title">ニュースレターの配信停止</span>
        <p>
          ニュースレターの配信停止を行います。
        </p>
        <div class="input">
          <div class="left">
            <input
              v-bind:disabled="mailaddressDisable"
              type="mail"
              v-model="mailaddress"
              placeholder="メールアドレス"
            />
          </div>
          <div class="right">
            <button @click="regist" v-bind:disabled="mailaddressDisable">
              配信停止
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="logo">
      <img src="@/assets/img/amanosystemlab.svg" alt="amano system lab" />
    </div>
    <cancel-complete />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/reset.scss";
@import "@/assets/scss/common.scss";
.page {
  font-size: 14px;
  background-color: #f9f9f9;
  color: #333333;
  line-height: 1.3em;
  > .news-letter-top {
    width: 100%;
    background-color: #194866;
    > .center {
      margin: 0px auto;
      padding: 30px 0px 50px 0px;
      > .point {
        border: solid 1px #f7a347;
        margin: 0px auto;
        display: block;
        width: fit-content;
        color: #ffffff;
        font-size: 18px;
        padding: 2px 5px;
        padding-top: 5px;
        margin-bottom: 16px;
      }
      > .title {
        font-size: 35px;
        font-weight: bold;
        margin: 0px auto;
        margin-bottom: 20px;
        display: block;
        width: fit-content;
        color: #ffffff;
      }
      > p {
        width: 580px;
        color: #ffffff;
        line-height: 1.8em;
        margin: 0px auto;
        margin-bottom: 20px;
        display: block;
        width: fit-content;
      }
      > .input {
        width: 558px;
        margin: 0px auto;
        > .left {
          > input {
            border: solid 1px #dbdbdb;
            border-radius: 3px;
            height: 36px;
            padding: 0px 12px;
            padding-top: 2px;
            width: 558px - 24px - 2px;
            font-size: 18px;
            letter-spacing: 1px;
            outline: none;
            background-color: #ffffff;
            margin-bottom: 10px;
            &:disabled {
              cursor: progress;
              opacity: 0.5;
            }
          }
        }
        > .right {
          > button {
            color: #ffffff;
            background-color: #f7a347;
            border: none;
            border-radius: 3px;
            height: 40px;
            width: 100%;
            font-size: 18px;
            cursor: pointer;
            outline: none;
            transition-duration: 0.5s;
            &:hover {
              opacity: 0.75;
            }
            &:active {
              opacity: 0.5;
            }
            &:disabled {
              cursor: progress;
              opacity: 0.5;
            }
          }
        }
      }
    }
  }
  > .logo {
    text-align: center;
    > img {
      margin: 50px;
      width: 200px;
    }
  }
}
</style>
<style lang="scss">
.vm--overlay {
  background-color: #08294e96 !important;
}
.vm--modal {
  border: none !important;
  box-shadow: none !important;
  background-color: transparent !important;
}
</style>
<script lang="ts" src="./newsLetterCancel.ts"></script>
