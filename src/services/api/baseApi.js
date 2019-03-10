import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import config from './baseApi.config'

export default  class  Baseapi {

    _urlApi = '';
    _token = ''
    constructor(urlApi) {
        this._urlApi = urlApi;
        this._token ='';
    }


    dataTransform(data) {
        let dataTransformed = Object.assign({}, data);

        dataTransformed.validator = undefined;
        dataTransformed.oldValue = undefined;
        dataTransformed.objToValidate = undefined;
        dataTransformed.isValid = undefined;

        let cache = [];

        let newObject = JSON.stringify(dataTransformed, (key, value) => {
            if (key === '$validator' || key === 'oldValue' || key === 'validator' || key === 'visibleProperties' ||
                key === 'objToValidate' && value !== null) {

                value = undefined;

                if (cache.indexOf(value) !== -1) {
                    // Circular reference found, discard key
                    return;
                }
                // Store value in our collection
                cache.push(value);
            }
            return value;
        });

        return newObject;
    }

    create(data, callback, errorCallback, scope) {
        let instance = this.AxiosBase(this._urlApi, 'POST', null, null, this.dataTransform(data));
        this.request(instance, callback, errorCallback, scope);
    }

     delete(id, callback, errorCallback, scope) {
        let instance = this.AxiosBase(this._urlApi, 'DELETE', null);
        instance.url += `/${id}`;
        this.request(instance, callback, errorCallback, scope);
    }


     update(id, data, callback, errorCallback, scope) {
        let instance = this.AxiosBase(this._urlApi, 'PUT', null, null, this.dataTransform(data));
        instance.url += `/${id}`;
        this.request(instance, callback, errorCallback, scope);
    }

    getById(id, callback, errorCallback, scope) {
        let instance = this.AxiosBase(this._urlApi, 'GET', null, null);
        instance.url += `/${id}`;
        this.request(instance, callback, errorCallback, scope);
    }

    get(body, callback, errorCallback, scope) {
        let instance = this.AxiosBase(this._urlApi, 'GET', body);
        this.request(instance, callback, errorCallback, scope);
    }

    do(
        url,
        method,
        callback,
        errorCallback,
        queryString,
        headers,
        body,
        transFormRequest,
        transformResponse,
        contentType,
        scope,
        responseType) {

            let instance = this.AxiosBase(  url, method, queryString, headers,  body, transFormRequest, transformResponse, contentType, null, responseType);
            this.request(instance, callback, errorCallback, scope);

    }

    upload(url, formData, callback, errorCallback) {
        let instance = this.AxiosBase(url, 'POST', null, null, formData, null, null, 'multipart/form-data');
        this.request(instance, callback, errorCallback);
    }

    request(config, callback, errorCallback, scope) {
        return axios
            .request(config)
            .then(function (value) {
                callback(value.data, value);
            }).catch(function (reason) {

                if (reason && reason.response) {
                    switch (reason.response.status) {
                        case 403:
                            {
                                window.location.href = "/#/notPermission";
                                break;
                            }
                        case 418:
                            {
                                window.location.href = "/#/logout";
                                break;
                            }

                        case 404:
                            {
                                callback({}, reason.response);
                                break;
                            }
                        case 400:
                            {
                                errorCallback(reason, scope);
                                break;
                            }
                        case 507:
                            {
                                errorCallback(reason, scope);
                            }
                        case 509:
                            {
                                window.location.href = "/#/notPermission";
                                break;
                            }
                    }
                }
                else if (errorCallback) {
                    errorCallback(reason, scope);
                }
            });
    }

    AxiosBase(
        url = this._urlApi,
        method,
        queryString,
        headers,
        body,
        transFormRequest,
        transformResponse,
        contentType,
        timeout,
        responseType
    ) {
        return {
            url: url,
            method: method, // default

            // `baseURL` will be prepended to `url` unless `url` is absolute.
            // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
            // to methods of that instance.
            //   baseURL: '/api/',

            // `transformRequest` allows changes to the request data before it is sent to the server
            // This is only applicable for request methods 'PUT', 'POST', and 'PATCH'
            // The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
            // FormData or Stream
            // You may modify the headers object.
            transformRequest: [transFormRequest || function (data, headers) {
                // Do whatever you want to transform the data
                return data;
            }],

            // `transformResponse` allows changes to the response data to be made before
            // it is passed to then/catch
            transformResponse: [transformResponse || function (data) {
                // Do whatever you want to transform the data
                if (data) {
                    data = JSON.parse(data);
                }
                return data;
            }],

            // `headers` are custom headers to be sent
            headers: headers || {
                'X-Requested-With': 'XMLHttpRequest', 'Content-Type': contentType || 'application/json', "Authorization": "Bearer " + this._token
            },

            // `params` are the URL parameters to be sent with the request
            // Must be a plain object or a URLSearchParams object
            params: queryString,


            // `data` is the data to be sent as the request body
            // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
            // When no `transformRequest` is set, must be of one of the following types:
            // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
            // - Browser only: FormData, File, Blob
            // - Node only: Stream, Buffer
            data: body,

            //Timeout for the request
            //timeout: timeout || 5000,


            // `validateStatus` defines whether to resolve or reject the promise for a given
            // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
            // or `undefined`), the promise will be resolved; otherwise, the promise will be
            // rejected.
            validateStatus (status) {
                return status >= 200 && status < 300; // default
            },
            
            responseType: responseType

        };
    }

}
const BaseApiService =  new Baseapi(config.urlBase);

export {BaseApiService};


