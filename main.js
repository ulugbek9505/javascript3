
let input1 = prompt("String type malumotni kiriting:");
let input2 = prompt("Number ma'lumotni kiriting:");
let input3 = prompt("Boolean ma'lumotni kiriting:");
let isConfirmed = confirm("Siz kiritgan ma'lumotlarni ko'rishni xohlaysizmi?");

if (isConfirmed) {
    alert("Kiritilgan birinchi ma'lumot (string): " + input1);
    alert("Kiritilgan ikkinchi ma'lumotni son (number) ga o'zgartirib: " + Number(input2));
    alert("Kiritilgan uchinchi ma'lumotni boolean (true/false) ga o'zgartirib: " + Boolean(input3));
} else {
    alert("Ma'lumotlaringizni ko'rsatish bekor qilindi.");
}


