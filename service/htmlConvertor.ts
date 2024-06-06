export interface JSONContent {
  type: string;
  attributes?: object;
  content: Array<string | JSONContent>;
}

export async function HTMLParser(
  element: Element | string,
  json = false
): Promise<JSONContent | string> {
  return await new Promise((resolve, reject) => {
    try {
      const treeObject: any = {};
      let elementToParse: Element;

      // If string convert to document Node
      if (typeof element === "string") {
        const parser = new DOMParser();
        const docNode = parser.parseFromString(element, "text/xml");
        if (docNode.firstChild) {
          elementToParse = docNode.firstChild as Element;
        }
      } else {
        elementToParse = element;
      }

      // Recursively loop through DOM elements and assign properties to object
      const treeHTML = (element: Element, object = treeObject): void => {
        object.type = element.nodeName;
        const nodeList = element.childNodes;
        if (nodeList !== null) {
          if (nodeList.length) {
            object.content = [];
            for (let i = 0; i < nodeList.length; i++) {
              if (nodeList[i].nodeType === 3) {
                if (nodeList[i].nodeValue) {
                  object.content.push(nodeList[i].nodeValue);
                }
              } else {
                object.content.push({});
                treeHTML(
                  nodeList[i] as Element,
                  object.content[object.content.length - 1]
                );
              }
            }
          }
        }
        if (element.attributes !== null) {
          if (element.attributes.length) {
            object.attributes = {};
            for (let i = 0; i < element.attributes.length; i++) {
              object.attributes[element.attributes[i].nodeName] =
                element.attributes[i].nodeValue;
            }
          }
        }
      };

      // @ts-expect-error
      treeHTML(elementToParse);

      resolve(json ? JSON.stringify(treeObject) : treeObject);
    } catch (e) {
      reject(e);
    }
  });
}

export async function JSONToHTML(
  content: JSONContent | string,
  string = true // default to returning a string representation
): Promise<string | Document> {
  return await new Promise((resolve, reject) => {
    try {
      let jsonContent = content;

      // If input is a string, parse it as JSON
      if (typeof content === "string") {
        jsonContent = JSON.parse(content) as JSONContent;
      }

      // Recursively construct HTML string from JSON content
      const treeJSON = (content: JSONContent): string => {
        let html = `<${content.type}`; // Start with opening tag

        // If there are attributes, add them to the tag
        if (content.attributes) {
          Object.entries(content.attributes).forEach(([attribute, value]) => {
            html += ` ${attribute}="${value as string}"`;
          });
        }
        html += ">";

        // If there is content, process it and add it to the tag
        if (content.content) {
          content.content.forEach((node) => {
            if (typeof node === "string") {
              html += node;
            } else {
              html += treeJSON(node);
            }
          });
        }

        // End the tag
        html += `</${content.type}>`;

        return html;
      };

      // Convert the JSON content to HTML string
      const html = treeJSON(jsonContent as JSONContent);

      // If string flag is set, return the HTML string
      if (string) {
        resolve(html);
      } else {
        // Otherwise, parse the HTML string to an Element
        const parser = new DOMParser();
        resolve(parser.parseFromString(html, "text/xml"));
      }
    } catch (e) {
      // Reject the Promise if there's an error
      reject(e);
    }
  });
}
