Live Demo
<html>
   <head>
      <title>The jQuery Example</title>
      <script type = "text/javascript" 
         src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js">
      </script>
		
      <script type = "text/javascript" language = "javascript">
         $(document).ready(function() {
            $("div").click(function () {
               $(this).replaceWith("<h1>JQuery is Great</h1>");
            });
         });
      </script>
		
      <style>
         #division{ margin:10px;padding:12px; border:2px solid #666; width:60px;}
      </style>
   </head>
	
   <body>
      <p>Click on the square below:</p>
      <span id = "result"> </span>
		
      <div id = "division" style = "background-color:blue;">
         This is Blue Square!!
      </div>
   </body>
</html>
