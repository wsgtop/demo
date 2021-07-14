function filterNicknameWithEmoj(nickname) {
  const regStr = /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|\u3030|\uA9|\uAE|\u3030/ig;

  let nicknameFilter = '';

  // regStr.test(nickname)会一次成功一次失败，待排查是否和regStr写法有关
  if (regStr.test(nickname)) {
    nicknameFilter = nickname.replace(regStr, '');
    nicknameFilter = removeBlank(nicknameFilter);
    return nicknameFilter;
  }

  return nickname;
}
function removeBlank(str) {
  str = str.trim();
  let ret = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      ret += str[i];
    }
  }
  return ret;
}




console.log('>>>',filterNicknameWithEmoj("sadfasdgfasdf哈哈🤣🤣🤣🤣💕✌🎂✔🤔嘿嘿dsaasdfgsad"));

console.log('>>>2',removeBlank(' v v v f g h   '));
