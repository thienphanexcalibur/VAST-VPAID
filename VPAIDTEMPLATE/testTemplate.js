import VPAIDInterface from 'interface/VPAIDInterface.js';
const HTML_TEMPLATE = '<div style="position: absolute; bottom:20px;; height: 100px; width: 100%; background: white">This is the banner</div>';


function testTemplate(template) {
  VPAIDInterface.prototype.constructor.call(this, template);
}
testTemplate.prototype = VPAIDInterface.prototype;
export default new testTemplate(HTML_TEMPLATE);
