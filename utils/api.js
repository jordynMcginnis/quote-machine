var fetchJsonp = require('fetch-jsonp');

module.exports = {
  getQuote: function (){
    return fetchJsonp('http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=jsonp', {
      jsonpCallback: 'jsonp'
    }).then(function (res) {
      return res.json();
    })
  }
};

