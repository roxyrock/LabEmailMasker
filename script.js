// Function that masks the username of an email address,
// showing only the first character and replacing the rest with asterisks.

function maskEmail(email) {
  // Check if the email contains the "@" symbol
  if (!email.includes("@")) {
    return "Email not valid";
  }

  // Find the index of the "@" symbol
  let index = email.indexOf("@");

  // Extract the username (before "@") and the domain (from "@" onward)
  let username = email.slice(0, index);
  let domain = email.slice(index);

  // Get the first character of the username
  let firstLetter = username[0];

  //Get the last character of the username
  let lastLetter = username[username.length-1];

  // Calculate how many characters need to be masked
  let count = username.length - 2;

  // Create a string of asterisks to mask the rest of the username
  let mask = "*".repeat(count);

  // Return the masked email address
  return `${firstLetter}${mask}${lastLetter}${domain}`;
}

// Example usage
let email = "myEmail@email.com";
console.log(maskEmail(email));
 
