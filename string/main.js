var fullName = 'phuoc long';
// alert(fullName);
console.log(typeof fullName);

var fullName2 = 'phuoc long \'là siêu nhân\'';
console.log(fullName2);

// in dấu \
var fullName3 = 'phuoc long \\';
console.log(fullName3);

// độ dài
var lengthName = 'phuoc long';
console.log(lengthName.length);

// nối chuỗi
var firstName = 'phuoc';
var lastName = 'long';
console.log('đây là ' + firstName + ' ' + lastName);
console.log(`đây là ${firstName} ${lastName}`); /*ES6*/

// BT1
// Tạo biến commentText để lưu nội dung bình luận sau: 
//  "Học chưa hiểu là học chưa đủ!" (bao gồm cả dấu ngoặc kép).
// Tạo biến authorName có giá trị Sơn Đặng:
// Tạo biến fullCommentText có giá trị bằng authorName nối với commentText,
// sử dụng template string để nối, giữa authorName và commentText cần nối thêm một khoảng trắng (một dấu cách).

var commentText ='\"Học chưa hiểu là học chưa đủ!\"';
var authorName ='Sơn Đặng:';
var fullCommentText =`${authorName} ${commentText}`;

console.log(commentText);
console.log(authorName);
console.log(fullCommentText);

// BT2
// Tạo biến commentText để lưu bình luận sau: 
// Để hiển thị được chuỗi chứa dấu gạch chéo ngược (\) ta phải thêm dấu \ vào trước hoặc sau nó
// Sử dụng làm alert hoặc console.log để xem giá trị biến commentText

var commentText ="Để hiển thị được chuỗi chứa dấu gạch chéo ngược (\\) ta phải thêm dấu \\ vào trước hoặc sau nó";
console.log(commentText);