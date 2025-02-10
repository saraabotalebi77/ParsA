function setCookie(name: string, value: string, getAttributes = {}) {
  const attributes: { [key: string]: unknown } = {
    path: "/",
    // add other defaults here if necessary
    ...getAttributes,
  };

  if (attributes.expires instanceof Date) {
    attributes.expires = attributes.expires.toUTCString();
  }

  let updatedCookie = name + "=" + value;

  for (const attributeKey in attributes) {
    updatedCookie += "; " + attributeKey;
    const attributeValue = attributes[attributeKey];
    if (attributeValue !== true) {
      updatedCookie += "=" + attributeValue;
    }
  }

  document.cookie = updatedCookie;
}

function getCookie(name: string) {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)",
    ),
  );
  return matches ? matches[1] : undefined;
}

export { getCookie, setCookie };
