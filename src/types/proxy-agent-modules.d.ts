declare module 'http-proxy-agent' {
	import {Agent} from 'http';

	export class HttpProxyAgent extends Agent {
		constructor(proxy: string | URL, options?: any);
	}
}

declare module 'https-proxy-agent' {
	import {Agent} from 'https';

	export class HttpsProxyAgent extends Agent {
		constructor(proxy: string | URL, options?: any);
	}
}
