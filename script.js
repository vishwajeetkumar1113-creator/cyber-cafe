
function calculate(){
 let pages=parseInt(document.getElementById('pages').value);
 let price=parseInt(document.getElementById('type').value);
 document.getElementById('total').innerHTML='Total: ₹'+(pages*price);
}
