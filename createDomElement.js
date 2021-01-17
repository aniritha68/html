<html>
   <head>
      <title>The jQuery Example</title>
      <script type = "text/javascript" 
         src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js">
      </script>
		
      <script type = "text/javascript" language = "javascript">
         $(document).ready(function() {
            $("div").click(function () {
               $(this).remove( );
            });
         });
      </script>
		
      <style>
         .div{ margin:10px;padding:12px; border:2px solid #666; width:60px;}
      </style>
   </head>
	
   <body>
      <p>Click on any square below:</p>
      <span id = "result"> </span>
		
      <div class = "div" style = "background-color:blue;"></div>
      <div class = "div" style = "background-color:green;"></div>
      <div class = "div" style = "background-color:red;"></div>
   </body>
</html>
