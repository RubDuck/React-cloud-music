import qs from 'qs';

const config = {

 // `method` 是创建请求时使用的方法
 method: 'get', // default

 // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
 // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
 baseURL: 'https://some-domain.com/api/',

 // `transformRequest` 允许在向服务器发送前，修改请求数据
 // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
 // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
 transformRequest: [function (data, headers) {
   // 对 data 进行任意转换处理
   return data;
 }],

 // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
 transformResponse: [function (data) {
   // 对 data 进行任意转换处理
   return data;
 }],

 // `headers` 是即将被发送的自定义请求头
 headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `paramsSerializer` 是一个负责 `params` 序列化的函数
 // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
 paramsSerializer: function(params) {
   return qs.stringify(params, {arrayFormat: 'brackets'})
 },


 // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
 // 如果请求话费了超过 `timeout` 的时间，请求将被中断
 timeout: 1000,

  // `withCredentials` 表示跨域请求时是否需要使用凭证
 withCredentials: false, // default

 // `responseEncoding` indicates encoding to use for decoding responses
 // Note: Ignored for `responseType` of 'stream' or client-side requests
 responseEncoding: 'utf8', // default

  // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
 xsrfCookieName: 'XSRF-TOKEN', // default

 // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
 xsrfHeaderName: 'X-XSRF-TOKEN', // default
}

export default config;
