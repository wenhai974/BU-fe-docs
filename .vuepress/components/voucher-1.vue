<template>
  <div class="voucher-single-box voucher-wrapper">
    <div class="box-top">
      <div class="logo-box">
        <div class="logo">
          <img
            src="/images/default-avatar.png"
            alt=""
          >
        </div>
        <div class="logo-text">
          小米手机
        </div>
      </div>
      <div class="intro-box">
        <div class="intro-left">
          <div class="icon-box">
            <img
              src="/images/voucher-default.png"
              alt=""
            >
          </div>
        </div>
        <div class="intro-right">
          <div class="name ellipsis">
            {{ voucherBaseInfo.name }}
          </div>
          <div class="desc ellipsis">
            描述：{{ voucherBaseInfo.desc }}
          </div>
        </div>
      </div>
    </div>
    <div class="divide-line" />
    <div class="valid-time">
      有效期：2019-07-13至2019-09-20
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      voucherBaseInfo: {
        name: '小米MIX3开启全面屏新时代',
        desc: '小米MIX3 支持5G 好看又能打 滑盖即可解锁'
      }
    }
  }
}
</script>

<style>
  .voucher-single-box {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 542px;
    height: 210px;
    padding: 18px 16px 14px 25px;
    margin-top: 20px;
    box-sizing: border-box;
    background: url('/images/vouchers-bg.png') no-repeat;
  }
  .voucher-single-box .box-top .logo-box {
    display: flex;
    margin-bottom: 16px;
  }
  .voucher-single-box .box-top .logo-box .logo {
    width: 26px;
    height: 26px;
    margin-right: 10px;
    border-radius: 50%;
    overflow: hidden;
    background-color: #eee;
  }
  .voucher-single-box .box-top .logo-box .logo img {
    width: 100%;
    height: 100%;
  }
  .voucher-single-box .box-top .logo-box .logo-text {
    font-size: 14px;
    line-height: 26px;
    color: #999;
  }
  .voucher-single-box .box-top .intro-box {
    display: flex;
  }
  .voucher-single-box .box-top .intro-box .intro-left {
    margin-right: 16px;
  }
  .voucher-single-box .box-top .intro-box .intro-left .icon-box {
    width: 76px;
    height: 76px;
    overflow: hidden;
    background-color: #fff;
  }
  .voucher-single-box .box-top .intro-box .intro-left .icon-box img {
    width: 100%;
    height: 100%;
  }
  .voucher-single-box .box-top .intro-box .intro-right {
    flex: 1;
    display: flex;
    overflow: hidden;
    flex-direction: column;
  }
  .voucher-single-box .box-top .intro-box .intro-right .name {
    font-size: 16px;
    margin-bottom: 8px;
    color: #333;
    font-weight: 600;
    line-height: 1.5;
  }
  .voucher-single-box .box-top .intro-box .intro-right .desc {
    font-size: 14px;
    margin-bottom: 8px;
    color: #666;
    line-height: 1.5;
  }
  .voucher-single-box .box-top .intro-box .intro-right .face-value {
    font-size: 14px;
    color: #999;
    line-height: 1.5;
  }
  .voucher-single-box .divide-line {
    width: 466px;
    height: 0px;
    border-bottom: 1px dashed #D0D4FD;
    position: absolute;
    left: 24px;
    bottom: 48px;
  }
  .voucher-single-box .valid-time {
    height: 33px;
    font-size: 14px;
    color: #999;
    line-height: 33px;
  }
</style>