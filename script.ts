function wordCounter(): void {
  const inputBox = document.getElementById("inputBox") as HTMLTextAreaElement;
  const wordsInput = document.getElementById("words") as HTMLInputElement;
  const charsInput = document.getElementById("chars") as HTMLInputElement;
  const alphabetsInput = document.getElementById("alphabets") as HTMLInputElement;
  const numbersInput = document.getElementById("numbers") as HTMLInputElement;

  const text = inputBox.value;

  // Total words count
  const wordsCount = text.trim().length > 0 ? text.trim().split(/\s+/).length : 0;
  // Total characters count
  const charsCount = text.length;
  // Count alphabets only (ignoring numbers and special characters)
  const alphabetsCount = (text.match(/[a-zA-Z]/g) || []).length;
  // Count numbers
  const numbersCount = (text.match(/[0-9]/g) || []).length;

  // Update the input fields with calculated values
  wordsInput.value = wordsCount.toString();
  charsInput.value = charsCount.toString();
  alphabetsInput.value = alphabetsCount.toString();
  numbersInput.value = numbersCount.toString();
}

// Attach the event listener to the textarea
document.getElementById("inputBox")?.addEventListener("input", wordCounter);
