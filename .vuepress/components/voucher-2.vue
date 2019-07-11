<template>
  <div class="voucher-wrapper">
    <div
      v-if="!loading"
      class="voucher-single-box"
    >
      <div class="left-part">
        <div class="icon-box">
          <img
            v-lazy="iconUrl"
            alt=""
          >
        </div>
      </div>
      <div class="middle-part">
        <div class="top-circle" />
        <div class="line" />
        <div class="bottom-circle" />
      </div>
      <div class="right-part">
        <div class="name ellipsis">
          {{ name }}
        </div>
        <div class="desc ellipsis">
          {{ desc }}
        </div>
        <div
          v-if="validityTime.length > 1 && (validityTime[0] - 0) !== 0"
          class="valid-time"
        >
          {{ validityTime[0] | fmtTimeFromTimestamp('date') }} 至 {{ validityTime[1] | fmtTimeFromTimestamp('date') }}
        </div>
      </div>
    </div>
    <div
      v-else
      class="empty-box"
      v-loading="true"
    />
  </div>
</template>

<script>
export default {
  name: 'VoucherUI',
  props: {
    name: {
      type: String,
      default: '小米MIX3开启全面屏新时代'
    },
    desc: {
      type: String,
      default: '小米MIX3 支持5G 好看又能打 滑盖即可解锁'
    },
    iconUrl: {
      type: String,
      default: '/images/voucher-default.png'
    },
    loading: {
      type: Boolean,
      default: false
    },
    validityTime: {
      type: Array,
      default: () => {
        return [0, 0]
      }
    }
  }
}
</script>

<style lang="less" scoped>
  /* 单个卡券的样式 */
  @import url('../../../assets/less/variable.less');
  .voucher-wrapper {
    & .voucher-single-box {
      display: flex;
      width: 570px;
      height: 126px;
      border: 1px solid #FF6A00;
      border-radius: 6px;
      background-color: #fef8f2;
      & .left-part {
        padding: 23px 12px 23px 26px;
        & .icon-box {
          width: 80px;
          height: 80px;
          & img {
            width: 100%;
            height: 100%;
          }
        }
      }
      & .middle-part {
        position: relative;
        display: flex;
        width: 24px;
        height: 100%;
        justify-content: center;
        & .top-circle {
          position: absolute;
          left: 0;
          right: 0;
          top: -1px;
          width: 24px;
          height: 12px;
          border: 1px solid #FF6A00;
          border-top: none;
          border-bottom-left-radius: 12px;
          border-bottom-right-radius: 12px;
          background-color: #fff;
        }
        & .line {
          width: 1px;
          border-right: 1px dashed #FF6A00;
        }
        & .bottom-circle {
          position: absolute;
          left: 0;
          right: 0;
          bottom: -1px;
          width: 24px;
          height: 12px;
          border: 1px solid #FF6A00;
          border-bottom: none;
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
          background-color: #fff;
        }
      }
      & .right-part {
        overflow: hidden;
        padding: 30px 12px 0 12px;
        & .name {
          font-size: @ft-2nd-title;
          color: @theme-color;
          margin-bottom: 18px;
          font-weight: 600;
        }
        & .desc {
          font-size: @ft-main-body;
          color: @ft-color-tips;
          margin-bottom: 10px;
        }
        & .valid-time {
          font-size: @ft-tips;
          color: @ft-color-tips;
        }
      }
    }
    & .empty-box {
      width: 570px;
      height: 126px;
    }
  }
</style>