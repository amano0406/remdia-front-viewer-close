<template>
  <div class="page">
    <div class="page-pc" v-if="$mq === 'pc'">
      <div class="header">
        <div class="top">
          <div class="left">
            <a href="#">
              <img src="@/assets/img/logo.svg" alt="RemDia" />
            </a>
            <ul>
              <li @click="gotoScroll">ABOUT</li>
              <li class="line">|</li>
              <li @click="gotoContact">CONTACT</li>
            </ul>
          </div>
          <div class="right">
            <span class="title">SERVICE START</span>
            <span class="count-down">{{ date }}</span>
          </div>
        </div>
        <div class="body">
          <span class="catch-copy">新時代の動画販売プラットフォーム</span>
          <img src="@/assets/img/logo.svg" alt="RemDia" />
          <p>
            あなたの知識や経験を、動画にしてユーザーに届けよう。<br />
            無料配信でも、広告収入目的でもない、新しい動画提供のカタチ。<br />
            それが、RemDiaです。
          </p>
          <button @click="gotoScroll">READ MORE</button>
        </div>
        <div class="bottom"></div>
      </div>
      <div class="news-letter-top">
        <div class="center">
          <span class="point">サービススタートまで限定</span>
          <span class="title">お得なニュースレターを配信中</span>
          <p>
            ニュースレター購読で、3ヶ月間、手数料が無料になるクーポンを配布。<br />
            リリース情報や使用方法などもあわせて配信しております。<br />
            ご登録は無料・いつでも配信停止可能です。
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
                登録
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="merit">
        <div class="center">
          <span class="title">RemDiaのメリット</span>
          <div class="separator">
            <div class="parts">
              <div class="image image-01"></div>
              <span class="title">自分だけの専用「動画販売サイト」を</span>
              <p>
                弊サイト上で動画を販売していただくのではなく、あなた専用の動画販売サイトを作成するシステムです。サイト制作に際し、難しい知識は不要。ほんの数ステップで、自分だけの動画販売サイトが構築できます。
              </p>
            </div>
            <div class="parts">
              <div class="image image-02"></div>
              <span class="title">シンプルな料金体系</span>
              <p>
                RemDiaでは、固定費用はいただいておりません。販売された動画の売り上げに応じて、以下の料金テーブルの手数料が発生します。こちら以外の費用は、一切いただきません。
              </p>
              <table>
                <tr>
                  <th colspan="3">売上</th>
                  <th>手数料</th>
                </tr>
                <tr>
                  <td>&yen;0</td>
                  <td>～</td>
                  <td>&yen;10,000</td>
                  <td>35.0<span>%</span></td>
                </tr>
                <tr>
                  <td>&yen;10,000</td>
                  <td>～</td>
                  <td>&yen;100,000</td>
                  <td>32.5<span>%</span></td>
                </tr>
                <tr>
                  <td>&yen;100,000</td>
                  <td>～</td>
                  <td>&yen;300,000</td>
                  <td>30.0<span>%</span></td>
                </tr>
                <tr>
                  <td>&yen;300,000</td>
                  <td>～</td>
                  <td>&yen;1,000,000</td>
                  <td>27.5<span>%</span></td>
                </tr>
                <tr>
                  <td>&yen;1,000,000</td>
                  <td>～</td>
                  <td></td>
                  <td>25.0<span>%</span></td>
                </tr>
              </table>
            </div>
            <div class="parts">
              <div class="image image-03"></div>
              <span class="title">収益化できる2つの仕組み</span>
              <ul>
                <li>1．安定した収益に期待できる月額性</li>
                <li>2．動画1本の単品販売</li>
              </ul>
              <p>
                RemDiaの2つの販売方法により、「この人の動画をたくさん見たい」「この動画を見たい」という異なるユーザーニーズを満たします。動画単位で課金方法の指定が可能です。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="example">
        <div class="center">
          <span class="title">運用例</span>
          <div class="rap" v-bind:class="{ hidden: exampleSelect != 1 }">
            <div class="left image01"></div>
            <div class="right">
              <span class="title">ヨガトレーナー</span>
              <p>
                静岡で土日限定のヨガスクールを経営する32歳女性。他動画サイトにてレッスン動画を投稿したところ、コロナ禍の時代にもうまく合致し、チャンネル登録者数が5万人に。より高い収益化を見込むためRemDiaにてチャンネルを開設したところ、既存のチャンネル登録者数の2％にあたる約1,000人が、月額980円のサブスクリプションに登録。<br />
                <br />
                月98万円ほどの売り上げから、手数料を除いた71万円が継続収入に。
              </p>
            </div>
          </div>
          <div class="rap" v-bind:class="{ hidden: exampleSelect != 2 }">
            <div class="left image02"></div>
            <div class="right">
              <span class="title">美容師</span>
              <p>
                男性27歳、5年間、美容師をフリーランスとして都内で活動中。
                面貸しをメインに、月商70万ほどが１年以上横ばい。
                時間労働がメインであり収益増加が難しいため、フリーランスとしての人脈の広げ方、
                ビジネス知識、技術知識を動画コンテンツに落とし込み、サブスクリプションにて販売。
                同じ美容師ターゲットにSNSを利用してRemDiaチャンネルに集客。
                週4本月額2980円にてコンテンツを提供し、会員数800人を達成。
                月240万（※1）ほどの売上になり、手数料（※2）を除いた。
                180万円（※3）を獲得する。
              </p>
            </div>
          </div>
          <div class="rap" v-bind:class="{ hidden: exampleSelect != 3 }">
            <div class="left image03"></div>
            <div class="right">
              <span class="title">農業経営者</span>
              <p>
                農園を営む48歳男性、10年ほど前に脱サラし山梨にて起業。
                土地の確保、各種法律、各種設備の導入、栽培方法などのコンテンツ全20本を１本1
                万円にて販売。月平均10本販売し単品販売にて10万円の売上。
                並行して日々の考察や研究をサブスクリプション1980円にて週3本提供し、会員数200人
                月60万（※1）ほどの売上になり、手数料（※2）を除いた。
                43万円（※3）を獲得する。
              </p>
            </div>
          </div>
          <ul>
            <li
              v-bind:class="{ active: exampleSelect == 1 }"
              @click="exampleChange(1)"
            >
              ヨガトレーナー
            </li>
            <li
              v-bind:class="{ active: exampleSelect == 2 }"
              @click="exampleChange(2)"
            >
              美容師
            </li>
            <li
              v-bind:class="{ active: exampleSelect == 3 }"
              @click="exampleChange(3)"
            >
              農業経営者
            </li>
          </ul>
        </div>
      </div>
      <div class="strengths image-01">
        <div class="center">
          <span class="title">多様なデバイスで、快適な視聴が可能</span>
          <p>
            パソコン・タブレット・スマホなど様々なデバイスで、動作環境に依存しない仕組みでシステムを運用。ダウンロード時間を短縮化し、ストレスフリーな視聴環境を実現しています。
          </p>
        </div>
      </div>
      <div class="strengths image-02">
        <div class="center">
          <span class="title">シンプルかつ明瞭な配信管理システム</span>
          <p>
            どんな方でも簡単にサイト構築から動画のアップロードまでしていただけるよう、操作しやすい管理画面を構成。また各種設定方法や実際の運用方法を踏まえ、ガイド動画を複数ご用意しております。
          </p>
        </div>
      </div>
      <div class="strengths image-03">
        <div class="center">
          <span class="title">ユーザビリティも重視</span>
          <p>
            動画のカテゴリ分け・タグ設定によって、見たい動画を見つけやすく。安全なセキュリティ下でクレジットカード情報を登録し、ワンタッチで購入可能。<br />
            高いユーザビリティにより、機会損失を最大限回避できます。
          </p>
        </div>
      </div>
      <div class="news-letter-bottom">
        <div class="center">
          <div class="left">
            <span class="point">サービススタートまで限定</span>
            <span class="title">ニュースレター購読者の募集</span>
            <p>
              ニュースレター購読で３ヶ月間、手数料無料のクーポンを配布いたします。<br />
              リリース情報、使用方法など低頻度で配信中。いつでもキャンセル可能。
            </p>
            <div class="input">
              <div class="left">
                <input
                  type="mail"
                  v-model="mailaddress"
                  placeholder="メールアドレス"
                  v-bind:disabled="mailaddressDisable"
                />
              </div>
              <div class="right">
                <button @click="regist" v-bind:disabled="mailaddressDisable">
                  登録
                </button>
              </div>
            </div>
          </div>
          <div class="right"></div>
        </div>
      </div>
      <div class="logo">
        <img src="@/assets/img/amanosystemlab.svg" alt="amano system lab" />
      </div>
    </div>
    <div class="page-sp" v-if="$mq === 'sp'">
      <div class="header">
        <div class="top">
          <span class="title">SERVICE START</span>
          <span class="count-down">{{ date }}</span>
          <span class="catch-copy">新時代の動画販売プラットフォーム</span>
          <img src="@/assets/img/logo.svg" alt="RemDia" />
          <p>
            あなたの知識や経験を、動画にしてユーザーに届けよう。<br />
            無料配信でも、広告収入目的でもない、新しい動画提供のカタチ。<br />
            それが、RemDiaです。
          </p>
        </div>
        <div class="body"></div>
        <div class="bottom"></div>
      </div>
      <div class="news-letter-top">
        <div class="center">
          <span class="point">サービススタートまで限定</span>
          <span class="title">お得なニュースレターを配信中</span>
          <p>
            ニュースレター購読で、3ヶ月間、手数料が無料になるクーポンを配布。<br />
            リリース情報や使用方法などもあわせて配信しております。<br />
            ご登録は無料・いつでも配信停止可能です。
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
                登録
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="merit">
        <div class="parts">
          <span class="title">自分だけの専用「動画販売サイト」を</span>
          <div class="image image-01"></div>
          <p>
            弊サイト上で動画を販売していただくのではなく、あなた専用の動画販売サイトを作成するシステムです。サイト制作に際し、難しい知識は不要。ほんの数ステップで、自分だけの動画販売サイトが構築できます。
          </p>
        </div>
        <div class="parts">
          <span class="title">シンプルな料金体系</span>
          <div class="image image-02"></div>
          <p>
            RemDiaでは、固定費用はいただいておりません。販売された動画の売り上げに応じて、以下の料金テーブルの手数料が発生します。こちら以外の費用は、一切いただきません。
          </p>
          <table>
            <tr>
              <th colspan="3">売上</th>
              <th>手数料</th>
            </tr>
            <tr>
              <td>&yen;0</td>
              <td>～</td>
              <td>&yen;10,000</td>
              <td>35.0<span>%</span></td>
            </tr>
            <tr>
              <td>&yen;10,000</td>
              <td>～</td>
              <td>&yen;100,000</td>
              <td>32.5<span>%</span></td>
            </tr>
            <tr>
              <td>&yen;100,000</td>
              <td>～</td>
              <td>&yen;300,000</td>
              <td>30.0<span>%</span></td>
            </tr>
            <tr>
              <td>&yen;300,000</td>
              <td>～</td>
              <td>&yen;1,000,000</td>
              <td>27.5<span>%</span></td>
            </tr>
            <tr>
              <td>&yen;1,000,000</td>
              <td>～</td>
              <td></td>
              <td>25.0<span>%</span></td>
            </tr>
          </table>
        </div>
        <div class="parts">
          <span class="title">収益化できる2つの仕組み</span>
          <div class="image image-03"></div>
          <p>
            RemDiaの2つの販売方法により、「この人の動画をたくさん見たい」「この動画を見たい」という異なるユーザーニーズを満たします。動画単位で課金方法の指定が可能です。
          </p>
        </div>
      </div>
      <div class="example">
        <span class="title">運用例</span>
        <div class="center">
          <ul>
            <li
              v-bind:class="{ active: exampleSelect == 1 }"
              @click="exampleChange(1)"
            >
              ヨガトレーナー
            </li>
            <li
              v-bind:class="{ active: exampleSelect == 2 }"
              @click="exampleChange(2)"
            >
              美容師
            </li>
            <li
              v-bind:class="{ active: exampleSelect == 3 }"
              @click="exampleChange(3)"
            >
              農業経営者
            </li>
          </ul>
          <div class="rap" v-bind:class="{ hidden: exampleSelect != 1 }">
            <div class="left image01"></div>
            <div class="right">
              <span class="title">ヨガトレーナー</span>
              <p>
                静岡で土日限定のヨガスクールを経営する32歳女性。他動画サイトにてレッスン動画を投稿したところ、コロナ禍の時代にもうまく合致し、チャンネル登録者数が5万人に。より高い収益化を見込むためRemDiaにてチャンネルを開設したところ、既存のチャンネル登録者数の2％にあたる約1,000人が、月額980円のサブスクリプションに登録。<br />
                <br />
                月98万円ほどの売り上げから、手数料を除いた71万円が継続収入に。
              </p>
            </div>
          </div>
          <div class="rap" v-bind:class="{ hidden: exampleSelect != 2 }">
            <div class="left image02"></div>
            <div class="right">
              <span class="title">美容師</span>
              <p>
                男性27歳、5年間、美容師をフリーランスとして都内で活動中。
                面貸しをメインに、月商70万ほどが１年以上横ばい。
                時間労働がメインであり収益増加が難しいため、フリーランスとしての人脈の広げ方、
                ビジネス知識、技術知識を動画コンテンツに落とし込み、サブスクリプションにて販売。
                同じ美容師ターゲットにSNSを利用してRemDiaチャンネルに集客。
                週4本月額2980円にてコンテンツを提供し、会員数800人を達成。
                月240万（※1）ほどの売上になり、手数料（※2）を除いた。
                180万円（※3）を獲得する。
              </p>
            </div>
          </div>
          <div class="rap" v-bind:class="{ hidden: exampleSelect != 3 }">
            <div class="left image03"></div>
            <div class="right">
              <span class="title">農業経営者</span>
              <p>
                農園を営む48歳男性、10年ほど前に脱サラし山梨にて起業。
                土地の確保、各種法律、各種設備の導入、栽培方法などのコンテンツ全20本を１本1
                万円にて販売。月平均10本販売し単品販売にて10万円の売上。
                並行して日々の考察や研究をサブスクリプション1980円にて週3本提供し、会員数200人
                月60万（※1）ほどの売上になり、手数料（※2）を除いた。
                43万円（※3）を獲得する。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="strengths">
        <div class="parts">
          <span class="title">多様なデバイスで、快適な視聴が可能</span>
          <div class="image image-01"></div>
          <p>
            パソコン・タブレット・スマホなど様々なデバイスで、動作環境に依存しない仕組みでシステムを運用。ダウンロード時間を短縮化し、ストレスフリーな視聴環境を実現しています。
          </p>
        </div>
        <div class="parts">
          <span class="title">シンプルかつ明瞭な動画配信システム</span>
          <div class="image image-02"></div>
          <p>
            どんな方でも簡単にサイト構築から動画のアップロードまでしていただけるよう、操作しやすい管理画面を構成。また各種設定方法や実際の運用方法を踏まえ、ガイド動画を複数ご用意しております。
          </p>
        </div>
        <div class="parts">
          <span class="title">ユーザビリティも重視</span>
          <div class="image image-03"></div>
          <p>
            動画のカテゴリ分け・タグ設定によって、見たい動画を見つけやすく。安全なセキュリティ下でクレジットカード情報を登録し、ワンタッチで購入可能。<br />
            高いユーザビリティにより、機会損失を最大限回避できます。
          </p>
        </div>
      </div>
      <div class="news-letter-bottom">
        <div class="center">
          <span class="point">サービススタートまで限定</span>
          <span class="title">お得なニュースレターを配信中</span>
          <div class="image"></div>
          <p>
            ニュースレター購読で、3ヶ月間、手数料が無料になるクーポンを配布。<br />
            リリース情報や使用方法などもあわせて配信しております。<br />
            ご登録は無料・いつでも配信停止可能です。
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
                登録
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="logo">
        <img src="@/assets/img/amanosystemlab.svg" alt="amano system lab" />
        <span @click="gotoContact">CONTACT</span>
      </div>
    </div>
    <regist-complete />
    <regist-error-mailaddress />
    <regist-error-registered />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/reset.scss";
@import "@/assets/scss/common.scss";
.page {
  > .page-pc {
    font-size: 14px;
    background-color: #f9f9f9;
    color: #333333;
    line-height: 1.3em;
    > .header {
      width: 100%;
      background-image: url(../../assets/img/header-back.svg);
      background-repeat: no-repeat;
      background-size: cover;
      > .top {
        max-width: 1100px;
        padding: 50px 50px 0px 50px;
        display: flex;
        margin: 0px auto;
        > .left {
          flex: 1;
          > a {
            text-decoration: none;
            > img {
              width: 100px;
            }
          }
          > ul {
            display: flex;
            margin-top: 24px;
            > li {
              color: #ffffff;
              font-weight: bold;
              font-size: 12px;
              padding: 0px 20px;
              cursor: pointer;
              &:first-child {
                padding-left: 0px;
              }
              &:last-child {
                padding-right: 0px;
              }
              &.line {
                padding: 0px;
                cursor: auto;
              }
            }
          }
        }
        > .right {
          > span {
            display: block;
            color: #ffffff;
            &.title {
              font-size: 10px;
              margin-bottom: 14px;
              text-align: right;
              font-weight: bold;
            }
            &.count-down {
              font-size: 47px;
              font-weight: bold;
            }
          }
        }
      }
      > .body {
        max-width: 1100px;
        padding: 50px 50px 0px 50px;
        margin: 0px auto;
        background-image: url(../../assets/img/header-body.svg);
        background-position: right 13% bottom 0%;
        background-repeat: no-repeat;
        background-size: 65% auto;
        position: relative;
        z-index: 2;
        > .catch-copy {
          font-size: 35px;
          font-weight: bold;
          color: #ffffff;
          display: block;
          margin-bottom: 25px;
        }
        > img {
          margin-bottom: 25px;
          width: 200px;
        }
        > p {
          color: #ffffff;
          line-height: 1.8em;
          margin-bottom: 25px;
        }
        > button {
          color: #ffffff;
          line-height: 38px;
          width: 170px;
          background-color: transparent;
          border: solid 2px #ffffff;
          border-radius: 19px;
          margin-bottom: 140px;
          cursor: pointer;
          outline: none;
          transition-duration: 0.5s;
          &:hover {
            opacity: 0.75;
          }
          &:active {
            opacity: 0.5;
          }
        }
      }
      > .bottom {
        width: 100%;
        height: 40px;
        background-color: #194866;
        position: relative;
        z-index: 1;
        margin-top: -40px;
      }
    }
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
          width: 480px;
          color: #ffffff;
          line-height: 1.8em;
          margin: 0px auto;
          margin-bottom: 20px;
          display: block;
          width: fit-content;
        }
        > .input {
          width: 458px;
          display: flex;
          margin: 0px auto;
          > .left {
            > input {
              border: solid 1px #dbdbdb;
              border-radius: 3px;
              height: 36px;
              padding: 0px 12px;
              padding-top: 2px;
              width: 335px;
              margin-right: 20px;
              font-size: 18px;
              letter-spacing: 1px;
              outline: none;
              background-color: #ffffff;
              &:disabled {
                cursor: progress;
                opacity: 0.5;
              }
            }
          }
          > .right {
            flex: 1;
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
    > .merit {
      padding: 50px 50px 50px 50px;
      > .center {
        margin: 0px auto;
        max-width: 1100px;
        > .title {
          font-size: 35px;
          font-weight: bold;
          margin: 0px auto;
          margin-bottom: 35px;
          display: block;
          width: fit-content;
        }
        > .separator {
          display: flex;
          > .parts {
            padding: 0px 20px;
            flex: 1;
            text-align: center;
            &:first-child {
              padding-left: 0px;
            }
            &:last-child {
              padding-right: 0px;
            }
            > .image {
              height: 200px;
              margin: 0px 50px 0px 50px;
              margin-bottom: 25px;
              background-repeat: no-repeat;
              background-size: auto;
              background-position: left 50% top 50%;
            }
            > .image-01 {
              background-image: url(../../assets/img/merit_1.png);
              background-size: cover;
              background-position: left 50% top 0%;
              border: 1px solid #dedede;
              height: 200px - 2px;
            }
            > .image-02 {
              background-image: url(../../assets/img/merit_2.svg);
            }
            > .image-03 {
              background-image: url(../../assets/img/merit_3.svg);
            }
            > span {
              display: block;
              font-size: 19px;
              margin-bottom: 25px;
              text-align: center;
              font-weight: bold;
            }
            > ul {
              margin-bottom: 10px;
              > li {
                line-height: 20px;
                margin-bottom: 7px;
                text-align: center;
                padding: 0px 5px;
                padding-top: 2px;
                background-color: #dbdbdb;
                width: fit-content;
                border-radius: 1px;
                &:last-child {
                  margin-bottom: 0px;
                }
              }
            }
            > p {
              text-align: left;
              line-height: 1.6em;
            }
            > table {
              margin-top: 10px;
              width: 100%;
              line-height: 1.4em;
              tr {
                td,
                th {
                  text-align: left;
                  font-size: 14px;
                }
                th {
                  border: solid 1px #194866;
                  padding: 0px 10px;
                  background-color: #194866;
                  color: #ffffff;
                  padding-top: 2px;
                  &:nth-child(1) {
                    border-right-color: #305b76;
                  }
                }
                td {
                  border: solid 1px #194866;
                  padding: 0px 10px;
                  padding-top: 2px;
                  &:nth-child(1) {
                    border-right-width: 0px;
                    text-align: right;
                  }
                  &:nth-child(2) {
                    padding: 0px 0px;
                    padding-top: 2px;
                  }
                  &:nth-child(3) {
                    text-align: right;
                  }
                  &:nth-child(2),
                  &:nth-child(3) {
                    border-right-width: 0px;
                    border-left-width: 0px;
                  }
                  > span {
                    font-size: 12px;
                  }
                }
              }
            }
          }
        }
      }
    }
    > .example {
      background-color: #ffffff;
      padding: 50px 50px 50px 50px;
      > .center {
        margin: 0px auto;
        max-width: 1100px;
        > .title {
          font-size: 35px;
          font-weight: bold;
          margin: 0px auto;
          margin-bottom: 35px;
          margin-bottom: 435px;
          display: block;
          width: fit-content;
        }
        > .rap {
          margin-top: -400px;
          display: flex;
          height: 400px;
          opacity: 1;
          transition-duration: 0.5s;
          &.hidden {
            opacity: 0;
          }
          > .left {
            &.image01 {
              background-image: url(../../assets/img/example01.jpg);
              background-position: left 50% top 50%;
            }
            &.image02 {
              background-image: url(../../assets/img/example02.jpg);
              background-position: left 50% top 30%;
            }
            &.image03 {
              background-image: url(../../assets/img/example03.jpg);
              background-position: left 50% top 40%;
            }
            border-radius: 3px 0px 0px 3px;
            background-repeat: no-repeat;
            background-size: cover;
            flex: 1;
          }
          > .right {
            width: 300px;
            color: #ffffff;
            background-color: #194866;
            border-radius: 0px 3px 3px 0px;
            > .title {
              display: block;
              padding: 50px 25px 25px 25px;
              font-size: 25px;
              font-weight: bold;
            }
            > p {
              padding: 0px 25px 0px 25px;
              line-height: 1.6em;
            }
          }
        }
        > ul {
          margin: 0px auto;
          margin-top: 25px;
          width: 500px;
          display: flex;
          li {
            transition-duration: 0.5s;
            text-align: center;
            flex: 1;
            background-color: #dbdbdb;
            margin: 0px 1px;
            padding-top: 5px;
            padding-bottom: 3px;
            font-size: 16px;
            cursor: pointer;
            &:first-child {
              margin-left: 0px;
              border-radius: 5px 0px 0px 5px;
            }
            &:last-child {
              margin-right: 0px;
              border-radius: 0px 5px 5px 0px;
            }
            &.active {
              background-color: #194866;
              color: #ffffff;
            }
            &:hover {
              opacity: 0.75;
            }
            &:active {
              opacity: 0.5;
            }
          }
        }
      }
    }
    > .strengths {
      padding: 50px 50px 50px 50px;
      > .center {
        margin: 0px auto;
        max-width: 1100px;
        background-repeat: no-repeat;
        height: 215px;
        > .title {
          font-size: 35px;
          font-weight: bold;
          display: block;
          margin-bottom: 25px;
        }
        > p {
          width: 500px;
          font-size: 14px;
          line-height: 1.6em;
        }
      }
      &.image-01 {
        padding-bottom: 0px;
        > .center {
          background-image: url(../../assets/img/strengths_1.svg);
          background-position: left 100% top 100%;
          background-size: initial;
          height: 265px;
        }
      }
      &.image-02 {
        background-color: #ffffff;
        > .center {
          background-image: url(../../assets/img/strengths_2.svg);
          background-position: left 100% top 100%;
          background-size: initial;
        }
      }
      &.image-03 {
        > .center {
          background-image: url(../../assets/img/strengths_3.svg);
          background-position: left 93% top 100%;
          background-size: initial;
        }
      }
    }
    > .news-letter-bottom {
      padding: 0px 50px 0px 50px;
      background-color: #194866;
      > .center {
        margin: 0px auto;
        max-width: 1100px;
        display: flex;
        > .left {
          padding: 70px 0px 70px 0px;
          > .point {
            border: solid 1px #f7a347;
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
            margin-bottom: 20px;
            display: block;
            width: fit-content;
            color: #ffffff;
          }
          > p {
            width: 480px;
            color: #ffffff;
            line-height: 1.8em;
            margin: 0px auto;
            margin-bottom: 30px;
            display: block;
            width: fit-content;
          }
          > .input {
            width: 458px;
            display: flex;
            > .left {
              > input {
                border: solid 1px #dbdbdb;
                border-radius: 3px;
                height: 36px;
                padding: 0px 12px;
                padding-top: 2px;
                width: 335px;
                margin-right: 20px;
                font-size: 18px;
                letter-spacing: 1px;
                outline: none;
                background-color: #ffffff;
                &:disabled {
                  cursor: progress;
                  opacity: 0.5;
                }
              }
            }
            > .right {
              flex: 1;
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
        > .right {
          flex: 1;
          background-image: url(../../assets/img/present.svg);
          background-position: right 0% bottom 35%;
          background-repeat: no-repeat;
          background-size: 400px;
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
  > .page-sp {
    font-family: sans-serif;
    font-size: 14px;
    background-color: #f9f9f9;
    color: #333333;
    > .header {
      background-image: url(../../assets/img/header-back-sp.svg);
      background-repeat: no-repeat;
      background-size: cover;
      text-align: center;
      > .top {
        padding-top: 117px;
        > span {
          display: block;
          color: #ffffff;
          text-align: center;
          &.title {
            font-size: 33px;
            margin-bottom: 12px;
          }
          &.count-down {
            font-size: 70px;
            margin-bottom: 167px;
          }
          &.catch-copy {
            font-size: 35px;
            color: #ffffff;
            display: block;
            margin-bottom: 35px;
          }
        }
        > img {
          margin-bottom: 40px;
          width: 278px;
        }
        > p {
          text-align: center;
          color: #ffffff;
          line-height: 1.8em;
          font-size: 14px;
          padding-bottom: 120px;
        }
      }
      > .body {
        height: 374px;
        background-image: url(../../assets/img/header-body-sp.svg);
        background-position: right 26% bottom 0%;
        background-repeat: no-repeat;
        background-size: 83% auto;
        position: relative;
        z-index: 2;
      }
      > .bottom {
        width: 100%;
        height: 40px;
        background-color: #194866;
        position: relative;
        z-index: 1;
        margin-top: -40px;
      }
    }
    > .news-letter-top {
      width: 100%;
      background-color: #194866;
      > .center {
        padding: 70px 50px 90px 50px;
        > .point {
          margin: 0px auto;
          border: solid 1px #f7a347;
          display: block;
          width: fit-content;
          color: #ffffff;
          font-size: 29px;
          padding: 2px 5px;
          padding-top: 5px;
          margin-bottom: 16px;
          white-space: nowrap;
        }
        > .title {
          margin: 0px auto;
          font-size: 47px;
          font-weight: bold;
          margin-bottom: 20px;
          display: block;
          width: fit-content;
          color: #ffffff;
          white-space: nowrap;
        }
        > p {
          color: #ffffff;
          line-height: 1.8em;
          margin-bottom: 20px;
          display: block;
          font-size: 14px;
        }
        > .input {
          display: flex;
          > .left {
            > input {
              border: solid 1px #dbdbdb;
              border-radius: 6px;
              height: 56px;
              width: 446px;
              padding: 0px 20px;
              margin-right: 20px;
              font-size: 24px;
              letter-spacing: 1px;
              outline: none;
              background-color: #ffffff;
              &:disabled {
                cursor: progress;
                opacity: 0.5;
              }
            }
          }
          > .right {
            flex: 1;
            > button {
              color: #ffffff;
              background-color: #f7a347;
              border: none;
              border-radius: 6px;
              height: 54px+4px;
              width: 100%;
              font-size: 24px;
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
    > .merit {
      > .parts {
        padding: 75px 50px 75px 50px;
        text-align: center;
        &:nth-child(1) {
          border-right-width: 0px;
          text-align: right;
        }
        &:nth-child(2) {
          background-color: #ffffff;
        }
        > .image {
          margin-bottom: 50px;
          background-repeat: no-repeat;
          background-size: auto;
          background-position: left 50% top 50%;
        }
        > .image-01 {
          background-image: url(../../assets/img/merit_1.png);
          height: 600px;
          background-size: cover;
          background-position: left 50% top 0%;
          border: 1px solid #dedede;
        }
        > .image-02 {
          background-image: url(../../assets/img/merit_2.svg);
          height: 294px;
        }
        > .image-03 {
          background-image: url(../../assets/img/merit_3.svg);
          height: 281px;
        }
        > span {
          display: block;
          font-size: 35px;
          text-align: center;
          font-weight: bold;
          margin-bottom: 50px;
        }
        > p {
          text-align: left;
          font-size: 23px;
        }
        > ul {
          margin-bottom: 10px;
          > li {
            line-height: 20px;
            margin-bottom: 7px;
            text-align: center;
            padding: 0px 5px;
            padding-top: 2px;
            background-color: #dbdbdb;
            width: fit-content;
            border-radius: 1px;
            &:last-child {
              margin-bottom: 0px;
            }
          }
        }
        > table {
          margin-top: 20px;
          width: 100%;
          tr {
            td,
            th {
              text-align: left;
              font-size: 23px;
            }
            th {
              border: solid 1px #194866;
              padding: 10px 10px;
              background-color: #194866;
              color: #ffffff;
              &:nth-child(1) {
                border-right-color: #305b76;
              }
            }
            td {
              border: solid 1px #194866;
              padding: 10px 10px;
              &:nth-child(1) {
                border-right-width: 0px;
                text-align: right;
              }
              &:nth-child(2) {
                padding: 0px 0px;
                padding-top: 2px;
              }
              &:nth-child(3) {
                text-align: right;
              }
              &:nth-child(2),
              &:nth-child(3) {
                border-right-width: 0px;
                border-left-width: 0px;
              }
              > span {
                font-size: 12px;
              }
            }
          }
        }
      }
    }
    > .example {
      background-color: #ffffff;
      padding: 50px 50px 50px 50px;
      text-align: center;
      > .title {
        font-size: 35px;
        font-weight: bold;
        margin-bottom: 35px;
      }
      > .center {
        > ul {
          margin-top: 35px;
          margin-bottom: 35px;
          display: flex;
          li {
            transition-duration: 0.5s;
            text-align: center;
            flex: 1;
            background-color: #dbdbdb;
            margin: 0px 4px;
            padding-top: 20px;
            padding-bottom: 20px;
            font-size: 20px;
            cursor: pointer;
            &:first-child {
              margin-left: 0px;
              border-radius: 5px 0px 0px 5px;
            }
            &:last-child {
              margin-right: 0px;
              border-radius: 0px 5px 5px 0px;
            }
            &.active {
              background-color: #194866;
              color: #ffffff;
            }
            &:hover {
              opacity: 0.75;
            }
            &:active {
              opacity: 0.5;
            }
          }
        }
        > .rap {
          opacity: 1;
          height: auto;
          transition-duration: 0.5s;
          &.hidden {
            opacity: 0;
            height: 0px;
          }
          > .left {
            height: 370px;
            &.image01 {
              background-image: url(../../assets/img/example01.jpg);
              background-position: left 50% top 50%;
            }
            &.image02 {
              background-image: url(../../assets/img/example02.jpg);
              background-position: left 50% top 30%;
            }
            &.image03 {
              background-image: url(../../assets/img/example03.jpg);
              background-position: left 50% top 40%;
            }
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 15px 15px 0px 0px;
          }
          > .right {
            color: #ffffff;
            background-color: #194866;
            padding: 50px;
            border-radius: 0px 0px 15px 15px;
            > .title {
              display: block;
              padding-bottom: 50px;
              font-size: 30px;
              font-weight: bold;
            }
            > p {
              text-align: left;
              padding: 0px 25px 0px 25px;
              font-size: 23px;
            }
          }
        }
      }
    }
    > .strengths {
      > .parts {
        padding: 75px 50px 75px 50px;
        text-align: center;
        &:nth-child(1) {
          border-right-width: 0px;
          text-align: right;
        }
        &:nth-child(2) {
          background-color: #ffffff;
        }
        > .image-01 {
          background-image: url(../../assets/img/strengths_1.svg);
          height: 294px;
        }
        > .image-02 {
          background-image: url(../../assets/img/strengths_2.svg);
          height: 294px;
        }
        > .image-03 {
          background-image: url(../../assets/img/strengths_3.svg);
          height: 281px;
        }
        > span {
          display: block;
          font-size: 35px;
          text-align: center;
          font-weight: bold;
          margin-bottom: 50px;
        }
        > .image {
          margin-bottom: 50px;
          background-repeat: no-repeat;
          background-size: auto;
          background-position: left 50% top 50%;
        }
        > p {
          text-align: left;
          font-size: 23px;
        }
        > ul {
          margin-bottom: 10px;
          > li {
            line-height: 20px;
            margin-bottom: 7px;
            text-align: center;
            padding: 0px 5px;
            padding-top: 2px;
            background-color: #dbdbdb;
            width: fit-content;
            border-radius: 1px;
            &:last-child {
              margin-bottom: 0px;
            }
          }
        }
        > table {
          margin-top: 20px;
          width: 100%;
          tr {
            td,
            th {
              text-align: left;
              font-size: 23px;
            }
            th {
              border: solid 1px #194866;
              padding: 10px 10px;
              background-color: #194866;
              color: #ffffff;
              &:nth-child(1) {
                border-right-color: #305b76;
              }
            }
            td {
              border: solid 1px #194866;
              padding: 10px 10px;
              &:nth-child(1) {
                border-right-width: 0px;
                text-align: right;
              }
              &:nth-child(2) {
                padding: 0px 0px;
                padding-top: 2px;
              }
              &:nth-child(3) {
                text-align: right;
              }
              &:nth-child(2),
              &:nth-child(3) {
                border-right-width: 0px;
                border-left-width: 0px;
              }
              > span {
                font-size: 12px;
              }
            }
          }
        }
      }
    }
    > .news-letter-bottom {
      width: 100%;
      background-color: #194866;
      > .center {
        padding: 100px 50px 100px 50px;
        > .point {
          margin: 0px auto;
          border: solid 1px #f7a347;
          display: block;
          width: fit-content;
          color: #ffffff;
          font-size: 29px;
          padding: 2px 5px;
          padding-top: 5px;
          margin-bottom: 16px;
          white-space: nowrap;
        }
        > .title {
          margin: 0px auto;
          font-size: 47px;
          font-weight: bold;
          margin-bottom: 20px;
          display: block;
          width: fit-content;
          color: #ffffff;
          white-space: nowrap;
        }
        > .image {
          background-image: url(../../assets/img/present.svg);
          background-position: right 50% bottom 50%;
          background-repeat: no-repeat;
          height: 400px;
          margin: 50px;
        }
        > p {
          color: #ffffff;
          line-height: 1.8em;
          margin-bottom: 20px;
          display: block;
          font-size: 14px;
        }
        > .input {
          display: flex;
          > .left {
            > input {
              border: solid 1px #dbdbdb;
              border-radius: 6px;
              height: 56px;
              width: 446px;
              padding: 0px 20px;
              margin-right: 20px;
              font-size: 24px;
              letter-spacing: 1px;
              outline: none;
              background-color: #ffffff;
              &:disabled {
                cursor: progress;
                opacity: 0.5;
              }
            }
          }
          > .right {
            flex: 1;
            > button {
              color: #ffffff;
              background-color: #f7a347;
              border: none;
              border-radius: 6px;
              height: 54px+4px;
              width: 100%;
              font-size: 24px;
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
      padding: 100px;
      > img {
        width: 200px;
        margin-bottom: 10px;
      }
      > span {
        display: block;
        font-weight: bold;
        color: #0095f6;
      }
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
<script lang="ts" src="./index.ts"></script>
