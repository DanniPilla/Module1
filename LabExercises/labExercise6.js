let book = 
  {
    title: "Behind the Seams: My Life in Rhinestones",
    author: "Dolly Parton",
    description:
      "A beautifully illustrated celebration of Dolly Parton's iconic sense of style through entertaining personal stories and 450 full-color photographs, including exclusive images from her private costume archive.",
    pages: "336",
  };

  console.log(book.title);         
  console.log(book.description);   
  console.log(book.author);        
  console.log(book.pages); 
  
  console.log(book);

  book.description = "Just a really, cool relaxed story about a cool cool lady";
  console.log(book.description); 


const books = [
  {
    title: "Tomie",
    author: "Junji Ito",
    description:
      "Murdered again and again, one girl always comes back for more... Tomie Kawakami",
    pages: "752",
  },

  {
    title: "Alice in Wonderland",
    author: "Lewis Carroll",
    description:
      "Alice in Wonderland tells of a young girl named Alice, who falls through a rabbit hole into a subterranean fantasy world populated by peculiar, anthropomorphic creatures",
    pages: "101",
  },
  {
    title: "A Court of Thorns and roses",
    author: "Sarah J.Maas",
    description:
      "Lose yourself in a world so sumptuous that you may never return home ... The tantalising start to a seductive fantasy series. ",
    pages: "432",
  },
  {
    title: "HR Giger",
    author: "Taschen",
    description:
      "Swiss artist HR Giger (1940–2014) is most famous for his creation of the space monster in Ridley Scott’s 1979 horror sci-fi film Alien, which earned him an Oscar.",
    pages: "511",
  },

  {
    title: "Your Beauty Mark",
    author: "Dita Von Teese",
    description:
      "From burlesque show to fashion runway, magazine cover to Internet video, fashion icon and “burlesque superheroine” (Vanity Fair) Dita Von Teese has undergone more strokes of red lipstick, bursts of hair spray, boxes of blue-black hair dye and pats of powder in a month than a drag queen could dream of in a lifetime.",
    pages: "400",
  },
];

console.log(books);
