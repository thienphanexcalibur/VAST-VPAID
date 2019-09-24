import VPAIDInterface from './interface/VPAIDInterface.js/index.js';

/**
 * Main function called by wrapper to get the vpaid ad.
 *
 * @return {Object}
 */



window.getVPAIDAd = function() {
  return new VPAIDInterface();
};
