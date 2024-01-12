{
  const log = <T>(val: T): T => {
  console.log(val);
  return val;
};

log<string>('строка');
log<number>(5);

function log2<T>(val: T): T {
  console.log(val);
  return val;
};

log<string>('строка');
log<boolean>(!5);
}