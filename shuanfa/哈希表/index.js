const sleep = (tm) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, tm);
  });
};

const test = async () => {
  await sleep(2000);
  console.log("--------");
};

test();
