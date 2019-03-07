out.w("<ul>");

forEach(data.colors, (color) => {
  foo();

  out.w("<li>" +
    marko_escapeXml(color) +
    "</li>");

  bar();
});

out.w("</ul>");
