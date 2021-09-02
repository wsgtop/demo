// const crypto = require('crypto');
// import { classProperty } from "babel-types";
// import crypto, { Cipher, Decipher, DiffieHellman, ECDH, Hash, Hmac, KeyObject, sign, Verify } from "crypto";
// const secret = "abcdefg";
// const hash = crypto.createHmac("sha256", secret).update("I love cupcakes").digest("hex");
// console.log(hash);

// const Certificate = crypto.Certificate
// Certificate.exportChallenge()
// Certificate.exportPublicKey()
// Certificate.verifySpkac()

// Hash  创建哈希值
// Hmac

// sign  生成签名
// Verify  验证签名

// import crypto from "crypto";

// const hash = crypto.createHash("sha256");
// const res = hash.update("hahaha").digest("base64");
// console.log(res);

// const hmac = crypto.createHmac("sha256", "secret");
// const res1 = hmac.update("hahaha").digest("base64");
// console.log(res1);

// const sign = crypto.createSign("sha256");
// const res2 = sign.update("hahaha");
// const res3 = sign.sign('hahaha')
// console.log(res2);
// console.log(res3);
import path from 'path'
console.log('--------',path.basename());
console.log(path.resolve());
console.log(__dirname);