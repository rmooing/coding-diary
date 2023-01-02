var t = "Hello Thank you good luck to you"; // 공백도 포함해서 숫자 세기
console.log(t.charAt(16)); // g
console.log(t.indexOf("you")); // 12
console.log(t.indexOf("you", 16)); // 29 (맨 끝에 you를 찾고싶으면 16(시작점을 지정해주기, 처음 you 다음 아무곳에서부터 시작 가능))
console.log(t.lastIndexOf("you")); // 29 - 끝에서 부터 찾기
console.log(t.lastIndexOf("you", 25)); // 12 
console.log(t.match("luck")); // ['luck', index: 21, input: 'Hello Thank you good luck to you', groups: undefined]
console.log(t.search("you")); // 12
console.log(t.substring(6, 12)); // Thank
console.log(t.substr(21, 4)); // luck
console.log(t.replace("you","me")); // Hello Thank me good luck to you
console.log(t.toLowerCase()); // hello thank you good luck to you
console.log(t.toUpperCase()); // HELLO THANK YOU GOOD LUCK TO YOU
console.log(t.length); // 32 (0~32개(알파벳+공백))

var s = t.split(" ");
console.log(s[0]); // Hello