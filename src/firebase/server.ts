import type { ServiceAccount } from "firebase-admin";
import { initializeApp, cert } from "firebase-admin/app";

const serviceAccount = {
  
    "type": "service_account",
    "project_id": "betanpmbytes",
    "private_key_id": "0434efa11fe9b441ec89c31f14fbbd14406a2a57",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC4cOgsuBdufNXS\nC73NRM2f8UaMZb7NXLVBW9AG2f26vn5xuNaM8f7jKWseMtSOgnlegjWtBlBnntJa\niR4i1u6W8BECl8ukXtpfgW35GTou+OAKd4zxNs4JZEtUoMSxdQpaJ+nF4RjmJE3X\nm0TYASir6GClHfUwqikYSFzCemUwkDYOIxo1Zqs853urD3YxaxorzOiOK1WQWTZS\ntTK6jcC5ZFVHONDcjwiNaktrutMymc9qkOSIt1hnmr8H1oX04Lxppu/uwh3CuGzI\nyWDJl7s9PVmKXUngGonwhvkyPC5NoO/0gDmSLfXyrkK3s1Xba0W9lsxDN9zmaiNT\nCSbRTKXhAgMBAAECggEADaXhMEnxBe573f6bbWCNfKvcZhAzVbvp96ulEZS450Qo\nVB7y1Vwk2cdbU1E8lE0IURt+gE6qzXgdpbBmx/oyjn22LIRx/7g7HX0U161rtkUZ\nQv0Es2a0SVKgFmONGnqIKRKyBD/7WTBPiEhHiFpRmaLo397/ITo+LztPjd6DtVue\nRpSfOJuTv7AfWIEBIlnXLyJP6IZfnxU3++hjq96njJGtGuQlpmTMMcYFgbhGImdq\nm3W3EEmM4VrQVLVQeJC4/pydsxj99n2vQnEE3/SWlUSsEgBmNs3y3qEEEPmEnTbx\n7LQdD2735HtI/yWVGc8Jo+OsYFyvor11f87gbWXFnwKBgQDl9YM776kWhU1sRlHz\n2B8/RRGZUHzheVGqZWM/74cnaiuQDtpzsix70g6MZi5ULdURxL1ZTr+di5Cot+Og\ntqO74JgJXECe9uuFUJZ2D6iGWGblwqUoMaThEvVXYTR6w+UWEUAf1NXzAi43U6Cp\n5I268TYL3XFxjCFSCgmpRzzLQwKBgQDNU9UrTkbQOQVMkblv6B4+W2U8I9OObxcC\nncYbNznVtvCtinEuVvEMgPZgaUCX5jN3DJAhkbkqiiCJ/4RmFLWl5877s/bDQ6Zh\npJRmwVprP2j5/KRMRXrt6Mrl1eiam/7iv5bl5f1hzcg1SFQC6dh6JbTo1P+Cvfir\n1/vBn2DOCwKBgQCLYNVb/JS1y7HzkGOXskSuKoTSMhCe8NNove78D4gRga5JsFcD\njNida+HZgw1NhEICdQZ3HN3S9YaGXH6hKFHxS92avsmEEBEMSp4HjNIOK4Kie+ly\nhTR0HvOJNKeESTuOtoHxSSUsFwRAEHXuw1KMHist4dgihFalzOOyMDVO1QKBgQDB\nh1G15qqyGfyXpgadpq/S4HwzyiTd7HFIwwL1pgD6IdsKByIUple/DFKsnqgGRDCf\n9hRnv51CrjxrNY5KVRy9Shd6gK6Gb14ETIafr4EU8wh0D5+gUCDE2xVaulrqVzxP\n5ntJJ5TCuZ4KMqkUseqbfqzcg95tEbev6PxfDGTG7wKBgQCpDnfc7LRgHcGE4GCe\nVE4k5V5q2B0kTEr6k+g3pz8OyJtQ8hkUvkmIIfEzRy9Kvtjt4QYzdkANUuCl6xTS\n3nhuq/J+76brXSjT9bkrpmzB/x+Fy9Tk7dwsuE0kWpLGQ7qKMmMt+86bYKzRVII1\nHA/nW/6VGEFZhuKGLwW3ibrd9g==\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-v9es5@betanpmbytes.iam.gserviceaccount.com",
    "client_id": "109436060845899144090",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-v9es5%40betanpmbytes.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  
  
};

export const app = initializeApp({
  credential: cert(serviceAccount as ServiceAccount),
});