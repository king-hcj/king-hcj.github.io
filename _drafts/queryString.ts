/**
 * 简版 queryString
 * 功能：
 *  queryString.parse
 *  queryString.stringify
 *  queryString.parseUrl
 *  queryString.stringifyUrl
 */

// 判断 null和undefined
const isNullOrUndefined = (value: any) => value === null || value === undefined;
const encode = (value: any) => encodeURIComponent(value);
const decode = (value: any) => decodeURIComponent(value);

const encoderForArrayFormat = (key: string) => (result: any, value: any) => {
  if (
    value === undefined ||
    (value === null) ||
    (value === '')
  ) {
    return result;
  }

  if (value === null) {
    return [...result, encode(key)];
  }

  return [...result, [encode(key), '=', encode(value)].join('')];
};

const parserForArrayFormat = (key: string | number, value: any, accumulator: { [x: string]: ConcatArray<never>; }) => {
  if (accumulator[key] === undefined) {
    accumulator[key] = value;
    return;
  };

  accumulator[key] = [].concat(accumulator[key], value);
};

const removeHash = (input: string) => {
  const hashStart = input.indexOf('#');
  if (hashStart !== -1) {
    input = input.slice(0, hashStart);
  }

  return input;
};

const getHash = (url: string) => {
  let hash = '';
  const hashStart = url.indexOf('#');
  if (hashStart !== -1) {
    hash = url.slice(hashStart);
  }

  return hash;
};

const extract = (input: string) => {
  input = removeHash(input);
  const queryStart = input.indexOf('?');
  if (queryStart === -1) {
    return '';
  }

  return input.slice(queryStart + 1);
}

const parseValue = (value: any) => {
  // 先就格式化一下 boolean 值吧
  if (value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
    value = value.toLowerCase() === 'true';
  }

  return value;
}

const keysSorter = (input: any[]): any => {
  if (Array.isArray(input)) {
    return input.sort();
  }

  if (typeof input === 'object') {
    return keysSorter(Object.keys(input))
      .sort((a: any, b: any) => Number(a) - Number(b))
      .map((key: string | number) => input[key]);
  }

  return input;
}

// 参数解析
const parse = (query: string) => {

  // Create an object with no prototype
  const ret = Object.create(null);

  if (typeof query !== 'string') {
    return ret;
  }

  query = query.trim().replace(/^[?#&]/, '');

  if (!query) {
    return ret;
  }

  for (const param of query.split('&')) {
    if (param === '') {
      continue;
    }

    let [key, value] = param.split('=');

    parserForArrayFormat(key, value, ret);
  }

  for (const key of Object.keys(ret)) {
    const value = ret[key];
    if (typeof value === 'object' && value !== null) {
      for (const k of Object.keys(value)) {
        value[k] = parseValue(value[k]);
      }
    } else {
      ret[key] = parseValue(value);
    }
  }

  // 排序后返回
  return (Object.keys(ret).sort().reduce((result, key) => {
    const value = ret[key];
    if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
      // Sort object keys, not values
      result[key] = keysSorter(value);
    } else {
      result[key] = value;
    }

    return result;
  }, Object.create(null)));
}


// 对象stringify
const stringify = (object: { [x: string]: any; }) => {
  if (!object) {
    return '';
  }

  const shouldFilter = (key: string) => isNullOrUndefined(object[key]) || object[key] === '';

  const objectCopy: {
    [key: string]: any;
  } = {};

  for (const key of Object.keys(object)) {
    if (!shouldFilter(key)) {
      objectCopy[key] = object[key];
    }
  }

  const keys = Object.keys(objectCopy);

  return keys.map(key => {
    const value = object[key];

    if (value === undefined) {
      return '';
    }

    if (value === null) {
      return encode(key);
    }

    if (Array.isArray(value)) {
      return value
        .reduce(encoderForArrayFormat(key), [])
        .join('&');
    }

    return encode(key) + '=' + encode(value);
  }).filter(x => x.length > 0).join('&');
};

// URL解析
const parseUrl = (url: string) => {
  const [url_, hash] = url.split('#');

  return Object.assign(
    {
      url: url_.split('?')[0] || '',
      query: parse(extract(url))
    },
    hash ? { fragmentIdentifier: decode(hash) } : {}
  );
};

// stringify 为 Url
const stringifyUrl = (object: { url: string; query?: any; fragmentIdentifier?: any; }) => {

  const url = removeHash(object.url).split('?')[0] || '';
  const queryFromUrl = extract(object.url);
  const parsedQueryFromUrl = parse(queryFromUrl);

  const query = Object.assign(parsedQueryFromUrl, object.query);
  let queryString = stringify(query);
  if (queryString) {
    queryString = `?${queryString}`;
  }

  let hash = getHash(object.url);
  if (object.fragmentIdentifier) {
    hash = `#${encode(object.fragmentIdentifier)}`;
  }

  return `${url}${queryString}${hash}`;
};

export {
  parse,
  stringify,
  parseUrl,
  stringifyUrl,
  isNullOrUndefined,
};
