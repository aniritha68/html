<table id="example" class="display" width="100%"></table>
var dataSet = [
    [ "aniritha", "intern", "valeo", "5421", "2020/04/25", "52" ],
    [ "sneha", "intern", "valeo", "345", "2020/04/12", "52" ]
];
    $('#example').DataTable( {
        data: dataSet,
        columns: [
            { title: "Name" },
            { title: "Position" },
            { title: "Office" },
            { title: "Extn." },
            { title: "Start date" },
            { title: "Salary" }
        ]
    } );
