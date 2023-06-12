class Http {
  constructor() {
  }

  load(url, options = {}) {
    const {
      method = 'GET',
      payload = null,
      hasAuth = true,
      contentType = 'application/json',
      accessControlAllowOrigin ='*',
      query
    } = options;
    const headers = this._getHeaders({
      hasAuth,
      contentType,
      accessControlAllowOrigin
    });
    return fetch(this._getUrl(url, query), {
      method,
      headers,
      body : payload===null? null :JSON.stringify(payload)
    })
      .then(this._checkStatus)
      .then(this._parseJSON)
      .catch(this._throwError);
  }

  _getHeaders({ hasAuth, contentType, accessControlAllowOrigin }) {
    const headers = new Headers();

    if (contentType) {
      headers.append('content-type', contentType);
    }
    if (accessControlAllowOrigin) {
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, UPDATE, OPTIONS');
      headers.append('Access-Control-Allow-Credentials', 'true');
      headers.append("Access-Control-Allow-Headers", "Content-Type");
    }
    return headers;
  }
   customError = (obj) => {
    return obj;
  }
  async _checkStatus(response) {
    if (!response.ok) {
       const parsedException = await response.json().catch(() => ({
        message: response.statusText
      }));

        throw JSON.stringify({
          status: response.status,
          message: parsedException?.message
        });
    }
    return response;
  }

  _getUrl(url, query) {
    return `${url}${query ? `?${JSON.stringify(query)}` : ''}`;
  }

  _parseJSON(response) {
    return response.json();
  }

  _throwError(err) {
      throw err;
  }
}

export { Http };
