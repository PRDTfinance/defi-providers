import { Injectable } from '@nestjs/common';
import { nodeUrls } from '../app.config';
import { Everscale } from './everscale';
import { Hedera } from './hedera';
import { Near } from './near';
import { Solana } from './solana';
import { Stacks } from './stacks';
import { Tezos } from './tezos';
import Web3 from 'web3';
import { log } from '../util/logger/logger';

const webSocketConfig = {
  timeout: 30000,
  clientConfig: {
    maxReceivedFrameSize: 1000000000,
    maxReceivedMessageSize: 1000000000,
    keepalive: true,
    keepaliveInterval: 60000,
  },
  reconnect: {
    auto: true,
    delay: 5000,
    maxAttempts: 5,
    onTimeout: false,
  },
};

const httpConfig = {
  keepAlive: true,
  timeout: 20000,
};

@Injectable()
export class Web3ProviderService {
  constructor(
    private readonly everscale: Everscale,
    private readonly hedera: Hedera,
    private readonly near: Near,
    private readonly solana: Solana,
    private readonly stacks: Stacks,
    private readonly tezos: Tezos,
  ) {}

  async getWeb3(chain = 'ethereum', url = null) {
    let node_url;
    if (url) node_url = url;
    else {
      node_url =
        nodeUrls[`${chain.toUpperCase()}_NODE_URL`] ||
        nodeUrls[`ETHEREUM_NODE_URL`];
    }

    let web3;
    switch (chain) {
      case 'everscale': {
        web3 = { eth: this.everscale };
        web3.nodeUrl = node_url;
        break;
      }
      case 'hedera': {
        web3 = { eth: this.hedera };
        break;
      }
      case 'near': {
        web3 = { eth: this.near };
        break;
      }
      case 'solana': {
        web3 = { eth: this.solana };
        break;
      }
      case 'stacks': {
        web3 = { eth: this.stacks };
        break;
      }
      case 'tezos': {
        web3 = { eth: this.tezos };
        await web3.eth.onModuleInit();
        break;
      }
      default: {
        if (node_url.startsWith('ws')) {
          web3 = new Web3(
            new Web3.providers.WebsocketProvider(node_url, webSocketConfig),
          );
        } else {
          web3 = new Web3(
            new Web3.providers.HttpProvider(node_url, httpConfig),
          );
        }
      }
    }
    return web3;
  }

  checkNodeUrl(chain: string) {
    return !nodeUrls[`${chain.toUpperCase()}_NODE_URL`];
  }
}
