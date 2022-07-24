const linkImages = [
  "https://i.pinimg.com/236x/2e/85/d1/2e85d1674f547aa1a3f5272cc2a977d7.jpg",
  "https://i.pinimg.com/236x/32/9d/9d/329d9d8c239fcf93bae9ed9016ba9091.jpg",
  "https://i.pinimg.com/564x/49/e4/ea/49e4ea8982944568c2bcb54800226773.jpg",
  "https://i.pinimg.com/564x/d7/f2/be/d7f2bea7a60bd645243f2e84d10d488b.jpg",
  "https://i.pinimg.com/564x/64/da/74/64da74aa582d901dce21167d6d77414f.jpg",
  "https://i.pinimg.com/564x/a2/1c/c5/a21cc57ee1617822b62d3562403bfff3.jpg",
  "https://i.pinimg.com/736x/75/6d/38/756d38c2bfb063de364ae246b14da5ca.jpg",
  "https://i.pinimg.com/564x/a6/53/67/a653674806ceea8ca747d29a111ef80f.jpg",
  "https://i.pinimg.com/564x/6f/32/83/6f32832504d4b155e964b23c8e8e64d2.jpg",
];

const linkImageShuffle = [
  ...linkImages,
  ...linkImages,
  ...linkImages,
  ...linkImages,
  ...linkImages,
  ...linkImages,
  ...linkImages,
  ...linkImages,
  ...linkImages,
  ...linkImages,
  ...linkImages,
  ...linkImages,
  ...linkImages,
  ...linkImages,
  ...linkImages,
  ...linkImages,
  ...linkImages,
  ...linkImages,
  ...linkImages,
  ...linkImages,
  ...linkImages,
]
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

const imgElements = linkImageShuffle.map((link) => {
  let img = new Image();
  img.src = link;
  // console.log(img.naturalHeight, img.naturalWidth);
  const ratio = Math.round((img.naturalHeight * 23) / img.naturalWidth);
  console.log(ratio);
  img.style.gridRowEnd = `span ${ratio}`;
  img.style.objectFit = "contain";
  img.style.overflow = "hidden";
  img.style.display = "block";
  img.style.width = "calc(100% - 40px)";
  img.loading = "lazy";
  return img;
});

console.log(imgElements);

const pictureContainer = document.querySelector(".pic_container");
imgElements.forEach((imgTag) => {
  pictureContainer.appendChild(imgTag);
});
// pictureContainer.append(imgElements);
