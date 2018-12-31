
var socket = io.connect('http://localhost:3000');

var message = document.getElementById('message'),
      btn = document.getElementById('send'),
      output = document.getElementById('output'),
      feedback = document.getElementById('feedback');

btn.addEventListener('click', function(){

    socket.emit('chat', message.value);
});


    socket.on('chat', function(data)

    {
      document.write("<table  border=1 cellpadding=0 cellspacing=0 width='100%' bgcolor='#C0C0C0'>");
      document.write('<tr>');
      document.write('<th>'); document.write('Symbol'); document.write('</th>');
      document.write('<th>'); document.write('Id'); document.write('</th>');
      document.write('<th>'); document.write('Unique_Id'); document.write('</th>');
      document.write('<th>'); document.write('Function'); document.write('</th>');
      document.write('<th>'); document.write('Close'); document.write('</th>');
      document.write('<th>'); document.write('Open'); document.write('</th>');
      document.write('<th>'); document.write('price'); document.write('</th>');
      document.write('<th>'); document.write('Per'); document.write('</th>');
      document.write('<th>'); document.write('change_price'); document.write('</th>');
      document.write('<th>'); document.write('Timestamp'); document.write('</th>');
      document.write('<th>'); document.write('Timezone'); document.write('</th>');

      document.write('</tr>');

document.write('<tr>');
document.write('<td>'); document.write(data.function); document.write('</td>');
document.write('<td>'); document.write(data.id); document.write('</td>');

document.write('<td>'); document.write(data.unique_id); document.write('</td>');
document.write('<td>'); document.write(data.function); document.write('</td>');
document.write('<td>'); document.write(data.close); document.write('</td>');
document.write('<td>'); document.write(data.open); document.write('</td>');
document.write('<td>'); document.write(data.price); document.write('</td>');
document.write('<td>'); document.write(data.per); document.write('</td>');
document.write('<td>'); document.write(data.change_price); document.write('</td>');
document.write('<td>'); document.write(data.timestamp); document.write('</td>');
document.write('<td>'); document.write(data.time_zone); document.write('</td>');
document.write('</tr>');
document.write('</table>');
document.write('</br>');
document.write('</br>');

  console.log(data);

});
