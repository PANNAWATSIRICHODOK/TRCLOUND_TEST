var array1 = [
    { Code: 101, Name: "AAA" },
    { Code: 102, Name: "BBB" },
    { Code: 103, Name: "CCC" }
];

var array2 = [
    { Code: 103, City: "Singapore" },
    { Code: 102, City: "Tokyo" },
    { Code: 101, City: "Bangkok" }
];

var mergedArray = [];

for (var i = 0; i < array1.length; i++) {
    var item1 = array1[i];
    var matchedCity = null;
    
    for (var j = 0; j < array2.length; j++) {
        var item2 = array2[j];
        
        if (item1.Code === item2.Code) {
            matchedCity = item2.City;
        }
    }
    
    var mergedItem = {
        Code: item1.Code,
        Name: item1.Name,
        City: matchedCity
    };

    mergedArray.push(mergedItem);
}


var tableBody = document.getElementById('table-body');

mergedArray.forEach(function(item) {
    var row = document.createElement('tr');
    row.innerHTML = '<td>' + item.Code + '</td>' +
                    '<td>' + item.Name + '</td>' +
                    '<td>' + item.City + '</td>';
    tableBody.append(row);
});

