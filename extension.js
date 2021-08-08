// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const { format } = require("./convert");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "vscode-paragraph-formatter.format",
    function () {
      let editor = vscode.window.activeTextEditor;
      if (editor) {
        let document = editor.document;
        let selection = editor.selection;
        let text = document.getText(selection);
        let converted = format(text);

        editor.edit((editBuilder) => {
          editBuilder.replace(selection, converted);
        });
      }
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
