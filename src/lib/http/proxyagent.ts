import {Agent as HttpAgent} from 'http';
import {Agent as HttpsAgent} from 'https';
import {HttpProxyAgent} from 'http-proxy-agent';
import {HttpsProxyAgent} from 'https-proxy-agent';

/**
 * Get an Agent that connects through a proxy.
 * @param {boolean} secure - Will the connection to the destination server be secure? NOT the connection to the proxy.
 * @param {string|null} proxyUrl - The URL of the proxy, including the protocol, auth (if applicable), host, and port
 * @param {int} [proxyTimeout=5000] - Timeout for connecting to the proxy, in milliseconds
 * @returns {HttpAgent|HttpsAgent|boolean}
 */
export default function getProxyAgent(secure: boolean, proxyUrl: string, proxyTimeout = 5000) {
	if (!proxyUrl) {
		return false; // no need to use an agent
	}

	let options = {timeout: proxyTimeout} as any;
	return secure
		? (new HttpsProxyAgent(proxyUrl, options) as unknown as HttpsAgent)
		: (new HttpProxyAgent(proxyUrl, options) as unknown as HttpAgent);
}
