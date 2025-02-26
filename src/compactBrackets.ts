function compactBrackets(content: string): string {
  const substitutions = [
    // Single lists in one line: 
    { pattern: /\[\n\s*("[^"]*")\n\s*\]/gm, replacement: "[ $1 ]" }, 
    // Single dicts in one line: 
    { pattern: /\{\n\s*("[^"]*": "[^"]*")\n\s*\}/gm, replacement: "{ $1 }" },
    // Condense short lists: 
    { pattern: /\n\s*(?="[a-z_]{1,12}",?\n)/gm, replacement: " " },
    { pattern: /(?<=\[.*)\n\s*\]/gm, replacement: " ]"}, 
    // Lonely opening bracket joined with next line. 
    { pattern: /(^\s*[\{\[])\n\s*/gm, replacement: "$1 " },  
    // Lonely closing brackets group in one line. 
    { pattern: /(?<=^\s*[\}\]],?)\n\s*(?=[\]\}],?$)/gm, replacement: " " } 
  ];
  
  substitutions.forEach(({ pattern, replacement }) => {
    content = content.replace(pattern, replacement);
  });
  return content;
}

export default compactBrackets;
