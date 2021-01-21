

<script src="https://code.jquery.com/jquery-3.5.1.js" ></script>
<script src="https://cdn.datatables.net/1.10.23/js/jquery.dataTables.min.js" > </script>
<script>
$(document).ready(function() {
var data1 = [{"name":"test","position" :"M","salary" :"1000","start_date" :"1 Jan"},
{"name":"test2","position" :"L","salary" :"500","start_date" :"5 Jan"}];

	$('#example').DataTable( {
		"processing": true,
		data:data1 ,
                    "searching": false,
			"info": false,
			"ordering":false,
                         "show" :false,
   select: false,
 "bPaginate": false,
    "bLengthChange": false,
    "bFilter": true,
    "bInfo": false,
 columns: [
            { data: "Name" },
            { data: "Position" },
            { data: "salary" },
            {data: "Start date" },
         
        ]

	} );
} );


</script>
</head>
</body>
</html>



</script>
</head>
</body>
</html>
