export type Country={
id: number,
description: string,
capital_city: string,
currency: string,
thumbnail: string,
name: string;
cities : string[]

}

export type City={
    name: string,
    description: string;
    thumbnail : string;
}
export enum Status {
    SUCCESS,
    ERROR,
    LOADING,
  }
  
  export type Result<T> =
    | {
        value: T;
        message: null;
        status: Status.SUCCESS;
      }
    | {
        value: null;
        message: string;
        status: Status.ERROR;
      }
    | {
        value: null;
        message: null;
        status: Status.LOADING;
      };
  