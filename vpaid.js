import VPAIDInterface from './VPAIDInterface.js';
/**
 * Main function called by wrapper to get the vpaid ad.
 *
 * @return {Object}
 */
window.getVPAIDAd = function() {
  return new VPAIDInterface();
};
