<h1>One</h1>

<p class="">I am one.</p>

<script type="text/javascript">
  // Test
  /* comments */
  var foo = 'bar';
</script>


angular.module('custom_concat').run(['$templateCache', function($templateCache) {

  $templateCache.put('test/fixtures/one.html',
    "<h1>One</h1>\n" +
    "\n" +
    "<p class=\"\">I am one.</p>\n" +
    "\n" +
    "<script type=\"text/javascript\">\n" +
    "  // Test\n" +
    "  /* comments */\n" +
    "  var foo = 'bar';\n" +
    "</script>"
  );


  $templateCache.put('test/fixtures/two/two.html',
    "<h2>Two</h2>\n" +
    "\n" +
    "<!-- Comment for two -->\n" +
    "\n" +
    "<textarea readonly=\"readonly\">We are two.</textarea>"
  );

}]);