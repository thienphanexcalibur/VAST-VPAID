/**
 * @constructor
 */
function VPAIDInterface(HTML_TEMPLATE = null) {
  this.HTML_TEMPLATE = HTML_TEMPLATE;
  this.slot = null; // The slot is the div .skinContent element on the main page that the skin is supposed occupy.
  this.videoSlot = null; // The video slot is the video object that the creative can use to render the video element it might have.
  this.templateNode = null; // Insert place for the banners, check renderSlot method
  this.animationContainer = null;

  this.eventCallbacks = {}; // An object containing all registered events. These events are all callbacks from the vpaid ad

  // A list of attributes getable and setable.
  this.attributes = {
    'companions': '',
    'desiredBitrate': 256,
    'duration': 30,
    'expanded': false,
    'height': 0,
    'icons': '',
    'linear': true,
    'remainingTime': 10,
    'skippableState': false,
    'viewMode': 'normal',
    'width': 0,
    'volume': 50
  };

  /**
   * Static method for setting element style
   * @param {Node} nodeElement
   * @param {Object} newStyle
   */
  this._setStyle = (nodeElement, newStyle) => Object.assign(nodeElement.style, newStyle)
};

/**
 * VPAID defined init ad, initializes all attributes in the ad.  Ad will
 * not start until startAd is called.
 *
 * @param {number} width The ad width.
 * @param {number} height The ad heigth.
 * @param {string} viewMode The ad view mode.
 * @param {number} desiredBitrate The desired bitrate.
 * @param {Object} creativeData Data associated with the creative.
 * @param {Object} environmentVars Variables associated with the creative like
 *     the slot and video slot.
 */
VPAIDInterface.prototype.initAd = function (
  width,
  height,
  viewMode,
  desiredBitrate,
  creativeData,
  environmentVars) {
  // slot and videoSlot are passed as part of the environmentVars
  const {
    AdParameters
  } = creativeData;
  this.slot = environmentVars.slot;
  this.videoSlot = environmentVars.videoSlot;

  this.attributes['width'] = width;
  this.attributes['height'] = height;
  this.attributes['viewMode'] = viewMode;
  this.attributes['desiredBitrate'] = desiredBitrate;

  // Keeping reference to the videoSlot node
  this._createAdsVideo(environmentVars.videoSlot, AdParameters, environmentVars);

  this.log(`Init ads with:
    WIDTH: ${width}
    HEIGHT: ${height}
    VIEWMODE: ${viewMode}
    BITRATE: ${desiredBitrate}`);
  this._renderSlot();
  // this.addButtonListeners_();
  // this.fillProperties_();
  this.eventCallbacks['AdLoaded']();
  this.eventCallbacks['AdStarted']();
};

/**
 * @param {Node} videoSlot The slot for video
 * @param {Object} AdParameters Data from <AdParameters></AdParameters>
 * @param {Object} EnvironmentVars
 */
VPAIDInterface.prototype._createAdsVideo = function (videoSlot, AdParameters, environmentVars) {
  const AdParameters_ = JSON.parse(AdParameters);
  const sourceNode = document.createElement('source');
  sourceNode.src = AdParameters_.videos[0].url;
  sourceNode.type = AdParameters_.videos[0].type;
  videoSlot.appendChild(sourceNode);

  this._setStyle(videoSlot, {
    width: '100%',
    height: 'auto',
    position: 'absolute'
  });

  if (environmentVars.videoSlotCanAutoPlay) {
    videoSlot.autoplay = 'autoplay';
    videoSlot.muted = 'muted';
    videoSlot.loop = true;
    videoSlot.onloadeddata = function (e) {
      this.play();
    }
  }
}


/**
 * Populates HTML_TEMPLATE as banners into the slot, normally HTML_TEMPLATE is <canvas></canvas>
 * @private
 */
VPAIDInterface.prototype._renderSlot = function () {
  const slotExists = this.slot && this.slot.tagName === 'DIV';
  if (!slotExists) {
    this.slot = document.createElement('div');
    if (!document.body) {
      document.body = /**@type {HTMLDocument}*/ document.createElement('body');
    }
    document.body.appendChild(this.slot);
  }

  // Create Skin Container
  this.slot.classList.add('skinContent');
  this._setStyle(this.slot, {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    overflow: 'hidden',
    'z-index': 4
  });


  // When init hide the video slot
  this.videoSlot.style.display = 'none';

  // Create Animation Container Element
  this.animationContainer = document.createElement('div');
  this.animationContainer.setAttribute('id', 'animation_container');
  this.animationContainer.style = "position: absolute; left: 0; left:50%; transform:translateX(-50%)";
  this._setStyle(this.animationContainer, {
    position: 'absolute',
    left: 0,
    left: '50%',
    transform: 'translateX(-50%)'
  })

  // Inject HTML
  this.animationContainer.innerHTML = this.HTML_TEMPLATE;

  // Append Animation Container into Skin Container
  this.slot.appendChild(this.animationContainer);

  // Make templateNode public to all instances
  this.templateNode = this.animationContainer.querySelector('canvas');
  this._setStyle(this.templateNode, {
    position: 'relative'
  })
  // Just a quick insert video slot before templateNode
  this.animationContainer.insertBefore(this.videoSlot, this.templateNode);
};


/**
 * Triggers an event.
 * @private
 */
VPAIDInterface.prototype._triggerEvent = function () {
  const eventSelect = document.getElementById('eventSelect');
  const value = eventSelect.value;
  if (value == 'AdClickThru') {
    this.adClickThruHandler_();
  } else if (value == 'AdError') {
    this.adErrorHandler_();
  } else if (value == 'AdLog') {
    this.adLogHandler_();
  } else if (value == 'AdInteraction') {
    this.adInteractionHandler_();
  } else if (value in this.eventCallbacks) {
    this.eventCallbacks[value]();
  }
};


/**
 * Returns the versions of vpaid ad supported.
 * @param {string} version
 * @return {string}
 */
VPAIDInterface.prototype.handshakeVersion = function (version) {
  return version;
};


/**
 * Called by the wrapper to start the ad.
 */
VPAIDInterface.prototype.startAd = function () {
  this.log('Starting ad');
  if ('AdStarted' in this.eventCallbacks) {
    this.eventCallbacks['AdStarted']();
  }
};


/**
 * Called by the wrapper to stop the ad.
 */
VPAIDInterface.prototype.stopAd = function () {
  this.log('Stopping ad');
  if ('AdStop' in this.eventCallbacks) {
    this.eventCallbacks['AdStopped']();
  }
};


/**
 * @param {number} value The volume in percentage.
 */
VPAIDInterface.prototype.setAdVolume = function (value) {
  this.attributes['volume'] = value;
  this.log('setAdVolume ' + value);
  if ('AdVolumeChange' in this.eventCallbacks) {
    this.eventCallbacks['AdVolumeChange']();
  }
};


/**
 * @return {number} The volume of the ad.
 */
VPAIDInterface.prototype.getAdVolume = function () {
  this.log('getAdVolume');
  return this.attributes['volume'];
};


/**
 * @param {number} width The new width.
 * @param {number} height A new height.
 * @param {string} viewMode A new view mode.
 */
VPAIDInterface.prototype.resizeAd = function (width, height, viewMode) {
  this.log('resizeAd ' + width + 'x' + height + ' ' + viewMode);
  this.attributes['width'] = width;
  this.attributes['height'] = height;
  this.attributes['viewMode'] = viewMode;
  if ('AdSizeChange' in this.eventCallbacks) {
    this.eventCallbacks['AdSizeChange']();
  }
};


/**
 * Pauses the ad.
 */
VPAIDInterface.prototype.pauseAd = function () {
  this.log('pauseAd');
  if ('AdPaused' in this.eventCallbacks) {
    this.eventCallbacks['AdPaused']();
  }
};

/**
 * Resumes the ad.
 */
VPAIDInterface.prototype.resumeAd = function () {
  this.log('resumeAd');
  if ('AdResumed' in this.eventCallbacks) {
    this.eventCallbacks['AdResumed']();
  }
};


/**
 * Expands the ad.
 */
VPAIDInterface.prototype.expandAd = function () {
  this.log('expandAd');
  this.attributes['expanded'] = true;
  if ('AdExpanded' in this.eventCallbacks) {
    this.eventCallbacks['AdExpanded']();
  }
};


/**
 * Returns true if the ad is expanded.
 *
 * @return {boolean}
 */
VPAIDInterface.prototype.getAdExpanded = function () {
  this.log('getAdExpanded');
  return this.attributes['expanded'];
};


/**
 * Returns the skippable state of the ad.
 *
 * @return {boolean}
 */
VPAIDInterface.prototype.getAdSkippableState = function () {
  this.log('getAdSkippableState');
  return this.attributes['skippableState'];
};

/**
 * Collapses the ad.
 */
VPAIDInterface.prototype.collapseAd = function () {
  this.log('collapseAd');
  this.attributes['expanded'] = false;
};


/**
 * Skips the ad.
 */
VPAIDInterface.prototype.skipAd = function () {
  this.log('skipAd');
  const skippableState = this.attributes['skippableState'];
  if (skippableState) {
    if ('AdSkipped' in this.eventCallbacks) {
      this.eventCallbacks['AdSkipped']();
    } else {
      this.log('Error: Invalid ad skip request.');
    }
  }
};


/**
 * Registers a callback for an event.
 * @param {Function} aCallback The callback function.
 * @param {string} eventName The callback type.
 * @param {Object} aContext The context for the callback.
 */
VPAIDInterface.prototype.subscribe = function (aCallback, eventName, aContext) {
  this.log('Subscribed ' + eventName);
  const callBack = aCallback.bind(aContext);
  this.eventCallbacks[eventName] = callBack;
};


/**
 * Removes a callback based on the eventName.
 *
 * @param {string} eventName The callback type.
 */
VPAIDInterface.prototype.unsubscribe = function (eventName) {
  this.log('unsubscribe ' + eventName);
  this.eventCallbacks[eventName] = null;
};


/**
 * @return {number} The ad width.
 */
VPAIDInterface.prototype.getAdWidth = function () {
  return this.attributes['width'];
};


/**
 * @return {number} The ad height.
 */
VPAIDInterface.prototype.getAdHeight = function () {
  return this.attributes['height'];
};


/**
 * @return {number} The time remaining in the ad.
 */
VPAIDInterface.prototype.getAdRemainingTime = function () {
  return this.attributes['remainingTime'];
};


/**
 * @return {number} The duration of the ad.
 */
VPAIDInterface.prototype.getAdDuration = function () {
  return this.attributes['duration'];
};


/**
 * @return {string} List of companions in vast xml.
 */
VPAIDInterface.prototype.getAdCompanions = function () {
  return this.attributes['companions'];
};


/**
 * @return {string} A list of icons.
 */
VPAIDInterface.prototype.getAdIcons = function () {
  return this.attributes['icons'];
};


/**
 * @return {boolean} True if the ad is a linear, false for non linear.
 */
VPAIDInterface.prototype.getAdLinear = function () {
  return this.attributes['linear'];
};


/**
 * Logs events and messages.
 *
 * @param {string} message
 */
VPAIDInterface.prototype.log = function (message) {
  console.log('[VPAID]', message);
};



/**
 * Callback for AdClickThru button.
 *
 * @private
 */
VPAIDInterface.prototype.adClickThruHandler_ = function () {
  if (!this.isEventSubscribed_('AdClickThru')) {
    this.log('Error: AdClickThru function callback not subscribed.');
    return;
  }
  const clickThruUrl = document.getElementById('clickThruUrl').value;
  const clickThruId = document.getElementById('clickThruId').value;
  const clickThruPlayerHandles =
    document.getElementById('clickThruPlayerHandels').value;
  this.log('AdClickThu(' + clickThruUrl + ',' +
    clickThruId + ',' + clickThruPlayerHandles + ')');
  this.eventCallbacks['AdClickThru'](
    clickThruUrl,
    clickThruId,
    clickThruPlayerHandles);
};


/**
 * Callback for AdError button.
 *
 * @private
 */
VPAIDInterface.prototype.adErrorHandler_ = function () {
  if (!this.isEventSubscribed_('AdError')) {
    this.log('AdError function callback not subscribed.');
    return;
  }
  const adError = document.getElementById('adErrorMsg').value;
  this.log('adError(' + adError + ')');
  this.eventCallbacks['AdError'](adError);
};


/**
 * Callback for AdLogMsg button.
 *
 * @private
 */
VPAIDInterface.prototype.adLogHandler_ = function () {
  if (!this.isEventSubscribed_('AdLog')) {
    this.log('Error: AdLog function callback not subscribed.');
    return;
  }
  const adLogMsg = document.getElementById('adLogMsg').value;
  this.log('adLog(' + adLogMsg + ')');
  this.eventCallbacks['AdLog'](adLogMsg);
};


/**
 * Callback for AdInteraction button.
 *
 * @private
 */
VPAIDInterface.prototype.adInteractionHandler_ = function () {
  if (!this.isEventSubscribed_('AdInteraction')) {
    this.log('Error: AdInteraction function callback not subscribed.');
    return;
  }
  const adInteraction = document.getElementById('adInteractionId').value;
  this.log('adLog(' + adInteraction + ')');
  this.eventCallbacks['AdInteraction'](adInteraction);
};


/**
 * Callback function when an event is selected from the dropdown.
 *
 * @private
 */
VPAIDInterface.prototype.eventSelected_ = function () {
  const clickThruParams = document.getElementById('AdClickThruOptions');
  const adErrorParams = document.getElementById('AdErrorOptions');
  const adLogParams = document.getElementById('AdLogOptions');
  const adInteractionParams = document.getElementById('AdInteractionOptions');
  clickThruParams.style.display = 'none';
  adErrorParams.style.display = 'none';
  adLogParams.style.display = 'none';
  adInteractionParams.style.display = 'none';

  const eventSelect = document.getElementById('eventSelect');
  const value = eventSelect.value;
  if (value == 'AdClickThru') {
    clickThruParams.style.display = 'inline';
  } else if (value == 'AdError') {
    adErrorParams.style.display = 'inline';
  } else if (value == 'AdLog') {
    adLogParams.style.display = 'inline';
  } else if (value == 'AdInteraction') {
    adInteractionParams.style.display = 'inline';
  }
};


/**
 * @param {string} eventName
 * @return {Boolean} True if this.eventCallbacks contains the callback.
 * @private
 */
VPAIDInterface.prototype.isEventSubscribed_ = function (eventName) {
  return typeof (this.eventCallbacks[eventName]) === 'function';
};

/**
 * Populates all of the vpaid ad properties.
 *
 * @private
 */
VPAIDInterface.prototype.fillProperties_ = function () {
  for (const key in this.attributes) {
    const span = document.getElementById(key);
    span.textContent = this.attributes[key];
  }
};
export default VPAIDInterface
