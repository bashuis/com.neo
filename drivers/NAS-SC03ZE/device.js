'use strict';

const {ZwaveDevice} = require('homey-zwavedriver');

class WallSwitchDual_SC03Z extends ZwaveDevice {

  onNodeInit() {
    this.registerCapability('onoff', 'SWITCH_BINARY');
  }
   async ledOnRunListener(args, state) {
    if (args.hasOwnProperty('backlight_state')) {
      return this.configurationSet({
        index: 1,
        size: 1,
        id: 'backlight_mode',
      }, new Buffer([args.backlight_state]));
    }
  }
}

module.exports = WallSwitchDual_SC03Z;
