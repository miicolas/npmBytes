import type { ServiceAccount } from "firebase-admin";
import { initializeApp, cert } from "firebase-admin/app";

const serviceAccount = {
  type: "service_account",
  project_id: "betanpmbytes",
  private_key_id: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCntqR78coeU/Vo\nkEJ4hkgwP4fMvITdFyYBGC5q1Q2p5oFbZxRMoakRv7pef4UvYlvn31nAWzzqNg/E\nmk0i3TwBrhMrMg447+2YE0P5bhCcRj7z2XgaxQ2ukEhl/U8vxNjntMuxkPd8gR9k\nWcWxHlQdWfIRdjen2E+qwM1F9muRUoWUSFQ0UlQSnt/g4H8yAWm4A3XlwNpjJFx9\n/IqmokU5oxzxS2Yf2rGYIjHBmippznzEsmWKLhmOQUE0YyxNQQndqgxV9ug9yROL\nv/2R5YeIdI/6w/hAcVqKtPzosg63baXQxNG+YeSBdM5hqWL14m/RC7ih/BSK3i7l\nOk5H4a6rAgMBAAECggEACB6ypgGV3JQKDK73WOh/dD6PL51s/VtSjrkB/lAkYjZz\nyt4ZwIAPNHnI5yxbYWjstDQ/Hy4Lq/dEGiuyUl7NufMYoH3C7ITJRxSftOLcUQSh\npaLAyuMBf5MivjVecRyht84sEoPHR7LktzIVfTbPscAaFThZB3pUmRrOlXWRza5S\nC0WOcNDV9usyu4oOW/pKjNH7m0QWA60WjZhHLlKUK6F8pb2woPFsWOnISRhz+XWp\nv9lcGzy/s8x2wpbkKGxKUcbuDNRwHoqo2l6zyLsR5ZgqNmW4G68bOGDQYN1CUFcS\nFrJkyxa5Cel3MY7xkeRBKLaGBfzuKWZFLsbVwQEAQQKBgQDaybyAuoTVavE41ifU\n8a0EDuRlHYS//Nv7TlFeft873+qjf8n6xp6xSA3D7H0/RawfpIfN0HOC5X7SGDPZ\n+4OHjv8B31CumSPG38yr4h6zsCS8oDHJ+VE6dfklQnUnaq736AUr+NRVPEIVo5ov\n+AYW/BE28N6yMjanSNrcLlTVIQKBgQDEPRB9CWRirbdcwY+bUpd7HNrvw3/aMmWR\nTCmeBy+seFOFNFKDlRhlyDP1jB40Kg2cqSdJ0gaDkwsAaWyoyKClZeJSNUIvZfl/\nlC9+l0LxzfrNvdBYR6xGhtBGNTvCdgW5dxx4toE0iK/t/WH3n7hwoqjMXGdbOEQ+\n1UBXPwF+SwKBgGH/mLKkWRlrFG9b5W2JbvDxZrYv+aUxMqunEeVcuMsN6gCgHa15\nR92qo5fNlvA/WfC2dqnmo8bO2vZqJteNxAV1NJ33FCGQsKjE191ppEziKiJfMs4A\nIbUo4Jci5GzqaULbp21hwGIJYqRkqoyv8LJc560PSQDSYw6dIIMdMZxhAoGAC47d\nLcAj3XwF1LzBzJAsw9+LNZv6J8vYF5q4yMn7kNj1cl8GjSF28me8R7YdAU2Ix7Ve\nzwZDw/QhLcEH2VkXvSYnElh4sXn8G/uKYJZgJwXOw9duMgTmrLC8C6aPAoEZDTdq\nweFd8s4qLoZCAuexYVDzSDYZEFJcEqdUxs67M8kCgYEAosjO5SjWWgbzkZfwhWrX\n5Yxcig26L8p3ADbIFOVrDceWPx8E/BhPTg0g3K/cNT7o8PSPGKgnyz63grWRkSUV\n75tog12ORoq3o83V7AcucAFOBBEoXQ7V/hZYlTv2X6ahOSPyid2vBamaDCj9M8F3\nrObv3RfHixMO9QyMbJbux6M=\n-----END PRIVATE KEY-----\n",
  private_key: "-----\nBEGIN PRIVATE KEY-----c444225fff53ac7e929b4d09f75cab219342190f\n-----END PRIVATE KEY-----",
  client_email: "firebase-adminsdk-v9es5@betanpmbytes.iam.gserviceaccount.com",
  client_id: "109436060845899144090",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url:"https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-v9es5%40betanpmbytes.iam.gserviceaccount.com",
};

export const app = initializeApp({
  credential: cert(serviceAccount as ServiceAccount),
});