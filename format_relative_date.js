
function formatDate(date) {

    let diff = new Date() - date; // The difference in milliseconds
    if (diff < 1000) { // Less than 1 second
        return 'right now';
    }

    let sec = Math.floor(diff / 1000); // Convert diff to seconds
    if (sec < 60 ){
        return sec + ' sec. ago';
    }

    let min = Math.floor(diff / 60000); // Convert diff to minutes
    if (min < 60){
        return min + ' min. ago';
    }

    // format the date
    // add leading zeroes to single-digit day/month/hours/minutes 

    let d = date;
    d = [
        '0' + d.getDate(),
        '0' + d.getDate() +1,
        '' +  d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2)); // take last 2 digits of every component

    // join the components into date
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

document.write("<hr><span class='parag'>TASK7: </span><br>"); 
document.write( formatDate(new Date(new Date - 1)) ); // "right now"
document.write("<br>");
document.write( formatDate(new Date(new Date - 29 * 1000)) ); // "29 sec. ago"
document.write("<br>");
document.write( formatDate(new Date(new Date - 4 * 60 * 1000)) ); // "4 min. ago"
document.write("<br>");

// yesterday's date like 31.12.2016, 20:00
document.write( formatDate(new Date(new Date - 86400 * 1000)) );

// Done by Gad Iradufasha
