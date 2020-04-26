import axios, { AxiosPromise } from 'axios';

export class ApiSync {
  constructor(public baseUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.baseUrl}/${id}`);
  }
}
