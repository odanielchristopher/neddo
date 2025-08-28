import z from 'zod';

export function coerceType(value: any, type: string, objKey: string): any {
  switch (type) {
    case 'string':
      return z.coerce
        .string({ error: `'${objKey}' expected to be string but got ${value}` })
        .parse(value);
    case 'number': {
      return z.coerce
        .number({ error: `'${objKey}' expected to be number but got ${value}` })
        .parse(value);
    }
    case 'boolean':
      return z.coerce
        .boolean({
          error: `'${objKey}' expected to be boolean but got ${value}`,
        })
        .parse(value);
    default:
      return value;
  }
}
