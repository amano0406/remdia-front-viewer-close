<template>
  <modal
    name="regist-error-registered"
    :draggable="false"
    :clickToClose="true"
    :width="$mq === 'pc' ? 450 : 600"
    height="auto"
  >
    <div class="modal" v-bind:class="{ pc: $mq === 'pc', sp: $mq === 'sp' }">
      <div class="header">
        <button @click="close()">
          <fa-icon icon="times" />
        </button>
      </div>
      <div class="body">
        <div class="mark"><fa-icon icon="exclamation" /></div>
        <div class="message">
          <span>既に登録済みのメールアドレスです。</span>
          <hr />
          <button @click="close()">OK</button>
        </div>
      </div>
    </div>
  </modal>
</template>

<style lang="scss" scoped>
.modal {
  font-size: 14px;
  > .header {
    display: flex;
    justify-content: flex-end;
    > button {
      border: none;
      background-color: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 22px;
      height: 22px;
      margin-bottom: 3px;
      &:focus {
        outline: none;
      }
      > svg {
        color: white;
        font-size: 22px;
      }
    }
  }
  > .body {
    > .mark {
      background-color: #ed4956;
      border-radius: 15px 15px 0px 0px;
      //border: solid 1px #dbdbdb;
      padding: 25px;
      font-size: 50px;
      color: #ffffff;
      text-align: center;
    }
    > .message {
      background-color: #ffffff;
      border-radius: 0px 0px 15px 15px;
      //border: solid 1px #dbdbdb;
      padding: 25px;
      padding-bottom: 0px;
      font-size: 16px;
      font-weight: bold;
      color: #333333;
      > hr {
        background-color: #ffffff;
        margin: 0px;
        margin-top: 25px;
        border: solid 1px #dbdbdb;
        border-top-width: 0px;
      }
      > button {
        background-color: #ffffff;
        border: none;
        text-align: center;
        display: block;
        width: 100%;
        color: #0095f6;
        padding-top: 15px;
        padding-bottom: 15px;
      }
    }
  }
  &.sp {
    font-family: sans-serif;
    font-size: 24px;
    > .header {
      > button {
        width: 50px;
        height: 50px;
        > svg {
          color: white;
          font-size: 50px;
        }
      }
    }
    > .body {
      > .mark {
        padding: 50px;
        font-size: 70px;
      }
      > .message {
        padding: 30px;
        padding-bottom: 0px;
        font-size: 22px;
        > button {
          padding-top: 30px;
          padding-bottom: 30px;
          font-size: 24px;
        }
      }
    }
  }
}
</style>

<script lang="ts" src="./RegistErrorRegistered.ts"></script>
