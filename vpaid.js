import template from 'VPAIDTEMPLATE';

/**
 * Main function called by wrapper to get the vpaid ad.
 *
 * @return {Object}
 */


function checkVPAIDInterface(VPAIDCreative) {
  if (
    VPAIDCreative.handshakeVersion && typeof VPAIDCreative.handshakeVersion == "function" && VPAIDCreative.initAd && typeof VPAIDCreative.initAd == "function" &&
    VPAIDCreative.startAd && typeof VPAIDCreative.startAd == "function" &&
    VPAIDCreative.stopAd && typeof VPAIDCreative.stopAd == "function" &&
    VPAIDCreative.skipAd && typeof VPAIDCreative.skipAd == "function" &&
    VPAIDCreative.resizeAd && typeof VPAIDCreative.resizeAd == "function" &&
    VPAIDCreative.pauseAd && typeof VPAIDCreative.pauseAd == "function" &&
    VPAIDCreative.resumeAd && typeof VPAIDCreative.resumeAd == "function" &&
    VPAIDCreative.expandAd && typeof VPAIDCreative.expandAd == "function" &&
    VPAIDCreative.collapseAd && typeof VPAIDCreative.collapseAd == "function" &&
    VPAIDCreative.subscribe && typeof VPAIDCreative.subscribe == "function" &&
    VPAIDCreative.unsubscribe && typeof VPAIDCreative.unsubscribe ==
    "function") {
    return true;
  }
  return false;
};


window.getVPAIDAd = function () {
  if (checkVPAIDInterface(template.testTemplate)) {
    return template.testTemplate;
  } else {
    throw "VPAID instance doesn't comply with VPAID Interface"
  }
};
