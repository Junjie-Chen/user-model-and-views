import axios, { AxiosPromise } from 'axios';

export class ApiSync<T> {
  constructor(public baseUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.baseUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      return axios.put(`${this.baseUrl}/${id}`, data);
    } else {
      return axios.post(this.baseUrl, data);
    }
  }
}
