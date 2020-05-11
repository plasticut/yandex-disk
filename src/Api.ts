import fetch, { Headers } from "node-fetch";
import { stringify } from "querystring";

export interface IOperationOptions {
  query?: NodeJS.Dict<string | number | boolean | string[] | number[] | boolean[] | null>;
  params?: NodeJS.Dict<string | number | boolean | string[] | number[] | boolean[] | null>;
  body?: NodeJS.Dict<string | number | boolean | string[] | number[] | boolean[] | null | unknown>;
}

export interface IRequestJsonOptions extends IOperationOptions {
  method: string;
  path: string;
}

export interface IApiOptions {
  url: string;
  token: string;
}

export class Api {
  constructor(private options: IApiOptions) {
  }

  protected async requestJson<T>(options: IRequestJsonOptions): Promise<T> {
    let url = this.options.url;

    if (options.params) {
      url += Object
        .entries(options.params)
        .reduce((acc, [key, value]) => acc.replace(`{${key}}`, String(value)), options.path);
    } else {
      url += options.path;
    }

    if (options.query) {
      url += '?' + stringify(options.query);
    }

    const headers = new Headers({
      Authorization: `OAuth ${this.options.token}`,
    });

    if (options.body) {
      headers.set('Content-Type', 'application/json');
    }

    const res = await fetch(url, {
      method: options.method,
      body: options.body && JSON.stringify(options.body),
      headers,
    });

    return res.json();
  }
}
