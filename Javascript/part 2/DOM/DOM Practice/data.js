let users=[{"id":1,"name":"Julee","gender":"Female"},
    {"id":2,"name":"Camila","gender":"Female"},
    {"id":3,"name":"Hermie","gender":"Male"},
    {"id":4,"name":"Adelaida","gender":"Female"},
    {"id":5,"name":"Lil","gender":"Polygender"},
    {"id":6,"name":"Cynthy","gender":"Female"},
    {"id":7,"name":"Linell","gender":"Female"},
    {"id":8,"name":"Roch","gender":"Female"},
    {"id":9,"name":"George","gender":"Female"},
    {"id":10,"name":"Natala","gender":"Non-binary"},
    {"id":11,"name":"Nat","gender":"Female"},
    {"id":12,"name":"Rodolphe","gender":"Male"},
    {"id":13,"name":"Willis","gender":"Male"},
    {"id":14,"name":"Efren","gender":"Male"},
    {"id":15,"name":"Reggy","gender":"Male"},
    {"id":16,"name":"Moss","gender":"Male"},
    {"id":17,"name":"Maryann","gender":"Female"},
    {"id":18,"name":"Josias","gender":"Male"},
    {"id":19,"name":"Hallsy","gender":"Male"},
    {"id":20,"name":"Luz","gender":"Female"},
    {"id":21,"name":"Blaire","gender":"Female"},
    {"id":22,"name":"Kiri","gender":"Female"},
    {"id":23,"name":"Shelden","gender":"Male"},
    {"id":24,"name":"Tammi","gender":"Female"},
    {"id":25,"name":"Stafford","gender":"Male"},
    {"id":26,"name":"Kirby","gender":"Female"},
    {"id":27,"name":"Thedrick","gender":"Male"},
    {"id":28,"name":"Jessika","gender":"Female"},
    {"id":29,"name":"Agathe","gender":"Female"},
    {"id":30,"name":"Roman","gender":"Male"},
    {"id":31,"name":"Alexei","gender":"Genderqueer"},
    {"id":32,"name":"Aubrey","gender":"Male"},
    {"id":33,"name":"Dory","gender":"Female"},
    {"id":34,"name":"Marji","gender":"Female"},
    {"id":35,"name":"Rebecca","gender":"Female"},
    {"id":36,"name":"Rudie","gender":"Male"},
    {"id":37,"name":"Bryce","gender":"Male"},
    {"id":38,"name":"Joan","gender":"Female"},
    {"id":39,"name":"Raff","gender":"Male"},
    {"id":40,"name":"Tobe","gender":"Female"},
    {"id":41,"name":"Donnell","gender":"Male"},
    {"id":42,"name":"Daryl","gender":"Female"},
    {"id":43,"name":"Kenny","gender":"Male"},
    {"id":44,"name":"Ara","gender":"Female"},
    {"id":45,"name":"Pammie","gender":"Female"},
    {"id":46,"name":"Mabel","gender":"Female"},
    {"id":47,"name":"Idelle","gender":"Genderqueer"},
    {"id":48,"name":"Ber","gender":"Male"},
    {"id":49,"name":"Cornie","gender":"Male"},
    {"id":50,"name":"Nissa","gender":"Female"},
    {"id":51,"name":"Goddard","gender":"Male"},
    {"id":52,"name":"Thoma","gender":"Male"},
    {"id":53,"name":"Rosita","gender":"Female"},
    {"id":54,"name":"Chip","gender":"Male"},
    {"id":55,"name":"Koressa","gender":"Female"},
    {"id":56,"name":"Ortensia","gender":"Female"},
    {"id":57,"name":"Bertie","gender":"Female"},
    {"id":58,"name":"Celine","gender":"Female"},
    {"id":59,"name":"Dru","gender":"Female"},
    {"id":60,"name":"Viviana","gender":"Female"},
    {"id":61,"name":"Roseanne","gender":"Female"},
    {"id":62,"name":"Celie","gender":"Female"},
    {"id":63,"name":"Arel","gender":"Male"},
    {"id":64,"name":"Bess","gender":"Female"},
    {"id":65,"name":"Eadith","gender":"Female"},
    {"id":66,"name":"Theo","gender":"Polygender"},
    {"id":67,"name":"Eddie","gender":"Male"},
    {"id":68,"name":"Denna","gender":"Female"},
    {"id":69,"name":"Debby","gender":"Polygender"},
    {"id":70,"name":"Ephrayim","gender":"Male"},
    {"id":71,"name":"Sascha","gender":"Female"},
    {"id":72,"name":"Hermina","gender":"Non-binary"},
    {"id":73,"name":"Hardy","gender":"Male"},
    {"id":74,"name":"Leanora","gender":"Female"},
    {"id":75,"name":"Stuart","gender":"Male"},
    {"id":76,"name":"Christopher","gender":"Male"},
    {"id":77,"name":"Adolpho","gender":"Male"},
    {"id":78,"name":"Julie","gender":"Non-binary"},
    {"id":79,"name":"Raye","gender":"Female"},
    {"id":80,"name":"Lauren","gender":"Female"},
    {"id":81,"name":"Anabal","gender":"Female"},
    {"id":82,"name":"Faydra","gender":"Female"},
    {"id":83,"name":"Cheston","gender":"Male"},
    {"id":84,"name":"Darrell","gender":"Male"},
    {"id":85,"name":"Shae","gender":"Female"},
    {"id":86,"name":"Elwood","gender":"Male"},
    {"id":87,"name":"Binnie","gender":"Female"},
    {"id":88,"name":"Edan","gender":"Male"},
    {"id":89,"name":"Jaquenetta","gender":"Female"},
    {"id":90,"name":"Darwin","gender":"Male"},
    {"id":91,"name":"Brander","gender":"Male"},
    {"id":92,"name":"Garvey","gender":"Male"},
    {"id":93,"name":"Pincus","gender":"Male"},
    {"id":94,"name":"Ashley","gender":"Female"},
    {"id":95,"name":"Layla","gender":"Female"},
    {"id":96,"name":"Shannon","gender":"Female"},
    {"id":97,"name":"Dredi","gender":"Female"},
    {"id":98,"name":"Boothe","gender":"Male"},
    {"id":99,"name":"Felicity","gender":"Female"},
    {"id":100,"name":"Kristan","gender":"Female"}]
    function display_users(){

    
    for (user of users){
        if(user.gender==='Female'){
           let rows="";
           rows+=`<tr>
                      <td>${user.id}</td>
                      <td>${user.name}</td>
                      <td>${user.gender}</td>
                      </tr>`
        }
    }
    document.getElementsByTagName('tbody')[0].innerHTML=rows
}

                  
           



    
        
        