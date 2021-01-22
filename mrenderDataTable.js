<script src="https://code.jquery.com/jquery-3.5.1.js" ></script>
<script src="https://cdn.datatables.net/1.10.23/js/jquery.dataTables.min.js" > </script>
<html>
<body>
<head>
<style>
table {
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

th{
  text-align: left;
  padding: 16px;
}
tr:nth-child(even) {
  background-color: #f2f2f2
}
.headerSortDown:after,
.headerSortUp:after {
  content: ' ';
  position: relative;
  left: 2px;
  border: 8px solid transparent;
}

.headerSortDown:after {
  top: 10px;
  border-top-color: silver;
}

.headerSortUp:after {
  bottom: 15px;
  border-bottom-color: silver;
}

.headerSortDown,
.headerSortUp {
  padding-right: 10px;
}
</style>
<table id="example" class="display" style="width:100%" data-sort="descending" mb=5 mt=3>
				<thead>
					<tr>
						<th>Name</th>
						<th>Position</th>
						<th class="headerSortUp">Start_date</th>
						<th class="headerSortDown">Salary</th>
					</tr>
				</thead>
			
			</table>
<script>
$(document).ready(function() {
var data1 = [{"name":"test","position" :"Manager","salary" :"1000","start_date" :"1 Jan"},
{"name":"test2","position" :"Assistent Manager","salary" :"500","start_date" :"5 Jan"},
{"name":"test3","position" :" Manager","salary" :"50546","start_date" :"04 Feb"},
{"name":"test4","position" :" Manager","salary" :"4578689","start_date" :"04 Feb"}];
var table = $('#example').DataTable( {
		"processing": true,
		data:data1 ,
 "searching": false,
			"info": false,
                         "show" :false,
   select: false,
 "bPaginate": false,
    "bLengthChange": false,
    "bFilter": true,
                "order": [[ 0, 'asc' ], [ 1, 'asc' ]],			                
 var columns = [
            { data: "name" },
            { data: "position" },
            { data: "salary" },
            { data: "start_date" },
         
        ],
       "mRender": function (data, type, row) {
					  if(row.Type === "test"){
			 return "ani";}
		else{
			return "uchiha";}
}   
	} );

} );


</script>
</head>
</body>
</html>



