$(document).ready(function() {
    let table = $("#courseTable");
    table.append("<tr><th>周次</th><th>時間</th><th>主題</th></tr>");
    
    
    let secondUnit = 1000;
    let minuteUnit = secondUnit * 60;
    let hourUnit = minuteUnit * 60;
    let dayUnit = hourUnit * 24;
    
    topic.forEach(function(d, i) {
        table.append("<tr>");
        table.append("<td>"+(i+1)+"</td>");
        table.append("<td>"+(new Date(startDate.getTime()+i*7*dayUnit)).toLocaleDateString().slice(5)+"</td>");
        if (d === "不上課")
            table.append('<td><span style="color: #888">'+ d +'</span></td>');
        else
            table.append("<td>"+ d +"</td>");
        table.append("</tr>");
        
    })
});