<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>PreLaunch Assessment</title>
  <link rel="stylesheet" href="https://unpkg.com/@shopify/polaris@4.0.0-rc.4/styles.min.css" />
  <script src="/scripts/jquery.js"></script>
  <script>
  var merchant = <%- JSON.stringify(merchant) %> ; // Original source of truth
  var tempMerchant = <%- JSON.stringify(merchant) %> ; // Storing changes to the merchant record. Stays temp until saved
  </script>
  <script src="/scripts/script.js"></script>
  <script src="/scripts/engine.js"></script>
  <script src="/scripts/underscore.js"></script>

</head>
<!-- Using EJS (https://ejs.co/) for templating and Shopify Polaris (CSS) for styling--></html>
<body>

</body>
</html>