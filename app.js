const previewFile = () => {
  const img = document.querySelector("img");
  const file = document.querySelector("input[type=file]").files[0];
  const reader = new FileReader();
  console.log(reader);

  reader.addEventListener(
    "load",
    () => {
      // Convert the image file to base64 string
      img.src = reader.result;
    },
    false
  );

  if (file) {
    reader.readAsDataURL(file);
  }
};
