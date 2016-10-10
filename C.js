var C = (function() {
   var zip = function() {
      var zipped = [];

      var args = convertArgumentsToArray(arguments);
      var maxLength = maxLengthOfElements(args);

      return args.reduce(function(p, el, ind, z) {
         for (var i = 0; i < maxLength; i++) {
            if (zipped[i] === undefined) zipped[i] = [];
            zipped[i].push(el[i]);
         }
         return zipped;
      }, zipped);
   };

   var convertArgumentsToArray = function(obj) {
      return Array.prototype.slice.call(obj);
   };

   var maxLengthOfElements = function(arr) {
      return sortArrayByLengthOfArrays(arr)[0].length;
   };

   var sortArrayByLengthOfArrays = function(arr) {
      return arr.sort(function(a,b) {
         if (a.length > b.length) return -1;
         if (b.length > a.length) return 1;
         return 0;
      })
   };

   return {
      zip: zip
   };
})();
