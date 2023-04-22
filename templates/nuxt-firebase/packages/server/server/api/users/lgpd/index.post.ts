/* eslint-disable complexity */
import { HttpStatusCode } from 'shared';
import { getClientIp } from 'request-ip';
import definePrivateEventHandler from '../../../handlers/auth';
import { actions } from '../../../modules/users';

type UserAgentInfo = {
  browser: string;
  browserVersion: string;
  os: string;
  osVersion: string;
};

function getUserAgentInfo(userAgent?: string): UserAgentInfo {
  if (!userAgent)
    return {
      browser: 'unknown',
      browserVersion: 'unknown',
      os: 'unknown',
      osVersion: 'unknown',
    };

  const browserRegex =
    /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i;
  const osRegex = /(windows nt|mac os x|linux|ubuntu|android|ios) ([^;)]+)/i;

  const matchesBrowser = browserRegex.exec(userAgent);
  const matchesOs = osRegex.exec(userAgent);

  let browser = (matchesBrowser && matchesBrowser[1].toLowerCase()) || '';
  let browserVersion = (matchesBrowser && matchesBrowser[2]) || '';

  if (/\s(edge|edg)/i.test(userAgent)) {
    browser = 'edge';
    browserVersion =
      (/edge\/(\d+)/i.test(userAgent)
        ? /edge\/(\d+)/i.exec(userAgent)?.[1]
        : /edg\/(\d+)/i.exec(userAgent)?.[1]) || 'unknown';
  }

  const userAgentInfo: UserAgentInfo = {
    browser,
    browserVersion,
    os: (matchesOs && matchesOs[1].toLowerCase()) || '',
    osVersion: (matchesOs && matchesOs[2]) || '',
  };

  return userAgentInfo;
}

export default definePrivateEventHandler(async (event, { user }) => {
  const { req } = event.node;
  const ip = getClientIp(req);
  const userAgent = getUserAgentInfo(req.headers['user-agent']);
  await actions.saveLgpdConsent(user, {
    ip: ip || 'unknown',
    ...userAgent,
  });
  setResponseStatus(event, HttpStatusCode.Created);
  return user.uid;
});
