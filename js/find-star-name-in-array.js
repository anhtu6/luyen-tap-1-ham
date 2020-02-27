let arr1 = ["Polaris","Aldebaran","Deneb","Vega","Altair","Dubhe","Regulus"];
let arr2 = ["Ursa Minor","Tarurus","Cygnus","Lyra","Aquila","Ursa Major","Leo"];
let name = prompt('Nhap ten ngoi sao');
function search(array) {
    let count =0;
    for (i=0;i <array.length;i++) {
        if (name == array[i]) {
            document.write('duoc tim thay o vi tri '+i);
            count+=1;
        }
    }
    if (count == 0) {document.write('khong tim thay');}
}
search(arr1);