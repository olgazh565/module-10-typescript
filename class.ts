class HttpResponse<D, E> {
  protected success: boolean;
  protected data?: D;
  protected error?: E;

  constructor(success: boolean, data?: D, error?: E) {
    this.success = success;

    if (data) {
      this.data = data;
    }

    if (error) {
      this.error = error;
    }
  }
}

const responseToken = new HttpResponse<number, string>(true, 564745757585);
const responseUser = new HttpResponse<string, string>(true, 'Max leskin');