const req = {
  path: "/fruits/:fruit",
  host: "localhost:3000",
  params: {
    fruit: "Cherrys",
  },
};

let variable = "host";
console.log(req[variable]);
