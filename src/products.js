var products = [
  {
    id: "100",
    name: "iPhone 4S",
    brand: "Apple",
    os: "iOS",
  },
  {
    id: "101",
    name: "Moto X",
    brand: "Motorola",
    os: "Android",
  },
  {
    id: "102",
    name: "iPhone 6",
    brand: "Apple",
    os: "iOS",
  },
  {
    id: "103",
    name: "Samsung Galaxy S",
    brand: "Samsung",
    os: "Android",
  },
  {
    id: "104",
    name: "Google Nexus",
    brand: "ASUS",
    os: "Android",
  },
  {
    id: "105",
    name: "Surface",
    brand: "Microsoft",
    os: "Windows",
  },
];
var data = products;

$(() => {
  display();
  function display() {
    if (data.length == 0) {
      $("#main").html("Nothing to show");
    } else {
      let table =
        '<table border="1" style="text-align:center"><tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating System</th><th>Remove</th></tr>';
      data.forEach((element) => {
        table +=
          "<tr><td>" +
          element.id +
          "</td><td>" +
          element.name +
          "</td><td>" +
          element.brand +
          "</td><td>" +
          element.os +
          '</td><td><a href="#" style="text-decoration:none;color:black" onclick="deleteItem(\'' +
          element.id +
          "')\">X</a></td></tr>";
      });
      table += "</table>";
      $("#main").html(table);
    }
  }
  deleteItem = (val) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == val) {
        data.splice(i, 1);
        display();
      }
    }
  };
  $("#filterOS").mouseleave(() => {
    let text = $("#filterOS").val();
    if (text == "none") {
      display();
    } else {
      let table =
        '<table border="1" style="text-align:center"><tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating System</th><th>Remove</th></tr>';
      for (let i = 0; i < data.length; i++) {
        if (data[i].os.toLowerCase() == text) {
          table +=
            "<tr><td>" +
            data[i].id +
            "</td><td>" +
            data[i].name +
            "</td><td>" +
            data[i].brand +
            "</td><td>" +
            data[i].os +
            '</td><td><a href="#" style="text-decoration:none;color:black" onclick="deleteItem(\'' +
            data[i].id +
            "')\">X</a></td></tr>";
        }
      }
      table += "</table>";
      $("#main").html(table);
    }
  });
  $("#filterBrand").mouseleave(() => {
    let text = $("#filterBrand").val();
    if (text == "none") {
      display();
    } else {
      let table =
        '<table border="1" style="text-align:center"><tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating System</th><th>Remove</th></tr>';
      for (let i = 0; i < data.length; i++) {
        if (data[i].brand.toLowerCase() == text) {
          table +=
            "<tr><td>" +
            data[i].id +
            "</td><td>" +
            data[i].name +
            "</td><td>" +
            data[i].brand +
            "</td><td>" +
            data[i].os +
            '</td><td><a href="#" style="text-decoration:none;color:black" onclick="deleteItem(\'' +
            data[i].id +
            "')\">X</a></td></tr>";
        }
      }
      table += "</table>";
      $("#main").html(table);
    }
  });
  $("#searchData").click(() => {
    let val = $("#searchedText").val();
    isSearch = false;
    let table =
      '<table border="1" style="text-align:center"><tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating System</th><th>Remove</th></tr>';
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].name.toLocaleLowerCase() == val.toLocaleLowerCase() ||
        data[i].id == val
      ) {
        table +=
          "<tr><td>" +
          data[i].id +
          "</td><td>" +
          data[i].name +
          "</td><td>" +
          data[i].brand +
          "</td><td>" +
          data[i].os +
          '</td><td><a href="#" style="text-decoration:none;color:black" onclick="deleteItem(\'' +
          data[i].id +
          "')\">X</a></td></tr>";
        isSearch = true;
      }
    }
    if (isSearch == false) {
      $("#main").html("No such element exists");
    } else {
      table += "</table>";
      $("#main").html(table);
    }
  });
});
