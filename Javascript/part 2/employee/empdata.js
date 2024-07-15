let employees=[
    {eid:101,ename:'Rahul',sal:45000},
    {eid:102,ename:'Sonia',sal:55000},
    {eid:103,ename:'Priya',sal:65000}
]
function display_employeedata(){
let rows=""
for(emp of employees)
    rows = rows+ `<tr>
                    <td>${emp.eid}</td>
                    <td>${emp.ename}</td>
                    <td>${emp.sal}</td>
               </tr>`

    //document.getElementById('table_data').innerHTML=rows
    document.querySelector('.table_data_class').innerHTML=rows
}