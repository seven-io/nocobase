import { Plugin } from '@nocobase/server';
import PluginVerificationServer, { SMSProvider } from '@nocobase/plugin-verification';
import { tval } from '@nocobase/utils';

const NAMESPACE = '@seven.io/plugin-nocobase'

class SevenSMSProvider extends SMSProvider {
  constructor(options: {apiKey: string}) {
    super(options);
  }

  async send(phoneNumber: string, data: { code: string }) {
    const body = {text: data.code, to: phoneNumber}
    const res = await fetch('https://gateway.seven.io/api/sms', {
      body: JSON.stringify(body),
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        sentWith: 'nocobase',
        'x-api-key': this.options.apiKey
      },
      method: 'POST',
    })
    const json = await res.json()
    console.log('seven response', json)
  }
}

export class PluginSevenServer extends Plugin {
  async load() {
    const plugin = this.app.pm.get('verification') as PluginVerificationServer;
    // The name must correspond to the one used on the client
    plugin.smsOTPProviderManager.registerProvider('seven', {
      title: tval('Seven SMS', { ns: NAMESPACE }),
      provider: SevenSMSProvider,
    });
  }
}

export default PluginSevenServer;
