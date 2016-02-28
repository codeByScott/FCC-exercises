// Caesars Cipher challenge from Free Code Camp

function rot13(str) { // LBH QVQ VG!
  
  var decipher = "";
  for (var i=0; i<str.length; ++i) {
    var char = str.charCodeAt(i);
    if (char >= 65 && char <= 90)  
    decipher += String.fromCharCode((char - 52) % 26 + 65);
    else
      decipher += str.charAt(i);
}
  str = decipher;
  return str;
}
	

// Change the inputs below to test
rot13("SERR PBQR PNZC");