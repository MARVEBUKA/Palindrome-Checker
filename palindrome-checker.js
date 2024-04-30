function palindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^a-z0-9]/ig, '').toLowerCase();
  
  // Compare the clean string with its reverse
  return cleanStr === cleanStr.split('').reverse().join('');
}

