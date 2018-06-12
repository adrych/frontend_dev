var query = $('#query');
var keyups = Rx.Observable.fromEvent(query, 'keyup');

keyups.throttleTime(500).map((x) => {
    return query.val();
})
.switchMap((x) => {
    return searchWikipedia(x);
})
.do((x) => {
    //console.log(x);
})
.subscribe((x) => {
    $('#results').html(createList(x));
});

var searchWikipedia = (term) => {
    return $.ajax({
        url: 'http://en.wikipedia.org/w/api.php',
        dataType: 'jsonp',
        data: {
            action: 'opensearch',
            format: 'json',
            search: term
        }
    }).promise();
};

let createList = (data) => {
    let list = '';

    for (let i = 0 ; i < data.length; i++) {
        list += `<li>${data[1][i]} [<a href="${data[3][i]}" target="blank">${data[3][i]}</a>]</li>`;
    }

    return `<ul>${list}</ul>`;
};

function formatJSONa(x){
    var tbl=$("<table/>").attr("id","my_table");
    $("#results").append(tbl);
   /*for(var i=0;i<x[0].length;i++)*/
   for(var i=0;10;i++)
    {   
        var tr="<tr>";
        var td1="<td> 1* "+x[i][1]+"</td>";
        var td2="<td>"+x[i][2]+"</td>";
        var td3="<td>"+x[i][3]+"</td></tr>";
        
        var tr4="<tr>";
        var td5="<td> 4* "+x[i][4]+"</td>";
        var td6="<td>"+x[i][5]+"</td>";
        var td7="<td>"+x[i][6]+"</td></tr>";
        
        var tr8="<tr>";
        var td9="<td> 7* "+x[i][7]+"</td>";
        var td10="<td>"+x[i][8]+"</td>";
        var td11="<td>"+x[i][9]+"</td></tr>";


       $("#my_table").append(tr+td1+td2+td3+tr4+td5+td6+td7); 

    } 
};