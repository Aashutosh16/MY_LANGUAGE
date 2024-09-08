function lexer(input) {
    const tokens = [];
    let cursor = 0;
    while (cursor < input.length) {
        let char = input[cursor];
        if (/\s/.test(char)) {
            cursor++;
            continue;
        }
        if (/[a-zA-Z]/.test(char)) {
            let word = '';
            while (/[a-zA-Z0-9]/.test(char)) {
                word += char;
                char = input[++cursor];
            }
            if (word === 'ye' || word === 'bol') {
                tokens.push({ type: 'keyword', value: word });
            } else {
                tokens.push({ type: 'identifier', value: word });
            }
            continue;
        }
        if (/[0-9]/.test(char)) {
            let num = '';
            while (/[0-9]/.test(char)) {
                num += char;
                char = input[++cursor];
            }
            tokens.push({ type: 'number', value: num });
            continue;
        }
        if (/[\+\-\*\/=]/.test(char)) {
            tokens.push({ type: 'operator', value: char });
            cursor++;
            continue;
        }
    }
    return tokens;
}

function parser(tokens) {
    const ast = {
        type: 'program',
        body: []
    };
    while (tokens.length > 0) {
        let token = tokens.shift();
        if (token.type === 'keyword' && token.value === 'ye') {
            let declaration = {
                type: 'declaration',
                name: tokens.shift().value,  // Get the identifier after 'ye'
                value: null
            };
            if (tokens[0] && tokens[0].type === 'operator' && tokens[0].value === '=') {
                tokens.shift();  // Remove the '=' token
                let expression = '';
                while (tokens.length > 0 && tokens[0].type !== 'keyword') {
                    expression += tokens.shift().value;
                }
                declaration.value = expression.trim();
            }
            ast.body.push(declaration);
        } else if (token.type === 'keyword' && token.value === 'bol') {
            let expression = tokens.shift().value;  // Get the identifier after 'bol'
            ast.body.push({
                type: 'print',
                expression: expression
            });
        }
    }
    return ast;
}

function codeGen(node) {
    switch (node.type) {
        case 'program': return node.body.map(codeGen).join('\n');
        case 'declaration': return `const ${node.name} = ${node.value};`;
        case 'print': return `console.log(${node.expression});`;
    }
}

function compiler(input) {
    const tokens = lexer(input);
    const ast = parser(tokens);
    const executableCode = codeGen(ast);
    console.log(executableCode);
    return executableCode;
}

function runner(input) {
    eval(input);
}

const code = `
ye x = 20
ye y = 20

ye sum = x + y
bol sum
`;

const exec = compiler(code);
runner(exec);
