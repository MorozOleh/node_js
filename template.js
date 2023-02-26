const joinElements = (...elements) => {
  const joined = elements.join("");
  return joined;
};
const htmlBone = ({ body = [], head = [], title = "" }) => {
  return `<html>
        <head>
            <title>${title}</title>
            ${joinElements(...head)}
        </head>
        <body>${joinElements(...body)}</body>
    </html>`;
};

const transformPropsToAttributes = ({ ...props }) => {
  const values = Object.entries(props);
  let paramsString = "";

  values.forEach(([key, value]) => (paramsString += `${key}="${value}"`));

  return paramsString.trim();
};
const typography = ({ text, element, ...props }) =>
  text &&
  element &&
  `<${element} ${transformPropsToAttributes(props)}>${text}</${element}>`;

const input = ({ ...props }) => {
  return `<input ${transformPropsToAttributes(props)}>`;
};

const form = ({ fields = [], ...props }) => {
  return `<form ${transformPropsToAttributes(props)}>${joinElements(
    ...fields
  )}</form>`;
};

const button = ({ text, ...props }) =>
  text && `<button ${transformPropsToAttributes(props)}>${text}</button>`;

module.exports = {
  htmlBone,
  typography,
  form,
  transformPropsToAttributes,
  input,
  joinElements,
  button,
};
