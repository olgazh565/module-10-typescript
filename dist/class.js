"use strict";
class HttpResponse {
    constructor(success, data, error) {
        this.success = success;
        if (data) {
            this.data = data;
        }
        if (error) {
            this.error = error;
        }
    }
}
const responseToken = new HttpResponse(true, 564745757585);
const responseUser = new HttpResponse(true, 'Max leskin');
